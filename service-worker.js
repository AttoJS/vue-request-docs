if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const o=e=>i(e,a),d={module:{uri:a},exports:r,require:o};s[a]=Promise.all(l.map((e=>d[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-efd7f1cb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"c3074dff3b1e52150a297d186732af67"},{url:"api/global-options.html",revision:"98d9f595349d45b0e0547e31072d1bb8"},{url:"api/index.html",revision:"44033b7fdebec3ccb5854813c61fdb95"},{url:"api/loadMore.html",revision:"59b296b95eef261513341f374b0d3d91"},{url:"api/pagination.html",revision:"e18c013b993c1dc3017b8731f14f6274"},{url:"assets/css/styles.ed74af6a.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/387.b87fd05d.js",revision:null},{url:"assets/js/43.b28b12a0.js",revision:null},{url:"assets/js/626.6793e23c.js",revision:null},{url:"assets/js/app.e29c01e8.js",revision:null},{url:"assets/js/runtime~app.a43ef08f.js",revision:null},{url:"assets/js/v-0b36a592.c682e660.js",revision:null},{url:"assets/js/v-1324f911.55cd745e.js",revision:null},{url:"assets/js/v-141987ca.d8dad9cc.js",revision:null},{url:"assets/js/v-1c7b2593.67ff343a.js",revision:null},{url:"assets/js/v-36c665f0.eb21431a.js",revision:null},{url:"assets/js/v-3706649a.715bddda.js",revision:null},{url:"assets/js/v-4b535f1b.904157df.js",revision:null},{url:"assets/js/v-4bd15160.0e9135c6.js",revision:null},{url:"assets/js/v-57ea1ccf.f88bde2c.js",revision:null},{url:"assets/js/v-5d1e647b.e8345c99.js",revision:null},{url:"assets/js/v-62cf96d0.30370f8a.js",revision:null},{url:"assets/js/v-6937fa4e.e2cc402f.js",revision:null},{url:"assets/js/v-6fa8152f.c9af16db.js",revision:null},{url:"assets/js/v-73517d5d.b568cffd.js",revision:null},{url:"assets/js/v-744497ce.656102a0.js",revision:null},{url:"assets/js/v-74534cee.ed30d253.js",revision:null},{url:"assets/js/v-7bceba84.134fabd2.js",revision:null},{url:"assets/js/v-7f1d6617.c441047e.js",revision:null},{url:"assets/js/v-8daa1a0e.8883683d.js",revision:null},{url:"assets/js/v-964bff12.cba73754.js",revision:null},{url:"assets/js/v-aa9f2af0.eb8e4765.js",revision:null},{url:"assets/js/v-b06bec6e.84ba2779.js",revision:null},{url:"assets/js/v-bb9fcf52.f128ec8e.js",revision:null},{url:"assets/js/v-d0112c92.94939339.js",revision:null},{url:"assets/js/v-d1efe634.47e27e69.js",revision:null},{url:"assets/js/v-e260681e.192563c4.js",revision:null},{url:"assets/js/v-e7e57ac2.ac4c230a.js",revision:null},{url:"demo/polling.html",revision:"8aa52c8cc934e220dd6a39f87f156054"},{url:"demo/refreshOnFocus.html",revision:"8aa52c8cc934e220dd6a39f87f156054"},{url:"donation/Alipay.jpeg",revision:"f21a87a24b6a61fe94079e29e0766df8"},{url:"donation/WeChat.jpeg",revision:"b65a2596ce49069f7bedc7b5659646dc"},{url:"guide/documentation/cacheKey.html",revision:"a4fd0c6ccaba607bfd94e3c70711a994"},{url:"guide/documentation/dataFetching.html",revision:"0aea2deb9a41bcfd26aef2d1698f127a"},{url:"guide/documentation/debounce.html",revision:"67658e2f44da6e1908e66867bdad5936"},{url:"guide/documentation/errorRetry.html",revision:"82fa1c69b823fc2a7b61bf9a8bae2c78"},{url:"guide/documentation/globalOptions.html",revision:"308228c4a55f736f65a2ea3b840ce5cb"},{url:"guide/documentation/loadingDelay.html",revision:"e40528b30d505560f5b58dddd756269c"},{url:"guide/documentation/loadMore.html",revision:"5ea449ad9d94e418ab50895660e68bff"},{url:"guide/documentation/manual.html",revision:"f874f21ef5a7da2aa60da6ab725df8a7"},{url:"guide/documentation/mutation.html",revision:"9a88626d0d1c6486c81dbd8119de31e7"},{url:"guide/documentation/pagination.html",revision:"06a7c4030fe6ee22f16acc137e308e3c"},{url:"guide/documentation/polling.html",revision:"662a6fed8fe6096a40c5ee844f8097c2"},{url:"guide/documentation/ready.html",revision:"73bdf1db161621e5f41d8f562567d910"},{url:"guide/documentation/refreshDeps.html",revision:"7c1c53ca8ea09807dccd7ed199fb0b07"},{url:"guide/documentation/refreshOnWindowFocus.html",revision:"f91727a4f1c386845ba2483d04bf0e62"},{url:"guide/documentation/throttle.html",revision:"6ea90d6f631cdbdc6ca4de985cb77e42"},{url:"guide/gettingStarted.html",revision:"d6d2308382574e279197d4a47149bbb2"},{url:"guide/introduction.html",revision:"b7c95117afc4de4dea5733cb32f15c5e"},{url:"guide/migration.html",revision:"c13c1257c9f8b40058133ab867ae3643"},{url:"index.html",revision:"e32d472dd24c8006829e5476bbec2119"},{url:"logo.png",revision:"9af3385e0cb4a6533cfa8b580366f079"},{url:"logo@100px.png",revision:"67c1615b1ae41080a16b14aaff5375a3"},{url:"logo@16px.png",revision:"dea19892dbc99ddcdf8b780d8692200f"},{url:"logo@32px.png",revision:"7fc0123b02e45f0e23b16d3fd3d023b2"},{url:"sponsor/index.html",revision:"4b3ad8c39d795770f887a158cc65bfa0"}],{})}));
