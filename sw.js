/* IR Decision Support Suite: offline service worker.
   To publish an update: change CACHE_VERSION, then re-upload the files.
   Users receive the new version the next time they open the app online. */
const CACHE_VERSION = 'ir-suite-v26';
const APP_SHELL = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png'
];

const OPTIONAL_ANATOMY_ASSETS = [
  'assets/anatomy/liver-segments.svg',
  'assets/anatomy/liver-vasculature.svg',
  'assets/anatomy/biliary-system.svg',
  'assets/anatomy/renal-collecting.png',
  'assets/anatomy/abdominal-aorta.svg',
  'assets/anatomy/internal-iliac.svg',
  'assets/anatomy/prostatic-artery-origins.svg',
  'assets/anatomy/pae-collaterals.svg',
  'assets/anatomy/abdominal-pelvic-veins.jpg',
  'assets/anatomy/upper-extremity-arteries.jpg',
  'assets/anatomy/upper-extremity-veins.jpg',
  'assets/anatomy/lower-extremity-arteries.jpg',
  'assets/anatomy/lower-extremity-veins.jpg',
  'assets/anatomy/whole-body-vasculature.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(async cache => {
      await cache.addAll(APP_SHELL);
      await Promise.all(OPTIONAL_ANATOMY_ASSETS.map(url => cache.add(url).catch(() => {})));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Stale-while-revalidate for same-origin GET requests; works fully offline after first load.
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_VERSION).then(cache =>
      cache.match(req, { ignoreSearch: true }).then(cached => {
        const network = fetch(req)
          .then(res => {
            if (res && res.status === 200) cache.put(req, res.clone());
            return res;
          })
          .catch(() => cached || (req.mode === 'navigate' ? cache.match('index.html') : undefined));
        return cached || network;
      })
    )
  );
});
