// This is a minimal service worker to enable "Add to Home Screen"
self.addEventListener('fetch', function(event) {
    // This allows the app to work offline by intercepting requests
    event.respondWith(fetch(event.request));
});
