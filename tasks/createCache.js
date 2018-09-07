const glob = require('glob');
const fs = require('fs');
const path = require('path');

let packageJSON = require('../package.json');

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
 * @param { String } v
 * @param { Array } f
 * @returns { String } sw.js data
 */
function write(v, f) {
return `const cacheName = '${v}';
const cacheAssets = ${JSON.stringify(f)}
if (location.hostname !== '127.0.0.1' && location.hostname !== 'localhost') {
  self.addEventListener('install', e => {
    e.waitUntil(
      caches.open(cacheName).then(cache => {
          console.log('Service Worker: Caching Files');
          cache.addAll(cacheAssets);
        }).then(() => self.skipWaiting())
    );
  });

  self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');
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

  self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(
      caches.match(e.request).then(response => {
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
}
`;
}

glob('{!(node_modules)/**/*.html,dist/all.bundle.js,dist/all.css}', (e, h) => {
  const template = write(version, h);
  fs.writeFileSync(path.join(__dirname, '..', 'sw.js'), template, 'utf-8');
  fs.writeFileSync(path.join(__dirname, '..', 'package.json'), packageJSON, 'utf-8');
});
