(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[399],{5361:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>v});var t=a(8133);const p=(0,t.Wm)("h1",{id:"轮询"},[(0,t.Wm)("a",{class:"header-anchor",href:"#轮询"},"#"),(0,t.Uk)(" 轮询")],-1),o=(0,t.Wm)("p",null,[(0,t.Uk)("如果你有一个需要定时请求的 API 接口，我们内置了一个 "),(0,t.Wm)("strong",null,"轮询"),(0,t.Uk)(" 的选项，能轻松帮你解决这件事情。")],-1),e=(0,t.Uk)("如下所示，你只需要设置一个 "),c=(0,t.Wm)("code",null,"pollingInterval",-1),u=(0,t.Uk)(" 来告诉我们轮询的间隔时间（毫秒）"),l=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>count<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>testService<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      pollingInterval<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>loading<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&#39;loading...&#39;</span> <span class="token operator">:</span> data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="pollingwhenhidden"><a class="header-anchor" href="#pollingwhenhidden">#</a> pollingWhenHidden</h2><p>默认情况下，我们会在屏幕不可见时暂停轮询。当屏幕重新聚焦时，重新激活轮询。当然，你可以通过设置 <code>pollingWhenHidden = true</code>，来使得屏幕不可见时也继续发起请求。</p>',3),k=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-request&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>count<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>testService<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      pollingInterval<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n      pollingWhenHidden<span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>loading<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&quot;loading...&quot;</span> <span class="token operator">:</span> data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="pollingwhenoffline"><a class="header-anchor" href="#pollingwhenoffline">#</a> pollingWhenOffline</h2><p>默认情况下，我们会在网络断开时时暂停轮询。当网络恢复正常后，重新激活轮询。当然，你可以通过设置 <code>pollingWhenOffline = true</code>，来使得网络断开时也继续发起请求。</p>',3),i={class:"custom-container warning"},r=(0,t.Wm)("p",{class:"custom-container-title"},"注意",-1),d=(0,t.Uk)("VueRequest 是通过监听 "),g=(0,t.Wm)("code",null,"window.ononline",-1),m=(0,t.Uk)(" 来检查是否正常联网的。在某些情况下，这个事件可能不可靠。详细请查阅 "),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document/ononline",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("MDN"),w=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-request&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>count<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>testService<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      pollingInterval<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n      pollingWhenOffline<span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>loading<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&quot;loading...&quot;</span> <span class="token operator">:</span> data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',1),v={render:function(n,s){const a=(0,t.up)("RouterLink"),v=(0,t.up)("pollingDemo"),y=(0,t.up)("Demo"),W=(0,t.up)("pollingWhenHiddenDemo"),q=(0,t.up)("OutboundLink"),b=(0,t.up)("pollingWhenOfflineDemo");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,o,(0,t.Wm)("p",null,[e,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#pollingInterval"},{default:(0,t.w5)((()=>[c])),_:1}),u]),(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v)])),_:1}),l,(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(W)])),_:1}),k,(0,t.Wm)("div",i,[r,(0,t.Wm)("p",null,[d,g,m,(0,t.Wm)("a",f,[h,(0,t.Wm)(q)])])]),(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b)])),_:1}),w],64)}}},3997:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-c213e2f0",path:"/zh/guide/documents/polling.html",title:"轮询",frontmatter:{},excerpt:"",headers:[{level:2,title:"pollingWhenHidden",slug:"pollingwhenhidden",children:[]},{level:2,title:"pollingWhenOffline",slug:"pollingwhenoffline",children:[]}],filePathRelative:"zh/guide/documents/polling.md",git:{updatedTime:1613724187e3,contributors:[]}}}}]);