(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0542":function(t,e,s){},"1c93":function(t,e,s){"use strict";e["a"]={deep:!0,handler:function(t){t&&(this.refresh(),this.$store.dispatch("base/refreshEnd"))}}},"2e21":function(t,e,s){"use strict";var a=s("0542"),n=s.n(a);n.a},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-pull-to-refresh",{on:{refresh:t.refresh}},[s("q-page",[s("div",{staticClass:"q-pa-md row items-start q-gutter-md justify-center"},[s("div",{staticClass:"col-12 col-md-6"},[s("q-card",{staticClass:"my-card"},[s("q-card-section",[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6"},[t._v("流量总览")])]),s("div",{staticClass:"col-auto"},[s("q-btn",{attrs:{flat:""},on:{click:t.getTransferInfo}},[t._v("刷新")])],1)])]),s("q-separator"),s("q-card-section",[s("q-linear-progress",{staticClass:"q-mt-sm",attrs:{size:"25px",value:t.transfer.usage/t.transfer.total}},[s("div",{staticClass:"absolute-full flex flex-center"},[s("q-badge",{attrs:{color:"white","text-color":"blue",label:t.transferPercent}})],1)]),s("ul",{staticClass:"usage"},[s("li",[t._v("总流量："+t._s(t._f("bytesToSize")(t.transfer.total)))]),s("li",[t._v("已使用流量："+t._s(t._f("bytesToSize")(t.transfer.usage)))]),s("li",[t._v("剩余流量："+t._s(t._f("bytesToSize")(t.rest)))])])],1)],1)],1),s("div",{staticClass:"col-12 col-md-grow"},[s("q-card",{staticClass:"my-card"},[s("q-card-section",[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6"},[t._v("公告")])]),s("div",{staticClass:"col-auto"},[s("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"more_vert"}},[s("q-menu",{attrs:{"auto-close":""}},[s("q-list",{staticStyle:{width:"120px"}},[s("q-item",{attrs:{clickable:""},on:{click:t.getLatestAnnouncement}},[s("q-item-section",[t._v("刷新")])],1),s("q-item",{attrs:{clickable:""},on:{click:t.toAnnoucementPanel}},[s("q-item-section",[t._v("网页版")])],1),s("q-item",{attrs:{clickable:""},on:{click:t.toTelegramChannel}},[s("q-item-section",[t._v("Telegram频道")])],1)],1)],1)],1)],1)])]),s("q-separator"),s("q-card-section",[t._v("\n            "+t._s(t.announcement)+"\n          ")])],1)],1)]),s("div",{staticClass:"q-pb-md q-px-md row items-start q-gutter-md justify-center"},[s("div",{staticClass:"col-12 col-md-6"},[s("q-card",{staticClass:"my-card"},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("活动")])]),s("q-separator"),s("q-card-section",[t._v("\n            正在建设...\n          ")])],1)],1),s("div",{staticClass:"col-12 col-md-grow"},[s("q-card",{staticClass:"my-card"},[s("q-card-section",[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-h6"},[t._v("Tips")])]),s("div",{staticClass:"col-auto"},[s("q-btn",{attrs:{flat:""},on:{click:t.changeTip}},[t._v("换一个")])],1)])]),s("q-separator"),s("q-card-section",[t._v("\n            "+t._s(t.tips)+"\n          ")])],1)],1)])])],1)},n=[],r=s("1c93"),i=["你知道吗？右上角的刷新图标可以刷新当前页面","关注我们的Telegram频道，能够第一时间获取最新内容，比公告板内容要丰富哦","登录状态一般2小时后到期，不过只要在到期前15分钟内任意请求操作，就会自动续期哦","提交工单时请完整描述您的问题，有利于问题快速解决","你知道吗？首页和商店页面可以下拉刷新","每个底包只能绑定同一个节点一次，但可以绑定不同节点，而流量包可以无限绑定","在设置中把“出账时优先使用余额”打开，可以在余额充足的清空下实现自动续费哦","服务开通是一个异步过程，需要等待队列处理器处理完以后才会开通，在队列阻塞的情况下，可能会导致服务延迟开通"],c={name:"PageIndex",filters:{bytesToSize:function(t){return window.$tools.bytesToSize(t)}},data:function(){return{transfer:{total:1,usage:0},tips:null,announcement:"最新公告"}},created:function(){this.refresh()},methods:{toAnnoucementPanel:function(){window.open("https://ann.msknw.live")},toTelegramChannel:function(){window.open("https://t.me/misakanetwork_ann")},refresh:function(t){this.changeTip(),this.getTransferInfo(),this.getLatestAnnouncement(),t&&t()},changeTip:function(){this.tips=i[Math.floor(Math.random()*i.length)]},getTransferInfo:function(){var t=this;this.$axios.get("/user/transferInfo").then((function(e){t.transfer=e.data}))},getLatestAnnouncement:function(){var t=this;this.$axios.get("/getLatestAnnouncement").then((function(e){t.announcement=e.data}))}},computed:{transferPercent:function(){return(this.transfer.usage/this.transfer.total*100||0).toFixed(2)+"%"},rest:function(){return this.transfer.total-this.transfer.usage}},watch:{"$store.getters.refresh":r["a"]}},o=c,l=(s("2e21"),s("2877")),d=s("eebe"),u=s.n(d),f=s("59d7"),m=s("9989"),h=s("f09f"),v=s("a370"),p=s("9c40"),q=s("eb85"),g=s("6b1d"),C=s("58a8"),w=s("4e73"),_=s("1c1c"),b=s("66e5"),T=s("4074"),x=Object(l["a"])(o,a,n,!1,null,"1bb232f5",null);e["default"]=x.exports;u()(x,"components",{QPullToRefresh:f["a"],QPage:m["a"],QCard:h["a"],QCardSection:v["a"],QBtn:p["a"],QSeparator:q["a"],QLinearProgress:g["a"],QBadge:C["a"],QMenu:w["a"],QList:_["a"],QItem:b["a"],QItemSection:T["a"]})}}]);