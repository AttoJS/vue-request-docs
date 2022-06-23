if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-cd8a034b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"7c81413e64138099b84375a8da25a9c5"},{url:"api/global-options.html",revision:"be16e681c662433f88b9932a6d73f43c"},{url:"api/index.html",revision:"2cba220b55f2fb26ea785bcbce1aab9d"},{url:"api/loadMore.html",revision:"a5c28b1b129b568e3f85f6067e15f978"},{url:"api/pagination.html",revision:"265071cdbd48289786952c685dfcdef0"},{url:"assets/css/styles.3dc829f4.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/35.fb4eccfe.js",revision:null},{url:"assets/js/43.1a7d8dba.js",revision:null},{url:"assets/js/626.d09baad4.js",revision:null},{url:"assets/js/app.a4547ab6.js",revision:null},{url:"assets/js/runtime~app.0caec22a.js",revision:null},{url:"assets/js/v-0825d054.892463fb.js",revision:null},{url:"assets/js/v-0b36a592.fec51641.js",revision:null},{url:"assets/js/v-1324f911.9dca0357.js",revision:null},{url:"assets/js/v-141987ca.b433e3a8.js",revision:null},{url:"assets/js/v-1c7b2593.422da9b7.js",revision:null},{url:"assets/js/v-36c665f0.94060428.js",revision:null},{url:"assets/js/v-3706649a.a1f476c5.js",revision:null},{url:"assets/js/v-4b535f1b.c2104ba0.js",revision:null},{url:"assets/js/v-4bd15160.7936d227.js",revision:null},{url:"assets/js/v-57ea1ccf.78b47487.js",revision:null},{url:"assets/js/v-5d1e647b.b9832eba.js",revision:null},{url:"assets/js/v-62cf96d0.8f1c7a0c.js",revision:null},{url:"assets/js/v-6fa8152f.1daf96a1.js",revision:null},{url:"assets/js/v-73517d5d.d5694c58.js",revision:null},{url:"assets/js/v-744497ce.146b7672.js",revision:null},{url:"assets/js/v-74534cee.d34957dd.js",revision:null},{url:"assets/js/v-7bceba84.e56d0407.js",revision:null},{url:"assets/js/v-7f1d6617.8e05d737.js",revision:null},{url:"assets/js/v-8daa1a0e.fb9a6392.js",revision:null},{url:"assets/js/v-964bff12.7a9ccaed.js",revision:null},{url:"assets/js/v-aa9f2af0.f2aa557c.js",revision:null},{url:"assets/js/v-b06bec6e.8e23a885.js",revision:null},{url:"assets/js/v-bb9fcf52.cbefb155.js",revision:null},{url:"assets/js/v-d1efe634.ca152357.js",revision:null},{url:"assets/js/v-e260681e.fde78511.js",revision:null},{url:"assets/js/v-e7e57ac2.6073b88d.js",revision:null},{url:"demo/polling.html",revision:"e4c5a58dc864cb76aa7b43d7a1b7743e"},{url:"demo/refreshOnFocus.html",revision:"e4c5a58dc864cb76aa7b43d7a1b7743e"},{url:"guide/documentation/cacheKey.html",revision:"da6179c0f26d53de1a5cdbee4e995fc3"},{url:"guide/documentation/dataFetching.html",revision:"c48c61f3ef54534e4a393c9a99664fc9"},{url:"guide/documentation/debounce.html",revision:"5c7d21c84b296811ecf90a10efe5ecb2"},{url:"guide/documentation/errorRetry.html",revision:"e7257f8127db832a88c47a5033bf8697"},{url:"guide/documentation/globalOptions.html",revision:"b814b58d589fd458e0acc78db2191e0b"},{url:"guide/documentation/loadingDelay.html",revision:"59f990d628b702894a7869d4f0c4d209"},{url:"guide/documentation/loadMore.html",revision:"0f0f794e7f01262073af5fabe12e1295"},{url:"guide/documentation/manual.html",revision:"37525fc1034b0d41b3908ac0d063122d"},{url:"guide/documentation/mutation.html",revision:"a23b5a46f77011fc1021cef360cc1c28"},{url:"guide/documentation/pagination.html",revision:"6f0ff19111afd2ae94fdd99acc1f4e62"},{url:"guide/documentation/polling.html",revision:"5ecf62d128195538bae6320fc9284b9e"},{url:"guide/documentation/queries.html",revision:"87c7e9d2feb49ef7453cf895f6f5507c"},{url:"guide/documentation/ready.html",revision:"351c30b52747f0b4716393d1d1cbd4b0"},{url:"guide/documentation/refreshDeps.html",revision:"3c7e390be97507bdfa9efc51080d79f2"},{url:"guide/documentation/refreshOnWindowFocus.html",revision:"5f05e029944aec7ad4ff35504dcf43a8"},{url:"guide/documentation/throttle.html",revision:"31d45a8c76fb1a28d137ed5081b4bd23"},{url:"guide/gettingStarted.html",revision:"147a865457cc787fbf94a410d6bd8a86"},{url:"guide/introduction.html",revision:"e6b6af59de7c9d43e37a310fd6640964"},{url:"index.html",revision:"b4ff7408508aa7c3a4c6d465c90fdd39"},{url:"logo.png",revision:"9af3385e0cb4a6533cfa8b580366f079"},{url:"logo@100px.png",revision:"67c1615b1ae41080a16b14aaff5375a3"},{url:"logo@16px.png",revision:"dea19892dbc99ddcdf8b780d8692200f"},{url:"logo@32px.png",revision:"7fc0123b02e45f0e23b16d3fd3d023b2"}],{})}));
