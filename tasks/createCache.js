const fs = require('fs');
const path = require('path');

let packageJSON = require('../package.json');

const root = path.join(__dirname, '..');

/**
 * @param { String } v
 * @returns { String } bumped version
 */
function versionBump(v) {
  v = v.split('.');
  v[2]++;
  return v.join('.');
}

const version = versionBump(packageJSON.version);

packageJSON.version = version;
packageJSON = JSON.stringify(packageJSON, null, 2);

/**
 * @param { string } dir
 * @param { Array } filelist
 * @returns { Array } all html files, all.css and all.bundle.js
 */
const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const isDirectory = fs.statSync(path.join(dir, file)).isDirectory();
    if (isDirectory && file !== 'node_modules') {
      filelist = walkSync(path.join(dir, file), filelist);
    } else if (!isDirectory && file.match(/.html|all.bundle.js|all.css/)) {
      filelist = filelist.concat(path.join(dir, file).replace(root, '').replace(/\\/gu, '/'));
    }
  });
  return filelist;
};

/**
 * @param { String } v
 * @param { Array } f
 * @returns { String } sw.js data
 */
function write(v, f) {
return `const cacheName = "${v}";
const cacheAssets = ${JSON.stringify(f)}
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches.open(cacheName).then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      }).then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
          return false;
        })
      ))
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(
    caches.match(e.request).then(response => {
      // Cache hit - return response
      if (response) {
        return response;
      }

      const fetchRequest = e.request.clone();
      return fetch(fetchRequest).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();

        caches.open(cacheName).then(cache => {
          cache.put(e.request, responseToCache);
        });

        return response;
      }).catch(() => console.log('Failed to fetch'));
    })
  );
});
`;
}

const template = write(version, walkSync(root));
console.log(template);
fs.writeFileSync(path.join(__dirname, '..', 'sw.js'), template, 'utf-8');
fs.writeFileSync(path.join(__dirname, '..', 'package.json'), packageJSON, 'utf-8');
