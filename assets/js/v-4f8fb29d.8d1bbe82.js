(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[435],{7793:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>V});var n=s(8133);const o=(0,n.Wm)("h1",{id:"\u8282\u6D41"},[(0,n.Wm)("a",{class:"header-anchor",href:"#\u8282\u6D41"},"#"),(0,n.Uk)(" \u8282\u6D41")],-1),c=(0,n.Uk)("\u6709\u5173\u8282\u6D41\u7684\u89E3\u91CA\uFF0C\u4F60\u53EF\u4EE5\u5728"),l={href:"https://css-tricks.com/debouncing-throttling-explained-examples/#throttle",target:"_blank",rel:"noopener noreferrer"},u=(0,n.Uk)("\u8FD9\u91CC"),i=(0,n.Uk)(" \u627E\u5230\u3002"),r=(0,n.Uk)("\u7B80\u5355\u6765\u8BF4\u5C31\u662F\uFF0C\u4FDD\u8BC1\u6BCF X \u6BEB\u79D2\u53BB\u6267\u884C\u4E00\u6B21\u51FD\u6570\u3002\u4F8B\u5982\u8F93\u5165\u4E8B\u4EF6\uFF0C"),k=(0,n.Wm)("code",null,"throttle",-1),d=(0,n.Uk)(" \u51FD\u6570\u4F1A\u5728\u7528\u6237"),m=(0,n.Wm)("strong",null,"\u8F93\u5165\u7684\u8FC7\u7A0B\u4E2D",-1),h=(0,n.Uk)("\u4EE5\u8BBE\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u53BB\u6267\u884C\u51FD\u6570\u3002\u8FD9\u4E0E\u6211\u4EEC\u4E0A\u4E00\u8282\u63D0\u5230\u7684 "),_={href:"/zh/guide/documents/debounce.html",target:"_blank",rel:"noopener noreferrer"},b=(0,n.Wm)("code",null,"debounce",-1),g=(0,n.Uk)(" \u6709\u5F88\u5927\u7684\u533A\u522B\u3002"),f={class:"custom-block warning"},W=(0,n.Wm)("p",{class:"custom-block-title"},"\u6CE8\u610F",-1),v=(0,n.Uk)("VueRequest \u7684\u8282\u6D41\u662F\u4F7F\u7528 "),U={href:"https://lodash.com",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Wm)("strong",null,"lodash",-1),y=(0,n.Uk)(" \u63D0\u4F9B\u7684 "),w={href:"https://lodash.com/docs/4.17.15#throttle",target:"_blank",rel:"noopener noreferrer"},q=(0,n.Wm)("code",null,"throttle",-1),z=(0,n.Uk)(" \u5B9E\u73B0\u7684\uFF0C"),C=(0,n.Wm)("code",null,"leading",-1),R=(0,n.Uk)(" \u548C "),I=(0,n.Wm)("code",null,"trailing",-1),j=(0,n.Uk)(" \u9009\u9879\u9ED8\u8BA4\u4E3A true\uFF0C\u56E0\u6B64\uFF0C"),L=(0,n.Wm)("strong",null,"\u5728\u7B2C\u4E00\u4E2A throttle \u7684\u6267\u884C\u95F4\u9694\u4E2D\u53EF\u80FD\u4F1A\u89E6\u53D1\u4E24\u6B21\u8BF7\u6C42",-1),O=(0,n.Uk)("\u5982\u4E0B\u6240\u793A\uFF0C\u4F60\u53EA\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A "),A={href:"/zh/api/options.html#throttleinterval",target:"_blank",rel:"noopener noreferrer"},E=(0,n.Wm)("code",null,"throttleInterval",-1),H=(0,n.Uk)(" \u6765\u544A\u8BC9\u6211\u4EEC\u8282\u6D41\u7684\u6267\u884C\u95F4\u9694\u3002\u8FD9\u6837\u7528\u6237\u5728\u8F93\u5165\u4FE1\u606F\u65F6\uFF0C\u6BCF\u9694 300 \u6BEB\u79D2 \u6211\u4EEC\u5C31\u4F1A\u53D1\u8D77\u4E00\u6B21\u8BF7\u6C42\u3002"),P=(0,n.uE)(`<div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">api/users?name=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      throttleInterval<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onInput</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,1);function T(X,Y){const t=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[o,(0,n.Wm)("blockquote",null,[(0,n.Wm)("p",null,[c,(0,n.Wm)("a",l,[u,(0,n.Wm)(t)]),i])]),(0,n.Wm)("p",null,[r,k,d,m,h,(0,n.Wm)("a",_,[b,(0,n.Wm)(t)]),g]),(0,n.Wm)("div",f,[W,(0,n.Wm)("p",null,[v,(0,n.Wm)("a",U,[x,(0,n.Wm)(t)]),y,(0,n.Wm)("a",w,[q,(0,n.Wm)(t)]),z,C,R,I,j,L])]),(0,n.Wm)("p",null,[O,(0,n.Wm)("a",A,[E,(0,n.Wm)(t)]),H]),P],64)}const p={};p.render=T;const V=p},4634:(e,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>n});const n={key:"v-4f8fb29d",path:"/zh/guide/documents/throttle.html",title:"\u8282\u6D41",frontmatter:{},excerpt:"",headers:[],filePathRelative:"zh/guide/documents/throttle.md",git:{updatedTime:1609406333e3,contributors:[]}}}}]);
