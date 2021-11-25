(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"1c93":function(t,o,e){"use strict";o["a"]={deep:!0,handler:function(t){t&&(this.refresh(),this.$store.dispatch("base/refreshEnd"))}}},"33ef":function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-page",[e("div",{staticClass:"q-pa-md"},[e("q-table",{attrs:{title:"我的服务",data:t.data,columns:t.columns,"table-style":"max-height: calc(100vh - 80px)","row-key":"id","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[10,20,50,100],"no-data-label":"暂无服务",loading:t.loading,dense:t.$q.screen.lt.md,"binary-state-sort":""},on:{"update:pagination":function(o){t.pagination=o},"row-click":t.rowClick,request:t.loadList},scopedSlots:t._u([{key:"top-left",fn:function(){return[e("div",{staticClass:"row"},[e("div",{staticClass:"q-table__title q-mr-md",staticStyle:{"line-height":"40px"}},[t._v("我的服务")]),e("q-option-group",{attrs:{options:t.options,color:"green",type:"checkbox",inline:""},model:{value:t.status,callback:function(o){t.status=o},expression:"status"}})],1)]},proxy:!0},{key:"top-right",fn:function(){return[e("q-btn",{attrs:{label:"订阅",color:"primary"},on:{click:t.subscribe}})]},proxy:!0},{key:"body-cell-name",fn:function(o){return[e("q-td",{attrs:{props:o}},[e("div",{staticClass:"text-subtitle1"},[t._v("\n            "+t._s(o.row.product.name)+" - "+t._s(t.$productType[o.row.product.type])+"\n          ")]),e("div",{staticClass:"cursor-pointer text-primary",on:{click:function(t){t.stopPropagation()}}},[t._v("\n            "+t._s(o.value)+"\n            "),e("q-popup-edit",{attrs:{title:"编辑服务标签",buttons:""},on:{save:function(e,i){return t.saveLabel(o,e,i)}},model:{value:o.row.name,callback:function(e){t.$set(o.row,"name",e)},expression:"props.row.name"}},[e("q-input",{attrs:{dense:"",autofocus:"",counter:""},model:{value:o.row.name,callback:function(e){t.$set(o.row,"name",e)},expression:"props.row.name"}})],1)],1)])]}},{key:"body-cell-price",fn:function(o){return[e("q-td",{attrs:{props:o}},[o.row.product.price===o.row.price?e("div",[t._v("\n            ￥"+t._s(o.row.product.price)+"\n          ")]):e("div",[t._v("\n            ￥"+t._s(o.row.price)+"\n            "),e("s",{staticStyle:{color:"#aaaaaa"}},[t._v("￥"+t._s(o.row.product.price))])]),e("div",[t._v("\n            "+t._s(o.row.product.renewable?"每"+o.row.product.period+"天":"一次性")+"\n          ")])])]}},{key:"body-cell-op",fn:function(o){return[e("q-td",{attrs:{props:o}},[e("div",[e("q-btn",{attrs:{color:"primary",disable:!o.row.product.renewable||"active"!=o.row.status&&"suspended"!=o.row.status},on:{click:function(e){return e.stopPropagation(),t.renew(o.row.id)}}},[t._v("续费")]),e("q-btn",{attrs:{flat:"",to:{name:"service",params:{id:o.row.id}}},on:{click:function(t){t.stopPropagation()}}},[t._v("管理服务")])],1)])]}},{key:"body-cell-status",fn:function(o){return[e("q-td",{attrs:{props:o}},[e("div",[e("q-badge",{attrs:{color:t.$serviceStatusColor[o.value]}},[t._v("\n              "+t._s(t.$serviceStatus[o.value])+"\n            ")])],1)])]}}])})],1),e("renew-dialog",{ref:"renew",on:{refresh:t.refresh}}),e("q-dialog",{model:{value:t.showSubscription,callback:function(o){t.showSubscription=o},expression:"showSubscription"}},[e("q-card",{staticStyle:{width:"830px","max-width":"80vw"}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("订阅地址")])]),e("q-card-section",{staticClass:"q-pt-none"},[e("p",[e("a",[t._v("SS："+t._s(t.subscription.ss))]),e("q-btn",{attrs:{label:"复制",flat:"",color:"primary"},on:{click:function(o){return t.doCopy(t.subscription.ss)}}})],1),e("p",[t._v("\n          V2："+t._s(t.subscription.v2)+"\n          "),e("q-btn",{attrs:{label:"复制",flat:"",color:"primary"},on:{click:function(o){return t.doCopy(t.subscription.v2)}}})],1),e("p",[t._v("\n          全部："+t._s(t.subscription.all)+"\n          "),e("q-btn",{attrs:{label:"复制",flat:"",color:"primary"},on:{click:function(o){return t.doCopy(t.subscription.all)}}})],1)]),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1)],1)},s=[],a=(e("7f7f"),e("1c93")),n=e("47f0"),r={data:function(){var t=this;return{loading:!1,loaded:!1,data:[],columns:[{name:"name",required:!0,label:"产品/服务",align:"left",field:"name",sortable:!0},{name:"price",label:"价格",field:"price",align:"center",style:"width: 200px"},{name:"expire",label:"下次付款日",field:"expire",align:"left",sortable:!0,style:"width: 200px",format:function(o,e){return e.product.renewable?t.$tools.tsmToString(o,!1):"-"}},{name:"status",label:"状态",align:"center",field:"status",sortable:!0,style:"width: 80px"},{name:"op",label:"",align:"left",style:"width: 120px"}],status:[],options:[],pagination:{sortBy:"expire",descending:!1,page:1,rowsPerPage:10,rowsNumber:0},subscription:{},showSubscription:!1}},created:function(){var t=!0,o=localStorage.getItem("service_status_select"),e=[];for(var i in o?e=JSON.parse(o):t=!1,this.$serviceStatus){var s=this.$serviceStatus[i];this.options.push({label:s,value:i}),t&&-1===e.indexOf(i)||this.status.push(i)}localStorage.setItem("service_status_select",JSON.stringify(this.status)),this.refresh()},methods:{refresh:function(){this.loadList({pagination:this.pagination})},loadList:function(t){var o=this,e=t.pagination,i=e.page,s=e.rowsPerPage,a=e.sortBy,n=e.descending;this.loading=!0,this.showDialog=!1;var r=this.$tools.createListQuery(t.pagination);r.status=this.status,this.$axios.get("/service/list",{params:r}).then((function(t){var e=t.data,r=e.data,c=e.total;o.data=r,o.pagination.rowsNumber=c,o.loading=!1,o.pagination.page=i,o.pagination.rowsPerPage=s,o.pagination.sortBy=a,o.pagination.descending=n,o.loaded=!0}))},rowClick:function(t,o){this.$router.push({name:"service",params:{id:o.id}})},renew:function(t){this.$refs.renew.load(t)},saveLabel:function(t,o,e){var i=this;this.$axios.post("/service/saveOrderSettings",{id:t.row.id,data:{name:o}}).catch((function(){i.$q.notify("修改标签失败"),t.row.name=e}))},doCopy:function(t){var o=this;this.$copyText(t).then((function(t){o.$q.notify({color:"positive",message:"复制成功"})}),(function(t){o.$q.notify({color:"warning",message:"复制失败，请手动复制"})}))},subscribe:function(){var t=this;this.showSubscription=!1,this.$axios.get("/subscription/link").then((function(o){t.subscription=o.data,t.showSubscription=!0}))}},components:{RenewDialog:n["a"]},watch:{"$store.getters.refresh":a["a"],status:function(t,o){this.loaded&&(0!==t.length?(this.refresh(),localStorage.setItem("service_status_select",JSON.stringify(t))):this.status=o)}}},c=r,l=e("2877"),p=e("eebe"),u=e.n(p),d=e("9989"),m=e("eaac"),f=e("9f0a"),h=e("9c40"),v=e("db86"),b=e("42a1"),g=e("27f9"),w=e("58a8"),y=e("24e8"),_=e("f09f"),q=e("a370"),C=e("4b7e"),x=e("7f67"),k=Object(l["a"])(c,i,s,!1,null,"5a736e06",null);o["default"]=k.exports;u()(k,"components",{QPage:d["a"],QTable:m["a"],QOptionGroup:f["a"],QBtn:h["a"],QTd:v["a"],QPopupEdit:b["a"],QInput:g["a"],QBadge:w["a"],QDialog:y["a"],QCard:_["a"],QCardSection:q["a"],QCardActions:C["a"]}),u()(k,"directives",{ClosePopup:x["a"]})},"47f0":function(t,o,e){"use strict";var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-dialog",{model:{value:t.visible,callback:function(o){t.visible=o},expression:"visible"}},[e("q-card",[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("续费")])]),e("q-card-section",{staticClass:"q-pt-none"},[e("p",{staticClass:"q-mx-xs"},[t._v("温馨提示：默认情况下，系统会自动出账，无需手动出账。")]),t.loading?e("div"):e("q-form",[e("div",{staticClass:"q-mx-xs"},[e("p",[t._v("续费价格："+t._s(t.info.price)+"元/"+t._s(t.info.period)+"天")]),e("p",{staticClass:"q-mb-lg"},[t._v("续费天数（只能选1-12个周期）")]),e("div",{staticClass:"q-ma-xs"},[e("q-slider",{attrs:{min:1,max:12,label:"","label-value":t.sliderLabel,"label-always":""},model:{value:t.form.periodTimes,callback:function(o){t.$set(t.form,"periodTimes",o)},expression:"form.periodTimes"}})],1),e("p",[t._v("小计：￥"+t._s(t.amount.toFixed(2)))]),e("p",[t._v("优惠：￥"+t._s(t.discount.toFixed(2)))]),e("p",[t._v("总计：￥"+t._s(t.total.toFixed(2)))]),e("p",[t._v("请注意：此处使用的优惠码，不会绑定到服务；此处不填写优惠码，则账单中会使用服务绑定的优惠码（如果可用）；\n            若此处填写可用的优惠码，则账单中会使用该优惠码，且不与绑定的优惠码叠加。")])]),e("div",{staticClass:"q-gutter-sm"},[e("div",{staticClass:"q-ma-md"},[t.promotion.pass?t._e():e("q-input",{attrs:{label:"优惠码"},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.form.promotionCode?e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(o){t.form.promotionCode=""}}}):t._e(),e("q-btn",{attrs:{flat:"",color:"primary",label:"验证"},on:{click:t.promotionCodeCheck}})]},proxy:!0}],null,!1,1562885562),model:{value:t.form.promotionCode,callback:function(o){t.$set(t.form,"promotionCode",o)},expression:"form.promotionCode"}})],1),t.promotion.pass?e("p",{staticClass:"q-mt-md"},[t._v("\n            优惠："+t._s(t.promotion.show)+"\n            "),e("q-btn",{attrs:{flat:"",label:"撤销优惠"},on:{click:t.removePromotion}})],1):t._e(),e("div",{staticClass:"row inline q-gutter-md q-mx-xs"},[e("div",[t._v("支付方式")]),e("q-option-group",{attrs:{options:t.payments,color:"primary",inline:"",dense:""},model:{value:t.form.payment,callback:function(o){t.$set(t.form,"payment",o)},expression:"form.payment"}})],1)]),e("div",{staticClass:"q-mt-sm"},[e("q-checkbox",{attrs:{label:"使用余额支付（余额："+t.info.credit+"元）"},model:{value:t.form.useCredit,callback:function(o){t.$set(t.form,"useCredit",o)},expression:"form.useCredit"}})],1),e("q-checkbox",{model:{value:t.accept,callback:function(o){t.accept=o},expression:"accept"}},[t._v("\n          我同意御坂网络的\n          "),e("b",[e("router-link",{attrs:{to:"/tos"},scopedSlots:t._u([{key:"default",fn:function(o){var i=o.href,s=o.navigate;return[e("a",{attrs:{href:i,target:"_blank"},on:{click:function(t){return t.stopPropagation(),s(t)}}},[t._v("TOS")])]}}])})],1),t._v("\n          及\n          "),e("b",[e("router-link",{attrs:{to:"/aup"},scopedSlots:t._u([{key:"default",fn:function(o){var i=o.href,s=o.navigate;return[e("a",{attrs:{href:i,target:"_blank"},on:{click:function(t){return t.stopPropagation(),s(t)}}},[t._v("AUP")])]}}])})],1)])],1)],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"取消"}}),e("q-btn",{attrs:{flat:"",label:"续费",color:"primary"},on:{click:t.createInvoice}})],1)],1)],1)},s=[],a={data:function(){return{visible:!1,loading:!1,info:{},form:{id:0,periodTimes:1,payment:null,useCredit:!1,promotionCode:null},promotion:{show:"",discount:0,code:"",pass:!1},payment:null,accept:!1,payments:[],defaultDiscount:0}},methods:{load:function(t){var o=this;this.loading=!0,this.$axios.get("/service/checkRenew/"+t).then((function(e){var i=e.data,s=i.renewable,a=i.msg,n=i.info,r=i.payment,c=i.useCredit,l=i.discount;s?(o.info=n,o.form={id:t,periodTimes:1,payment:r,useCredit:c,promotionCode:""},o.defaultDiscount=l,o.promotion={show:"",discount:l,code:"",pass:!1},o.$forceUpdate(),o.loading=!1,o.show(),o.getPayments()):o.$q.dialog({title:"警告",message:a})}))},show:function(){this.visible=!1,this.visible=!0},hide:function(){this.visible=!1},promotionCodeCheck:function(){var t=this;this.$axios.post("/product/promotion_code/check",{code:this.form.promotionCode,pid:this.info.pid,renew:!0,times:this.form.periodTimes}).then((function(o){o.data.success?t.promotion=o.data.promotion:(t.$q.dialog({title:"优惠码无效",message:o.data.msg}),t.form.promotionCode="")}))},removePromotion:function(){this.form.promotionCode=null,this.promotion.code="",this.promotion.pass=!1,this.promotion.discount=this.defaultDiscount},getPayments:function(){var t=this;this.$axios.get("/payments").then((function(o){var e=[],i=o.data;for(var s in i)e.push({label:i[s],value:s});t.payments=e}))},createInvoice:function(){var t=this;this.accept?!this.form.promotionCode||this.promotion.pass?this.$axios.post("/service/renew",this.form).then((function(o){o.data.success&&("service"===o.data.to?(t.$emit("refresh"),t.visible=!1,t.$q.notify("续费成功")):t.$router.push({name:"invoice",params:{id:o.data.id}}))})):this.$q.dialog({title:"警告",message:"请先验证优惠码，否则请删除它"}):this.$q.dialog({title:"警告",message:"请勾选同意协议后再购买"})}},computed:{sliderLabel:function(){return this.form.periodTimes*this.info.period+"天"},amount:function(){return this.form.periodTimes*this.info.price},discount:function(){return this.promotion.discount},total:function(){return this.amount-this.discount}},watch:{"form.periodTimes":{deep:!0,handler:function(){this.removePromotion()}}}},n=a,r=e("2877"),c=e("eebe"),l=e.n(c),p=e("24e8"),u=e("f09f"),d=e("a370"),m=e("0378"),f=e("c1d0"),h=e("27f9"),v=e("0016"),b=e("9c40"),g=e("9f0a"),w=e("8f8e"),y=e("4b7e"),_=e("7f67"),q=Object(r["a"])(n,i,s,!1,null,null,null);o["a"]=q.exports;l()(q,"components",{QDialog:p["a"],QCard:u["a"],QCardSection:d["a"],QForm:m["a"],QSlider:f["a"],QInput:h["a"],QIcon:v["a"],QBtn:b["a"],QOptionGroup:g["a"],QCheckbox:w["a"],QCardActions:y["a"]}),l()(q,"directives",{ClosePopup:_["a"]})}}]);