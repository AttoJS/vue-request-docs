if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-cd8a034b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e870a47f531dbc19cfd3dbaeb9fbc775"},{url:"api/global-options.html",revision:"fffe6a8f8bda3fc40a33d82280c0505f"},{url:"api/index.html",revision:"4fbbe39e915ac9236e447273be339ff2"},{url:"api/loadMore.html",revision:"e057962e8b31170ad4edcbf92c990a0a"},{url:"api/pagination.html",revision:"c16f845cfeaa85a7c4f10e48591df4f5"},{url:"assets/css/styles.0ca42137.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/35.fb4eccfe.js",revision:null},{url:"assets/js/43.1a7d8dba.js",revision:null},{url:"assets/js/626.d09baad4.js",revision:null},{url:"assets/js/app.fbedbfa6.js",revision:null},{url:"assets/js/runtime~app.f86e7584.js",revision:null},{url:"assets/js/v-0825d054.8f7d349d.js",revision:null},{url:"assets/js/v-0b36a592.d1a82864.js",revision:null},{url:"assets/js/v-1324f911.45636cc7.js",revision:null},{url:"assets/js/v-141987ca.2b898cc7.js",revision:null},{url:"assets/js/v-1c7b2593.7345f554.js",revision:null},{url:"assets/js/v-36c665f0.21e21e34.js",revision:null},{url:"assets/js/v-3706649a.a1f476c5.js",revision:null},{url:"assets/js/v-4b535f1b.8964e77d.js",revision:null},{url:"assets/js/v-4bd15160.9d29709a.js",revision:null},{url:"assets/js/v-57ea1ccf.67cda38d.js",revision:null},{url:"assets/js/v-5d1e647b.5e8d0764.js",revision:null},{url:"assets/js/v-62cf96d0.4e0b5240.js",revision:null},{url:"assets/js/v-6fa8152f.c2ff2721.js",revision:null},{url:"assets/js/v-73517d5d.8296fbbf.js",revision:null},{url:"assets/js/v-744497ce.177f3aac.js",revision:null},{url:"assets/js/v-74534cee.f5dc04bc.js",revision:null},{url:"assets/js/v-7bceba84.315cedca.js",revision:null},{url:"assets/js/v-7f1d6617.e06ac6a3.js",revision:null},{url:"assets/js/v-8daa1a0e.6370400f.js",revision:null},{url:"assets/js/v-964bff12.002ac867.js",revision:null},{url:"assets/js/v-aa9f2af0.21e6d15d.js",revision:null},{url:"assets/js/v-b06bec6e.fdcbb6d9.js",revision:null},{url:"assets/js/v-bb9fcf52.8bb78cbf.js",revision:null},{url:"assets/js/v-d1efe634.7b8d83fd.js",revision:null},{url:"assets/js/v-e260681e.df5fe231.js",revision:null},{url:"assets/js/v-e7e57ac2.004ea749.js",revision:null},{url:"demo/polling.html",revision:"1ec7c423040f13613e8a3820e8be6380"},{url:"demo/refreshOnFocus.html",revision:"1ec7c423040f13613e8a3820e8be6380"},{url:"guide/documentation/cacheKey.html",revision:"7f83ff0197680dd79c506e68d7f1b1f8"},{url:"guide/documentation/dataFetching.html",revision:"cb3b3997b264a65ec52e8bfd5e23a769"},{url:"guide/documentation/debounce.html",revision:"05777890e0d24de253e756d4eef9eb95"},{url:"guide/documentation/errorRetry.html",revision:"07ee0c25a9bc6c4057095cce22cd903a"},{url:"guide/documentation/globalOptions.html",revision:"7deba15e15c41b94e8f99f050da09ba8"},{url:"guide/documentation/loadingDelay.html",revision:"b19690bdf6af97d7ad773dd34feb8253"},{url:"guide/documentation/loadMore.html",revision:"010b5e0707fa2671a5f8f5554c327a6c"},{url:"guide/documentation/manual.html",revision:"041f9d6e35e433b513121957227c68c1"},{url:"guide/documentation/mutation.html",revision:"35e68df5c34dbb50d2479788603c1b71"},{url:"guide/documentation/pagination.html",revision:"1220726597087b587fb2e1b05dff0e3e"},{url:"guide/documentation/polling.html",revision:"57885c0076e8685c34a4927b31044b43"},{url:"guide/documentation/queries.html",revision:"ff15a0935e7945553d82c7817bc5666c"},{url:"guide/documentation/ready.html",revision:"386af26c1305a55a2e88f7f17917d853"},{url:"guide/documentation/refreshDeps.html",revision:"1aa0fe456968e6d854707c902fd53e49"},{url:"guide/documentation/refreshOnWindowFocus.html",revision:"0753144bb0872b41855a673e85d9b5e1"},{url:"guide/documentation/throttle.html",revision:"8876f9c3779c3343f3a7fe002bad8d1a"},{url:"guide/gettingStarted.html",revision:"2e27b77235e8131c74ca18f89aa22bf5"},{url:"guide/introduction.html",revision:"2467d215d7e140cb38401c1c0c266570"},{url:"index.html",revision:"b5edbd44b11760b39822470d5cdc89dc"},{url:"logo.png",revision:"9af3385e0cb4a6533cfa8b580366f079"},{url:"logo@100px.png",revision:"67c1615b1ae41080a16b14aaff5375a3"},{url:"logo@16px.png",revision:"dea19892dbc99ddcdf8b780d8692200f"},{url:"logo@32px.png",revision:"7fc0123b02e45f0e23b16d3fd3d023b2"}],{})}));
