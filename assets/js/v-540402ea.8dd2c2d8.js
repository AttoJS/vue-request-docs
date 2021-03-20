(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[2190],{3352:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>fn});var t=s(6252);const p=(0,t.Wm)("h1",{id:"高级用法"},[(0,t.Wm)("a",{class:"header-anchor",href:"#高级用法"},"#"),(0,t.Uk)(" 高级用法")],-1),o=(0,t.Uk)("我们基于前面章节提到的基本用法做了进一步的封装，目前实现了 "),e=(0,t.Wm)("a",{href:"#%E5%88%86%E9%A1%B5%E6%89%A9%E5%B1%95"},"分页",-1),c=(0,t.Uk)("，"),l=(0,t.Wm)("a",{href:"#loadmore-%E6%89%A9%E5%B1%95"},"LoadMore",-1),u=(0,t.Uk)(" 这些场景。如果你有好的建议，欢迎到 "),k={href:"https://github.com/attojs/vue-request",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("github"),r=(0,t.Uk)(" 发起 "),g=(0,t.Wm)("strong",null,"ISSUE",-1),d=(0,t.Uk)(" 或者 "),m=(0,t.Wm)("strong",null,"PR",-1),h=(0,t.Uk)("。"),y={id:"分页扩展"},v=(0,t.Wm)("a",{class:"header-anchor",href:"#分页扩展"},"#",-1),f=(0,t.Uk)(" 分页扩展 "),w=(0,t.Uk)("我们会自动帮你管理分页信息，如：当前页数、每页条数、总条数等。你只需要使用我们提供的 "),W=(0,t.Wm)("code",null,"changeCurrent()",-1),x=(0,t.Uk)(" 和 "),U=(0,t.Wm)("code",null,"changePageSize()",-1),b=(0,t.Uk)(" 即可轻松管理分页的数据。"),q=(0,t.Uk)("注意：我们会在 "),M=(0,t.Wm)("code",null,"params",-1),L=(0,t.Uk)(" 数组第一位注入分页所需的参数。"),z=(0,t.Uk)("更多可用配置请查看 "),_=(0,t.Uk)("分页扩展 API"),P=(0,t.uE)('<h3 id="用法"><a class="header-anchor" href="#用法">#</a> 用法</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="例子"><a class="header-anchor" href="#例子">#</a> 例子</h3>',3),j=(0,t.Uk)("你也可以配合 "),E=(0,t.Wm)("code",null,"ant-design-vue",-1),A=(0,t.Uk)(" 使用。这里我们提供了一个 demo，"),C={href:"https://2x.antdv.com/components/table-cn#components-table-demo-ajax",target:"_blank",rel:"noopener noreferrer"},R=(0,t.Uk)("点击查看"),D=(0,t.uE)('<details class="custom-container details"><summary>点击查看代码</summary><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> usePagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Loading<span class="token punctuation">,</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/pagination/style&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/loading/style&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> getData <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">&#39;array|5&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@name&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>array<span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> total<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> result<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        total<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n        result<span class="token operator">:</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> current<span class="token punctuation">,</span> total<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> pageSize<span class="token punctuation">,</span> changeCurrent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">usePagination</span><span class="token punctuation">(</span>testService<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span> 140px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token punctuation">{</span>loading<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Loading</span></span> <span class="token punctuation">/&gt;</span></span>\n          <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n              </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>value<span class="token operator">?.</span>result<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n              <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Pagination</span></span>\n          <span class="token attr-name">modelValue</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">total-items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>total<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">show-page-size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>pageSize<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">force-ellipses</span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">page<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">changeCurrent</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details>',1),S={id:"loadmore-扩展"},T=(0,t.Wm)("a",{class:"header-anchor",href:"#loadmore-扩展"},"#",-1),B=(0,t.Uk)(" LoadMore 扩展 "),I={class:"custom-container warning"},N=(0,t.Wm)("p",{class:"custom-container-title"},"注意",-1),$=(0,t.Uk)("LoadMore 模式下，仅支持 "),F=(0,t.Wm)("strong",null,"请求函数",-1),H=(0,t.Uk)(" 形式的 "),K=(0,t.Wm)("strong",null,"Service",-1),O=(0,t.Uk)("我们会自动帮你管理列表数据。"),V=(0,t.Wm)("code",null,"Service",-1),Y=(0,t.Uk)(" 返回的数据结构必须包含 "),G=(0,t.Wm)("code",null,"{list: LR[]}",-1),J=(0,t.Uk)(" ，如果不满足，可以通过 "),Q=(0,t.Wm)("code",null,"listKey",-1),X=(0,t.Uk)(" 指定别的键名 或者 "),Z=(0,t.Wm)("code",null,"formatResult()",-1),nn=(0,t.Uk)(" 转换一次。接着通过我们返回的 "),an=(0,t.Wm)("code",null,"dataList",-1),sn=(0,t.Uk)(" 变量，即可获取到请求的"),tn=(0,t.Wm)("strong",null,"数据列表集合",-1),pn=(0,t.Uk)("，然后使用 "),on=(0,t.Wm)("code",null,"loadMore()",-1),en=(0,t.Uk)(" 触发加载更多"),cn=(0,t.Uk)("此外，我们会在 "),ln=(0,t.Wm)("code",null,"Service",-1),un=(0,t.Uk)(" 函数的第一个参数传入 "),kn=(0,t.Wm)("code",null,"{data: R, dataList: LR}",-1),rn=(0,t.Uk)(" 你可以根据这些参数决定下一次 "),gn=(0,t.Wm)("code",null,"Service",-1),dn=(0,t.Uk)("的请求参数。"),mn=(0,t.Uk)("更多可用配置请查看 "),hn=(0,t.Uk)("LoadMore 扩展 API"),yn=(0,t.uE)('<h3 id="用法-1"><a class="header-anchor" href="#用法-1">#</a> 用法</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLoadMore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="例子-1"><a class="header-anchor" href="#例子-1">#</a> 例子</h3>',3),vn=(0,t.uE)('<details class="custom-container details"><summary>点击查看代码</summary><div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useLoadMore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Cell<span class="token punctuation">,</span> List<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vant&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/list/style&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/cell/style&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vant/lib/button/style&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">generateData</span><span class="token punctuation">(</span><span class="token parameter">current<span class="token operator">:</span> number<span class="token punctuation">,</span> total <span class="token operator">=</span> <span class="token number">10</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> list<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">&lt;=</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    list <span class="token operator">=</span> Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token string">&#39;list|10&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>list<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    current<span class="token punctuation">,</span>\n    total<span class="token punctuation">,</span>\n    list<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">type</span> <span class="token class-name">APIReturnType</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> generateData<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token keyword">type</span> <span class="token class-name">rawDataType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  data<span class="token operator">:</span> APIReturnType<span class="token punctuation">;</span>\n  dataList<span class="token operator">:</span> APIReturnType<span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token parameter">rawData<span class="token operator">:</span> rawDataType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token punctuation">(</span>rawData<span class="token operator">?.</span>data<span class="token operator">?.</span>current <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span>APIReturnType<span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">generateData</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> loadMore<span class="token punctuation">,</span> loadingMore<span class="token punctuation">,</span> dataList<span class="token punctuation">,</span> noMore<span class="token punctuation">,</span> reload <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useLoadMore</span><span class="token generic class-name"><span class="token operator">&lt;</span>\n      APIReturnType<span class="token punctuation">,</span>\n      <span class="token builtin">any</span><span class="token punctuation">,</span>\n      APIReturnType<span class="token punctuation">[</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span>\n    <span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>testService<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token function-variable function">isNoMore</span><span class="token operator">:</span> <span class="token parameter">d</span> <span class="token operator">=&gt;</span> d<span class="token operator">?.</span>current <span class="token operator">&gt;=</span> d<span class="token operator">?.</span>total<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>\n          <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mini<span class="token punctuation">&quot;</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          重置\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span> <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span>\n            <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loadingMore<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n            <span class="token attr-name">loading-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading...<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">finished</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>noMore<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n            <span class="token attr-name">finished-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no more<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">onLoad</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n              <span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">&gt;</span></span><span class="token plain-text">\n            </span><span class="token punctuation">{</span>dataList<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cell</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>idx<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details>',1),fn={render:function(n,a){const s=(0,t.up)("OutboundLink"),fn=(0,t.up)("Badge"),wn=(0,t.up)("RouterLink"),Wn=(0,t.up)("PaginationDemo"),xn=(0,t.up)("Demo"),Un=(0,t.up)("LoadMoreDemo");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("p",null,[o,e,c,l,u,(0,t.Wm)("a",k,[i,(0,t.Wm)(s)]),r,g,d,m,h]),(0,t.Wm)("h2",y,[v,f,(0,t.Wm)(fn,{text:"New in beta.8"})]),(0,t.Wm)("p",null,[w,(0,t.Wm)(wn,{to:"/zh/api/pagination.html#changecurrent"},{default:(0,t.w5)((()=>[W])),_:1}),x,(0,t.Wm)(wn,{to:"/zh/api/pagination.html#changepagesize"},{default:(0,t.w5)((()=>[U])),_:1}),b]),(0,t.Wm)("p",null,[(0,t.Wm)("strong",null,[q,(0,t.Wm)(wn,{to:"/zh/api/#params"},{default:(0,t.w5)((()=>[M])),_:1}),L])]),(0,t.Wm)("p",null,[z,(0,t.Wm)(wn,{to:"/zh/api/pagination.html"},{default:(0,t.w5)((()=>[_])),_:1})]),P,(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,[j,E,A,(0,t.Wm)("a",C,[R,(0,t.Wm)(s)])])]),(0,t.Wm)(xn,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Wn)])),_:1}),D,(0,t.Wm)("h2",S,[T,B,(0,t.Wm)(fn,{text:"New in beta.11"})]),(0,t.Wm)("div",I,[N,(0,t.Wm)("p",null,[$,(0,t.Wm)(wn,{to:"/zh/api/loadMore.html#%E8%AF%B7%E6%B1%82%E5%87%BD%E6%95%B0"},{default:(0,t.w5)((()=>[F])),_:1}),H,(0,t.Wm)(wn,{to:"/zh/api/loadMore.html#service"},{default:(0,t.w5)((()=>[K])),_:1})])]),(0,t.Wm)("p",null,[O,(0,t.Wm)(wn,{to:"/zh/api/loadMore.html#service"},{default:(0,t.w5)((()=>[V])),_:1}),Y,G,J,(0,t.Wm)(wn,{to:"/zh/api/loadMore.html#listkey"},{default:(0,t.w5)((()=>[Q])),_:1}),X,(0,t.Wm)(wn,{to:"/zh/api/index.html#formatresult"},{default:(0,t.w5)((()=>[Z])),_:1}),nn,(0,t.Wm)(wn,{to:"/zh/api/loadMore.html#datalist"},{default:(0,t.w5)((()=>[an])),_:1}),sn,tn,pn,(0,t.Wm)(wn,{to:"/zh/api/loadMore.html#loadmore"},{default:(0,t.w5)((()=>[on])),_:1}),en]),(0,t.Wm)("p",null,[cn,(0,t.Wm)(wn,{to:"/zh/api/loadMore.html#service"},{default:(0,t.w5)((()=>[ln])),_:1}),un,kn,rn,(0,t.Wm)(wn,{to:"/zh/api/index.html#service"},{default:(0,t.w5)((()=>[gn])),_:1}),dn]),(0,t.Wm)("p",null,[mn,(0,t.Wm)(wn,{to:"/zh/api/loadMore.html"},{default:(0,t.w5)((()=>[hn])),_:1})]),yn,(0,t.Wm)(xn,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Un)])),_:1}),vn],64)}}},3974:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>t});const t={key:"v-540402ea",path:"/zh/guide/documentation/advancedUsage.html",title:"高级用法",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"分页扩展",slug:"分页扩展",children:[{level:3,title:"用法",slug:"用法",children:[]},{level:3,title:"例子",slug:"例子",children:[]}]},{level:2,title:"LoadMore 扩展",slug:"loadmore-扩展",children:[{level:3,title:"用法",slug:"用法-1",children:[]},{level:3,title:"例子",slug:"例子-1",children:[]}]}],filePathRelative:"zh/guide/documentation/advancedUsage.md",git:{updatedTime:1616224856e3,contributors:[]}}}}]);