(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[365],{1454:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>v});var t=a(8133);const p=(0,t.Wm)("h1",{id:"缓存"},[(0,t.Wm)("a",{class:"header-anchor",href:"#缓存"},"#"),(0,t.Uk)(" 缓存")],-1),e=(0,t.Uk)("你可以通过设置 "),o=(0,t.Wm)("code",null,"cacheKey",-1),c=(0,t.Uk)(" 来启用缓存功能。当缓存启用后 VueRequest 会把当前请求的结果缓存下来，等到下次该组件初始化时，亦或者另外一个设置了同样 "),u=(0,t.Wm)("code",null,"cacheKey",-1),l=(0,t.Uk)(" 的请求初始化时，如果有缓存，则会优先返回缓存的数据，然后再在背后发起新的请求。这样就确保数据以最快的数据展现在用户面前。"),k=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      cacheKey<span class="token operator">:</span> <span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="cachetime"><a class="header-anchor" href="#cachetime">#</a> cacheTime</h2>',2),i=(0,t.Uk)("你还可以设置缓存的回收时间。当缓存数据的时间超过了设定的 "),r=(0,t.Wm)("code",null,"cacheTime",-1),d=(0,t.Uk)(" （默认为 600000 毫秒，即 10 分钟），VueRequest 会自动丢弃该缓存的数据，等到下次发起请求后，重新缓存新的数据。"),m=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      cacheKey<span class="token operator">:</span> <span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span>\n      cacheTime<span class="token operator">:</span> <span class="token number">300000</span><span class="token punctuation">,</span> <span class="token comment">// 10 minutes</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="staletime"><a class="header-anchor" href="#staletime">#</a> staleTime</h2>',2),g=(0,t.Uk)("如果你能确保缓存下来的数据，在一定时间内不会有任何更新的，你可以设置一个保鲜时间 "),h=(0,t.Wm)("code",null,"staleTime",-1),f=(0,t.Uk)(" （默认为 0，即不保鲜）, 当设置保鲜时间后，VueRequest 在该时间内会认为缓存的数据是新鲜的，从而不会发起新的请求，这能为一些定时更新的接口减轻请求的压力。"),y=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      cacheKey<span class="token operator">:</span> <span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span>\n      staleTime<span class="token operator">:</span> <span class="token number">3600000</span><span class="token punctuation">,</span> <span class="token comment">// 60 minutes</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',1),v={render:function(n,s){const a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("p",null,[e,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#cachekey"},{default:(0,t.w5)((()=>[o])),_:1}),c,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#cachekey"},{default:(0,t.w5)((()=>[u])),_:1}),l]),k,(0,t.Wm)("p",null,[i,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#cachetime"},{default:(0,t.w5)((()=>[r])),_:1}),d]),m,(0,t.Wm)("p",null,[g,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#staletime"},{default:(0,t.w5)((()=>[h])),_:1}),f]),y],64)}}},1548:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-385aca2a",path:"/zh/guide/documents/cacheKey.html",title:"缓存",frontmatter:{},excerpt:"",headers:[{level:2,title:"cacheTime",slug:"cachetime",children:[]},{level:2,title:"staleTime",slug:"staletime",children:[]}],filePathRelative:"zh/guide/documents/cacheKey.md",git:{updatedTime:1613724187e3,contributors:[]}}}}]);