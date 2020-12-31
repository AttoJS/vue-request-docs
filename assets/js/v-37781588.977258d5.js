(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[654],{2187:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>u});var a=n(8133);const p=(0,a.uE)(`<h1 id="\u8D77\u6B65"><a class="header-anchor" href="#\u8D77\u6B65">#</a> \u8D77\u6B65</h1><div class="custom-block warning"><p class="custom-block-title">\u524D\u63D0\u6761\u4EF6</p><p>\u786E\u4FDD Vue \u7248\u672C\u4E3A 3.x</p></div><h2 id="\u5B89\u88C5"><a class="header-anchor" href="#\u5B89\u88C5">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-request@beta

<span class="token comment"># or with yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> vue-request@beta
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="cdn"><a class="header-anchor" href="#cdn">#</a> CDN</h3><div class="language-markup ext-html line-numbers-mode"><pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue-request@beta<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B83\u5C06\u4EE5 <code>window.VueRequest.useRequest</code> \u66B4\u9732\u5728\u5168\u5C40</p><h2 id="\u7528\u4F8B"><a class="header-anchor" href="#\u7528\u4F8B">#</a> \u7528\u4F8B</h2><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,9);function c(l,o){return p}const t={};t.render=c;const u=t},2390:(e,s,n)=>{"use strict";n.r(s),n.d(s,{data:()=>a});const a={key:"v-37781588",path:"/zh/guide/getting-started.html",title:"\u8D77\u6B65",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5B89\u88C5",slug:"\u5B89\u88C5",children:[{level:3,title:"CDN",slug:"cdn",children:[]}]},{level:2,title:"\u7528\u4F8B",slug:"\u7528\u4F8B",children:[]}],filePathRelative:"zh/guide/getting-started.md",git:{updatedTime:1609406333e3,contributors:[]}}}}]);
