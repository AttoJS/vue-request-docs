(self.webpackChunkvue_request_doc=self.webpackChunkvue_request_doc||[]).push([[2143],{5566:(e,t,n)=>{"use strict";n.d(t,{g:()=>ge});var a=n(2020),o=n(6646),i=n(5591),d=n(1833),u=n(6252);const l=(0,u.HX)("data-v-1e70c7f9");(0,u.dD)("data-v-1e70c7f9");const m={class:"demo"};(0,u.Cn)();const h=l(((e,t,n,a,o,i)=>{const d=(0,u.up)("ClientOnly");return(0,u.wg)(),(0,u.j4)("div",m,[(0,u.Wm)(d,null,{default:l((()=>[(0,u.WI)(e.$slots,"default")])),_:3})])})),r={};r.render=h,r.__scopeId="data-v-1e70c7f9";const c=r;var p=n(2262);const g=(0,u.aZ)({setup(){const e=(0,p.iH)(!1);(0,u.bv)((()=>{(0,u.Y3)((()=>{const t=document.getElementsByTagName("meta")["attojs-site-env"];e.value=t&&"CN"===t.content}))}));const t=(0,u.Fl)((()=>e.value?[(0,u.h)("a",{href:"https://beian.miit.gov.cn/"},"粤ICP备18051424号")," | "]:[]));return()=>(0,u.h)("div",{class:"footer"},[...t.value,"MIT Licensed | Copyright ©2020-present AttoJS"])}});g.__scopeId="data-v-b0c460a8";const s=g;var v=n(9963),b=n(8438);function z(e){return new Promise((t=>{setTimeout((()=>{t(e)}),1e3)}))}const f=(0,u.aZ)({name:"App",setup(){const e=(0,p.iH)("John"),{run:t,data:n,loading:a}=(0,b.QT)(z,{manual:!0}),o=()=>{t(e.value)};return()=>(0,u.Wm)("div",null,[a.value?"loading...":n.value?`hello, ${n.value}`:"",(0,u.Wm)("br",null,null),(0,u.wy)((0,u.Wm)("input",{"onUpdate:modelValue":t=>e.value=t,type:"text",placeholder:"Enter your account"},null),[[v.nr,e.value]]),(0,u.Wm)("br",null,null),(0,u.Wm)("button",{onClick:o},[(0,u.Uk)("Login")])])}});let y=0;function W(){return new Promise((e=>{setTimeout((()=>{e(y++)}),1e3)}))}const C=(0,u.aZ)({name:"App",setup(){const{data:e,loading:t}=(0,b.QT)(W,{pollingInterval:1e3});return()=>(0,u.Wm)("h1",null,[t.value?"loading...":e.value])}});let R=0;function k(){return new Promise((e=>{setTimeout((()=>{e(R++)}),1e3)}))}const T=(0,u.aZ)({name:"App",setup(){const{data:e,loading:t}=(0,b.QT)(k,{pollingInterval:1e3,pollingWhenHidden:!0});return()=>(0,u.Wm)("h1",null,[t.value?"loading...":e.value])}});let w=0;function D(){return new Promise((e=>{setTimeout((()=>{e(w++)}),1e3)}))}const x=(0,u.aZ)({name:"App",setup(){const{data:e,loading:t}=(0,b.QT)(D,{pollingInterval:1e3,pollingWhenOffline:!0});return()=>(0,u.Wm)("h1",null,[t.value?"loading...":e.value])}});function Y(e){return new Promise((t=>{setTimeout((()=>{var n;const a=null==(n=q.find((t=>t.id===e)))?void 0:n.name;t(`${a} status update successfully`)}),1e3)}))}const q=[{id:1,name:"Benny"},{id:2,name:"John"},{id:3,name:"Sam"}],U=(0,u.aZ)({name:"App",setup(){const{run:e,loading:t}=(0,b.QT)(Y,{manual:!0,onSuccess:e=>{alert(e)}});return()=>(0,u.Wm)("ul",null,[q.map((n=>(0,u.Wm)("li",null,[(0,u.Wm)("span",null,[n.name,(0,u.Uk)(" ")]),(0,u.Wm)("button",{onClick:()=>e(n.id)},[t.value?"loading...":"disable"])])))])}});function P(e){return new Promise((t=>{setTimeout((()=>{var n;const a=null==(n=Z.find((t=>t.id===e)))?void 0:n.name;t(`${a} status update successfully`)}),1e3)}))}const Z=[{id:1,name:"Benny"},{id:2,name:"John"},{id:3,name:"Sam"}],A=(0,u.aZ)({name:"App",setup(){const{run:e,queries:t}=(0,b.QT)(P,{manual:!0,queryKey:e=>String(e),onSuccess:e=>{alert(e)}});return()=>(0,u.Wm)("ul",null,[Z.map((n=>{var a;return(0,u.Wm)("li",null,[(0,u.Wm)("span",null,[n.name,(0,u.Uk)(" ")]),(0,u.Wm)("button",{onClick:()=>e(n.id)},[(null==(a=t[n.id])?void 0:a.loading)?"loading...":"disable"])])}))])}});var I=n(5623),L=n.n(I);function M(e){return new Promise((e=>{setTimeout((()=>{e(L().mock("@name"))}),1e3)}))}const O=(0,u.aZ)({name:"App",setup(){const e=(0,p.iH)("John"),{data:t,mutate:n,loading:a}=(0,b.QT)(M);return()=>(0,u.Wm)("div",null,[(0,u.Wm)("div",null,[(0,u.Uk)("name: "),a.value?"loading...":t.value]),(0,u.Wm)("br",null,null),(0,u.Wm)("div",null,[(0,u.wy)((0,u.Wm)("input",{type:"text","onUpdate:modelValue":t=>e.value=t},null),[[v.nr,e.value]]),(0,u.Wm)("button",{onClick:()=>n(e.value)},[(0,u.Uk)(" Edit ")])])])}});function F(){return new Promise((e=>{setTimeout((()=>{e("token")}),1e3)}))}function Q(){return new Promise((e=>{setTimeout((()=>{e(L().mock("@name"))}),1e3)}))}const H=(0,u.aZ)({name:"App",setup(){const{data:e,loading:t,run:n}=(0,b.QT)(F,{manual:!0}),{data:a,loading:o}=(0,b.QT)(Q,{ready:(0,u.Fl)((()=>!!e.value))});return()=>(0,u.Wm)("div",null,[(0,u.Wm)("div",null,[a.value?`User Name: ${a.value}`:o.value?"loading...":"Please login first"]),(0,u.Wm)("br",null,null),(0,u.Wm)("button",{disabled:!!e.value,onClick:()=>n()},[t.value?"Login...":"Login"])])}});function K(){return new Promise((e=>{setTimeout((()=>{e(L().mock({"array|3-5":["@name"]}))}),1e3)}))}const N=(0,u.aZ)({name:"App",setup(){const{data:e,loading:t,run:n}=(0,b.QT)(K,{throttleInterval:300,manual:!0});return()=>{var a,o;return(0,u.Wm)("div",null,[(0,u.Wm)("input",{placeholder:"Enter the name",type:"text",onInput:()=>n()},null),(0,u.Wm)("br",null,null),(0,u.Wm)("ul",null,[t.value?"loading...":null==(o=null==(a=e.value)?void 0:a.array)?void 0:o.map((e=>(0,u.Wm)("li",{key:e},[e])))])])}}});function S(){return new Promise((e=>{setTimeout((()=>{e(L().mock({"array|3-5":["@name"]}))}),1e3)}))}const E=(0,u.aZ)({name:"App",setup(){const{data:e,loading:t,run:n}=(0,b.QT)(S,{debounceInterval:300,manual:!0});return()=>{var a,o;return(0,u.Wm)("div",null,[(0,u.Wm)("input",{placeholder:"Enter the name",type:"text",onInput:()=>n()},null),(0,u.Wm)("br",null,null),(0,u.Wm)("ul",null,[t.value?"loading...":null==(o=null==(a=e.value)?void 0:a.array)?void 0:o.map((e=>(0,u.Wm)("li",{key:e},[e])))])])}}});function G(){return new Promise((e=>{setTimeout((()=>{e(L().mock("@name"))}),1e3)}))}const _=(0,u.aZ)({name:"App",setup(){const{data:e,loading:t}=(0,b.QT)(G,{refreshOnWindowFocus:!0});return()=>(0,u.Wm)("div",null,[(0,u.Uk)("random name: "),t.value?"loading...":e.value])}}),j=L().mock({"array|5":["@cname"]}),$=L().mock({"array|5":["@name"]}),V=(0,u.aZ)({name:"App",setup(){const e=(0,p.iH)(0),{data:t,loading:n}=(0,b.QT)((()=>{return t=e.value,new Promise((e=>{setTimeout((()=>{e(t?$.array:j.array)}),1e3)}));var t}),{refreshDeps:[e]});return()=>(0,u.Wm)("div",null,[(0,u.Wm)("div",null,[(0,u.Wm)("input",{type:"radio",id:"contactChoice1",checked:0===e.value,onChange:()=>e.value=0},null),(0,u.Wm)("label",{for:"contactChoice1"},[(0,u.Uk)("Chinese Names")]),(0,u.Uk)("   "),(0,u.Wm)("input",{type:"radio",id:"contactChoice2",checked:1===e.value,onChange:()=>e.value=1},null),(0,u.Wm)("label",{for:"contactChoice2"},[(0,u.Uk)("English Names")])]),(0,u.Wm)("ul",null,[n.value?"loading...":t.value.map((e=>(0,u.Wm)("li",null,[e])))])])}});function B(){return new Promise((e=>{setTimeout((()=>{e((new Date).getTime())}),100)}))}const J=(0,u.aZ)({name:"App",setup(){const{data:e,loading:t,run:n}=(0,b.QT)(B,{loadingDelay:500}),{data:a,loading:o,run:i}=(0,b.QT)(B);return()=>(0,u.Wm)("div",null,[(0,u.Wm)("button",{onClick:()=>{i(),n()}},[(0,u.Uk)("run")]),(0,u.Wm)("br",null,null),(0,u.Wm)("br",null,null),(0,u.Wm)("div",null,[(0,u.Uk)("Current Time (default): "),o.value?"loading...":a.value]),(0,u.Wm)("div",null,[(0,u.Uk)("Current Time (delay): "),t.value?"loading...":e.value])])}});function X(){return new Promise((e=>{setTimeout((()=>{e(L().mock("@paragraph"))}),1e3)}))}const ee=(0,u.aZ)({name:"CacheComponent",setup(){const{data:e,loading:t}=(0,b.QT)(X,{cacheKey:"paragraph"});return()=>(0,u.Wm)("div",null,[(0,u.Wm)("div",null,[(0,u.Uk)(" "),!e.value&&t.value?"loading...":"",(0,u.Uk)(" ")]),(0,u.Wm)("div",null,[e.value])])}}),te=(0,u.aZ)({name:"App",setup(){const e=(0,p.iH)(!0);return()=>(0,u.Wm)("div",null,[(0,u.Wm)("button",{onClick:()=>e.value=!e.value},[e.value?"hidden":"show"]),(0,u.Wm)("br",null,null),(0,u.Wm)("br",null,null),e.value&&(0,u.Wm)(ee,null,null)])}});let ne=!0;function ae(){return new Promise(((e,t)=>{ne?setTimeout((()=>{t("Request failed")}),2e3):setTimeout((()=>{e(L().mock("@name"))}),1e3)}))}const oe=(0,u.aZ)({name:"App",setup(){const e=(0,p.iH)(0),t=(0,p.iH)(ne),{data:n,loading:a,run:o}=(0,b.QT)(ae,{errorRetryCount:5,onError:()=>e.value++,onSuccess:()=>e.value=0});return(0,u.m0)((()=>{ne=t.value})),()=>(0,u.Wm)("div",null,[(0,u.Wm)("button",{onClick:()=>t.value=!t.value},[(0,u.Uk)("switch to "),(0,u.Wm)("b",null,[t.value?"success":"error"]),(0,u.Uk)(" request")]),(0,u.Uk)("   "),(0,u.Wm)("button",{onClick:()=>{e.value=0,o()}},[(0,u.Uk)("run")]),(0,u.Wm)("br",null,null),(0,u.Wm)("br",null,null),(0,u.Wm)("div",{style:"height: 32px"},[e.value>0&&`error times: ${e.value}`]),(0,u.Wm)("br",null,null),(0,u.Wm)("div",{style:"height: 32px"},[a.value?e.value?"retry loading...":"loading...":n.value])])}});var ie=n(3432),de=n(3828);function ue(){return new Promise((e=>{setTimeout((()=>{e({total:100,result:L().mock({"array|5":["@name"]}).array})}),1e3)}))}n(2743),n(8156);const le=(0,u.aZ)({name:"App",setup(){const{data:e,current:t,total:n,loading:a,pageSize:o,changeCurrent:i}=(0,b.h0)(ue);return()=>{var d;return(0,u.Wm)("div",null,[(0,u.Wm)("div",{style:"height: 140px"},[a.value?(0,u.Wm)(ie.Z,null,null):(0,u.Wm)("ul",null,[null==(d=e.value)?void 0:d.result.map((e=>(0,u.Wm)("li",{key:e},[e])))])]),(0,u.Wm)(de.Z,{"prev-text":"Previous","next-text":"Next",modelValue:t.value,"total-items":n.value,"show-page-size":o.value,"force-ellipses":!0,onChange:e=>i(e)},null)])}}});var me=n(5791),he=n(4134),re=n(9233);function ce(e){var t;const n=((null==(t=null==e?void 0:e.data)?void 0:t.current)||0)+1;return new Promise((e=>{setTimeout((()=>{e(function(e,t=10){let n=[];return n=e<=t?L().mock({"list|10":["@name"]}).list:[],{current:e,total:t,list:n}}(n))}),1e3)}))}n(6849),n(5626),n(5286);const pe=(0,u.aZ)({name:"App",setup(){const{loadMore:e,loadingMore:t,dataList:n,noMore:a,reload:o}=(0,b.BR)(ce,{isNoMore:e=>(null==e?void 0:e.current)>=(null==e?void 0:e.total)});return()=>(0,u.Wm)("div",null,[(0,u.Wm)(me.Z,{style:"margin-bottom: 20px",type:"warning",size:"mini",onClick:()=>{o()}},{default:()=>[(0,u.Uk)("Reload")]}),(0,u.Wm)("div",{style:"height: 300px; overflow-y: scroll"},[(0,u.Wm)(he.Z,{loading:t.value,"loading-text":"loading...",finished:a.value,"finished-text":"no more",onLoad:()=>{e()}},{default:()=>{var e;return[null==(e=n.value)?void 0:e.map(((e,t)=>(0,u.Wm)(re.Z,{key:e,value:`${t}  ${e}`},null)))]}})])])}}),ge=[a.Z,o.Z,i.Z,d.Z,({app:e})=>{e.component("Demo",c),e.component("Footer",s),e.component("ManualDemo",f),e.component("pollingDemo",C),e.component("pollingWhenHiddenDemo",T),e.component("pollingWhenOfflineDemo",x),e.component("queriesBadDemo",U),e.component("queriesDemo",A),e.component("MutateDemo",O),e.component("ReadyDemo",H),e.component("ThrottleDemo",N),e.component("DebounceDemo",E),e.component("RefreshOnWindowFocusDemo",_),e.component("RefreshDepsDemo",V),e.component("LoadingDelayDemo",J),e.component("CacheDemo",te),e.component("ErrorRetryDemo",oe),e.component("PaginationDemo",le),e.component("LoadMoreDemo",pe)}]},8968:(e,t,n)=>{"use strict";n.d(t,{p:()=>i});var a=n(8440),o=n(4100);const i=[a.Z,o.Z]},6539:(e,t,n)=>{"use strict";n.d(t,{l:()=>u});var a=n(7010),o=n(9953),i=n(1010),d=n(4717);const u=[a.Z,o.Z,i.Z,d.Z]},4702:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(6252);const o={404:(0,a.RC)((()=>n.e(3138).then(n.bind(n,3138)))),Layout:(0,a.RC)((()=>n.e(1814).then(n.bind(n,1814))))}},7810:(e,t,n)=>{"use strict";n.d(t,{S:()=>o});var a=n(6252);const o={"/":(0,a.RC)((()=>n.e(2509).then(n.bind(n,9997)))),"/api/global-options.html":(0,a.RC)((()=>n.e(6).then(n.bind(n,5209)))),"/api/":(0,a.RC)((()=>n.e(5671).then(n.bind(n,2219)))),"/api/loadMore.html":(0,a.RC)((()=>n.e(1114).then(n.bind(n,8597)))),"/api/pagination.html":(0,a.RC)((()=>n.e(9592).then(n.bind(n,9606)))),"/guide/getting-started.html":(0,a.RC)((()=>n.e(7170).then(n.bind(n,2545)))),"/guide/introduction.html":(0,a.RC)((()=>n.e(4617).then(n.bind(n,5269)))),"/zh/":(0,a.RC)((()=>n.e(3737).then(n.bind(n,2939)))),"/guide/documentation/advancedUsage.html":(0,a.RC)((()=>n.e(2471).then(n.bind(n,6004)))),"/guide/documentation/cacheKey.html":(0,a.RC)((()=>n.e(9782).then(n.bind(n,4564)))),"/guide/documentation/debounce.html":(0,a.RC)((()=>n.e(4694).then(n.bind(n,665)))),"/guide/documentation/default-request.html":(0,a.RC)((()=>n.e(5183).then(n.bind(n,5514)))),"/guide/documentation/errorRetry.html":(0,a.RC)((()=>n.e(186).then(n.bind(n,8540)))),"/guide/documentation/global-options.html":(0,a.RC)((()=>n.e(5546).then(n.bind(n,8342)))),"/guide/documentation/loadingDelay.html":(0,a.RC)((()=>n.e(5966).then(n.bind(n,1538)))),"/guide/documentation/manual.html":(0,a.RC)((()=>n.e(6555).then(n.bind(n,4015)))),"/guide/documentation/mutate.html":(0,a.RC)((()=>n.e(8251).then(n.bind(n,448)))),"/guide/documentation/polling.html":(0,a.RC)((()=>n.e(5995).then(n.bind(n,6246)))),"/guide/documentation/queries.html":(0,a.RC)((()=>n.e(4683).then(n.bind(n,3155)))),"/guide/documentation/ready.html":(0,a.RC)((()=>n.e(3388).then(n.bind(n,8093)))),"/guide/documentation/refreshDeps.html":(0,a.RC)((()=>n.e(4095).then(n.bind(n,6804)))),"/guide/documentation/refreshOnWindowFocus.html":(0,a.RC)((()=>n.e(6276).then(n.bind(n,6077)))),"/guide/documentation/throttle.html":(0,a.RC)((()=>n.e(6841).then(n.bind(n,622)))),"/zh/api/global-options.html":(0,a.RC)((()=>n.e(1497).then(n.bind(n,7466)))),"/zh/api/":(0,a.RC)((()=>n.e(6923).then(n.bind(n,6193)))),"/zh/api/loadMore.html":(0,a.RC)((()=>n.e(319).then(n.bind(n,3039)))),"/zh/api/pagination.html":(0,a.RC)((()=>n.e(810).then(n.bind(n,5811)))),"/zh/guide/getting-started.html":(0,a.RC)((()=>n.e(5654).then(n.bind(n,957)))),"/zh/guide/introduction.html":(0,a.RC)((()=>n.e(8813).then(n.bind(n,7332)))),"/zh/guide/documentation/advancedUsage.html":(0,a.RC)((()=>n.e(2190).then(n.bind(n,3352)))),"/zh/guide/documentation/cacheKey.html":(0,a.RC)((()=>n.e(3407).then(n.bind(n,2636)))),"/zh/guide/documentation/debounce.html":(0,a.RC)((()=>n.e(9386).then(n.bind(n,9576)))),"/zh/guide/documentation/default-request.html":(0,a.RC)((()=>n.e(1750).then(n.bind(n,5494)))),"/zh/guide/documentation/errorRetry.html":(0,a.RC)((()=>n.e(9901).then(n.bind(n,7493)))),"/zh/guide/documentation/global-options.html":(0,a.RC)((()=>n.e(131).then(n.bind(n,6270)))),"/zh/guide/documentation/loadingDelay.html":(0,a.RC)((()=>n.e(2321).then(n.bind(n,844)))),"/zh/guide/documentation/manual.html":(0,a.RC)((()=>n.e(9956).then(n.bind(n,570)))),"/zh/guide/documentation/mutate.html":(0,a.RC)((()=>n.e(6487).then(n.bind(n,5117)))),"/zh/guide/documentation/polling.html":(0,a.RC)((()=>n.e(1461).then(n.bind(n,6069)))),"/zh/guide/documentation/queries.html":(0,a.RC)((()=>n.e(4854).then(n.bind(n,1353)))),"/zh/guide/documentation/ready.html":(0,a.RC)((()=>n.e(4763).then(n.bind(n,1139)))),"/zh/guide/documentation/refreshDeps.html":(0,a.RC)((()=>n.e(3367).then(n.bind(n,2669)))),"/zh/guide/documentation/refreshOnWindowFocus.html":(0,a.RC)((()=>n.e(2918).then(n.bind(n,6094)))),"/zh/guide/documentation/throttle.html":(0,a.RC)((()=>n.e(2118).then(n.bind(n,4394)))),"/404.html":(0,a.RC)((()=>n.e(88).then(n.bind(n,924))))}},7962:(e,t,n)=>{"use strict";n.d(t,{T:()=>a});const a={"/":()=>n.e(2509).then(n.bind(n,1309)).then((({data:e})=>e)),"/api/global-options.html":()=>n.e(6).then(n.bind(n,301)).then((({data:e})=>e)),"/api/":()=>n.e(5671).then(n.bind(n,2345)).then((({data:e})=>e)),"/api/loadMore.html":()=>n.e(1114).then(n.bind(n,1978)).then((({data:e})=>e)),"/api/pagination.html":()=>n.e(9592).then(n.bind(n,34)).then((({data:e})=>e)),"/guide/getting-started.html":()=>n.e(7170).then(n.bind(n,746)).then((({data:e})=>e)),"/guide/introduction.html":()=>n.e(4617).then(n.bind(n,6870)).then((({data:e})=>e)),"/zh/":()=>n.e(3737).then(n.bind(n,8450)).then((({data:e})=>e)),"/guide/documentation/advancedUsage.html":()=>n.e(2471).then(n.bind(n,3918)).then((({data:e})=>e)),"/guide/documentation/cacheKey.html":()=>n.e(9782).then(n.bind(n,6413)).then((({data:e})=>e)),"/guide/documentation/debounce.html":()=>n.e(4694).then(n.bind(n,461)).then((({data:e})=>e)),"/guide/documentation/default-request.html":()=>n.e(5183).then(n.bind(n,4337)).then((({data:e})=>e)),"/guide/documentation/errorRetry.html":()=>n.e(186).then(n.bind(n,4975)).then((({data:e})=>e)),"/guide/documentation/global-options.html":()=>n.e(5546).then(n.bind(n,4495)).then((({data:e})=>e)),"/guide/documentation/loadingDelay.html":()=>n.e(5966).then(n.bind(n,1982)).then((({data:e})=>e)),"/guide/documentation/manual.html":()=>n.e(6555).then(n.bind(n,8030)).then((({data:e})=>e)),"/guide/documentation/mutate.html":()=>n.e(8251).then(n.bind(n,7122)).then((({data:e})=>e)),"/guide/documentation/polling.html":()=>n.e(5995).then(n.bind(n,839)).then((({data:e})=>e)),"/guide/documentation/queries.html":()=>n.e(4683).then(n.bind(n,3410)).then((({data:e})=>e)),"/guide/documentation/ready.html":()=>n.e(3388).then(n.bind(n,1654)).then((({data:e})=>e)),"/guide/documentation/refreshDeps.html":()=>n.e(4095).then(n.bind(n,7782)).then((({data:e})=>e)),"/guide/documentation/refreshOnWindowFocus.html":()=>n.e(6276).then(n.bind(n,8595)).then((({data:e})=>e)),"/guide/documentation/throttle.html":()=>n.e(6841).then(n.bind(n,9815)).then((({data:e})=>e)),"/zh/api/global-options.html":()=>n.e(1497).then(n.bind(n,2202)).then((({data:e})=>e)),"/zh/api/":()=>n.e(6923).then(n.bind(n,6266)).then((({data:e})=>e)),"/zh/api/loadMore.html":()=>n.e(319).then(n.bind(n,1475)).then((({data:e})=>e)),"/zh/api/pagination.html":()=>n.e(810).then(n.bind(n,5371)).then((({data:e})=>e)),"/zh/guide/getting-started.html":()=>n.e(5654).then(n.bind(n,2390)).then((({data:e})=>e)),"/zh/guide/introduction.html":()=>n.e(8813).then(n.bind(n,2155)).then((({data:e})=>e)),"/zh/guide/documentation/advancedUsage.html":()=>n.e(2190).then(n.bind(n,3974)).then((({data:e})=>e)),"/zh/guide/documentation/cacheKey.html":()=>n.e(3407).then(n.bind(n,5587)).then((({data:e})=>e)),"/zh/guide/documentation/debounce.html":()=>n.e(9386).then(n.bind(n,5707)).then((({data:e})=>e)),"/zh/guide/documentation/default-request.html":()=>n.e(1750).then(n.bind(n,990)).then((({data:e})=>e)),"/zh/guide/documentation/errorRetry.html":()=>n.e(9901).then(n.bind(n,9746)).then((({data:e})=>e)),"/zh/guide/documentation/global-options.html":()=>n.e(131).then(n.bind(n,6925)).then((({data:e})=>e)),"/zh/guide/documentation/loadingDelay.html":()=>n.e(2321).then(n.bind(n,5867)).then((({data:e})=>e)),"/zh/guide/documentation/manual.html":()=>n.e(9956).then(n.bind(n,7472)).then((({data:e})=>e)),"/zh/guide/documentation/mutate.html":()=>n.e(6487).then(n.bind(n,1180)).then((({data:e})=>e)),"/zh/guide/documentation/polling.html":()=>n.e(1461).then(n.bind(n,4643)).then((({data:e})=>e)),"/zh/guide/documentation/queries.html":()=>n.e(4854).then(n.bind(n,2347)).then((({data:e})=>e)),"/zh/guide/documentation/ready.html":()=>n.e(4763).then(n.bind(n,201)).then((({data:e})=>e)),"/zh/guide/documentation/refreshDeps.html":()=>n.e(3367).then(n.bind(n,9814)).then((({data:e})=>e)),"/zh/guide/documentation/refreshOnWindowFocus.html":()=>n.e(2918).then(n.bind(n,287)).then((({data:e})=>e)),"/zh/guide/documentation/throttle.html":()=>n.e(2118).then(n.bind(n,9234)).then((({data:e})=>e)),"/404.html":()=>n.e(88).then(n.bind(n,6979)).then((({data:e})=>e))}},1274:(e,t,n)=>{"use strict";n.d(t,{g:()=>o});var a=n(4802);const o=[{name:"v-8daa1a0e",path:"/",component:a.Y,meta:{title:""}},{path:"/index.html",redirect:"/"},{path:"/index.md",redirect:"/"},{name:"v-bb9fcf52",path:"/api/global-options.html",component:a.Y,meta:{title:"Global Options"}},{path:"/api/global-options.md",redirect:"/api/global-options.html"},{name:"v-744497ce",path:"/api/",component:a.Y,meta:{title:"Public API"}},{path:"/api/index.html",redirect:"/api/"},{path:"/api/index.md",redirect:"/api/"},{name:"v-4bd15160",path:"/api/loadMore.html",component:a.Y,meta:{title:"LoadMore API"}},{path:"/api/loadMore.md",redirect:"/api/loadMore.html"},{name:"v-e260681e",path:"/api/pagination.html",component:a.Y,meta:{title:"Pagination API"}},{path:"/api/pagination.md",redirect:"/api/pagination.html"},{name:"v-fb0f0066",path:"/guide/getting-started.html",component:a.Y,meta:{title:"Getting Started"}},{path:"/guide/getting-started.md",redirect:"/guide/getting-started.html"},{name:"v-1c7b2593",path:"/guide/introduction.html",component:a.Y,meta:{title:"Introduction"}},{path:"/guide/introduction.md",redirect:"/guide/introduction.html"},{name:"v-2d0ad528",path:"/zh/",component:a.Y,meta:{title:""}},{path:"/zh/index.html",redirect:"/zh/"},{path:"/zh/index.md",redirect:"/zh/"},{name:"v-041f880a",path:"/guide/documentation/advancedUsage.html",component:a.Y,meta:{title:"Advanced Usage"}},{path:"/guide/documentation/advancedUsage.md",redirect:"/guide/documentation/advancedUsage.html"},{name:"v-5d1e647b",path:"/guide/documentation/cacheKey.html",component:a.Y,meta:{title:"Cache / Preload"}},{path:"/guide/documentation/cacheKey.md",redirect:"/guide/documentation/cacheKey.html"},{name:"v-6fa8152f",path:"/guide/documentation/debounce.html",component:a.Y,meta:{title:"Debounce"}},{path:"/guide/documentation/debounce.md",redirect:"/guide/documentation/debounce.html"},{name:"v-3d6dd5d7",path:"/guide/documentation/default-request.html",component:a.Y,meta:{title:"Default Request"}},{path:"/guide/documentation/default-request.md",redirect:"/guide/documentation/default-request.html"},{name:"v-62cf96d0",path:"/guide/documentation/errorRetry.html",component:a.Y,meta:{title:"Error Retry"}},{path:"/guide/documentation/errorRetry.md",redirect:"/guide/documentation/errorRetry.html"},{name:"v-77327eb8",path:"/guide/documentation/global-options.html",component:a.Y,meta:{title:"Global Options"}},{path:"/guide/documentation/global-options.md",redirect:"/guide/documentation/global-options.html"},{name:"v-1324f911",path:"/guide/documentation/loadingDelay.html",component:a.Y,meta:{title:"Loading Delay"}},{path:"/guide/documentation/loadingDelay.md",redirect:"/guide/documentation/loadingDelay.html"},{name:"v-0b36a592",path:"/guide/documentation/manual.html",component:a.Y,meta:{title:"Manually Trigger"}},{path:"/guide/documentation/manual.md",redirect:"/guide/documentation/manual.html"},{name:"v-5e1b0e12",path:"/guide/documentation/mutate.html",component:a.Y,meta:{title:"Mutate"}},{path:"/guide/documentation/mutate.md",redirect:"/guide/documentation/mutate.html"},{name:"v-7f1d6617",path:"/guide/documentation/polling.html",component:a.Y,meta:{title:"Polling"}},{path:"/guide/documentation/polling.md",redirect:"/guide/documentation/polling.html"},{name:"v-0825d054",path:"/guide/documentation/queries.html",component:a.Y,meta:{title:"Concurrent Request"}},{path:"/guide/documentation/queries.md",redirect:"/guide/documentation/queries.html"},{name:"v-964bff12",path:"/guide/documentation/ready.html",component:a.Y,meta:{title:"Dependent Request"}},{path:"/guide/documentation/ready.md",redirect:"/guide/documentation/ready.html"},{name:"v-4b535f1b",path:"/guide/documentation/refreshDeps.html",component:a.Y,meta:{title:"Dependency Refresh"}},{path:"/guide/documentation/refreshDeps.md",redirect:"/guide/documentation/refreshDeps.html"},{name:"v-141987ca",path:"/guide/documentation/refreshOnWindowFocus.html",component:a.Y,meta:{title:"Refresh On Window Focus"}},{path:"/guide/documentation/refreshOnWindowFocus.md",redirect:"/guide/documentation/refreshOnWindowFocus.html"},{name:"v-74534cee",path:"/guide/documentation/throttle.html",component:a.Y,meta:{title:"Throttle"}},{path:"/guide/documentation/throttle.md",redirect:"/guide/documentation/throttle.html"},{name:"v-30499d70",path:"/zh/api/global-options.html",component:a.Y,meta:{title:"全局选项"}},{path:"/zh/api/global-options.md",redirect:"/zh/api/global-options.html"},{name:"v-53f9ca7d",path:"/zh/api/",component:a.Y,meta:{title:"公共 API"}},{path:"/zh/api/index.html",redirect:"/zh/api/"},{path:"/zh/api/index.md",redirect:"/zh/api/"},{name:"v-beff8dfe",path:"/zh/api/loadMore.html",component:a.Y,meta:{title:"LoadMore 扩展 API"}},{path:"/zh/api/loadMore.md",redirect:"/zh/api/loadMore.html"},{name:"v-5e870562",path:"/zh/api/pagination.html",component:a.Y,meta:{title:"分页扩展 API"}},{path:"/zh/api/pagination.md",redirect:"/zh/api/pagination.html"},{name:"v-37781588",path:"/zh/guide/getting-started.html",component:a.Y,meta:{title:"起步"}},{path:"/zh/guide/getting-started.md",redirect:"/zh/guide/getting-started.html"},{name:"v-62263e84",path:"/zh/guide/introduction.html",component:a.Y,meta:{title:"介绍"}},{path:"/zh/guide/introduction.md",redirect:"/zh/guide/introduction.html"},{name:"v-540402ea",path:"/zh/guide/documentation/advancedUsage.html",component:a.Y,meta:{title:"高级用法"}},{path:"/zh/guide/documentation/advancedUsage.md",redirect:"/zh/guide/documentation/advancedUsage.html"},{name:"v-6517c42c",path:"/zh/guide/documentation/cacheKey.html",component:a.Y,meta:{title:"缓存 与 预加载"}},{path:"/zh/guide/documentation/cacheKey.md",redirect:"/zh/guide/documentation/cacheKey.html"},{name:"v-77a174e0",path:"/zh/guide/documentation/debounce.html",component:a.Y,meta:{title:"防抖"}},{path:"/zh/guide/documentation/debounce.md",redirect:"/zh/guide/documentation/debounce.html"},{name:"v-5dab9d06",path:"/zh/guide/documentation/default-request.html",component:a.Y,meta:{title:"默认请求"}},{path:"/zh/guide/documentation/default-request.md",redirect:"/zh/guide/documentation/default-request.html"},{name:"v-848f27ee",path:"/zh/guide/documentation/errorRetry.html",component:a.Y,meta:{title:"错误重试"}},{path:"/zh/guide/documentation/errorRetry.md",redirect:"/zh/guide/documentation/errorRetry.html"},{name:"v-30cbd795",path:"/zh/guide/documentation/global-options.html",component:a.Y,meta:{title:"全局配置"}},{path:"/zh/guide/documentation/global-options.md",redirect:"/zh/guide/documentation/global-options.html"},{name:"v-89d5cf7c",path:"/zh/guide/documentation/loadingDelay.html",component:a.Y,meta:{title:"延迟加载状态"}},{path:"/zh/guide/documentation/loadingDelay.md",redirect:"/zh/guide/documentation/loadingDelay.html"},{name:"v-74b63d83",path:"/zh/guide/documentation/manual.html",component:a.Y,meta:{title:"手动触发请求"}},{path:"/zh/guide/documentation/manual.md",redirect:"/zh/guide/documentation/manual.html"},{name:"v-70cab3fa",path:"/zh/guide/documentation/mutate.html",component:a.Y,meta:{title:"改变返回值"}},{path:"/zh/guide/documentation/mutate.md",redirect:"/zh/guide/documentation/mutate.html"},{name:"v-4590cc46",path:"/zh/guide/documentation/polling.html",component:a.Y,meta:{title:"轮询"}},{path:"/zh/guide/documentation/polling.md",redirect:"/zh/guide/documentation/polling.html"},{name:"v-62cd92fa",path:"/zh/guide/documentation/queries.html",component:a.Y,meta:{title:"并发请求"}},{path:"/zh/guide/documentation/queries.md",redirect:"/zh/guide/documentation/queries.html"},{name:"v-a001b334",path:"/zh/guide/documentation/ready.html",component:a.Y,meta:{title:"依赖请求"}},{path:"/zh/guide/documentation/ready.md",redirect:"/zh/guide/documentation/ready.html"},{name:"v-403a15ca",path:"/zh/guide/documentation/refreshDeps.html",component:a.Y,meta:{title:"依赖刷新"}},{path:"/zh/guide/documentation/refreshDeps.md",redirect:"/zh/guide/documentation/refreshDeps.html"},{name:"v-7693e5fb",path:"/zh/guide/documentation/refreshOnWindowFocus.html",component:a.Y,meta:{title:"屏幕聚焦重新请求"}},{path:"/zh/guide/documentation/refreshOnWindowFocus.md",redirect:"/zh/guide/documentation/refreshOnWindowFocus.html"},{name:"v-7c4cac9f",path:"/zh/guide/documentation/throttle.html",component:a.Y,meta:{title:"节流"}},{path:"/zh/guide/documentation/throttle.md",redirect:"/zh/guide/documentation/throttle.html"},{name:"v-3706649a",path:"/404.html",component:a.Y,meta:{title:""}},{name:"404",path:"/:catchAll(.*)",component:a.Y}]},9901:(e,t,n)=>{"use strict";n.d(t,{H:()=>a});const a={base:"/vue-request-docs/",lang:"en-US",title:"",description:"",head:[["link",{rel:"icon",type:"image/png",sizes:"32x32",href:"logo@32px.png"}],["link",{rel:"icon",type:"image/png",sizes:"16x16",href:"logo@16px.png"}],["link",{rel:"shortcut icon",href:"logo@16px.png"}],["meta",{name:"baidu-site-verification",content:"code-zJQXE7b2WS"}],["meta",{name:"keywords",content:"vue-request, vue3, vue request, axios, vue, vuejs, js, request, fetch, vue-next, swr, javascript, 请求, vue请求库"}],["meta",{name:"attojs-site-env",content:"OTHER"}]],locales:{"/":{lang:"en-US",title:"VueRequest",description:"vue-request - A request library for Vue 3."},"/zh/":{lang:"zh-CN",title:"VueRequest",description:"vue-request - 一个很酷的 Vue3 的请求库"}}}},7212:(e,t,n)=>{"use strict";n.d(t,{f:()=>a});const a={logo:"logo@100px.png",repo:"attojs/vue-request",docsRepo:"attojs/vue-request-doc",docsBranch:"release",editLink:!1,locales:{"/zh/":{selectLanguageName:"简体中文",selectLanguageText:"选择语言",selectLanguageAriaLabel:"选择语言",editLinkText:"在 GitHub 上编辑此页",lastUpdatedText:"上次更新",contributorsText:"贡献者",tip:"提示",warning:"注意",danger:"警告",notFound:["这里什么都没有","我们怎么到这来了？","这是一个 404 页面","看起来我们进入了错误的链接"],backToHome:"返回首页",openInNewWindow:"在新窗口打开",navbar:[{text:"文档",link:"/zh/guide/introduction.html"},{text:"API 参考",link:"/zh/api/index.html"}],sidebar:{"/zh/guide/":[{text:"指南",isGroup:!0,children:["/zh/guide/introduction.html","/zh/guide/getting-started.html"]},{text:"文档",isGroup:!0,children:["/zh/guide/documentation/global-options.html","/zh/guide/documentation/default-request.html","/zh/guide/documentation/manual.html","/zh/guide/documentation/mutate.html","/zh/guide/documentation/polling.html","/zh/guide/documentation/queries.html","/zh/guide/documentation/ready.html","/zh/guide/documentation/debounce.html","/zh/guide/documentation/throttle.html","/zh/guide/documentation/cacheKey.html","/zh/guide/documentation/errorRetry.html","/zh/guide/documentation/loadingDelay.html","/zh/guide/documentation/refreshDeps.html","/zh/guide/documentation/refreshOnWindowFocus.html","/zh/guide/documentation/advancedUsage.html"]}],"/zh/api/":[{text:"API参考",isGroup:!0,children:["/zh/api/index.html","/zh/api/global-options.html","/zh/api/pagination.html","/zh/api/loadMore.html"]}]}},"/":{navbar:[{text:"Documentation",link:"/guide/introduction.html"},{text:"API Reference",link:"/api/index.html"}],sidebar:{"/guide/":[{text:"Guide",isGroup:!0,children:["/guide/introduction.html","/guide/getting-started.html"]},{text:"Documentation",isGroup:!0,children:["/guide/documentation/global-options.html","/guide/documentation/default-request.html","/guide/documentation/manual.html","/guide/documentation/mutate.html","/guide/documentation/polling.html","/guide/documentation/queries.html","/guide/documentation/ready.html","/guide/documentation/debounce.html","/guide/documentation/throttle.html","/guide/documentation/cacheKey.html","/guide/documentation/errorRetry.html","/guide/documentation/loadingDelay.html","/guide/documentation/refreshDeps.html","/guide/documentation/refreshOnWindowFocus.html","/guide/documentation/advancedUsage.html"]}],"/api/":[{text:"API Reference",isGroup:!0,children:["/api/index.html","/api/global-options.html","/api/pagination.html","/api/loadMore.html"]}]},selectLanguageName:"English",danger:"WARNING"}},navbar:[],selectLanguageText:"Languages",selectLanguageAriaLabel:"Select language",sidebar:"auto",editLinkText:"Edit this page",lastUpdated:!0,lastUpdatedText:"Last Updated",contributors:!0,contributorsText:"Contributors",notFound:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],backToHome:"Take me home",openInNewWindow:"open in new window"}}},e=>{"use strict";e.O(0,[2844,3618],(()=>(580,e(e.s=580)))),e.O()}]);