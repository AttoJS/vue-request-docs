if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const o=e=>i(e,r),u={module:{uri:r},exports:a,require:o};s[r]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-c2f7a30e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"8afd56d1a553cc913f512adc1a8910aa"},{url:"api/global-options.html",revision:"282f6b5d6c7c58eb9f711cd964dbc4c5"},{url:"api/index.html",revision:"a3415183e68d953227c4825e64aa8dcc"},{url:"api/loadMore.html",revision:"98807a33d9255bbd326dfc34c05f9414"},{url:"api/pagination.html",revision:"1dc82055f44314be11d9d067f627b2db"},{url:"assets/css/styles.512355ae.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/387.ff29b023.js",revision:null},{url:"assets/js/43.d82f63a1.js",revision:null},{url:"assets/js/626.6439d359.js",revision:null},{url:"assets/js/app.1f90f13a.js",revision:null},{url:"assets/js/runtime~app.46fcbce1.js",revision:null},{url:"assets/js/v-0b36a592.92c8b208.js",revision:null},{url:"assets/js/v-1324f911.997c1105.js",revision:null},{url:"assets/js/v-141987ca.88e6e146.js",revision:null},{url:"assets/js/v-1c7b2593.7fa090e8.js",revision:null},{url:"assets/js/v-36c665f0.3e8337d4.js",revision:null},{url:"assets/js/v-3706649a.e1571505.js",revision:null},{url:"assets/js/v-4b535f1b.721cdf3e.js",revision:null},{url:"assets/js/v-4bd15160.987e46fc.js",revision:null},{url:"assets/js/v-57ea1ccf.38df2457.js",revision:null},{url:"assets/js/v-5d1e647b.32348042.js",revision:null},{url:"assets/js/v-62cf96d0.5447b9a7.js",revision:null},{url:"assets/js/v-6937fa4e.39ce009b.js",revision:null},{url:"assets/js/v-6fa8152f.3f8b6e7d.js",revision:null},{url:"assets/js/v-73517d5d.42989ae3.js",revision:null},{url:"assets/js/v-744497ce.c2b9a0fa.js",revision:null},{url:"assets/js/v-74534cee.8e66ec4e.js",revision:null},{url:"assets/js/v-7bceba84.76becdd5.js",revision:null},{url:"assets/js/v-7f1d6617.ce3d974e.js",revision:null},{url:"assets/js/v-8daa1a0e.c45cced4.js",revision:null},{url:"assets/js/v-964bff12.74517cd5.js",revision:null},{url:"assets/js/v-aa9f2af0.797141bb.js",revision:null},{url:"assets/js/v-b06bec6e.9622298e.js",revision:null},{url:"assets/js/v-bb9fcf52.3bb5c98a.js",revision:null},{url:"assets/js/v-d0112c92.3ed06e06.js",revision:null},{url:"assets/js/v-d1efe634.e042e1f7.js",revision:null},{url:"assets/js/v-e260681e.cae7fc13.js",revision:null},{url:"assets/js/v-e7e57ac2.76891175.js",revision:null},{url:"demo/polling.html",revision:"6b88f8d3f1afe543b6e50452dcfc607f"},{url:"demo/refreshOnFocus.html",revision:"6b88f8d3f1afe543b6e50452dcfc607f"},{url:"donation/Alipay.jpeg",revision:"f21a87a24b6a61fe94079e29e0766df8"},{url:"donation/WeChat.jpeg",revision:"b65a2596ce49069f7bedc7b5659646dc"},{url:"guide/documentation/cacheKey.html",revision:"3db824c873d701e77d1dc102de18fd48"},{url:"guide/documentation/dataFetching.html",revision:"b4f23d6e630f404b12f2a12bc517641a"},{url:"guide/documentation/debounce.html",revision:"e1564b7b8667b0908e189205832be584"},{url:"guide/documentation/errorRetry.html",revision:"0ae892296b0901ec7c6ee339904e61da"},{url:"guide/documentation/globalOptions.html",revision:"2e0576e4a88a249c2f7e388d5a045751"},{url:"guide/documentation/loadingDelay.html",revision:"24212c9f208e502f69c6b44fac719c5d"},{url:"guide/documentation/loadMore.html",revision:"0c572af621d63bace87cba3f7cebefe1"},{url:"guide/documentation/manual.html",revision:"17666fc14dc7b4176ff25063cd2b3adb"},{url:"guide/documentation/mutation.html",revision:"85cb5bf2f809f94c05b8def891aebdcf"},{url:"guide/documentation/pagination.html",revision:"2e88b95a59c1948fa30327e0c498431a"},{url:"guide/documentation/polling.html",revision:"ad3053ea10091c41409949058a8f6746"},{url:"guide/documentation/ready.html",revision:"2283b04b67c69d285e54ef5598e3ec2f"},{url:"guide/documentation/refreshDeps.html",revision:"029b8b304b0f5de4b6a512ba56f5f375"},{url:"guide/documentation/refreshOnWindowFocus.html",revision:"db50135ab0e983bea38a561a76ecf9e6"},{url:"guide/documentation/throttle.html",revision:"618cbf80ecd4054caa5be8e7a5ce96a1"},{url:"guide/gettingStarted.html",revision:"d5130229f7e2fc2e7e51ed02fd595850"},{url:"guide/introduction.html",revision:"e3a8c6bf4ed7c0587f2dbb2659401f6c"},{url:"guide/migration.html",revision:"18361847c222d5cb2c68fb06ca7e448a"},{url:"index.html",revision:"65957d8838867b9e34159e435097386b"},{url:"logo.png",revision:"9af3385e0cb4a6533cfa8b580366f079"},{url:"logo@100px.png",revision:"67c1615b1ae41080a16b14aaff5375a3"},{url:"logo@16px.png",revision:"dea19892dbc99ddcdf8b780d8692200f"},{url:"logo@32px.png",revision:"7fc0123b02e45f0e23b16d3fd3d023b2"},{url:"sponsor/index.html",revision:"0c49c0ee02db89f3a783401f1b4ba3f3"}],{})}));
