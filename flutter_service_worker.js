'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"index.html": "9b1951bc600ca76dd986817aae267c33",
"/": "9b1951bc600ca76dd986817aae267c33",
"main.dart.js": "44732c3dc25995f1e90c51bbe475ca77",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"README.md": "67288510539f0c4b57ca9c0e2feb66ed",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4d2a074e955647542596586cbde41715",
".git/config": "533b45a33026d58fba6021fead17f1ca",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/6f/35ae76a275e82b6eadddab1ffb360490dde684": "ff62ee5e22152ce744c52c21d8ef57e3",
".git/objects/9b/f6d8c1efa87dfd0acfeb81769cd66ca9600cf8": "c6b36b1258d85d1b76835734eac524a4",
".git/objects/9e/16f975425a57f0974524be339a7bb485bce29f": "7597681ed4b77608f3c63f2c1a678016",
".git/objects/56/0e9679bcfc538e9044d7ec47ccdc3bb042f033": "54db886a30dce276555d27326b7782bf",
".git/objects/0b/9ff3675a48cde8c1710025e69f422ea55b2501": "0cd4670d63972a4dfae223d2eb9ef73d",
".git/objects/94/0f623cdb89fd6b472d9fe6f4bced09ab010b59": "a31ae4b14eaa00e853bf97a147cc5eec",
".git/objects/34/190f1635bcbf19f6a815bdfc94e51749128117": "528ef3f612308e5bca11e4f7014d559d",
".git/objects/9c/82bb9af223728bee43ec94eb78d9d34d9e9056": "30197e50983058fcd6f305e8f43651cb",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/d0/55aa711461f188751ce8ab6eca584411564a9c": "fc3d5b1ab10a1def6dded019b465c385",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/a2/6297d74cb02602692306a926aee2406b7ce03a": "0348f13c408be659406bd1b51460aac9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/725f3ed70af00eca152a73342b11175eaf2aa8": "c499089478717b218d4f78118685222c",
".git/objects/c8/47efa2c4981cb16f953b720f42d6cf6b138bc2": "bb023beba7a87b89ef76a8ebb169feb3",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/c6/8fd864f21f8f112079c3fea8b233a5092fbf4d": "f1f8d7e88c3c7868ea7db235a598ab5e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/68d7a6fd33918338f5ea5749a4ae68178c26c4": "36b26fcd6ac321702746a2463b6792d2",
".git/objects/7d/381cb905f67e2972156119d0eb8265084103a5": "ee1bd416d78b89d86e80a034fd2a4dd9",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/45/71eb5f56a9ac28a043cf55c0fd38df862e704b": "c78efb0c2d9a19537a2c011cbc17d354",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/65/3f4e06ae2b4936943a27ed97f80433b78f74b5": "359fd2982450c3e4ce41123d6eb388d5",
".git/objects/98/9b6ac3637b51e497c298a76b2eef88f47000ab": "0dfb93a6cb40755b13456f4385da4bf8",
".git/objects/5b/8c23292ef5566cea6691e84a0fab24f20843ef": "69d38e1022f07d3ff92f1d245f1d4cca",
".git/objects/0f/3ea6be00307657c2af08c57cbe3ce54e766738": "0b930771be54a92ae865ce1960d1b651",
".git/objects/af/492b194698da65c68a89c42e7e2ef19adcd6d9": "f0ba030dcaf4bf826a07cb6a48452ac5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f700c890c1a62de5416cb922e6557a2676152e": "19ae10ca05523f2b146e6664ecbb5749",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/99e15a0bea9a6aad5bb00a15f05dbaa3e21705": "8e0d387561400616ec4b63895134532a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/f99c1dc9fa9c8ea1f56d3361d09e6114420f7d": "3b4682a64c243a7d9bc06db509846e99",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f0/5170c4562ac1e2868b555d69fd78ebb6ca9f96": "f8cd8d0d6af8453487b2678d0e75951f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ce/db6dd0147adba205e74c5d885fa1e0a46b6578": "604d4fe5c2861a14c955f2e8e9131c9b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/48/5ff6a545028713034e1daf55977992d57e0b4f": "811bf22db9410fe5f26fd3f5fb0e9564",
".git/objects/24/57c24ebbbd3771f553a982bd3fe82a2e53b85e": "be65b7ad7d21ef674caf315d0eb2132c",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/c9430a17219ef9badcc89e0671cc7c6e25a30f": "2e8f857259fc61a924cb059033f643e3",
".git/objects/23/0d0fd082e71da9370196c3b0e7160b336f0cd1": "93d086defd1ca08bf079640269201c91",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8d/424b786841f128750b951bc0a4034fdeb3f2f0": "7009a87ca60d7a7fd4e9eeae4f7edf3a",
".git/objects/8d/7a523d5f33afdcd1aff1f121c833366e62f2d9": "926cec571138ece5991b5131acb10902",
".git/objects/71/d122fdda296f2d1cc1af351c4274b56bac315a": "021ee235a88bb63e86072192bce2354b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/40/77acb9d969b3d9a17f1db6a0848e5375595421": "0b2a9e05c1c658d0457fe1ab3729fe6d",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "291f1b5307c16e8dea5bace857d7ed51",
".git/logs/refs/heads/main": "8febd902c9a069e9709b271419bf6465",
".git/logs/refs/remotes/origin/main": "e956168bfc3956045b79b12c0b8df76d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "6cfb144b9285eefa40d3854c1cd98aed",
".git/refs/remotes/origin/main": "6cfb144b9285eefa40d3854c1cd98aed",
".git/index": "1b16d2f5bddf66c296a64c2c1b83dfde",
".git/COMMIT_EDITMSG": "a2478a127265b7ede9fbdb8326548845",
".git/FETCH_HEAD": "2fd255f00909f95145b8686c0e506ba1",
"assets/AssetManifest.json": "5f6c2a1900d1b461a12a621427e36e5e",
"assets/NOTICES": "9fb136282b8523cae9ae914700e86e09",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/devroom.jpg": "6223f00882b18f4fb82a9ec39114a9b8",
"assets/assets/images/profile.jpg": "4fe01530379e766d4873087fc0eeeb39",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
