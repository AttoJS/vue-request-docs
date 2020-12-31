(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[856],{654:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>v});var n=s(8133);const o=(0,n.Wm)("h1",{id:"\u9519\u8BEF\u91CD\u8BD5"},[(0,n.Wm)("a",{class:"header-anchor",href:"#\u9519\u8BEF\u91CD\u8BD5"},"#"),(0,n.Uk)(" \u9519\u8BEF\u91CD\u8BD5")],-1),c=(0,n.Wm)("p",null,"\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u6682\u65F6\u6027\u9519\u8BEF\u5176\u5B9E\u662F\u5F88\u5E38\u89C1\u7684\uFF0C\u4F8B\u5982\uFF1A\u63A5\u53E3\u670D\u52A1\u5668\u4E0E\u6570\u636E\u5E93\u670D\u52A1\u5668\u7684\u8FDE\u63A5\u6682\u65F6\u65AD\u5F00\uFF0C\u6216\u8005\u7528\u6237\u7AEF\u7F51\u7EDC\u6682\u65F6\u53D1\u751F\u6545\u969C\u3002\u8FD9\u4E9B\u6545\u969C\u5F80\u5F80\u90FD\u4F1A\u5728\u77ED\u65F6\u95F4\u5185\u81EA\u884C\u4FEE\u6B63\uFF0C\u5982\u679C\u80FD\u5728\u5EF6\u8FDF\u5408\u9002\u7684\u65F6\u95F4\u540E\u518D\u5C1D\u8BD5\uFF0C\u8BE5\u8BF7\u6C42\u53EF\u80FD\u4F1A\u6210\u529F\u3002",-1),u=(0,n.Uk)("\u73B0\u5728\u4F60\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\uFF0C\u8BA9 VueRequest \u5E2E\u4F60\u5904\u7406\u8FD9\u4EF6\u4E8B\u3002\u53EA\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A "),r={href:"/zh/api/options.html#errorretrycount",target:"_blank",rel:"noopener noreferrer"},l=(0,n.Wm)("code",null,"errorRetryCount",-1),i=(0,n.Uk)(" \u6765\u544A\u8BC9\u6211\u4EEC\u91CD\u8BD5\u7684\u6B21\u6570\u3002\u6B63\u5982\u4E0B\u9762\u7684\u4F8B\u5B50"),k=(0,n.uE)(`<h2 id="errorretrycount"><a class="header-anchor" href="#errorretrycount">#</a> errorRetryCount</h2><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      errorRetryCount<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="errorretryinterval"><a class="header-anchor" href="#errorretryinterval">#</a> errorRetryInterval</h2>`,3),d=(0,n.Uk)("\u4F60\u4E5F\u53EF\u4EE5\u63D0\u4F9B "),m={href:"/zh/api/options.html#errorretryinterval",target:"_blank",rel:"noopener noreferrer"},b=(0,n.Wm)("code",null,"errorRetryInterval",-1),h=(0,n.Uk)(" \u6765\u8BBE\u5B9A\u91CD\u8BD5\u7684\u95F4\u9694\u65F6\u95F4"),g=(0,n.uE)(`<div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      errorRetryCount<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      errorRetryInterval<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,1);function y(f,_){const p=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[o,c,(0,n.Wm)("p",null,[u,(0,n.Wm)("a",r,[l,(0,n.Wm)(p)]),i]),k,(0,n.Wm)("p",null,[d,(0,n.Wm)("a",m,[b,(0,n.Wm)(p)]),h]),g],64)}const t={};t.render=y;const v=t},5682:(e,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>n});const n={key:"v-675c2af2",path:"/zh/guide/documents/errorRetry.html",title:"\u9519\u8BEF\u91CD\u8BD5",frontmatter:{},excerpt:"",headers:[{level:2,title:"errorRetryCount",slug:"errorretrycount",children:[]},{level:2,title:"errorRetryInterval",slug:"errorretryinterval",children:[]}],filePathRelative:"zh/guide/documents/errorRetry.md",git:{updatedTime:1609406333e3,contributors:[]}}}}]);
