"use strict";(self.webpackChunken=self.webpackChunken||[]).push([[43],{78043:(e,l,a)=>{a.r(l),a.d(l,{default:()=>_e});var t=a(27875),n=a(50349),u=a(40641),i=a(14825),o=a(95565),s=a(36287),r=a(39931);const v=["href","rel","target","aria-label"],c=(0,t.aZ)({inheritAttrs:!1}),d=(0,t.aZ)({...c,__name:"NavLink",props:{item:{type:Object,required:!0}},setup(e){const l=e,a=(0,s.yj)(),i=(0,o.WF)(),{item:c}=(0,u.BK)(l),d=(0,t.Fl)((()=>(0,r.ak)(c.value.link))),p=(0,t.Fl)((()=>(0,r.B2)(c.value.link)||(0,r.R5)(c.value.link))),g=(0,t.Fl)((()=>{if(!p.value)return c.value.target?c.value.target:d.value?"_blank":void 0})),h=(0,t.Fl)((()=>"_blank"===g.value)),m=(0,t.Fl)((()=>!d.value&&!p.value&&!h.value)),k=(0,t.Fl)((()=>{if(!p.value)return c.value.rel?c.value.rel:h.value?"noopener noreferrer":void 0})),w=(0,t.Fl)((()=>c.value.ariaLabel||c.value.text)),b=(0,t.Fl)((()=>{const e=Object.keys(i.value.locales);return e.length?!e.some((e=>e===c.value.link)):"/"!==c.value.link})),f=(0,t.Fl)((()=>!!b.value&&a.path.startsWith(c.value.link))),y=(0,t.Fl)((()=>!!m.value&&(c.value.activeMatch?new RegExp(c.value.activeMatch).test(a.path):f.value)));return(e,l)=>{const a=(0,t.up)("RouterLink"),i=(0,t.up)("OutboundLink");return m.value?((0,t.wg)(),(0,t.j4)(a,(0,t.dG)({key:0,class:["nav-link",{"router-link-active":y.value}],to:(0,u.SU)(c).link,"aria-label":w.value},e.$attrs),{default:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"before"),(0,t.Uk)(" "+(0,n.zw)((0,u.SU)(c).text)+" ",1),(0,t.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,t.wg)(),(0,t.iD)("a",(0,t.dG)({key:1,class:"nav-link external",href:(0,u.SU)(c).link,rel:k.value,target:g.value,"aria-label":w.value},e.$attrs),[(0,t.WI)(e.$slots,"before"),(0,t.Uk)(" "+(0,n.zw)((0,u.SU)(c).text)+" ",1),h.value?((0,t.wg)(),(0,t.j4)(i,{key:0})):(0,t.kq)("",!0),(0,t.WI)(e.$slots,"after")],16,v))}}}),p=["aria-labelledby"],g={class:"hero"},h=["src","alt"],m={key:1,id:"main-title"},k={key:2,class:"description"},w={key:3,class:"actions"},b={key:0,class:"features"},f={class:"theme-default-content custom"},y=["innerHTML"],_=["textContent"],D=(0,t.aZ)({__name:"Home",setup(e){const l=(0,o.I2)(),a=(0,o.I5)(),u=(0,t.Fl)((()=>l.value.heroImage?(0,o.pJ)(l.value.heroImage):null)),i=(0,t.Fl)((()=>null===l.value.heroText?null:l.value.heroText||a.value.title||"Hello")),s=(0,t.Fl)((()=>l.value.heroAlt||i.value||"hero")),v=(0,t.Fl)((()=>null===l.value.tagline?null:l.value.tagline||a.value.description||"Welcome to your VuePress site")),c=(0,t.Fl)((()=>(0,r.kJ)(l.value.actions)?l.value.actions.map((({text:e,link:l,type:a="primary"})=>({text:e,link:l,type:a}))):[])),D=(0,t.Fl)((()=>(0,r.kJ)(l.value.features)?l.value.features:[])),F=(0,t.Fl)((()=>l.value.footer)),U=(0,t.Fl)((()=>l.value.footerHtml));return(e,l)=>{const a=(0,t.up)("Content");return(0,t.wg)(),(0,t.iD)("main",{class:"home","aria-labelledby":i.value?"main-title":void 0},[(0,t._)("header",g,[u.value?((0,t.wg)(),(0,t.iD)("img",{key:0,src:u.value,alt:s.value},null,8,h)):(0,t.kq)("",!0),i.value?((0,t.wg)(),(0,t.iD)("h1",m,(0,n.zw)(i.value),1)):(0,t.kq)("",!0),v.value?((0,t.wg)(),(0,t.iD)("p",k,(0,n.zw)(v.value),1)):(0,t.kq)("",!0),c.value.length?((0,t.wg)(),(0,t.iD)("p",w,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(c.value,(e=>((0,t.wg)(),(0,t.j4)(d,{key:e.text,class:(0,n.C_)(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):(0,t.kq)("",!0)]),D.value.length?((0,t.wg)(),(0,t.iD)("div",b,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(D.value,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.title,class:"feature"},[(0,t._)("h2",null,(0,n.zw)(e.title),1),(0,t._)("p",null,(0,n.zw)(e.details),1)])))),128))])):(0,t.kq)("",!0),(0,t._)("div",f,[(0,t.Wm)(a)]),F.value?((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[U.value?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"footer",innerHTML:F.value},null,8,y)):((0,t.wg)(),(0,t.iD)("div",{key:1,class:"footer",textContent:(0,n.zw)(F.value)},null,8,_))],64)):(0,t.kq)("",!0)],8,p)}}});var F=a(72816),U=a(50354);const x=(0,t.aZ)({__name:"DropdownTransition",setup(e){const l=e=>{e.style.height=e.scrollHeight+"px"},a=e=>{e.style.height=""};return(e,n)=>((0,t.wg)(),(0,t.j4)(i.uT,{name:"dropdown",onEnter:l,onAfterEnter:a,onBeforeLeave:l},{default:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"default")])),_:3}))}}),S=["aria-label"],W={class:"title"},I=(0,t._)("span",{class:"arrow down"},null,-1),L=["aria-label"],C={class:"title"},$={class:"nav-dropdown"},z={class:"dropdown-subtitle"},H={key:1},j={class:"dropdown-subitem-wrapper"},q=(0,t.aZ)({__name:"DropdownLink",props:{item:{type:Object,required:!0}},setup(e){const l=e,{item:a}=(0,u.BK)(l),o=(0,t.Fl)((()=>a.value.ariaLabel||a.value.text)),r=(0,u.iH)(!1),v=(0,s.yj)();(0,t.YP)((()=>v.path),(()=>{r.value=!1}));const c=e=>{const l=0===e.detail;r.value=!!l&&!r.value},p=(e,l)=>l[l.length-1]===e;return(e,l)=>((0,t.wg)(),(0,t.iD)("div",{class:(0,n.C_)(["dropdown-wrapper",{open:r.value}])},[(0,t._)("button",{class:"dropdown-title",type:"button","aria-label":o.value,onClick:c},[(0,t._)("span",W,(0,n.zw)((0,u.SU)(a).text),1),I],8,S),(0,t._)("button",{class:"mobile-dropdown-title",type:"button","aria-label":o.value,onClick:l[0]||(l[0]=e=>r.value=!r.value)},[(0,t._)("span",C,(0,n.zw)((0,u.SU)(a).text),1),(0,t._)("span",{class:(0,n.C_)(["arrow",r.value?"down":"right"])},null,2)],8,L),(0,t.Wm)(x,null,{default:(0,t.w5)((()=>[(0,t.wy)((0,t._)("ul",$,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,u.SU)(a).children,((e,l)=>((0,t.wg)(),(0,t.iD)("li",{key:e.link||l,class:"dropdown-item"},[e.children?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t._)("h4",z,[e.link?((0,t.wg)(),(0,t.j4)(d,{key:0,item:e,onFocusout:l=>p(e,(0,u.SU)(a).children)&&0===e.children.length&&(r.value=!1)},null,8,["item","onFocusout"])):((0,t.wg)(),(0,t.iD)("span",H,(0,n.zw)(e.text),1))]),(0,t._)("ul",j,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.children,(l=>((0,t.wg)(),(0,t.iD)("li",{key:l.link,class:"dropdown-subitem"},[(0,t.Wm)(d,{item:l,onFocusout:t=>p(l,e.children)&&p(e,(0,u.SU)(a).children)&&(r.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,t.wg)(),(0,t.j4)(d,{key:1,item:e,onFocusout:l=>p(e,(0,u.SU)(a).children)&&(r.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[i.F8,r.value]])])),_:1})],2))}}),T={key:0,class:"navbar-links"},M=(0,t.aZ)({__name:"NavbarLinks",setup(e){const l=e=>(0,r.HD)(e)?(0,F.sC)(e):e.children?{...e,children:e.children.map(l)}:e,a=(()=>{const e=(0,F.X6)();return(0,t.Fl)((()=>(e.value.navbar||[]).map(l)))})(),n=(()=>{const e=(0,s.tv)(),l=(0,o.I)(),a=(0,o.I5)(),n=(0,F.X6)();return(0,t.Fl)((()=>{var t,u;const i=Object.keys(a.value.locales);if(i.length<2)return[];const o=e.currentRoute.value.path,s=e.currentRoute.value.fullPath;return[{text:null!=(t=n.value.selectLanguageText)?t:"unkown language",ariaLabel:null!=(u=n.value.selectLanguageAriaLabel)?u:"unkown language",children:i.map((t=>{var u,i,r,v,c,d;const p=null!=(i=null==(u=a.value.locales)?void 0:u[t])?i:{},g=null!=(v=null==(r=n.value.locales)?void 0:r[t])?v:{},h=`${p.lang}`,m=null!=(c=g.selectLanguageName)?c:h;let k;if(h===a.value.lang)k=s;else{const a=o.replace(l.value,t);k=e.getRoutes().some((e=>e.path===a))?a:null!=(d=g.home)?d:t}return{text:m,link:k}}))}]}))})(),u=(()=>{const e=(0,F.X6)(),l=(0,t.Fl)((()=>e.value.repo)),a=(0,t.Fl)((()=>l.value?(0,U.c9)(l.value):null)),n=(0,t.Fl)((()=>l.value&&!(0,r.ak)(l.value)?`https://github.com/${l.value}`:l.value)),u=(0,t.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return(0,t.Fl)((()=>n.value&&u.value?[{text:u.value,link:n.value}]:[]))})(),i=(0,t.Fl)((()=>[...a.value,...n.value,...u.value]));return(e,l)=>i.value.length?((0,t.wg)(),(0,t.iD)("nav",T,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.value,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,t.wg)(),(0,t.j4)(q,{key:0,item:e},null,8,["item"])):((0,t.wg)(),(0,t.j4)(d,{key:1,item:e},null,8,["item"]))])))),128))])):(0,t.kq)("",!0)}}),B=["title"],Y={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Z=[(0,t.uE)('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],R={class:"icon",focusable:"false",viewBox:"0 0 32 32"},X=[(0,t._)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)],N=(0,t.aZ)({__name:"ToggleDarkModeButton",setup(e){const l=(0,F.X6)(),a=(0,F.vs)(),n=()=>{a.value=!a.value};return(e,o)=>((0,t.wg)(),(0,t.iD)("button",{class:"toggle-dark-button",title:(0,u.SU)(l).toggleDarkMode,onClick:n},[(0,t.wy)(((0,t.wg)(),(0,t.iD)("svg",Y,Z,512)),[[i.F8,!(0,u.SU)(a)]]),(0,t.wy)(((0,t.wg)(),(0,t.iD)("svg",R,X,512)),[[i.F8,(0,u.SU)(a)]])],8,B))}}),P=["title"],E=[(0,t._)("div",{class:"icon","aria-hidden":"true"},[(0,t._)("span"),(0,t._)("span"),(0,t._)("span")],-1)],K=(0,t.aZ)({__name:"ToggleSidebarButton",emits:["toggle"],setup(e){const l=(0,F.X6)();return(e,a)=>((0,t.wg)(),(0,t.iD)("div",{class:"toggle-sidebar-button",title:(0,u.SU)(l).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:a[0]||(a[0]=l=>e.$emit("toggle"))},E,8,P))}}),V=["src","alt"],A=(0,t.aZ)({__name:"Navbar",emits:["toggle-sidebar"],setup(e){const l=(0,o.I)(),a=(0,o.I5)(),i=(0,F.X6)(),s=(0,F.vs)(),r=(0,u.iH)(null),v=(0,u.iH)(null),c=(0,t.Fl)((()=>i.value.home||l.value)),d=(0,t.Fl)((()=>s.value&&void 0!==i.value.logoDark?i.value.logoDark:i.value.logo)),p=(0,t.Fl)((()=>a.value.title)),g=(0,u.iH)(0),h=(0,t.Fl)((()=>g.value?{maxWidth:g.value+"px"}:{})),m=(0,t.Fl)((()=>i.value.darkMode));function k(e,l){var a,t,n;const u=null==(n=null==(t=null==(a=null==e?void 0:e.ownerDocument)?void 0:a.defaultView)?void 0:t.getComputedStyle(e,null))?void 0:n[l],i=Number.parseInt(u,10);return Number.isNaN(i)?0:i}return(0,t.bv)((()=>{const e=k(r.value,"paddingLeft")+k(r.value,"paddingRight"),l=()=>{var l;window.innerWidth<=719?g.value=0:g.value=r.value.offsetWidth-e-((null==(l=v.value)?void 0:l.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)})),(e,l)=>{const a=(0,t.up)("RouterLink"),i=(0,t.up)("NavbarSearch");return(0,t.wg)(),(0,t.iD)("header",{ref_key:"navbar",ref:r,class:"navbar"},[(0,t.Wm)(K,{onToggle:l[0]||(l[0]=l=>e.$emit("toggle-sidebar"))}),(0,t._)("span",{ref_key:"siteBrand",ref:v},[(0,t.Wm)(a,{to:c.value},{default:(0,t.w5)((()=>[d.value?((0,t.wg)(),(0,t.iD)("img",{key:0,class:"logo",src:(0,u.SU)(o.pJ)(d.value),alt:p.value},null,8,V)):(0,t.kq)("",!0),p.value?((0,t.wg)(),(0,t.iD)("span",{key:1,class:(0,n.C_)(["site-name",{"can-hide":d.value}])},(0,n.zw)(p.value),3)):(0,t.kq)("",!0)])),_:1},8,["to"])],512),(0,t._)("div",{class:"navbar-links-wrapper",style:(0,n.j5)(h.value)},[(0,t.WI)(e.$slots,"before"),(0,t.Wm)(M,{class:"can-hide"}),(0,t.WI)(e.$slots,"after"),m.value?((0,t.wg)(),(0,t.j4)(N,{key:0})):(0,t.kq)("",!0),(0,t.Wm)(i)],4)],512)}}}),O={class:"page-meta"},J={key:0,class:"meta-item edit-link"},G={key:1,class:"meta-item last-updated"},Q={class:"meta-item-label"},ee={class:"meta-item-info"},le={key:2,class:"meta-item contributors"},ae={class:"meta-item-label"},te={class:"meta-item-info"},ne=["title"],ue=(0,t.aZ)({__name:"PageMeta",setup(e){const l=(0,F.X6)(),a=(()=>{const e=(0,F.X6)(),l=(0,o.Vi)(),a=(0,o.I2)();return(0,t.Fl)((()=>{var t,n;if(null!=(n=null!=(t=a.value.editLink)?t:e.value.editLink)&&!n)return null;const{repo:u,docsRepo:i=u,docsBranch:o="main",docsDir:s="",editLinkText:r}=e.value;if(!i)return null;const v=(0,U.Fg)({docsRepo:i,docsBranch:o,docsDir:s,filePathRelative:l.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return v?{text:null!=r?r:"Edit this page",link:v}:null}))})(),i=(()=>{const e=(0,o.I5)(),l=(0,F.X6)(),a=(0,o.Vi)(),n=(0,o.I2)();return(0,t.Fl)((()=>{var t,u,i,o;return(null==(u=null!=(t=n.value.lastUpdated)?t:l.value.lastUpdated)||u)&&(null==(i=a.value.git)?void 0:i.updatedTime)?new Date(null==(o=a.value.git)?void 0:o.updatedTime).toLocaleString(e.value.lang):null}))})(),s=(()=>{const e=(0,F.X6)(),l=(0,o.Vi)(),a=(0,o.I2)();return(0,t.Fl)((()=>{var t,n,u,i;return null!=(n=null!=(t=a.value.contributors)?t:e.value.contributors)&&!n||null==(i=null==(u=l.value.git)?void 0:u.contributors)?null:i}))})();return(e,o)=>((0,t.wg)(),(0,t.iD)("footer",O,[(0,u.SU)(a)?((0,t.wg)(),(0,t.iD)("div",J,[(0,t.Wm)(d,{class:"meta-item-label",item:(0,u.SU)(a)},null,8,["item"])])):(0,t.kq)("",!0),(0,u.SU)(i)?((0,t.wg)(),(0,t.iD)("div",G,[(0,t._)("span",Q,(0,n.zw)((0,u.SU)(l).lastUpdatedText)+": ",1),(0,t._)("span",ee,(0,n.zw)((0,u.SU)(i)),1)])):(0,t.kq)("",!0),(0,u.SU)(s)&&(0,u.SU)(s).length?((0,t.wg)(),(0,t.iD)("div",le,[(0,t._)("span",ae,(0,n.zw)((0,u.SU)(l).contributorsText)+": ",1),(0,t._)("span",te,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,u.SU)(s),((e,l)=>((0,t.wg)(),(0,t.iD)(t.HY,{key:l},[(0,t._)("span",{class:"contributor",title:`email: ${e.email}`},(0,n.zw)(e.name),9,ne),l!==(0,u.SU)(s).length-1?((0,t.wg)(),(0,t.iD)(t.HY,{key:0},[(0,t.Uk)(", ")],64)):(0,t.kq)("",!0)],64)))),128))])])):(0,t.kq)("",!0)]))}}),ie={key:0,class:"page-nav"},oe={class:"inner"},se={key:0,class:"prev"},re={key:1,class:"next"},ve=(0,t.aZ)({__name:"PageNav",setup(e){const l=e=>!1===e?null:(0,r.HD)(e)?(0,F.sC)(e):!!(0,r.PO)(e)&&e,a=(e,l,t)=>{const n=e.findIndex((e=>e.link===l));if(-1!==n){const l=e[n+t];return(null==l?void 0:l.link)?l:null}for(const n of e)if(n.children){const e=a(n.children,l,t);if(e)return e}return null},n=(0,o.I2)(),u=(0,F.VU)(),i=(0,s.yj)(),v=(0,t.Fl)((()=>{const e=l(n.value.prev);return!1!==e?e:a(u.value,i.path,-1)})),c=(0,t.Fl)((()=>{const e=l(n.value.next);return!1!==e?e:a(u.value,i.path,1)}));return(e,l)=>v.value||c.value?((0,t.wg)(),(0,t.iD)("nav",ie,[(0,t._)("p",oe,[v.value?((0,t.wg)(),(0,t.iD)("span",se,[(0,t.Uk)(" ← "),(0,t.Wm)(d,{item:v.value},null,8,["item"])])):(0,t.kq)("",!0),c.value?((0,t.wg)(),(0,t.iD)("span",re,[(0,t.Wm)(d,{item:c.value},null,8,["item"]),(0,t.Uk)(" → ")])):(0,t.kq)("",!0)])])):(0,t.kq)("",!0)}}),ce={class:"page"},de={class:"theme-default-content"},pe=(0,t.aZ)({__name:"Page",setup:e=>(e,l)=>{const a=(0,t.up)("Content");return(0,t.wg)(),(0,t.iD)("main",ce,[(0,t.WI)(e.$slots,"top"),(0,t._)("div",de,[(0,t.Wm)(a)]),(0,t.Wm)(ue),(0,t.Wm)(ve),(0,t.WI)(e.$slots,"bottom")])}}),ge=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),he=(e,l)=>!!((e,l)=>void 0!==l&&(e.hash===l||ge(e.path)===ge(l)))(e,l.link)||!!l.children&&l.children.some((l=>he(e,l))),me=(e,l)=>e.link?(0,t.h)(d,{...l,item:e}):(0,t.h)("p",l,e.text),ke=(e,l)=>{var a;return(null===(a=e.children)||void 0===a?void 0:a.length)?(0,t.h)("ul",{class:{"sidebar-sub-items":l>0}},e.children.map((e=>(0,t.h)("li",(0,t.h)(we,{item:e,depth:l+1}))))):null},we=({item:e,depth:l=0})=>{const a=(0,s.yj)(),t=he(a,e);return[me(e,{class:{"sidebar-heading":0===l,"sidebar-item":!0,active:t}}),ke(e,l)]};we.displayName="SidebarChild",we.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const be={class:"sidebar"},fe={class:"sidebar-links"},ye=(0,t.aZ)({__name:"Sidebar",setup(e){const l=(0,F.VU)();return(e,a)=>((0,t.wg)(),(0,t.iD)("aside",be,[(0,t.Wm)(M),(0,t.WI)(e.$slots,"top"),(0,t._)("ul",fe,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,u.SU)(l),(e=>((0,t.wg)(),(0,t.j4)((0,u.SU)(we),{key:e.link||e.text,item:e},null,8,["item"])))),128))]),(0,t.WI)(e.$slots,"bottom")]))}}),_e=(0,t.aZ)({__name:"Layout",setup(e){const l=(0,o.Vi)(),a=(0,o.I2)(),r=(0,F.X6)(),v=(0,t.Fl)((()=>!1!==a.value.navbar&&!1!==r.value.navbar)),c=(0,F.VU)(),d=(0,u.iH)(!1),p=e=>{d.value="boolean"==typeof e?e:!d.value},g={x:0,y:0},h=e=>{g.x=e.changedTouches[0].clientX,g.y=e.changedTouches[0].clientY},m=e=>{const l=e.changedTouches[0].clientX-g.x,a=e.changedTouches[0].clientY-g.y;Math.abs(l)>Math.abs(a)&&Math.abs(l)>40&&(l>0&&g.x<=80?p(!0):p(!1))},k=(0,t.Fl)((()=>[{"no-navbar":!v.value,"no-sidebar":!c.value.length,"sidebar-open":d.value},a.value.pageClass]));let w;(0,t.bv)((()=>{const e=(0,s.tv)();w=e.afterEach((()=>{p(!1)}))})),(0,t.Ah)((()=>{w()}));const b=(0,F.P$)(),f=b.resolve,y=b.pending;return(e,o)=>((0,t.wg)(),(0,t.iD)("div",{class:(0,n.C_)(["theme-container",k.value]),onTouchstart:h,onTouchend:m},[v.value?((0,t.wg)(),(0,t.j4)(A,{key:0,onToggleSidebar:p},{before:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"navbar-before")])),after:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"navbar-after")])),_:3})):(0,t.kq)("",!0),(0,t._)("div",{class:"sidebar-mask",onClick:o[0]||(o[0]=e=>p(!1))}),(0,t.Wm)(ye,null,{top:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"sidebar-top")])),bottom:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"sidebar-bottom")])),_:3}),(0,t.WI)(e.$slots,"page",{},(()=>[(0,u.SU)(a).home?((0,t.wg)(),(0,t.j4)(D,{key:0})):((0,t.wg)(),(0,t.j4)(i.uT,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:(0,u.SU)(f),onBeforeLeave:(0,u.SU)(y)},{default:(0,t.w5)((()=>[((0,t.wg)(),(0,t.j4)(pe,{key:(0,u.SU)(l).path},{top:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"page-top")])),bottom:(0,t.w5)((()=>[(0,t.WI)(e.$slots,"page-bottom")])),_:3}))])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34))}})}}]);