if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-cd8a034b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"9f820042a528d656233f9df182722c5d"},{url:"api/global-options.html",revision:"743f1646c7937dc2c21124bdad373b26"},{url:"api/index.html",revision:"54ecd25f6b22c791051a53493d6fd148"},{url:"api/loadMore.html",revision:"b5d410f470f59b4dfa2221f3bb8449b5"},{url:"api/pagination.html",revision:"868c617fa59be69e359105fbd6b58e93"},{url:"assets/css/styles.94ea81cc.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/35.fb4eccfe.js",revision:null},{url:"assets/js/43.1a7d8dba.js",revision:null},{url:"assets/js/626.d09baad4.js",revision:null},{url:"assets/js/app.edc2f6ea.js",revision:null},{url:"assets/js/runtime~app.3b4288ec.js",revision:null},{url:"assets/js/v-0825d054.ccd45473.js",revision:null},{url:"assets/js/v-0b36a592.492d0ca4.js",revision:null},{url:"assets/js/v-1324f911.ba6da6b0.js",revision:null},{url:"assets/js/v-141987ca.64e3d9be.js",revision:null},{url:"assets/js/v-1c7b2593.84e7497f.js",revision:null},{url:"assets/js/v-36c665f0.f75d0232.js",revision:null},{url:"assets/js/v-3706649a.a1f476c5.js",revision:null},{url:"assets/js/v-4b535f1b.83dbfa58.js",revision:null},{url:"assets/js/v-4bd15160.410edf87.js",revision:null},{url:"assets/js/v-57ea1ccf.6484e6ba.js",revision:null},{url:"assets/js/v-5d1e647b.9778b6a4.js",revision:null},{url:"assets/js/v-62cf96d0.7f5db4bc.js",revision:null},{url:"assets/js/v-6fa8152f.908f36ee.js",revision:null},{url:"assets/js/v-73517d5d.d5a82bc9.js",revision:null},{url:"assets/js/v-744497ce.df70507b.js",revision:null},{url:"assets/js/v-74534cee.92931009.js",revision:null},{url:"assets/js/v-7bceba84.25dc8974.js",revision:null},{url:"assets/js/v-7f1d6617.514765b6.js",revision:null},{url:"assets/js/v-8daa1a0e.7b2c6d9a.js",revision:null},{url:"assets/js/v-964bff12.cdd411fa.js",revision:null},{url:"assets/js/v-aa9f2af0.5c406c1a.js",revision:null},{url:"assets/js/v-b06bec6e.2b41742c.js",revision:null},{url:"assets/js/v-bb9fcf52.2e225a88.js",revision:null},{url:"assets/js/v-d1efe634.a73d3c67.js",revision:null},{url:"assets/js/v-e260681e.edb00cfe.js",revision:null},{url:"assets/js/v-e7e57ac2.106b46f9.js",revision:null},{url:"demo/polling.html",revision:"837b450c404c3936acf79239f8aded28"},{url:"demo/refreshOnFocus.html",revision:"837b450c404c3936acf79239f8aded28"},{url:"guide/documentation/cacheKey.html",revision:"406023b4a88ad770c103095c185909fd"},{url:"guide/documentation/dataFetching.html",revision:"486c829cbfbf07a393541674f6730d1b"},{url:"guide/documentation/debounce.html",revision:"55df838c7146b7562ce6cc3050495940"},{url:"guide/documentation/errorRetry.html",revision:"1fb5aa708f6ae0daef93b5cfed4be66b"},{url:"guide/documentation/globalOptions.html",revision:"409ee5fcd193d99f752895d740877567"},{url:"guide/documentation/loadingDelay.html",revision:"b486d95b8c41e7a9320bd41105c8770b"},{url:"guide/documentation/loadMore.html",revision:"dfd4a914cb141be79a748090c8b4c1bf"},{url:"guide/documentation/manual.html",revision:"7d0ad980d50999b1a36ccf5af495f21b"},{url:"guide/documentation/mutation.html",revision:"cc9312667cf7f9c755233c0a05ec0bc6"},{url:"guide/documentation/pagination.html",revision:"70ef92fc6cec3247d9ed63cbf49d7c72"},{url:"guide/documentation/polling.html",revision:"01e5a769d7a33646e6031a63581e449b"},{url:"guide/documentation/queries.html",revision:"a807aeed5151c14624d7e442f89c2c52"},{url:"guide/documentation/ready.html",revision:"4c112cc1eedb2bd24ab91f80673c4184"},{url:"guide/documentation/refreshDeps.html",revision:"3ffea56d67930ad8a87cd1de65e2c95b"},{url:"guide/documentation/refreshOnWindowFocus.html",revision:"09cf7c6ca74af8f9a1bdb6182739501a"},{url:"guide/documentation/throttle.html",revision:"292ad5606d2fcb4a6fff652b44bf132d"},{url:"guide/gettingStarted.html",revision:"73b392a324ce617c60fbfd2408ff8e46"},{url:"guide/introduction.html",revision:"d14cd5ac41b8b18dd2755cdb2a282f2e"},{url:"index.html",revision:"ad9f5725c264a95ba04c1fdc010f7f84"},{url:"logo.png",revision:"9af3385e0cb4a6533cfa8b580366f079"},{url:"logo@100px.png",revision:"67c1615b1ae41080a16b14aaff5375a3"},{url:"logo@16px.png",revision:"dea19892dbc99ddcdf8b780d8692200f"},{url:"logo@32px.png",revision:"7fc0123b02e45f0e23b16d3fd3d023b2"}],{})}));
