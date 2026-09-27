const CACHE = "gd-studio-v1";
const ASSETS = ["/", "/static/css/style.css", "/static/js/app.js", "/static/manifest.webmanifest"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
