const cacheName = 'v1';

const cacheAssets = [
  'blog.html',
  'example.html',
  'faq.html',
  'handbook.html',
  'index.html',
  'mutators.html',
  'plugins.html',
  'quickstart.html',
  '/dist/all.css',
  '/dist/all.bundle.js'
];

// Call Install Event
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
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(
    caches.match(e.request).then(response => {
      // Cache hit - return response
      if(response) {
        return response;
      }

      const fetchRequest = e.request.clone();
      return fetch(fetchRequest).then(response => {
        if(!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();

        caches.open(cacheName).then(cache => {
          cache.put(e.request, responseToCache);
        });

        return response;
      }).catch(e => console.log("Failed to fetch"));
    })
  );
});
