(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"someGetter",(function(){return C}));var a={};t.r(a),t.d(a,"token",(function(){return q})),t.d(a,"fresh",(function(){return L})),t.d(a,"expire",(function(){return A}));var o={};t.r(o),t.d(o,"login",(function(){return M})),t.d(o,"logout",(function(){return O})),t.d(o,"expire",(function(){return V}));var i={};t.r(i),t.d(i,"someGetter",(function(){return D}));var u={};t.r(u),t.d(u,"refresh",(function(){return E})),t.d(u,"avatar",(function(){return z})),t.d(u,"uid",(function(){return G}));var c={};t.r(c),t.d(c,"refresh",(function(){return F})),t.d(c,"refreshEnd",(function(){return J}));var s={};t.r(s),t.d(s,"addCancelToken",(function(){return H})),t.d(s,"clearCancelToken",(function(){return K}));var l=t("967e"),p=t.n(l),d=(t("a481"),t("96cf"),t("fa84")),f=t.n(d),h=(t("7d6e"),t("e54f"),t("985d"),t("31cd"),t("2b0e")),m=t("bf69"),g=t("42d2"),v=t("b05d"),b=t("2a19"),k=t("f508"),w=t("436b"),y=t("1b3f");h["a"].use(v["a"],{config:{notify:{position:"top"},loading:{},loadingBar:{color:"brown",size:"3px"}},lang:m["a"],iconSet:g["a"],plugins:{Notify:b["a"],Loading:k["a"],Dialog:w["a"],LoadingBar:y["a"]}});var x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},P=[],S={name:"App"},_=S,B=t("2877"),I=Object(B["a"])(_,x,P,!1,null,null,null),T=I.exports,R=t("2f62"),$=function(){return{token:null,isRefresh:!1,expire:null}};function C(){}function q(e,n){e.token=n}function L(e,n){e.isRefresh=n}function A(e,n){e.expire=n}function M(e,n){var t=e.commit;t("token",n),localStorage.setItem("token",n)}function O(e){var n=e.commit;n("token",null),localStorage.removeItem("token")}function V(e,n){var t=e.commit;t("expire",n),localStorage.setItem("token_expire",n)}var U={namespaced:!0,getters:r,mutations:a,actions:o,state:$},j=function(){return{refresh:!1,user_avatar:"",user_id:0}};function D(){}function E(e,n){e.refresh=n}function z(e,n){e.user_avatar=n}function G(e,n){e.user_id=n}function F(e){var n=e.commit;n("refresh",!1),n("refresh",!0)}function J(e){var n=e.commit;n("refresh",!1)}var Q={namespaced:!0,getters:i,mutations:u,actions:c,state:j},Y=function(){return{cancelTokenArr:[]}};function H(e,n){var t=e.cancelTokenArr;t.push(n)}function K(e){e.cancelTokenArr.map((function(e){e.cancel("".concat(e.url,"---路由切换取消请求"))})),e.cancelTokenArr=[]}var N={mutations:s,state:Y};h["a"].use(R["a"]);var Z=function(){var e=new R["a"].Store({modules:{auth:U,base:Q,cancel:N},getters:{refresh:function(e){return e.base.refresh},authToken:function(e){return e.auth.token},userAvatar:function(e){return e.base.user_avatar},uid:function(e){return e.base.user_id}},strict:!1});return e},W=(t("7f7f"),t("8c4f")),X=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"713b"))},redirect:"/overview",children:[{path:"overview",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"8b24"))}},{path:"service",component:function(){return Promise.all([t.e(0),t.e(19)]).then(t.bind(null,"33ef"))}},{name:"service",path:"service/:id",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"c181"))}},{path:"shop",component:function(){return Promise.all([t.e(0),t.e(17)]).then(t.bind(null,"8838"))}},{path:"invoice",component:function(){return Promise.all([t.e(0),t.e(24)]).then(t.bind(null,"cf89"))}},{name:"invoice",path:"invoice/:id",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"1746"))}},{path:"ticket",component:function(){return Promise.all([t.e(0),t.e(29)]).then(t.bind(null,"73c2"))}},{path:"ticket/create",component:function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,"5f3f"))}},{path:"ticket/:id",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"a226"))}},{path:"setting",component:function(){return Promise.all([t.e(0),t.e(45)]).then(t.bind(null,"0619"))},children:[{path:"",component:function(){return Promise.all([t.e(0),t.e(46)]).then(t.bind(null,"d2a9"))}},{path:"telegram",component:function(){return Promise.all([t.e(0),t.e(21)]).then(t.bind(null,"1711"))}}]},{path:"log",component:function(){return Promise.all([t.e(0),t.e(44)]).then(t.bind(null,"908c"))},redirect:"/log/login",children:[{path:"login",component:function(){return Promise.all([t.e(0),t.e(26)]).then(t.bind(null,"f2ea"))}},{path:"credit",component:function(){return Promise.all([t.e(0),t.e(25)]).then(t.bind(null,"5693"))}},{path:"trans",component:function(){return Promise.all([t.e(0),t.e(27)]).then(t.bind(null,"f145"))}}]},{path:"credit",component:function(){return Promise.all([t.e(0),t.e(20)]).then(t.bind(null,"9919"))}},{path:"invite",component:function(){return Promise.all([t.e(0),t.e(23)]).then(t.bind(null,"0cf5"))}},{path:"server",component:function(){return Promise.all([t.e(0),t.e(28)]).then(t.bind(null,"3e23"))}},{path:"tos",component:function(){return Promise.all([t.e(0),t.e(47)]).then(t.bind(null,"85c4"))}},{path:"aup",component:function(){return Promise.all([t.e(0),t.e(39)]).then(t.bind(null,"1f53"))}}]},{path:"/",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"16c9"))},children:[{name:"login",path:"login",component:function(){return Promise.all([t.e(0),t.e(40)]).then(t.bind(null,"80ab"))}},{name:"register",path:"register",component:function(){return Promise.all([t.e(0),t.e(43)]).then(t.bind(null,"2a1a"))}},{name:"hack_login",path:"hack_login",redirect:function(e){var n=e.query,t=Z();return t.dispatch("auth/login",n.token),t.dispatch("auth/expire",n.expire),"/login"}},{name:"password_reset_request",path:"password_reset_request",component:function(){return Promise.all([t.e(0),t.e(42)]).then(t.bind(null,"8f8e4"))}},{name:"password_reset",path:"password_reset/:code",component:function(){return Promise.all([t.e(0),t.e(41)]).then(t.bind(null,"1655"))}}]}];X.push({path:"*",component:function(){return Promise.all([t.e(0),t.e(22)]).then(t.bind(null,"e51e"))}});var ee=X;h["a"].use(W["a"]);var ne=function(e){var n=e.store,t=new W["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:ee,mode:"history",base:"/"});return t.beforeEach((function(e,t,r){switch(n.commit("clearCancelToken"),e.name){case"login":case"register":case"password_reset_request":case"password_reset":if(n.state.auth.token||localStorage.getItem("token"))return void r("/overview");break;default:if(!n.state.auth.token&&!localStorage.getItem("token"))return void r({name:"login",query:{redirect:e.fullPath}})}r()})),t},te=function(){return re.apply(this,arguments)};function re(){return re=f()(p.a.mark((function e(){var n,t,r;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof Z){e.next=6;break}return e.next=3,Z({Vue:h["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=Z;case 7:if(n=e.t0,"function"!==typeof ne){e.next=14;break}return e.next=11,ne({Vue:h["a"],store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=ne;case 15:return t=e.t1,n.$router=t,r={el:"#q-app",router:t,store:n,render:function(e){return e(T)}},e.abrupt("return",{app:r,store:n,router:t});case 19:case"end":return e.stop()}}),e)}))),re.apply(this,arguments)}t("551c"),t("06db");var ae=t("bc3a"),oe=t.n(ae),ie=function(){var e=f()(p.a.mark((function e(n){var t,r,a;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.app,t=n.router,r=n.store,a=n.Vue,oe.a.interceptors.request.use((function(e){return r.state.auth.token||r.commit("auth/token",localStorage.getItem("token")),r.state.auth.expire||r.commit("auth/expire",localStorage.getItem("token_expire")),r.state.auth.token&&(e.headers.Authorization="Bearer ".concat(r.state.auth.token)),e.baseURL=window.appConfig.apiUrl,e.cancelToken=new oe.a.CancelToken((function(n){r.commit("addCancelToken",{cancel:n,url:location.host+e.url})})),e}),(function(e){return Promise.reject(e)})),oe.a.interceptors.response.use((function(e){var n=r.state.auth.token,t=r.state.auth.expire;return n&&t-Date.parse(new Date)/1e3<900&&!r.state.auth.isRefresh&&(r.commit("auth/fresh",!0),oe.a.get("/user/auth/token").then((function(e){r.dispatch("auth/login",e.data.token),r.dispatch("auth/expire",e.data.expire),r.commit("auth/fresh",!1)}))),e}),(function(e){if(e.response)switch(e.response.status){case 401:r.dispatch("auth/logout"),b["a"].create({message:"登录已过期，请重新登录",color:"sencondary"}),t.replace({name:"login",query:{redirect:t.currentRoute.fullPath}});break;case 404:b["a"].create({message:e.response.data.message?e.response.data.message:"资源不存在",color:"warning"});break;case 429:b["a"].create({message:e.response.data.message?e.response.data.message:"访问频率过快，请稍后再试",color:"danger"});break;case 500:b["a"].create({message:"服务器内部错误",color:"danger"});break}return Promise.reject(e)})),a.prototype.$axios=oe.a;case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ue=t("4eb5"),ce=t.n(ue);h["a"].use(ce.a);t("6b54"),t("f576");function se(){return le.apply(this,arguments)}function le(){return le=f()(p.a.mark((function e(){var n,t,r,a,o,i,u,c,s;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:n=e.sent,t=n.app,r=n.store,a=n.router,o=!0,i=function(e){o=!1,window.location.href=e},u=window.location.href.replace(window.location.origin,""),c=[ie,void 0,void 0,void 0],s=0;case 11:if(!(!0===o&&s<c.length)){e.next=29;break}if("function"===typeof c[s]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,c[s]({app:t,router:a,store:r,Vue:h["a"],ssrContext:null,redirect:i,urlPath:u});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:s++,e.next=11;break;case 29:if(!1!==o){e.next=31;break}return e.abrupt("return");case 31:new h["a"](t);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),le.apply(this,arguments)}h["a"].prototype.$tools=window.$tools={tsmToString:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(void 0===e||null===e||0===e||""===e)return"-";var r=new Date(1e3*e),a=r.getFullYear()+"-"+(r.getMonth()+1).toString().padStart(2,"0")+"-"+r.getDate().toString().padStart(2,"0"),o="";return n&&(o=" "+r.getHours().toString().padStart(2,"0")+":"+r.getMinutes().toString().padStart(2,"0"),t&&(o+=":"+r.getSeconds().toString().padStart(2,"0"))),a+o},download:function(e,n,t){if(window.navigator&&window.navigator.msSaveOrOpenBlob){var r=new Blob([e],{type:t});window.navigator.msSaveOrOpenBlob(r,n)}else{var a=new Blob([e],{type:t}),o=document.createElement("a"),i=window.URL.createObjectURL(a);o.href=i,o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(i)}},createListQuery:function(e){var n=e.page,t=e.rowsPerPage,r=e.sortBy,a=e.descending;return{page:n,size:t,column:r,order:a?"desc":"asc"}},bytesToSize:function(e){if(null===e||0===parseInt(e))return"0 B";var n=!1;e<0&&(n=!0,e=-e);var t=1024,r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],a=Math.floor(Math.log(e)/Math.log(t));return(n?"-":"")+(e/Math.pow(t,a)).toFixed(2)+" "+r[a]},formatSeconds:function(e){var n=parseInt(e),t=0,r=0,a=0;n>60&&(t=parseInt(n/60),n=parseInt(n%60),t>60&&(r=parseInt(t/60),t=parseInt(t%60),r>24&&(a=parseInt(r/24),r=parseInt(r%24))));var o="";return n>0&&(o=parseInt(n)+"秒"),t>0&&(o=parseInt(t)+"分"+o),r>0&&(o=parseInt(r)+"小时"+o),a>0&&(o=parseInt(a)+"天"+o),o}},h["a"].prototype.$productType={base_ss:"SS底包",base_v2ray:"V2Ray底包",node_ss:"SS线路",node_v2ray:"V2Ray线路",pack_ss:"SS套餐",pack_v2ray:"V2Ray套餐",trf_pkg:"流量包",transfer_proxy:"流量转发"},h["a"].prototype.$serviceStatus={pending:"待开通",active:"有效的",suspended:"已暂停",terminated:"已销毁",cancelled:"已取消"},h["a"].prototype.$serviceStatusColor={pending:"red",active:"green",suspended:"orange",terminated:"yellow",cancelled:"grey"},h["a"].prototype.$invoiceStatus={text:["未付款","已付款","已取消","已退款"],color:["red","green","grey","orange"]},h["a"].prototype.$ticketType={service:"服务售后",consult:"咨询",advice:"建议",complain:"投诉",other:"其他"},h["a"].prototype.$ticketStatus={text:["已开启","管理员已回复","用户已回复","已关闭","等待处理"],color:["green","orange","yellow","grey","blue"]},h["a"].prototype.$tradeStatus=["未完成","已完成","已退款"],se()},"31cd":function(e,n,t){}},[[0,2,0]]]);