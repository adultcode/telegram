'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b69b52c583f362b96814bd90fff749cb",
".git/config": "e14c9ffb89830cd8533944b00999f934",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5dca6ce15d13d5709f67bf31abde94d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1dc464fba11d227048b64d73dc764e8d",
".git/logs/refs/heads/main": "0bbb617439f40bb575ac278801d10414",
".git/logs/refs/remotes/origin/main": "56e5816cf6812aec7b08956e31b1191e",
".git/objects/05/5fb7cc99a00c2e5cca34f8d4a07e6189946150": "31c8699b2bf12baacbfd75eff30621f2",
".git/objects/0a/4948200bcdee6d04ae2282a64fe0b6c2dcedf2": "1200494b7d8a7d34e99a6dab4a3ca112",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/80bf2d4a6ad41e19c3a951a116bdb6f61232d2": "3c01966933737d202d6d50c6129a90cc",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/733d8bad2b945e391cfc7d9f007e0479eceebe": "395bbfd13752506511d2e486edd232e2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/f440e3ad743ba4077b5508f7f4d5ebe37038b3": "c8b26587bb793409169f36739df0d7c6",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e5f241bfba75ba902ddf33e4faf386781d2d3d": "20e43de8408413e2cf6f8549e23df284",
".git/objects/2a/3ecebe7a1e1f78807829db85350364cc4ff1b4": "0628306c3ff674a3d97b34c121404ea7",
".git/objects/2c/95cadff452223a81f53ccf1d3c4b13dbe9c70d": "3e23f064974cb7aa883cdd5cd72f9ed2",
".git/objects/30/ee826b1370fd76584a80a3910f18b40e181b55": "255af98fb6e15d6fec1b43dc6b783b3d",
".git/objects/32/3db8fa3083f2073da294be85a644dfbd89a1a0": "f9915c89f1787943f74fbec92c1a504c",
".git/objects/33/98772d464221802343ea7db3d4e188ad2ba2cf": "565a8b2bcb907d7c5ac9169bc63a3e3a",
".git/objects/34/75302b5b9f6a9f37deb9d2584374f54ac10ff9": "b470e40069c3266f44382a5085b4ee12",
".git/objects/34/c7faa1f753fa2ec9849a15928358515fad42ed": "62b95f2f592609e2c687dbfe3a660414",
".git/objects/36/645fd7cdd0975cea467edab0e725331ce2b578": "30ce523737d443ac3102803f8806e9c8",
".git/objects/39/e362f5122859b6f9c6d4aa777413efbba4b59b": "3fe4b8a0278e285c8d24d54e4708dea0",
".git/objects/3b/60edc2a7bd340520a2a92be57160ad55d1c7ba": "1ef2bb57bf0a153c89fef258de71fa5f",
".git/objects/3f/2bd93c17eb7688497b0f2cffff9cbff5cb20a2": "7e0410023f90c389724f60ba65d22266",
".git/objects/40/cf78e6c5546e8e1ca8863e31410d43f777cb15": "39e76bb4790458d650f13cae9b7e072d",
".git/objects/41/bc4bad690a48af568cf2a43084f1cbbb4caf00": "607eddc661619fd1ee16f8565f03b849",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/51/2732a037358047362c64df928b2390d277efc8": "c4b67a82d9538c5b03b5e7967fc7b470",
".git/objects/53/027b2b72adf0ff97c82446d766a57999851e58": "75bd142a23b18e2d9a541904119d7a8e",
".git/objects/53/f07360c41e19763af291f4c982868aa11544db": "db3694d469e91b51799457fc37606bc2",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/7e49037640ffc430684f1cf7cd3dd0471111c0": "2fc2dd82003e363f3e028922dafc80bf",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/47d7255f36a020759d902388bad6bd3752a60f": "72d0e6f6dd9197815f1777296cbf3416",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/79c1f1164c3a643e65c99260dbd0bc457b7aaf": "52121516248b3bcd833edc9fdb3f0e04",
".git/objects/6c/9be04fae9dd95a19ffb5fe1efccc6f67367976": "9349352a9a24ab131463323e564f6de3",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7b/56b1146090494f31e99a051472ff8fdffde44d": "2dc36119b92cbaeb4c919e542425f34c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/8de5bf4a57ffd8ae17a55c86f500472ecfb082": "758ef261953e4c946948e5e68f4d21d0",
".git/objects/81/8125d1d6fdc5d33842a96ff6429954bc4aa1ed": "c458ac02c57d939aefe328f98a40369e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/4cc01fecd11d71e8f72774074a65abb11f26cf": "51ab9beb176816fa82f76062b25ac660",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1c1f0eb46240f867d667877e6248a2cb54888d": "ce62031d795b00279079d919a768eee3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/1689e697ea003360f8023bf240c6aa7155f9a4": "2d03a43bbb68ed7ce6fc7c541999c764",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/af8792a40d4dfe8906c109e01beda3b80574d3": "aae2ca4ca52c57863765e904eae33f4b",
".git/objects/a2/85786c12e41c96fe1eb60387309a97ab2576f7": "62512e1030fc61cbe3599c8467da47e9",
".git/objects/a9/d5fa9b312adf3c976b167ff366faedd7591143": "732cdf12c337c3df22529cb0db4cf459",
".git/objects/aa/76b6b0ab801e01ccca4ca3d604ed6fcc61718a": "b8ae44d7875fa43e2787822beb72e080",
".git/objects/ab/3db30eb33bbfa8a7deeef159e0598d3d74a0d2": "ddd51c24442603d0a534822782552e24",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/410b76f134035df5f9f85f3cf7040562d71c91": "c2f26e72af7ccd03cd3dc26ba5e11f6d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/de6e159d114ef5f7ad570f354121528b5f116e": "ad2831daefb80d1f5910e3cf9c206973",
".git/objects/c1/312164d72e68c6d17dc8ac6cc2519880898864": "63af794c13bc70ed159b56e85dfdc27f",
".git/objects/c4/8e27968fd49ed19d7cc85f01ce69677b505d2b": "b47b518a3c1d7d8bb1bf728e7037d877",
".git/objects/c7/5003d4bbc48bfa007dbfcde2fdf3c4b4818ed6": "0565b2a66f70ed50e6b9fd4991902c81",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/ad34536e57bb1464a177c5fa5fa1e42309f786": "6a125be531d77a9e957bf862af8c28c7",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ef727b7baa97507714f3292e0e26da3671881d": "461b50d8ad97cc88eadbb3c728fdb6e7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/528c5b40ddd4a7bb9e21ca9799328d6621aa15": "95257a4af8262391d92852365e5cff9b",
".git/objects/d8/e29858869cf3d5e809e0950a44c78ce79ec153": "7c4ddcc5ddc7387e3af7d3ea223c80ef",
".git/objects/da/e512c15728b272f40115cdf4839ab5a4268835": "55e170e5128a5016b28941d8cb107ca7",
".git/objects/da/e681037a858c275b18f3b0c2e963f9e9b8cd26": "2f2030fbbbb010b43081b369c222295c",
".git/objects/dd/8ff12842eadce59c9be5fcf4854b61c3bf142f": "2ed8f57fd80436c0dc9c5701be8d22d3",
".git/objects/e0/038ec0daa9f77afe7034faedf337d3829962af": "992e152ce6e74f4abafc34247001a444",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/77ca6e46ca83a7afc7c3960e8b60921a15d31d": "16214151cce9a9d92455d892b961a97a",
".git/objects/f7/522eb8bd01abdc6d5a3ae022177516bbb321e6": "eef118d8ec7ff86d9f08c127120442d2",
".git/objects/f7/aad0b386855bf4fd5a6084167b7180ccde2c2d": "dc28e95a7f24c7c5afc9dff8d551cc9a",
".git/refs/heads/main": "4fea58fc8ed62f462561ea6cb6872341",
".git/refs/remotes/origin/main": "4fea58fc8ed62f462561ea6cb6872341",
"assets/AssetManifest.bin": "8ebe507f79c54cbc4f1adf86c617b6ea",
"assets/AssetManifest.bin.json": "35d2cda3a31d770b1438c77e47110729",
"assets/AssetManifest.json": "0b9c63d22ac52de62841b906ec3c3a06",
"assets/assets/font/Jolly.ttf": "df1e5c9a1e244300d1111aca8b314e88",
"assets/assets/image/balance.svg": "05caa94b9ec217335c5c8445ac52e7ed",
"assets/assets/image/bat.png": "6ae1574f348be8836ba623be85f349bf",
"assets/assets/image/bg3.jpg": "9b555498ac201fddf335c14be41f5bea",
"assets/FontManifest.json": "a2e7a58f4865476be0dc781293d7e0c0",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "3df294c5580aa7c01d0dbbf339857324",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "f373b6e274fd1cbd5c693e8db7cf1bb3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f6a5e4f3e3658709f66d148559a60e79",
"/": "f6a5e4f3e3658709f66d148559a60e79",
"main.dart.js": "789ab8430761ff2ba2b46bf8808dc90f",
"manifest.json": "5b9d1e5adb7e8da14b1b0d7585500f8d",
"version.json": "2a819da0af17162cb69732c40b536175"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
