(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"1c93":function(t,e,a){"use strict";e["a"]={deep:!0,handler:function(t){t&&(this.refresh(),this.$store.dispatch("base/refreshEnd"))}}},f145:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{title:"流量记录",data:t.data,columns:t.columns,"table-style":"max-height: calc(100vh - 80px)","row-key":"id","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[10,20,50,100],"no-data-label":"暂无记录",loading:t.loading,dense:t.$q.screen.lt.md,"binary-state-sort":""},on:{"update:pagination":function(e){t.pagination=e},request:t.loadList},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"q-table__title q-mr-md"},[t._v("流量记录")]),a("q-select",{staticStyle:{width:"250px"},attrs:{filled:"",multiple:"",options:t.options,label:"筛选节点","emit-value":"","map-options":""},model:{value:t.nid,callback:function(e){t.nid=e},expression:"nid"}})]},proxy:!0},{key:"body-cell-status",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("div",[a("q-badge",{attrs:{color:t.$invoiceStatus.color[e.value]}},[t._v("\n            "+t._s(t.$invoiceStatus.text[e.value])+"\n          ")])],1)])]}}])})],1)},i=[],o=a("967e"),s=a.n(o),r=(a("96cf"),a("fa84")),l=a.n(r),c=(a("7514"),a("1c93")),d={data:function(){var t=this;return{loading:!1,data:[],columns:[{name:"nid",label:"节点",field:"nid",align:"left",sortable:!0,format:function(e){var a=t.options.find((function(t){return t.value===parseInt(e)}));return a?a.label:"未知节点"}},{name:"real",label:"实际使用流量",field:"real",align:"left",format:function(e){return t.$tools.bytesToSize(e)},sortable:!0},{name:"calc",label:"系统扣除流量",field:"calc",align:"left",format:function(e){return t.$tools.bytesToSize(e)},sortable:!0},{name:"time",label:"记录时间",field:"time",align:"center",format:function(e){return t.$tools.tsmToString(e)},sortable:!0}],nid:[],options:[],pagination:{sortBy:"time",descending:!0,page:1,rowsPerPage:10,rowsNumber:0}}},created:function(){this.refresh()},methods:{refresh:function(){var t=this;return l()(s.a.mark((function e(){var a;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/nodes");case 2:a=e.sent,t.options=a.data,t.loadList({pagination:t.pagination});case 5:case"end":return e.stop()}}),e)})))()},loadList:function(t){var e=this,a=t.pagination,n=a.page,i=a.rowsPerPage,o=a.sortBy,s=a.descending;this.loading=!0,this.showDialog=!1;var r=this.$tools.createListQuery(t.pagination);r.nid=this.nid,this.$axios.get("/log/trans_record",{params:r}).then((function(t){var a=t.data,r=a.data,l=a.total;e.data=r,e.pagination.rowsNumber=l,e.loading=!1,e.pagination.page=n,e.pagination.rowsPerPage=i,e.pagination.sortBy=o,e.pagination.descending=s}))}},components:{},watch:{"$store.getters.refresh":c["a"],nid:function(t,e){this.refresh()}}},u=d,p=a("2877"),f=a("eebe"),g=a.n(f),h=a("eaac"),m=a("ddd8"),b=a("db86"),v=a("58a8"),w=Object(p["a"])(u,n,i,!1,null,"9f982870",null);e["default"]=w.exports;g()(w,"components",{QTable:h["a"],QSelect:m["a"],QTd:b["a"],QBadge:v["a"]})}}]);