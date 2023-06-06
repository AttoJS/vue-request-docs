"use strict";(self.webpackChunken=self.webpackChunken||[]).push([[803],{13667:(n,a,s)=>{s.r(a),s.d(a,{default:()=>w});var t=s(27875);const e=(0,t.uE)('<h1 id="data-fetching" tabindex="-1"><a class="header-anchor" href="#data-fetching" aria-hidden="true">#</a> Data Fetching</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>Service<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',2),p=(0,t.Uk)("This is the very fundamental API of VueRequest. The "),o=(0,t._)("code",null,"Service",-1),c=(0,t.Uk)(" here must be a function that returns a "),u=(0,t._)("strong",null,"Promise",-1),l=(0,t.Uk)(", and the returned result will decide whether to pass "),i=(0,t._)("code",null,"data",-1),r=(0,t.Uk)(" (resolve) or "),k=(0,t._)("code",null,"error",-1),d=(0,t.Uk)(" (reject). The input parameters of the function will be passed to the API interface as "),h=(0,t._)("code",null,"params",-1),g=(0,t.Uk)("."),m=(0,t.uE)('<p>In other words, you can use <strong>third-party request library (such as <code>axios</code>)</strong> to get data and then pass the request to VueRequest for management. For details, please refer to the following example.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">getUser</span> <span class="token operator">=</span> userName <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    params<span class="token operator">:</span> <span class="token punctuation">{</span>\n      name<span class="token operator">:</span> userName<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  defaultParams<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;attojs&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n<span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><hr><p>Next, let&#39;s take a look at some other configurations.</p>',4),f={},w=(0,s(94407).Z)(f,[["render",function(n,a){const s=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("p",null,[p,o,c,u,l,i,r,k,d,(0,t.Wm)(s,{to:"/api/index.html#params"},{default:(0,t.w5)((()=>[h])),_:1}),g]),m],64)}]])},20290:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-d1efe634",path:"/guide/documentation/dataFetching.html",title:"Data Fetching",lang:"en-US",frontmatter:{head:[["meta",{name:"og:title",content:"Data Fetching - VueRequest"}]]},excerpt:"",headers:[],filePathRelative:"guide/documentation/dataFetching.md",git:{updatedTime:1686025655e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);