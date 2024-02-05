importScripts('/app/_nuxt/workbox.3ffff7b2.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/app/_nuxt/app.c269144715bebe5e41a5.js",
    "revision": "7e5c0f1886eaad739a6d8b5fb5af7d73"
  },
  {
    "url": "/app/_nuxt/layouts/default.c19cebfee0f23fbee8bb.js",
    "revision": "e4090c29ab266a1118cecd50dbeed411"
  },
  {
    "url": "/app/_nuxt/manifest.214bf71e3a7d03f44848.js",
    "revision": "242e87e0b1a27f1c07b8b176c8cdd0cb"
  },
  {
    "url": "/app/_nuxt/pages/board/create/index.b3dd97c51aef0bc1ee29.js",
    "revision": "aa82879b5029b83f4eb9d67e897ffdd3"
  },
  {
    "url": "/app/_nuxt/pages/board/index.768ae7c6f65ad3feaada.js",
    "revision": "e263149a11966d985c1528b66e6c2a6a"
  },
  {
    "url": "/app/_nuxt/pages/board/list/index.218b7d6d007b34eddef0.js",
    "revision": "6ff0c2881f822edc220a0defa4d2aa39"
  },
  {
    "url": "/app/_nuxt/pages/index.f066e40f91598e0f433b.js",
    "revision": "a7c1e6a52b1845c373ef70f60352cd80"
  },
  {
    "url": "/app/_nuxt/pages/profile/joined/index.a43b03bbd7bf82e618ee.js",
    "revision": "f2154ffcfb1da602fd9a817f3b439a1d"
  },
  {
    "url": "/app/_nuxt/pages/trial/index.ea71a7d9b76c2df939b2.js",
    "revision": "8c4c1b0f537596935eeeb084a42fe395"
  },
  {
    "url": "/app/_nuxt/vendor.b2128fb6eb2367353fce.js",
    "revision": "74f8f80e622b5de2956ab6a4dfe5be43"
  }
], {
  "cacheId": "Yuri-Kure",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/app/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/app/.*'), workbox.strategies.networkFirst({}), 'GET')





