(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{1711:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md row items-start q-gutter-sm"},[a("div",{staticClass:"col-12 col-md"},[t.binded?a("q-card",{staticClass:"my-card"},[a("q-card-section",[t._v("\n        解绑Telegram账号\n      ")]),a("q-separator"),a("q-card-section",[a("p",[t._v("方法：")]),t._v("\n        1. 点击按钮"),a("q-btn",{attrs:{flat:"",color:"red"},on:{click:t.unlink}},[t._v("解绑")]),a("p",[t._v("\n          2.\n          发送 /unlink 给机器人\n          "),a("a",{staticClass:"text-blue",staticStyle:{"text-decoration":"none"},attrs:{href:"https://t.me/misakanetwork_bot",target:"_blank"}},[t._v("@misakanetwork_bot")])])],1)],1):t._e(),t.binded?t._e():a("q-card",{staticClass:"my-card"},[a("q-card-section",[t._v("\n        绑定Telegram账号\n      ")]),a("q-separator"),a("q-card-section",[a("ol",[a("li",[t._v("需要拥有Telegram账号和客户端（或网页版）。")]),a("li",[t._v("打开Telegram，搜索 @misakanetwork_bot，点击第一项进入聊天界面；客户端亦可通过\n            "),a("a",{staticClass:"text-blue",staticStyle:{"text-decoration":"none"},attrs:{href:"https://t.me/misakanetwork_bot",target:"_blank"}},[t._v("这里")]),t._v("\n            进入聊天界面。\n          ")]),a("li",[t._v("\n            发送以下二维码"),a("br"),a("vue-qr",{attrs:{logoSrc:t.imgUrl,text:t.code,size:200}}),a("br"),t._v("\n            或代码\n            "),a("b",{staticClass:"cursor-pointer text-blue",on:{click:t.doCopy}},[t._v("\n              "+t._s(t.code)+"\n            ")]),t._v("\n            给机器人\n          ")],1),a("li",[t._v("Enjoy!")])]),a("div",[t._v("若遇到问题，请前往Telegram群组反馈（侧边栏的反馈）。")])])],1)],1),a("div",{staticClass:"col-12 col-md"},[a("q-card",{staticClass:"my-card"},[a("q-card-section",[t._v("\n        Telegram功能设置\n      ")]),a("q-separator"),t.binded?a("q-card-section",[a("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit,reset:t.onReset}},[a("div",[a("q-checkbox",{model:{value:t.data.remind,callback:function(e){t.$set(t.data,"remind",e)},expression:"data.remind"}},[t._v("启用账单提醒")])],1),a("div",[a("q-checkbox",{model:{value:t.data.use_avatar,callback:function(e){t.$set(t.data,"use_avatar",e)},expression:"data.use_avatar"}},[t._v("使用Telegram头像[提示：勾选并保存后，退出登录，然后使用Telegram小部件登录，以更新Telegram头像]")])],1),a("div",[a("q-btn",{attrs:{label:"保存",type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"重置",type:"reset",color:"primary",flat:""}})],1)])],1):t._e(),t.binded?t._e():a("q-card-section",[t._v("\n        请先绑定后再设置\n      ")])],1)],1)])},o=[],s=a("658f"),i=a.n(s),r=a("1c93"),c={data:function(){return{code:"",data:{},binded:!1,imgUrl:a("a1cf")}},created:function(){this.loadInfo()},methods:{loadInfo:function(){var t=this;this.$axios.get("/user/telegram/info").then((function(e){var a=e.data,n=a.bind,o=a.info;t.binded=n,t.data=o,n||t.getCode()}))},refresh:function(){this.loadInfo()},getCode:function(){var t=this;this.$axios.get("/user/telegram/code").then((function(e){if(!e.data.success)throw new Error;t.code=e.data.code})).catch((function(){t.$q.notify("获取绑定代码失败")}))},onSubmit:function(){var t=this;this.$axios.post("/user/telegram/info",this.data).then((function(){t.$q.notify("保存成功")})).catch((function(){t.$q.notify("保存失败")}))},onReset:function(){this.loadInfo()},doCopy:function(){var t=this;this.$copyText(this.code).then((function(e){t.$q.notify({color:"positive",message:"复制成功"})}),(function(e){t.$q.notify({color:"warning",message:"复制失败，请手动复制"})}))},unlink:function(){var t=this;this.$axios.post("/user/telegram/unbind").then((function(){t.$q.notify("解绑成功"),t.refresh()}))}},components:{vueQr:i.a},watch:{"$store.getters.refresh":r["a"]}},d=c,l=a("2877"),f=a("eebe"),u=a.n(f),m=a("f09f"),v=a("a370"),h=a("eb85"),b=a("9c40"),_=a("0378"),p=a("8f8e"),q=Object(l["a"])(d,n,o,!1,null,"0fe61d73",null);e["default"]=q.exports;u()(q,"components",{QCard:m["a"],QCardSection:v["a"],QSeparator:h["a"],QBtn:b["a"],QForm:_["a"],QCheckbox:p["a"]})},"1c93":function(t,e,a){"use strict";e["a"]={deep:!0,handler:function(t){t&&(this.refresh(),this.$store.dispatch("base/refreshEnd"))}}},a1cf:function(t,e,a){t.exports=a.p+"img/qrcode_icon.c5f467a4.jpg"}}]);