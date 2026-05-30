const CACHE = 'garages-salta-v2';
const URL_BASE = '/garages-salta/';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([URL_BASE, URL_BASE + 'index.html']))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match(URL_BASE + 'index.html')))
  );
});
