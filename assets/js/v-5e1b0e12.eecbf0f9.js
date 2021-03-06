(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[8251],{448:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>k});var t=a(6252);const p=(0,t.Wm)("h1",{id:"mutate"},[(0,t.Wm)("a",{class:"header-anchor",href:"#mutate"},"#"),(0,t.Uk)(" Mutate")],-1),o=(0,t.Uk)("When you need to modify the requested data. You can use "),e=(0,t.Wm)("code",null,"mutate",-1),c=(0,t.Uk)(" to directly modify "),u=(0,t.Wm)("code",null,"data",-1),l=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">&#39;@name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> mutate<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>testService<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">name: </span><span class="token punctuation">{</span>loading<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&#39;loading...&#39;</span> <span class="token operator">:</span> data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">mutate</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> Edit </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br></div></div>',1),k={render:function(n,s){const a=(0,t.up)("RouterLink"),k=(0,t.up)("MutateDemo"),i=(0,t.up)("Demo");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("p",null,[o,(0,t.Wm)(a,{to:"/api/index.html#mutate"},{default:(0,t.w5)((()=>[e])),_:1}),c,(0,t.Wm)(a,{to:"/api/index.html#data"},{default:(0,t.w5)((()=>[u])),_:1})]),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(k)])),_:1}),l],64)}}},7122:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-5e1b0e12",path:"/guide/documentation/mutate.html",title:"Mutate",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/documentation/mutate.md",git:{updatedTime:1615442771e3,contributors:[]}}}}]);