(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[25],{2165:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>F});var t=a(8133);const e=(0,t.uE)('<h1 id="result"><a class="header-anchor" href="#result">#</a> Result</h1><h2 id="loading"><a class="header-anchor" href="#loading">#</a> loading</h2><ul><li><p><strong>类型：</strong> <code>Ref&lt;boolean&gt;</code></p></li><li><p><strong>默认值：</strong> <code>false</code></p><p><strong>Service</strong> 请求的执行状态</p></li></ul><h2 id="data"><a class="header-anchor" href="#data">#</a> data</h2>',4),o=(0,t.Wm)("li",null,[(0,t.Wm)("p",null,[(0,t.Wm)("strong",null,"类型:"),(0,t.Uk)(),(0,t.Wm)("code",null,"Ref<R | undefined>")])],-1),p=(0,t.Wm)("p",null,[(0,t.Wm)("strong",null,"默认值："),(0,t.Uk)(),(0,t.Wm)("code",null,"undefined")],-1),l=(0,t.Uk)("接口返回的数据，如果有传入 "),c=(0,t.Uk)("formatResult"),r=(0,t.Uk)("，则为格式化后的 "),u=(0,t.Wm)("code",null,"data",-1),i=(0,t.uE)('<h2 id="error"><a class="header-anchor" href="#error">#</a> error</h2><ul><li><p><strong>类型:</strong> <code>Ref&lt;Error | undefined&gt;</code></p></li><li><p><strong>默认值：</strong> <code>undefined</code></p><p>如果在内部抛出了一个错误，则会被 <code>error</code> 接收并返回</p></li></ul><h2 id="params"><a class="header-anchor" href="#params">#</a> params</h2><ul><li><p><strong>类型:</strong> <code>Ref&lt;P[]&gt;</code></p></li><li><p><strong>默认值：</strong> <code>[]</code></p><p><strong>Service</strong> 的请求参数</p></li><li><p><strong>示例</strong></p></li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;api/user?&#39;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> params<span class="token punctuation">,</span> run <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>getUser<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  defaultParams<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 默认请求时，如果存在 defaultParams， 则 params.value 将会等于 defaultParams，否则为空数组</span>\n\n<span class="token comment">// 当 run 传入参数时，此时的参数将会同步到 params 里面</span>\n<span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&#39;Benny&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// params.value 等于 [&#39;Benny&#39;]</span>\n</code></pre></div><h2 id="run"><a class="header-anchor" href="#run">#</a> run</h2>',6),k=(0,t.Wm)("p",null,[(0,t.Wm)("strong",null,"类型:"),(0,t.Uk)(),(0,t.Wm)("code",null,"(...arg: P[]) => Promise<R>")],-1),d=(0,t.Wm)("p",null,[(0,t.Uk)("手动触发 "),(0,t.Wm)("strong",null,"Service"),(0,t.Uk)(" 的请求")],-1),m={class:"custom-container tip"},h=(0,t.Wm)("p",{class:"custom-container-title"},"注意",-1),g=(0,t.Uk)("当开启了 "),f=(0,t.Uk)("debounceInterval"),W=(0,t.Uk)(" 或者 "),v=(0,t.Uk)("throttleInterval"),U=(0,t.Uk)(" 模式后 "),R=(0,t.Wm)("code",null,"run",-1),w=(0,t.Uk)(" 的返回结果有可能是 "),y=(0,t.Wm)("code",null,"Promise<null>",-1),q=(0,t.Wm)("h2",{id:"cancel"},[(0,t.Wm)("a",{class:"header-anchor",href:"#cancel"},"#"),(0,t.Uk)(" cancel")],-1),b=(0,t.Wm)("p",null,[(0,t.Wm)("strong",null,"类型:"),(0,t.Uk)(),(0,t.Wm)("code",null,"() => void")],-1),P=(0,t.Wm)("li",null,"手动取消本次请求",-1),_=(0,t.Uk)("停止"),z=(0,t.Uk)("轮询"),E=(0,t.Uk)("功能"),D=(0,t.Wm)("div",{class:"custom-container tip"},[(0,t.Wm)("p",{class:"custom-container-title"},"注意"),(0,t.Wm)("p",null,[(0,t.Uk)("这里说的取消"),(0,t.Wm)("strong",null,"并不是真正的停止请求"),(0,t.Uk)("，只是取消了对 "),(0,t.Wm)("a",{href:"#data"},"data"),(0,t.Uk)(" 的赋值以及 "),(0,t.Wm)("a",{href:"#loading"},"loading"),(0,t.Uk)(" 重置为 "),(0,t.Wm)("code",null,"false"),(0,t.Uk)(" 当前的接口请求依旧会继续进行")])],-1),S=(0,t.uE)('<h2 id="refresh"><a class="header-anchor" href="#refresh">#</a> refresh</h2><ul><li><p><strong>类型:</strong> <code>() =&gt; Promise&lt;R&gt;</code></p><p>使用当前的 <a href="#run">params</a> 重新调用 <a href="#run">run</a></p></li></ul><h2 id="mutate"><a class="header-anchor" href="#mutate">#</a> mutate</h2>',3),x=(0,t.Wm)("li",null,[(0,t.Wm)("p",null,[(0,t.Wm)("strong",null,"类型:"),(0,t.Uk)(),(0,t.Wm)("code",null,"(arg: (oldData: R) => R) => void | (newData: R) => void")]),(0,t.Wm)("p",null,[(0,t.Uk)("直接修改 "),(0,t.Wm)("a",{href:"#data"},"data"),(0,t.Uk)(" 的结果")])],-1),Q=(0,t.Wm)("strong",null,"参考",-1),j=(0,t.Uk)("突变"),B=(0,t.Wm)("h2",{id:"queries"},[(0,t.Wm)("a",{class:"header-anchor",href:"#queries"},"#"),(0,t.Uk)(" queries")],-1),C=(0,t.Wm)("p",null,[(0,t.Wm)("strong",null,"类型:"),(0,t.Uk)(),(0,t.Wm)("code",null,"Queries<R, P>")],-1),I=(0,t.Uk)("默认情况下，新请求的数据将会覆盖旧请求的数据。当启用 "),L=(0,t.Uk)("queryKey"),H=(0,t.Uk)(" 后， "),J=(0,t.Wm)("code",null,"queries",-1),K=(0,t.Uk)(" 能够同时存储多次请求的结果，实现并行的效果"),T=(0,t.uE)('<p><code>Queries</code> 的类型如下</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Queries<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token punctuation">,</span> <span class="token constant">P</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  loading<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  data<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">R</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  error<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>Error <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  params<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">run</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">cancel</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">refresh</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">mutate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token function-variable function">arg</span><span class="token operator">:</span> <span class="token punctuation">(</span>oldData<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">R</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token punctuation">(</span>newData<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',2),Y=(0,t.Wm)("strong",null,"参考",-1),A=(0,t.Uk)("并行请求"),F={render:function(n,s){const a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[e,(0,t.Wm)("ul",null,[o,(0,t.Wm)("li",null,[p,(0,t.Wm)("p",null,[l,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#formatresult"},{default:(0,t.w5)((()=>[c])),_:1}),r,u])])]),i,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[k,d,(0,t.Wm)("div",m,[h,(0,t.Wm)("p",null,[g,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#debounceinterval"},{default:(0,t.w5)((()=>[f])),_:1}),W,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#throttleinterval"},{default:(0,t.w5)((()=>[v])),_:1}),U,R,w,y])])])]),q,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[b,(0,t.Wm)("ul",null,[P,(0,t.Wm)("li",null,[_,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#pollinginterval"},{default:(0,t.w5)((()=>[z])),_:1}),E])]),D])]),S,(0,t.Wm)("ul",null,[x,(0,t.Wm)("li",null,[(0,t.Wm)("p",null,[Q,(0,t.Wm)(a,{to:"/vue-request-docs/zh/guide/documents/mutate.html"},{default:(0,t.w5)((()=>[j])),_:1})])])]),B,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[C,(0,t.Wm)("p",null,[I,(0,t.Wm)(a,{to:"/vue-request-docs/zh/api/options.html#querykey"},{default:(0,t.w5)((()=>[L])),_:1}),H,J,K]),T]),(0,t.Wm)("li",null,[(0,t.Wm)("p",null,[Y,(0,t.Wm)(a,{to:"/vue-request-docs/zh/guide/documents/queries.html"},{default:(0,t.w5)((()=>[A])),_:1})])])])],64)}}},2281:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-71e6b83f",path:"/zh/api/result.html",title:"Result",frontmatter:{},excerpt:"",headers:[{level:2,title:"loading",slug:"loading",children:[]},{level:2,title:"data",slug:"data",children:[]},{level:2,title:"error",slug:"error",children:[]},{level:2,title:"params",slug:"params",children:[]},{level:2,title:"run",slug:"run",children:[]},{level:2,title:"cancel",slug:"cancel",children:[]},{level:2,title:"refresh",slug:"refresh",children:[]},{level:2,title:"mutate",slug:"mutate",children:[]},{level:2,title:"queries",slug:"queries",children:[]}],filePathRelative:"zh/api/result.md",git:{updatedTime:1613724187e3,contributors:[]}}}}]);