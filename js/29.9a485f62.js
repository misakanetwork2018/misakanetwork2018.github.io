(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"1c93":function(t,e,a){"use strict";e["a"]={deep:!0,handler:function(t){t&&(this.refresh(),this.$store.dispatch("base/refreshEnd"))}}},"73c2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{title:"工单列表",data:t.data,columns:t.columns,"table-style":"max-height: calc(100vh - 80px)","row-key":"id","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[10,20,50,100],"no-data-label":"暂无工单",loading:t.loading,dense:t.$q.screen.lt.md,"binary-state-sort":""},on:{"update:pagination":function(e){t.pagination=e},"row-click":t.rowClick,request:t.loadList},scopedSlots:t._u([{key:"top-left",fn:function(){return[a("div",{staticClass:"row"},[a("div",{staticClass:"q-table__title q-mr-md",staticStyle:{"line-height":"40px"}},[t._v("工单列表")]),a("q-option-group",{attrs:{options:t.options,color:"green",type:"checkbox",inline:""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1)]},proxy:!0},{key:"top-right",fn:function(){return[a("q-btn",{attrs:{label:"新建工单",color:"green",to:"/ticket/create"}})]},proxy:!0},{key:"body-cell-title",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("div",{staticClass:"cursor-pointer text-primary"},[t._v("\n            "+t._s(e.value)+"\n          ")])])]}},{key:"body-cell-op",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("div",[a("q-btn",{attrs:{flat:"",color:"blue",to:"/ticket/"+e.row.id},on:{click:function(t){t.stopPropagation()}}},[t._v("进入")]),a("q-btn",{attrs:{flat:"",color:"red"},on:{click:function(a){return a.stopPropagation(),t.closeTicket(e.row.id)}}},[t._v("关闭")])],1)])]}},{key:"body-cell-type",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("div",[t._v("\n            "+t._s(t.$ticketType[e.value])+"\n          ")])])]}},{key:"body-cell-status",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("div",[a("q-badge",{attrs:{color:t.$ticketStatus.color[e.value]}},[t._v("\n              "+t._s(t.$ticketStatus.text[e.value])+"\n            ")])],1)])]}}])})],1)])},n=[],s=a("1c93"),o={data:function(){var t=this;return{loading:!1,data:[],columns:[{name:"id",label:"#",field:"id",align:"right",sortable:!0,style:"width: 80px"},{name:"title",required:!0,label:"标题",align:"left",field:"title",sortable:!0},{name:"type",required:!0,label:"类型",align:"left",field:"type",sortable:!0},{name:"created",label:"创建时间",field:"created",align:"left",sortable:!0,format:function(e){return t.$tools.tsmToString(e)}},{name:"updated",label:"最后更新时间",field:"updated",align:"left",sortable:!0,format:function(e){return t.$tools.tsmToString(e)}},{name:"status",label:"状态",align:"left",field:"status",style:"width: 80px",sortable:!0},{name:"op",label:"",align:"left",style:"width: 120px"}],status:[],options:[],pagination:{sortBy:"updated",descending:!1,page:1,rowsPerPage:10,rowsNumber:0}}},created:function(){var t=this,e=!0,a=localStorage.getItem("ticket_status_select"),i=[];a?i=JSON.parse(a):e=!1,this.$ticketStatus.text.forEach((function(a,n){t.options.push({label:a,value:n}),e&&-1===i.indexOf(n)||t.status.push(n)})),localStorage.setItem("ticket_status_select",JSON.stringify(this.status)),this.refresh()},methods:{refresh:function(){this.loadList({pagination:this.pagination})},loadList:function(t){var e=this,a=t.pagination,i=a.page,n=a.rowsPerPage,s=a.sortBy,o=a.descending;this.loading=!0,this.showDialog=!1;var r=this.$tools.createListQuery(t.pagination);r.status=this.status,this.$axios.get("/ticket/list",{params:r}).then((function(t){var a=t.data,r=a.data,l=a.total;e.data=r,e.pagination.rowsNumber=l,e.loading=!1,e.pagination.page=i,e.pagination.rowsPerPage=n,e.pagination.sortBy=s,e.pagination.descending=o}))},rowClick:function(t,e){this.$router.push("/ticket/"+e.id)},closeTicket:function(t){var e=this;this.$axios.post("/ticket/close",{id:t}).then((function(){e.$q.notify("工单已关闭"),e.refresh()})).catch((function(){e.$q.notify("工单关闭失败")}))}},components:{},watch:{"$store.getters.refresh":s["a"],status:function(t,e){0!==t.length?(this.refresh(),localStorage.setItem("ticket_status_select",JSON.stringify(t))):this.status=e}}},r=o,l=a("2877"),c=a("eebe"),u=a.n(c),d=a("9989"),p=a("eaac"),f=a("9f0a"),g=a("9c40"),h=a("db86"),b=a("58a8"),y=Object(l["a"])(r,i,n,!1,null,"311d5085",null);e["default"]=y.exports;u()(y,"components",{QPage:d["a"],QTable:p["a"],QOptionGroup:f["a"],QBtn:g["a"],QTd:h["a"],QBadge:b["a"]})}}]);