(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[440],{5353:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>h});var t=a(8133);const p=(0,t.Wm)("h1",{id:"屏幕聚焦重新请求"},[(0,t.Wm)("a",{class:"header-anchor",href:"#屏幕聚焦重新请求"},"#"),(0,t.Uk)(" 屏幕聚焦重新请求")],-1),o=(0,t.Uk)("有些时候，你要确保多个浏览器窗口之间数据的一致性；又或者是当用户电脑在休眠状态重新激活后，页面的数据需要同步到最新状态时。"),e=(0,t.Wm)("code",null,"refreshOnWindowFocus",-1),c=(0,t.Uk)(" 可能会为你节省很多逻辑代码，如下所示，你只需要启用 "),u=(0,t.Wm)("code",null,"refreshOnWindowFocus",-1),l=(0,t.Uk)(" 即可"),k=(0,t.Wm)("div",{class:"custom-container tip"},[(0,t.Wm)("p",{class:"custom-container-title"},"提示"),(0,t.Wm)("p",null,"你可以尝试切换窗口或者隐藏窗口然后再切换回来，以观察下面的例子（默认时间间隔为 5 秒）")],-1),i=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">&#39;@name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>testService<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      refreshOnWindowFocus<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">random name: </span><span class="token punctuation">{</span>loading<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&#39;loading...&#39;</span> <span class="token operator">:</span> data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="重新聚焦间隔时间"><a class="header-anchor" href="#重新聚焦间隔时间">#</a> 重新聚焦间隔时间</h2>',2),r=(0,t.Uk)("如果你不希望用户在短时间内频繁触发 "),d=(0,t.Wm)("code",null,"refreshOnWindowFocus",-1),m=(0,t.Uk)(" 导致频繁请求的话，你可以修改 "),f=(0,t.Wm)("code",null,"refocusTimespan",-1),w=(0,t.Uk)(" 的值，从而延长触发的间隔，如下所示"),g=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">&#39;@name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>testService<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      refreshOnWindowFocus<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      refocusTimespan<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token comment">// 2000ms</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">random name: </span><span class="token punctuation">{</span>loading<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&#39;loading...&#39;</span> <span class="token operator">:</span> data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',1),h={render:function(n,s){const a=(0,t.up)("RouterLink"),h=(0,t.up)("RefreshOnWindowFocusDemo"),v=(0,t.up)("Demo");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("p",null,[o,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#refreshonwindowfocus"},{default:(0,t.w5)((()=>[e])),_:1}),c,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#refreshonwindowfocus"},{default:(0,t.w5)((()=>[u])),_:1}),l]),k,(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(h)])),_:1}),i,(0,t.Wm)("p",null,[r,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#refreshonwindowfocus"},{default:(0,t.w5)((()=>[d])),_:1}),m,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#refocustimespan"},{default:(0,t.w5)((()=>[f])),_:1}),w]),g],64)}}},2352:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-9b10420e",path:"/zh/guide/documents/refreshOnWindowFocus.html",title:"屏幕聚焦重新请求",frontmatter:{},excerpt:"",headers:[{level:2,title:"重新聚焦间隔时间",slug:"重新聚焦间隔时间",children:[]}],filePathRelative:"zh/guide/documents/refreshOnWindowFocus.md",git:{updatedTime:1613799828e3,contributors:[]}}}}]);