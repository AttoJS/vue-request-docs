(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[514],{9641:(p,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>c});var a=n(8133);const t=(0,a.uE)(`<h1 id="\u9ED8\u8BA4\u8BF7\u6C42"><a class="header-anchor" href="#\u9ED8\u8BA4\u8BF7\u6C42">#</a> \u9ED8\u8BA4\u8BF7\u6C42</h1><p>\u6211\u4EEC\u5185\u7F6E\u4E86 Fetch \u6765\u5904\u7406\u4F60\u7684\u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u501F\u52A9\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u5165\u4E00\u4E2A <a href="#%E4%BC%A0%E5%85%A5%E5%AD%97%E7%AC%A6%E4%B8%B2">\u5B57\u7B26\u4E32</a>\u3001\u4E00\u4E2A<a href="#%E4%BC%A0%E5%85%A5%E5%AF%B9%E8%B1%A1">\u5BF9\u8C61</a>\u6216\u8005\u4F20\u5165\u4E00\u4E2A<a href="#%E4%BC%A0%E5%85%A5%E8%AF%B7%E6%B1%82%E5%87%BD%E6%95%B0">\u8BF7\u6C42\u51FD\u6570</a></p><h2 id="\u4F20\u5165\u5B57\u7B26\u4E32"><a class="header-anchor" href="#\u4F20\u5165\u5B57\u7B26\u4E32">#</a> \u4F20\u5165\u5B57\u7B26\u4E32</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u63A5\u53E3\u7684\u94FE\u63A5</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/user?name=John&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4F20\u5165\u8BF7\u6C42\u51FD\u6570\u3010\u63A8\u8350\u3011"><a class="header-anchor" href="#\u4F20\u5165\u8BF7\u6C42\u51FD\u6570\u3010\u63A8\u8350\u3011">#</a> \u4F20\u5165\u8BF7\u6C42\u51FD\u6570\u3010\u63A8\u8350\u3011</h2><p>\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u8FD4\u56DE\u503C\u4E3A <code>Promise</code> \u7C7B\u578B\u7684\u51FD\u6570\u3002</p><p>\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <strong>\u7B2C\u4E09\u65B9\u7684\u8BF7\u6C42\u5E93\uFF08\u5982 <code>axios</code> \uFF09</strong> \u6765\u83B7\u53D6\u6570\u636E\uFF0C\u7136\u540E\u5C06\u8BE5\u8BF7\u6C42\u4F20\u7ED9 VueRequest \u6765\u8FDB\u884C\u7BA1\u7406\u3002\u5177\u4F53\u53EF\u53C2\u8003\u4EE5\u4E0B\u4F8B\u5B50</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">&#39;api/user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u4F20\u5165\u5BF9\u8C61"><a class="header-anchor" href="#\u4F20\u5165\u5BF9\u8C61">#</a> \u4F20\u5165\u5BF9\u8C61</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165\u4E00\u4E2A\u5305\u542B <code>url</code> \u5C5E\u6027\u7684\u5BF9\u8C61</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> objectService <span class="token operator">=</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">&#39;api/user&#39;</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
  body<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Benny&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  headers<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>objectService<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr><p>\u73B0\u5728\uFF0C\u4F60\u5E94\u8BE5\u5DF2\u7ECF\u62E5\u6709\u4E86\u4E00\u4E2A VueRequest \u7684\u6700\u5C0F\u793A\u4F8B\u4E86\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u6765\u4E86\u89E3\u4E00\u4E0B\u5176\u4ED6\u7684\u4E00\u4E9B\u914D\u7F6E\u3002</p>`,14);function o(u,l){return t}const e={};e.render=o;const c=e},4711:(p,s,n)=>{"use strict";n.r(s),n.d(s,{data:()=>a});const a={key:"v-60537d48",path:"/zh/guide/documents/default-request.html",title:"\u9ED8\u8BA4\u8BF7\u6C42",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u4F20\u5165\u5B57\u7B26\u4E32",slug:"\u4F20\u5165\u5B57\u7B26\u4E32",children:[]},{level:2,title:"\u4F20\u5165\u8BF7\u6C42\u51FD\u6570\u3010\u63A8\u8350\u3011",slug:"\u4F20\u5165\u8BF7\u6C42\u51FD\u6570\u3010\u63A8\u8350\u3011",children:[]},{level:2,title:"\u4F20\u5165\u5BF9\u8C61",slug:"\u4F20\u5165\u5BF9\u8C61",children:[]}],filePathRelative:"zh/guide/documents/default-request.md",git:{updatedTime:1609406333e3,contributors:[]}}}}]);
