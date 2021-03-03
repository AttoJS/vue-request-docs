(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[2471],{6004:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>hn});var t=s(6252);const p=(0,t.Wm)("h1",{id:"advanced-usage"},[(0,t.Wm)("a",{class:"header-anchor",href:"#advanced-usage"},"#"),(0,t.Uk)(" Advanced Usage")],-1),o=(0,t.Uk)("We have made further encapsulation based on the basic usage mentioned in the previous chapter, and now we have implemented the scene of "),e=(0,t.Wm)("a",{href:"#pagination"},"pagination",-1),c=(0,t.Uk)(", "),l=(0,t.Wm)("a",{href:"#loadmore"},"loadMore",-1),u=(0,t.Uk)(". If you have good suggestions, welcome to "),i={href:"https://github.com/attojs/vue-request",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("github"),r=(0,t.Uk)(" to submit "),g=(0,t.Wm)("strong",null,"ISSUE",-1),d=(0,t.Uk)(" or "),m=(0,t.Wm)("strong",null,"PR",-1),h=(0,t.Uk)("."),y={id:"pagination"},f=(0,t.Wm)("a",{class:"header-anchor",href:"#pagination"},"#",-1),v=(0,t.Uk)(" Pagination "),w=(0,t.Uk)("We will automatically help you manage the paging information, such as current page number, number of entries per page, the total number of entries, etc. You only need to use the "),W=(0,t.Wm)("code",null,"changeCurrent()",-1),x=(0,t.Uk)(" and "),b=(0,t.Wm)("code",null,"changePageSize()",-1),U=(0,t.Uk)(" provided by us. Easily manage paged data."),q=(0,t.Uk)("Note: We will inject the parameters required for paging in the first position of the "),M=(0,t.Wm)("code",null,"params",-1),L=(0,t.Uk)(" array."),P=(0,t.Uk)("See more available configurations: "),_=(0,t.Uk)("Pagination API"),j=(0,t.uE)('<h3 id="usage"><a class="header-anchor" href="#usage">#</a> Usage</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="example"><a class="header-anchor" href="#example">#</a> Example</h3>',3),R=(0,t.Uk)("You can also use it with "),C=(0,t.Wm)("code",null,"ant-design-vue",-1),T=(0,t.Uk)(". Here we provide a demo, "),I={href:"https://2x.antdv.com/components/table#components-table-demo-ajax",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("click to view"),A=(0,t.uE)('<details class="custom-container details"><summary>View Code</summary><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> usePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Loading<span class="token punctuation">,</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/pagination/style&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/loading/style&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> getData <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">&#39;array|5&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@name&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>array<span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> total<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> result<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        total<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n        result<span class="token operator">:</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> current<span class="token punctuation">,</span> total<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> pageSize<span class="token punctuation">,</span> changeCurrent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePagination</span><span class="token punctuation">(</span>testService<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span> 140px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token punctuation">{</span>loading<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span> <span class="token punctuation">/&gt;</span></span>\n          <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n              </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token operator">?.</span>result<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n              <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span>\n          <span class="token attr-name">modelValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">total-items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>total<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">show-page-size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>pageSize<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">force-ellipses</span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">page<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">changeCurrent</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details>',1),D={id:"loadmore"},E=(0,t.Wm)("a",{class:"header-anchor",href:"#loadmore"},"#",-1),z=(0,t.Uk)(" LoadMore "),N={class:"custom-container warning"},B=(0,t.Wm)("p",{class:"custom-container-title"},"Note",-1),Y=(0,t.Uk)("In "),V=(0,t.Wm)("code",null,"LoadMore",-1),H=(0,t.Uk)(" mode, only "),$=(0,t.Wm)("strong",null,"Request Method",-1),K=(0,t.Uk)(" is supported."),O=(0,t.Uk)("We will automatically help you manage the list data. The data structure returned by "),F=(0,t.Wm)("code",null,"Service",-1),G=(0,t.Uk)(" must contain "),J=(0,t.Wm)("code",null,"{list: LR[]}",-1),Q=(0,t.Uk)(". If not, you can specify another key name with "),X=(0,t.Wm)("code",null,"listKey",-1),Z=(0,t.Uk)(" or convert it once with "),nn=(0,t.Wm)("code",null,"formatResult()",-1),an=(0,t.Uk)(". Then we can get the requested data list collection through the returned "),sn=(0,t.Wm)("code",null,"dataList",-1),tn=(0,t.Uk)(" variable, and then use "),pn=(0,t.Wm)("code",null,"loadMore()",-1),on=(0,t.Uk)(" to trigger loading more."),en=(0,t.Uk)("In addition, we will pass in the first parameter of the "),cn=(0,t.Wm)("code",null,"Request Method",-1),ln=(0,t.Uk)(),un=(0,t.Wm)("code",null,"{data: R, dataList: LR}",-1),kn=(0,t.Uk)(". You can decide the parameters of the next request based on these parameters."),rn=(0,t.Uk)("See more available configurations: "),gn=(0,t.Uk)("LoadMore API"),dn=(0,t.uE)('<h3 id="usage-1"><a class="header-anchor" href="#usage-1">#</a> Usage</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLoadMore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="example-1"><a class="header-anchor" href="#example-1">#</a> Example</h3>',3),mn=(0,t.uE)('<details class="custom-container details"><summary>View Code</summary><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useLoadMore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> List<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/list/style&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/cell/style&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/button/style&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">generateData</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token operator">:</span> number<span class="token punctuation">,</span> total <span class="token operator">=</span> <span class="token number">10</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">&lt;=</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    list <span class="token operator">=</span> Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token string">&#39;list|10&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>list<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    current<span class="token punctuation">,</span>\n    total<span class="token punctuation">,</span>\n    list<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">type</span> <span class="token class-name">APIReturnType</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> generateData<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token keyword">type</span> <span class="token class-name">rawDataType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  data<span class="token operator">:</span> APIReturnType<span class="token punctuation">;</span>\n  dataList<span class="token operator">:</span> APIReturnType<span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token parameter">rawData<span class="token operator">:</span> rawDataType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token punctuation">(</span>rawData<span class="token operator">?.</span>data<span class="token operator">?.</span>current <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span>APIReturnType<span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">generateData</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> loadMore<span class="token punctuation">,</span> loadingMore<span class="token punctuation">,</span> dataList<span class="token punctuation">,</span> noMore<span class="token punctuation">,</span> reload <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useLoadMore</span><span class="token generic class-name"><span class="token operator">&lt;</span>\n      APIReturnType<span class="token punctuation">,</span>\n      <span class="token builtin">any</span><span class="token punctuation">,</span>\n      APIReturnType<span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span>\n    <span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>testService<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token function-variable function">isNoMore</span><span class="token operator">:</span> <span class="token parameter">d</span> <span class="token operator">=&gt;</span> d<span class="token operator">?.</span>current <span class="token operator">&gt;=</span> d<span class="token operator">?.</span>total<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>\n          <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          Reload\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span> <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span>\n            <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loadingMore<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n            <span class="token attr-name">loading-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading...<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">finished</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noMore<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n            <span class="token attr-name">finished-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no more<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">onLoad</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n              <span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">&gt;</span></span><span class="token plain-text">\n            </span><span class="token punctuation">{</span>dataList<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>idx<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details>',1),hn={render:function(n,a){const s=(0,t.up)("OutboundLink"),hn=(0,t.up)("Badge"),yn=(0,t.up)("RouterLink"),fn=(0,t.up)("PaginationDemo"),vn=(0,t.up)("Demo"),wn=(0,t.up)("LoadMoreDemo");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("p",null,[o,e,c,l,u,(0,t.Wm)("a",i,[k,(0,t.Wm)(s)]),r,g,d,m,h]),(0,t.Wm)("h2",y,[f,v,(0,t.Wm)(hn,{text:"New in beta.8"})]),(0,t.Wm)("p",null,[w,(0,t.Wm)(yn,{to:"/api/pagination.html#changecurrent"},{default:(0,t.w5)((()=>[W])),_:1}),x,(0,t.Wm)(yn,{to:"/api/pagination.html#changepagesize"},{default:(0,t.w5)((()=>[b])),_:1}),U]),(0,t.Wm)("p",null,[(0,t.Wm)("strong",null,[q,(0,t.Wm)(yn,{to:"/api/#params"},{default:(0,t.w5)((()=>[M])),_:1}),L])]),(0,t.Wm)("p",null,[P,(0,t.Wm)(yn,{to:"/api/pagination.html"},{default:(0,t.w5)((()=>[_])),_:1})]),j,(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,[R,C,T,(0,t.Wm)("a",I,[S,(0,t.Wm)(s)])])]),(0,t.Wm)(vn,null,{default:(0,t.w5)((()=>[(0,t.Wm)(fn)])),_:1}),A,(0,t.Wm)("h2",D,[E,z,(0,t.Wm)(hn,{text:"New in beta.11"})]),(0,t.Wm)("div",N,[B,(0,t.Wm)("p",null,[Y,V,H,(0,t.Wm)(yn,{to:"/api/loadMore.html#request-method"},{default:(0,t.w5)((()=>[$])),_:1}),K])]),(0,t.Wm)("p",null,[O,(0,t.Wm)(yn,{to:"/api/loadMore.html#service"},{default:(0,t.w5)((()=>[F])),_:1}),G,J,Q,(0,t.Wm)(yn,{to:"/api/loadMore.html#listkey"},{default:(0,t.w5)((()=>[X])),_:1}),Z,(0,t.Wm)(yn,{to:"/api/index.html#formatresult"},{default:(0,t.w5)((()=>[nn])),_:1}),an,(0,t.Wm)(yn,{to:"/api/loadMore.html#datalist"},{default:(0,t.w5)((()=>[sn])),_:1}),tn,(0,t.Wm)(yn,{to:"/api/loadMore.html#loadmore"},{default:(0,t.w5)((()=>[pn])),_:1}),on]),(0,t.Wm)("p",null,[en,(0,t.Wm)(yn,{to:"/api/loadMore.html#request-method"},{default:(0,t.w5)((()=>[cn])),_:1}),ln,un,kn]),(0,t.Wm)("p",null,[rn,(0,t.Wm)(yn,{to:"/api/loadMore.html"},{default:(0,t.w5)((()=>[gn])),_:1})]),dn,(0,t.Wm)(vn,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wn)])),_:1}),mn],64)}}},3918:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>t});const t={key:"v-041f880a",path:"/guide/documentation/advancedUsage.html",title:"Advanced Usage",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Pagination",slug:"pagination",children:[{level:3,title:"Usage",slug:"usage",children:[]},{level:3,title:"Example",slug:"example",children:[]}]},{level:2,title:"LoadMore",slug:"loadmore",children:[{level:3,title:"Usage",slug:"usage-1",children:[]},{level:3,title:"Example",slug:"example-1",children:[]}]}],filePathRelative:"guide/documentation/advancedUsage.md",git:{updatedTime:1614762083e3,contributors:[]}}}}]);