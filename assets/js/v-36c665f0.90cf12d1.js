"use strict";(self.webpackChunken=self.webpackChunken||[]).push([[832],{49656:(n,a,s)=>{s.r(a),s.d(a,{default:()=>P});var t=s(27875);const e=(0,t._)("h1",{id:"getting-started",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),(0,t.Uk)(" Getting Started")],-1),p=(0,t._)("h2",{id:"installation",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),(0,t.Uk)(" Installation")],-1),o={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},c={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},l=(0,t._)("code",null,"<script>",-1),u={href:"https://unpkg.com/",target:"_blank",rel:"noopener noreferrer"},i=(0,t.uE)('<h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> NPM</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-request\n<span class="token comment"># or</span>\n<span class="token function">yarn</span> <span class="token function">add</span> vue-request\n<span class="token comment"># or</span>\n<span class="token function">pnpm</span> <span class="token function">install</span> vue-request\n</code></pre></div><h3 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h3><blockquote><p>For production environments, we recommend linking to a specific version and build file to avoid unexpected breaking changes caused by new versions.</p></blockquote><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue-request/dist/vue-request.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>Once you add it to your page, you can access our exported methods in <code>window.VueRequest</code>.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>failed to fetch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hey! {{ data }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>Service<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      data<span class="token punctuation">,</span>\n      loading<span class="token punctuation">,</span>\n      error<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',8),r=(0,t._)("code",null,"useRequest",-1),k=(0,t._)("code",null,"Service",-1),d=(0,t._)("code",null,"Service",-1),g=(0,t._)("strong",null,"axios",-1),h=(0,t._)("strong",null,"Promise",-1),m=(0,t._)("code",null,"useRequest",-1),v=(0,t._)("code",null,"data",-1),f=(0,t._)("code",null,"loading",-1),q=(0,t._)("code",null,"error",-1),U=(0,t._)("code",null,"data",-1),_=(0,t._)("code",null,"undefined",-1),b=(0,t._)("code",null,"loading",-1),w=(0,t._)("code",null,"true",-1),y=(0,t._)("code",null,"data",-1),x=(0,t._)("code",null,"error",-1),R=(0,t._)("code",null,"data",-1),S=(0,t._)("code",null,"loading",-1),W=(0,t._)("code",null,"error",-1),C={href:"https://v3.cn.vuejs.org/guide/reactivity-fundamentals.html",target:"_blank",rel:"noopener noreferrer"},N={},P=(0,s(94407).Z)(N,[["render",function(n,a){const s=(0,t.up)("OutboundLink"),N=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,p,(0,t._)("p",null,[(0,t.Uk)("You can install VueRequest with "),(0,t._)("a",o,[(0,t.Uk)("NPM"),(0,t.Wm)(s)]),(0,t.Uk)(", "),(0,t._)("a",c,[(0,t.Uk)("YARN"),(0,t.Wm)(s)]),(0,t.Uk)(", or a "),l,(0,t.Uk)(" via "),(0,t._)("a",u,[(0,t.Uk)("unpkg.com"),(0,t.Wm)(s)])]),i,(0,t._)("p",null,[(0,t.Uk)("In this example, "),r,(0,t.Uk)(" takes a "),k,(0,t.Uk)(" function. "),d,(0,t.Uk)(" is an asynchronous request function, which means you can use "),g,(0,t.Uk)(" to fetch data and return a "),h,(0,t.Uk)(". More detailed information can be found in "),(0,t.Wm)(N,{to:"/guide/documentation/dataFetching.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("Data Fetching")])),_:1}),(0,t.Uk)(".")]),(0,t._)("p",null,[m,(0,t.Uk)(" also returns three values, "),v,(0,t.Uk)(", "),f,(0,t.Uk)(", and "),q,(0,t.Uk)(". When the request is not completed yet, "),U,(0,t.Uk)(" will be "),_,(0,t.Uk)(", and "),b,(0,t.Uk)(" will be set to "),w,(0,t.Uk)(". When the request is finished, "),y,(0,t.Uk)(" and "),x,(0,t.Uk)(" will be set according to the request result, and the page will be rendered. This is because "),R,(0,t.Uk)(", "),S,(0,t.Uk)(", and "),W,(0,t.Uk)(" are Vue's "),(0,t._)("a",C,[(0,t.Uk)("reactive references (shallowRef)"),(0,t.Wm)(s)]),(0,t.Uk)(", and their values will be modified according to the request status and result.")])],64)}]])},70177:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-36c665f0",path:"/guide/gettingStarted.html",title:"Getting Started",lang:"en-US",frontmatter:{head:[["meta",{name:"og:title",content:"Getting Started - VueRequest"}]]},excerpt:"",headers:[{level:2,title:"Installation",slug:"installation",children:[{level:3,title:"NPM",slug:"npm",children:[]},{level:3,title:"CDN",slug:"cdn",children:[]}]},{level:2,title:"Usage",slug:"usage",children:[]}],filePathRelative:"guide/gettingStarted.md",git:{updatedTime:1686124925e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);