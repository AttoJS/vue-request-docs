"use strict";(self.webpackChunken=self.webpackChunken||[]).push([[803],{14758:(n,s,a)=>{a.r(s),a.d(s,{default:()=>g});var t=a(27875);const e=(0,t.uE)('<h1 id="data-fetching" tabindex="-1"><a class="header-anchor" href="#data-fetching" aria-hidden="true">#</a> Data Fetching</h1><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>service<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>This is the very fundamental API of VueRequest. The <code>service</code> here can be expressed as a request, it can be a <a href="#string">String</a>, <a href="#object">Object</a> or <a href="#request-functions">Request Functions</a>. When we get a response, it sets data and error based on the result of request.</p>',3),p={id:"request-functions",tabindex:"-1"},o=(0,t._)("a",{class:"header-anchor",href:"#request-functions","aria-hidden":"true"},"#",-1),c=(0,t.Uk)(" Request Functions "),u=(0,t.Uk)("A request function can be literally any function that returns a promise. The promise that is returned should either resolve the "),r=(0,t._)("code",null,"data",-1),i=(0,t.Uk)(" or throw an "),l=(0,t._)("code",null,"error",-1),k=(0,t.Uk)(". The input parameters of the function will be passed to the request as "),d=(0,t._)("code",null,"params",-1),h=(0,t.uE)('<p>In other words, you can use <strong>third-party request library (such as <code>axios</code>)</strong> to get data and then pass the request to VueRequest for management. For details, please refer to the following example.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">getUser</span> <span class="token operator">=</span> userName <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    params<span class="token operator">:</span> <span class="token punctuation">{</span>\n      name<span class="token operator">:</span> userName<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  defaultParams<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;attojs&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n<span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>By the way, you can also return a string or an object through a function, and we will use <code>fetch</code> to process these data requests.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>name <span class="token operator">=&gt;</span> <span class="token string">&#39;api/user?name=&#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h2><p>Of course, if your request is simple enough, you can pass in a URL.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/simple&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h2><p>Of course, if your request is simple enough, you can pass in an object containing the <code>url</code> attribute.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> objectService <span class="token operator">=</span> <span class="token punctuation">{</span>\n  url<span class="token operator">:</span> <span class="token string">&#39;api/simple&#39;</span><span class="token punctuation">,</span>\n  method<span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>\n  headers<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>objectService<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><hr><p>Next, let&#39;s take a look at some other configurations.</p>',12),g={render:function(n,s){const a=(0,t.up)("Badge"),g=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("h2",p,[o,c,(0,t.Wm)(a,{type:"tip",text:"Recommend",vertical:"top"})]),(0,t._)("p",null,[u,r,i,l,k,(0,t.Wm)(g,{to:"/api/index.html#params"},{default:(0,t.w5)((()=>[d])),_:1})]),h],64)}}},20290:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-d1efe634",path:"/guide/documentation/dataFetching.html",title:"Data Fetching",lang:"en-US",frontmatter:{head:[["meta",{name:"og:title",content:"Data Fetching - VueRequest"}]]},excerpt:"",headers:[{level:2,title:"Request Functions",slug:"request-functions",children:[]},{level:2,title:"String",slug:"string",children:[]},{level:2,title:"Object",slug:"object",children:[]}],filePathRelative:"guide/documentation/dataFetching.md",git:{updatedTime:1631500507e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);