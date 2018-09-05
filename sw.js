const cacheName = '0.0.0';
const cacheAssets = ['/blog/2016-12-30/stryker-0-5-5.html', '/blog/2017-01-01/happy-new-stryker.html', '/blog/2017-01-17/introduction-to-mutation-testing.html', '/blog/2017-02-21/stryker-weekend.html', '/blog/2017-06-10/stryker-0-6-4.html', '/blog/2017-07-14/road-to-stryker-1-0.html', '/blog/2017-08-11/stryker-0-8-0.html', '/blog/2017-10-06/typescript-support.html', '/blog/2017-10-28/new-html-report.html', '/blog/2017-12-01/babel-support.html', '/blog/2018-01-10/typescript-coverage-analysis-support.html', '/blog/2018-01-26/webpack-support.html', '/blog/2018-02-08/get-your-mutation-score-badge-now.html', '/blog/2018-04-04/use-git-to-select-files.html', '/blog.html', '/dist/all.bundle.js', '/dist/all.css', '/example.html', '/faq.html', '/handbook.html', '/index.html', '/mutators.html', '/plugins.html', '/quickstart.html', '/src/blog/2017-10-28/new-html-report.pug', '/stryker/home.html', '/stryker/index.html', '/stryker-net/index.html', '/stryker4s/index.html', '/technical-reference.html'];
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
