var cacheName = 'PWA-passport';
var filesToCache = [
  "/",
  "index.html",
  "views/mainpage.html",
  "views/home.html",
  "views/navbar.html",
  "views/track_application_status.html",
  "views/track-shipping-status.html",
  "views/feedback.html",
  "views/complaints.html",
  "views/faq.html",
  "views/globalHeader.html",
  "views/commonfooter.html",
  "views/privacyPolicy.html",
  "views/terms-and-conditions.html",
  "resources/css/style.css",
  "resources/css/media.css",
  "resources/css/plugin.css",
  "resources/js/main.js",
  "resources/js/app.js",
  "resources/images/parking-map.jpg",
  "resources/images/rate-our-app.jpg",
  "resources/images/view-map.jpg",
  "resources/images/common/ckgs-logo.png",
  "resources/images/common/ckgs-logo-sm copy.png",
  "resources/images/common/ckgs-logo-sm.png",
  "resources/images/common/ckgs-logo-sm_1.png",
  "resources/images/common/ckgs-logo-sm-bkp.png",
  "resources/images/common/ckgs-white-logo.png",
  "resources/images/common/close-btn.png",
  "resources/images/common/custom-back.png",
  "resources/images/common/custom-comment.png",
  "resources/images/common/feedback-icon.png",
  "resources/images/common/feedback-icon-btm.png",
  "resources/images/common/fedex-img.jpg",
  "resources/images/common/fedex-img-1.jpg",
  "resources/images/common/feedback-icon-hov.png",
  "resources/images/common/feedback-icon-sm.png",
  "resources/images/common/holiday-list-icon.png",
  "resources/images/common/icon-history-steps.png",
  "resources/images/common/logout-icon.png",
  "resources/images/common/Untitled-1.png",
  "resources/images/common/retina/ckgs-white-logo.png",
  "resources/images/common/retina/close-btn.png",
  "resources/images/common/retina/custom-back.png",
  "resources/images/common/retina/feedback-icon.png",
  "resources/images/common/retina/feedback-icon-btm.png",
  "resources/images/common/retina/feedback-icon-lg.png",
  "resources/images/common/retina/holiday-list-icon.png",
  "resources/images/common/retina/icon-history-steps.png",
  "resources/images/common/retina/logout-icon.png",
  "resources/images/common/icons/launcher-icon-0-75x.png",
  "resources/images/common/icons/launcher-icon-1-5x.png",
  "resources/images/common/icons/launcher-icon-1x.png",
  "resources/images/common/icons/launcher-icon-2x.png",
  "resources/images/common/icons/launcher-icon-3x.png",
  "resources/images/common/icons/launcher-icon-4x.png"
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
