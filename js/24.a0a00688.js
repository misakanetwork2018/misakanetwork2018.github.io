(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"1c93":function(t,a,e){"use strict";a["a"]={deep:!0,handler:function(t){t&&(this.refresh(),this.$store.dispatch("base/refreshEnd"))}}},cf89:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("div",{staticClass:"q-pa-md"},[e("q-table",{attrs:{title:"我的账单",data:t.data,columns:t.columns,"table-style":"max-height: calc(100vh - 80px)","row-key":"id","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[10,20,50,100],"no-data-label":"暂无账单",loading:t.loading,dense:t.$q.screen.lt.md,"binary-state-sort":""},on:{"update:pagination":function(a){t.pagination=a},"row-click":t.rowClick,request:t.loadList},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"q-table__title q-mr-md"},[t._v("我的账单")]),e("q-option-group",{attrs:{options:t.options,color:"green",type:"checkbox",inline:""},model:{value:t.status,callback:function(a){t.status=a},expression:"status"}})]},proxy:!0},{key:"body-cell-status",fn:function(a){return[e("q-td",{attrs:{props:a}},[e("div",[e("q-badge",{attrs:{color:t.$invoiceStatus.color[a.value]}},[t._v("\n              "+t._s(t.$invoiceStatus.text[a.value])+"\n            ")])],1)])]}},{key:"body-cell-op",fn:function(a){return[e("q-td",{attrs:{props:a}},[e("div",[e("q-btn",{attrs:{color:"primary",disable:0!=a.row.status},on:{click:function(e){return e.stopPropagation(),t.payByCredit(a.row)}}},[t._v("使用余额支付")]),e("q-btn",{attrs:{flat:"",to:{name:"invoice",params:{id:a.row.id}}},on:{click:function(t){t.stopPropagation()}}},[t._v("查看")])],1)])]}}])})],1)])},i=[],s=e("1c93"),o={data:function(){var t=this;return{loading:!1,data:[],columns:[{name:"id",label:"#",field:"id",align:"right",sortable:!0,style:"width: 80px"},{name:"created",label:"开具时间",field:"created",align:"center",format:function(a){return t.$tools.tsmToString(a)},sortable:!0},{name:"expire",label:"过期时间",field:"expire",align:"center",format:function(a){return t.$tools.tsmToString(a)},sortable:!0},{name:"amount",label:"总计",align:"center",field:"amount",sortable:!0,format:function(t){return"￥".concat(t)}},{name:"status",label:"状态",align:"center",field:"status",sortable:!0},{name:"op",label:"",align:"left",style:"width: 100px"}],status:[],options:[],pagination:{sortBy:"status",descending:!1,page:1,rowsPerPage:10,rowsNumber:0}}},created:function(){var t=this,a=!0,e=localStorage.getItem("invoice_status_select"),n=[];e?n=JSON.parse(e):a=!1,this.$invoiceStatus.text.forEach((function(e,i){t.options.push({label:e,value:i}),a&&-1===n.indexOf(i)||t.status.push(i)})),localStorage.setItem("invoice_status_select",JSON.stringify(this.status)),this.refresh()},methods:{refresh:function(){this.loadList({pagination:this.pagination})},loadList:function(t){var a=this,e=t.pagination,n=e.page,i=e.rowsPerPage,s=e.sortBy,o=e.descending;this.loading=!0,this.showDialog=!1;var r=this.$tools.createListQuery(t.pagination);r.status=this.status,this.$axios.get("/invoice/list",{params:r}).then((function(t){var e=t.data,r=e.data,l=e.total;a.data=r,a.pagination.rowsNumber=l,a.loading=!1,a.pagination.page=n,a.pagination.rowsPerPage=i,a.pagination.sortBy=s,a.pagination.descending=o}))},rowClick:function(t,a){this.$router.push({name:"invoice",params:{id:a.id}})},payByCredit:function(t){var a=this;this.$q.dialog({title:"使用账户余额支付",message:"该操作将从账户中扣除 "+t.amount+"，确定吗？",cancel:!0,persistent:!0}).onOk((function(){a.$axios.post("/invoice/"+t.id+"/credit",{credit:0,all:!0}).then((function(t){t.data.success?(a.refresh(),a.$q.notify("付款成功")):a.$q.dialog({title:"警告",message:t.data.msg})}))}))}},components:{},watch:{"$store.getters.refresh":s["a"],status:function(t,a){0!==t.length?(this.refresh(),localStorage.setItem("invoice_status_select",JSON.stringify(t))):this.status=a}}},r=o,l=e("2877"),c=e("eebe"),u=e.n(c),d=e("9989"),p=e("eaac"),g=e("9f0a"),f=e("db86"),h=e("58a8"),m=e("9c40"),b=Object(l["a"])(r,n,i,!1,null,"de69a194",null);a["default"]=b.exports;u()(b,"components",{QPage:d["a"],QTable:p["a"],QOptionGroup:g["a"],QTd:f["a"],QBadge:h["a"],QBtn:m["a"]})}}]);