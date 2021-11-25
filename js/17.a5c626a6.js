(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"5d54":function(t,e,a){"use strict";var n=a("e9eb"),o=a.n(n);o.a},8838:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-splitter",{staticStyle:{height:"calc(100vh - 50px)"},attrs:{value:80,disable:!0,unit:"px"},scopedSlots:t._u([{key:"before",fn:function(){return[a("q-tabs",{staticClass:"text-teal",attrs:{vertical:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"base",icon:"sim_card",label:"底包"}}),a("q-tab",{attrs:{name:"node",icon:"signal_cellular_4_bar",label:"线路"}}),a("q-tab",{attrs:{name:"package",icon:"shop_two",label:"套餐"}}),a("q-tab",{attrs:{name:"traffic",icon:"signal_wifi_4_bar",label:"流量包"}}),a("q-tab",{attrs:{name:"other",icon:"device_unknown",label:"其他"}})],1)]},proxy:!0},{key:"after",fn:function(){return[a("q-inner-loading",{attrs:{showing:!t.loaded}},[a("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1),a("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-down"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.data,(function(e,n){return a("q-tab-panel",{key:n,attrs:{name:n}},[a("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[0===e.length?a("p",[t._v("暂无产品")]):t._e(),t._l(e,(function(e,n){return a("q-card",{key:n,staticClass:"bg-secondary text-white",staticStyle:{"min-width":"200px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(e.name))]),a("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.$productType[e.type]))])]),a("q-card-section",{domProps:{innerHTML:t._s(e.description)}}),a("q-separator",{attrs:{dark:""}}),a("q-card-actions",{attrs:{align:"around"}},[a("span",[t._v(t._s(e.price)+"元"+t._s(e.renewable?"/"+e.period+"天":""))]),a("q-btn",{attrs:{flat:""},on:{click:function(a){return t.cart(e.id)}}},[t._v("购买")])],1)],1)}))],2)])})),1)]},proxy:!0}])}),a("q-dialog",{model:{value:t.showCart,callback:function(e){t.showCart=e},expression:"showCart"}},[a("q-card",{staticStyle:{width:"500px","max-width":"80vw"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("订购产品")])]),a("q-form",{on:{submit:t.buy}},[a("q-card-section",{staticClass:"q-pt-none scroll",staticStyle:{"max-height":"50vh"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-9"},[a("div",{staticClass:"text-subtitle1"},[t._v("产品详情")]),a("q-separator"),a("div",[t._v("产品名称："+t._s(t.cartContent.name))]),a("div",[t._v("产品类型："+t._s(t.$productType[t.cartContent.type]))]),a("div",[t._v("产品价格："+t._s(t.cartContent.price)+"元"+t._s(t.cartContent.period?"/"+t.cartContent.period+"天":""))]),t.cartContent.setup>0?a("div",[t._v("设置费："+t._s(t.cartContent.setup))]):t._e(),a("div",[t._v("能否续费："+t._s(t.cartContent.renewable?"YES":"NO"))]),a("div",[t._v("产品描述："),a("span",{domProps:{innerHTML:t._s(t.cartContent.description)}})])],1),a("div",{staticClass:"col-12 col-md-3"},[a("div",{staticClass:"text-subtitle1"},[t._v("收费预览")]),a("q-separator"),a("div",[t._v("小计："+t._s(t.subtotal.toFixed(2))+"元")]),a("div",[t._v("优惠部分："+t._s(t.cartContent.promotion.discount.toFixed(2))+"元")]),a("div",[t._v("总计："+t._s(t.total.toFixed(2))+"元")])],1)]),a("q-separator"),t.cartContent.preorder?a("q-banner",{staticClass:"bg-orange text-white q-ma-md",attrs:{"inline-actions":"",rounded:""}},[t._v("\n            此产品现在"),a("b",[t._v("预售")]),t._v("中。在订购前，您应当明白该产品无现货，且正式开通时间以官方公告为准。\n          ")]):t._e(),a("div",{staticClass:"q-gutter-sm"},[t._l(t.cartContent.field,(function(e,n){return a("div",{key:n},["select"===e.type?a("q-select",{attrs:{options:e.list,label:e.label,"emit-value":"","map-options":"",rules:[function(t){return!e.required||!!t||"请选择"+e.label}]},model:{value:t.cartContent.extra[e.name],callback:function(a){t.$set(t.cartContent.extra,e.name,a)},expression:"cartContent.extra[field.name]"}}):t._e(),"select_link"===e.type?a("q-select",{attrs:{options:e.list,label:e.label,"emit-value":"","map-options":"",rules:[function(t){return!e.required||!!t||"请选择"+e.label}]},on:{input:function(a){return t.linkQuery(e.name,e.query_key,a,e.to)}},model:{value:t.cartContent.extra[e.name],callback:function(a){t.$set(t.cartContent.extra,e.name,a)},expression:"cartContent.extra[field.name]"}}):t._e()],1)})),a("div",{staticClass:"q-mb-md"},[t.cartContent.promotion.pass?t._e():a("q-input",{attrs:{label:"优惠码"},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.cartContent.promotion.code?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){t.cartContent.promotion.code=""}}}):t._e(),a("q-btn",{attrs:{flat:"",color:"primary",label:"验证"},on:{click:t.promotionCodeCheck}})]},proxy:!0}],null,!1,4144697626),model:{value:t.cartContent.promotion.code,callback:function(e){t.$set(t.cartContent.promotion,"code",e)},expression:"cartContent.promotion.code"}})],1),t.cartContent.promotion.pass?a("p",{staticClass:"q-mt-md"},[t._v("\n              优惠："+t._s(t.cartContent.promotion.show)+"\n              "),a("q-btn",{attrs:{flat:"",label:"撤销优惠"},on:{click:t.removePromotion}})],1):t._e(),a("div",{staticClass:"row inline q-gutter-md q-mx-xs"},[a("span",[t._v("支付方式")]),a("q-option-group",{attrs:{options:t.payments,color:"primary",inline:"",dense:""},model:{value:t.cartContent.payment,callback:function(e){t.$set(t.cartContent,"payment",e)},expression:"cartContent.payment"}})],1)],2),a("div",{staticClass:"q-mt-sm"},[a("q-checkbox",{attrs:{label:"使用余额支付（余额："+t.cartContent.credit+"元）"},model:{value:t.cartContent.use_credit,callback:function(e){t.$set(t.cartContent,"use_credit",e)},expression:"cartContent.use_credit"}})],1),a("q-checkbox",{model:{value:t.accept,callback:function(e){t.accept=e},expression:"accept"}},[t._v("\n            我同意御坂网络的\n            "),a("b",[a("router-link",{attrs:{to:"/tos"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,o=e.navigate;return[a("a",{attrs:{href:n,target:"_blank"},on:{click:function(t){return t.stopPropagation(),o(t)}}},[t._v("TOS")])]}}])})],1),t._v("\n            及\n            "),a("b",[a("router-link",{attrs:{to:"/aup"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.href,o=e.navigate;return[a("a",{attrs:{href:n,target:"_blank"},on:{click:function(t){return t.stopPropagation(),o(t)}}},[t._v("AUP")])]}}])})],1)])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消",color:"danger"}}),a("q-btn",{attrs:{flat:"",label:"下单",color:"primary",type:"submit"}})],1)],1)],1)],1)],1)},o=[],r=(a("7f7f"),a("551c"),a("06db"),a("097d"),{data:function(){return{tab:"base",loaded:!1,accept:!1,data:{},showCart:!1,cartContent:{promotion:{show:"",discount:0,code:"",pass:!1},fields:[],extra:[],payment:"",credit:0,use_credit:!1,promotion_alert:{show:!1,msg:""}},payments:[]}},created:function(){this.loadProductions()},methods:{loadProductions:function(t){var e=this;this.$axios.get("/product/list").then((function(a){e.data=a.data,e.loaded=!0,t&&t()}))},cart:function(t){var e=this;this.$q.loading.show({delay:400}),this.$axios.get("/product/"+t).then((function(t){e.showCart=!0,e.accept=!1,e.cartContent=t.data,e.$set(e.cartContent,"promotion",{show:"",discount:0,code:"",pass:!1}),e.getPayments()})).finally((function(){e.$q.loading.hide()}))},getPayments:function(){var t=this;this.$axios.get("/payments").then((function(e){var a=[],n=e.data;for(var o in n)a.push({label:n[o],value:o});t.payments=a}))},promotionCodeCheck:function(){var t=this;this.$axios.post("/product/promotion_code/check",{code:this.cartContent.promotion.code,pid:this.cartContent.id}).then((function(e){e.data.success?t.cartContent.promotion=e.data.promotion:(t.$q.dialog({title:"优惠码无效",message:e.data.msg}),t.cartContent.promotion.code="")}))},removePromotion:function(){this.cartContent.promotion.code="",this.cartContent.promotion.pass=!1,this.cartContent.promotion.discount=0},buy:function(){var t=this;this.accept?!this.cartContent.promotion.code||this.cartContent.promotion.pass?this.$axios.post("/service/create",{pid:this.cartContent.id,payment:this.cartContent.payment,use_credit:this.cartContent.use_credit,extra:this.cartContent.extra,promotion_code:this.cartContent.promotion.code}).then((function(e){var a=e.data;a.success?t.$router.push({name:a.to,params:{id:a.id}}):t.$q.notify({type:"warning",message:a.msg,position:"center"})})):this.$q.dialog({title:"警告",message:"请先验证优惠码，否则请删除它"}):this.$q.dialog({title:"警告",message:"请勾选同意协议后再购买"})},linkQuery:function(t,e,a,n){var o=this,r={id:this.cartContent.id,key:e};r[t]=a,this.$axios.get("/product/pluginGet",{params:r}).then((function(t){for(var e=0;e<o.cartContent.field.length;e++){var a=o.cartContent.field[e];a.name===n&&(a.list=t.data,o.cartContent.extra[n]=null)}}))}},computed:{subtotal:function(){return this.cartContent.price+this.cartContent.setup},total:function(){return this.subtotal-this.cartContent.promotion.discount}},watch:{"$store.getters.refresh":{deep:!0,handler:function(t){t&&(this.loadProductions(),this.$store.dispatch("base/refreshEnd"))}}}}),s=r,i=(a("5d54"),a("2877")),c=a("eebe"),l=a.n(c),d=a("9989"),p=a("8562"),u=a("429b"),m=a("7460"),f=a("74f7"),b=a("cf57"),h=a("adad"),v=a("823b"),C=a("f09f"),_=a("a370"),q=a("eb85"),g=a("4b7e"),x=a("9c40"),y=a("24e8"),k=a("0378"),w=a("54e1"),$=a("ddd8"),Q=a("27f9"),P=a("0016"),S=a("9f0a"),T=a("8f8e"),F=a("7f67"),O=Object(i["a"])(s,n,o,!1,null,"ff342fe6",null);e["default"]=O.exports;l()(O,"components",{QPage:d["a"],QSplitter:p["a"],QTabs:u["a"],QTab:m["a"],QInnerLoading:f["a"],QSpinnerGears:b["a"],QTabPanels:h["a"],QTabPanel:v["a"],QCard:C["a"],QCardSection:_["a"],QSeparator:q["a"],QCardActions:g["a"],QBtn:x["a"],QDialog:y["a"],QForm:k["a"],QBanner:w["a"],QSelect:$["a"],QInput:Q["a"],QIcon:P["a"],QOptionGroup:S["a"],QCheckbox:T["a"]}),l()(O,"directives",{ClosePopup:F["a"]})},e9eb:function(t,e,a){}}]);