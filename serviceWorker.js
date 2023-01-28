const staticSneakyScout = "eagle-eye-v1"
const assets = [
  "/index.html",
  "/resources/css/scoutingPASS.css",
  "/resources/js/easy.qrcode.min.js",
  "/resources/js/TBAInterface.js",
  "/resources/js/scoutingPASS.js",
  "/resources/fonts/robofan.ttf",
  "/resources/fonts/robofan.woff",
  "/resources/fonts/alexisv3.ttf",
  "/resources/fonts/alex.woff",
  "/2023/field_image.png",
  "/2023/grid_image.png",
  "/2023/grid_image_alt.png",
  "/2023/CU_config.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSneakyScout).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})