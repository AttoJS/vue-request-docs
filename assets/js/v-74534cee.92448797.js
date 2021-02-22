(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[841],{622:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>D});var t=a(8133);const p=(0,t.Wm)("h1",{id:"throttle"},[(0,t.Wm)("a",{class:"header-anchor",href:"#throttle"},"#"),(0,t.Uk)(" Throttle")],-1),o=(0,t.Uk)("An explanation of throttling can be found in "),e={href:"https://css-tricks.com/debouncing-throttling-explained-examples/#throttle",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("here"),u=(0,t.Uk)("."),l=(0,t.Uk)("Simply put, it is guaranteed to execute the function every N milliseconds. For example, for input events, the "),i=(0,t.Wm)("code",null,"throttle",-1),r=(0,t.Uk)(" function will execute the function at a set time interval during the user "),k=(0,t.Wm)("strong",null,"input process",-1),d=(0,t.Uk)(". This is very different from the "),m=(0,t.Wm)("code",null,"debounce",-1),g=(0,t.Uk)(" mentioned in the previous section."),h={class:"custom-container warning"},b=(0,t.Wm)("p",{class:"custom-container-title"},"Note",-1),f=(0,t.Uk)("The throttling of VueRequest is implemented using "),v={href:"https://lodash.com/docs/4.17.15#throttle",target:"_blank",rel:"noopener noreferrer"},w=(0,t.Wm)("code",null,"throttle",-1),W=(0,t.Uk)(" provided by "),y={href:"https://lodash.com",target:"_blank",rel:"noopener noreferrer"},x=(0,t.Wm)("strong",null,"lodash",-1),U=(0,t.Uk)(", "),q=(0,t.Wm)("code",null," The leading",-1),_=(0,t.Uk)(" and "),T=(0,t.Wm)("code",null,"trailing",-1),R=(0,t.Uk)(" options default to true. Therefore, "),S=(0,t.Wm)("strong",null,"two requests may be triggered during the execution interval of the first throttle",-1),j=(0,t.Uk)("As shown below, you only need to provide a "),C=(0,t.Wm)("code",null,"throttleInterval",-1),A=(0,t.Uk)(" to tell us the execution interval of throttling. So when the user enters information, we will initiate a request every 300 milliseconds."),I=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> array<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>\n        Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          <span class="token string">&#39;array|3-5&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>testService<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      throttleInterval<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n      manual<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Enter the name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onInput</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token punctuation">{</span>loading<span class="token punctuation">.</span>value\n            <span class="token operator">?</span> <span class="token string">&#39;loading...&#39;</span>\n            <span class="token operator">:</span> data<span class="token punctuation">.</span>value<span class="token operator">?.</span>array<span class="token operator">?.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div>',1),D={render:function(n,s){const a=(0,t.up)("OutboundLink"),D=(0,t.up)("RouterLink"),E=(0,t.up)("ThrottleDemo"),L=(0,t.up)("Demo");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,[o,(0,t.Wm)("a",e,[c,(0,t.Wm)(a)]),u])]),(0,t.Wm)("p",null,[l,i,r,k,d,(0,t.Wm)(D,{to:"/guide/guide/documentation/debounce.html"},{default:(0,t.w5)((()=>[m])),_:1}),g]),(0,t.Wm)("div",h,[b,(0,t.Wm)("p",null,[f,(0,t.Wm)("a",v,[w,(0,t.Wm)(a)]),W,(0,t.Wm)("a",y,[x,(0,t.Wm)(a)]),U,q,_,T,R,S])]),(0,t.Wm)("p",null,[j,(0,t.Wm)(D,{to:"/api/index.html#throttleinterval"},{default:(0,t.w5)((()=>[C])),_:1}),A]),(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Wm)(E)])),_:1}),I],64)}}},9815:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-74534cee",path:"/guide/documentation/throttle.html",title:"Throttle",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/documentation/throttle.md",git:{updatedTime:161398004e4,contributors:[]}}}}]);