const CACHE_NAME = 'insight-dashboard-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Install Service Worker dan simpan file ke Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ambil file dari Cache saat offline, atau dari server jika online
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
