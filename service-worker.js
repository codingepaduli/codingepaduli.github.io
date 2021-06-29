// To install a service worker for your site, you need to register it,
// After the registration, the service worker has tre step: install, activate and fetch;

// REMEMBER: use HTTPS, service workers won’t work on HTTP for security reasons.
// In order to work with HTTP on localhost, go to Firefox setting page about:config
// and enable the item: devtools.serviceWorkers.testing.enabled
// To debug, go to about:debugging#/runtime/this-firefox

// REMEMBER: If you place your service worker at mydomain.com/serviceworker/code.js it will only be able to access pages served underneath mydomain.com/serviceworker. For this reason, it is most often installed at the root.

// https://developers.google.com/web/fundamentals/primers/service-workers

/** durata cache: 5 giorni. */
const cacheTTL = 60 * 60 * 24 * 5;

/** nome cache. */
const cacheName = ["codingepaduli"];

/** risorse da mettere in cache durante l'installazione del service worker. */
const filesToCache = [
  "/css/style.css",
  "/img/avatar.png",
  "/img/placeholder.png",
  // "/js/menu.js", i don't use a JavaScript menu
  "/static/apple-touch-icon.png",
  "/static/icon-192.png",
  "/static/icon-512.png",
  "/static/manifest.webmanifest",
  "/static/wifi-5.svg",
  "/static/wifi-5-apple.svg",
  "/static/css/customImages.css",
  "/static/js/purify.min.js", // WHY ??
  "/static/js/p5.sound-1.2.0-min.js",
  "/static/js/p5-1.2.0-min.js",
  "/404.html",
  "/favicon.ico",
  "/sitemap.xml"
];

// The first step is the install step.

// During the install step, you'll want to cache some static assets.
// If all the files are cached successfully, then the service worker becomes installed.
// If any of the files fail to download and cache, then the install step will fail and
// the service worker won't activate, but don't worry, it'll try again next time.

self.addEventListener("install", (e) => {
    e.waitUntil(
        (async () => {
            estimateQuota();
            const cache = await caches.open(cacheName);
            await cache.addAll(filesToCache);
            console.info("codingepaduli static files cached");
        })()
    );
});

// The third step is the fatching step (idle step).

// The service worker (if already installed) starts before the request for any pages under its scope is made.
// Once started, it will manage every request in background.

self.addEventListener("fetch", (e) => {
    e.respondWith((async () => {
        // check if the response is already cached
        const cachedResponse = await caches.match(e.request);
        console.debug("requesting resource:", e.request.url);

        // if the response is cached, I check the response time
        if (cachedResponse) {
          console.debug(`resource ${e.request.url} exists in cache`);

          let date = getResponseTime(cachedResponse);
          if (date) {
            let age = parseInt((new Date().getTime() - date.getTime()) / 1000);
            console.debug(`resource ${e.request.url} --- age: ${age} seconds`);

            // if the response time is NOT expired, I'll serve it from cache, otherwise I'll go on..
            if (age < cacheTTL) {
              console.info(`resource ${e.request.url} in cache is NOT expired, serving it from cache`);
              return cachedResponse;
            } else {
              console.debug(`resource ${e.request.url} in cache is EXPIRED, fetching it`);
            }
          }

        }

        // if not, fetchs the resource
        console.debug(`resource ${e.request.url} fetching`);
        const response = await fetch(e.request);

        // Bad responses or response from third party assets aren't cached.
        // response.type == 'basic' indicates that it's a request from our origin
        if(!response || response.status !== 200 || response.type !== 'basic') {
          console.info(`resource ${e.request.url} fetched and served, but NOT cached`);
          return response;
        }

        const cache = await caches.open(cacheName);
        // the response is cloned because is a Stream, the body can only be consumed once.
        cache.put(e.request, response.clone());
        console.info(`resource ${e.request.url} fetched, cached and served`);
        return response;
    })());
});

// The second step is the activate step, available only when your service worker has been updated.

// It is used to do stuff that would have broken the previous version
// while it was still running, for example getting rid of old caches.
// This is also useful for removing data that is no longer needed
// to avoid filling up too much disk space

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheName.indexOf(key) === -1) {
          console.debug(`cache ${key} cleared`);
          return caches.delete(key);
        }
      }));
    })
  );
});


// use the StorageManager API to determine the amount of storage
// available to the origin, and how much storage it's using
async function estimateQuota() {
  if (navigator.storage && navigator.storage.estimate) {
    const quota = await navigator.storage.estimate();
    // quota.usage -> Number of bytes used.
    // quota.quota -> Maximum number of bytes available.
    const percentageUsed = (quota.usage / quota.quota) * 100;
    console.log(`You've used ${percentageUsed}% of the available storage.`);
    const remaining = quota.quota - quota.usage;
    console.log(`You can write up to ${remaining} more bytes.`);
  }
}
/*
*/

/*
 * Get the response time.
 */
function getResponseTime(response) {
    let headers = response.headers.entries();
    let date = null;

    for (let pair of headers) {
        if (pair[0] === 'date') {
          //console.debug(`${pair[0]} => ${pair[1]}`);
          date = new Date(pair[1]);
        }
    }
    return date;
}
