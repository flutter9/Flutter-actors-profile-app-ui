'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "238e6443e594dfceb3166d0762449d2a",
"/assets/LICENSE": "118ce36fe240638f035aabe1dbee5383",
"/assets/AssetManifest.json": "d34e1e4f53ff66c7722ccf572b869714",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/emma.jpg": "3290e40c6f920adfa41c75a6bf5f68f9",
"/assets/assets/images/emma-1.jpg": "02dad2765dae7281fc38ffc91afff80f",
"/assets/assets/images/emma-3.jpg": "9efe269bd578a60b2fd958081dd11b2b",
"/assets/assets/images/emma-2.jpg": "2e1c1530a26097487ce1df351b865822"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
