(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"1c93":function(t,s,e){"use strict";s["a"]={deep:!0,handler:function(t){t&&(this.refresh(),this.$store.dispatch("base/refreshEnd"))}}},"3e23":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"q-pa-md"},[e("q-markup-table",[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("线路名称")]),e("th",{staticClass:"text-left"},[t._v("状态")]),e("th",{staticClass:"text-center"},[t._v("在线人数")]),e("th",{staticClass:"text-left"},[t._v("在线时间")]),e("th",{staticClass:"text-center"},[t._v("1分钟内平均负载")]),e("th",{staticClass:"text-center"},[t._v("5分钟内平均负载")]),e("th",{staticClass:"text-center"},[t._v("15分钟内平均负载")]),e("th",{staticClass:"text-left"},[t._v("最后更新时间")])])]),e("tbody",t._l(t.list,(function(s,a){return e("tr",{key:a},[e("td",{staticClass:"text-left"},[t._v(t._s(t.products[s.nid]))]),e("td",{staticClass:"text-left"},[t._v(t._s(t._f("status")(s.status)))]),e("td",{staticClass:"text-center"},[t._v(t._s(s.online))]),e("td",{staticClass:"text-left"},[t._v(t._s(t._f("formatSeconds")(s.uptime)))]),e("td",{staticClass:"text-center"},[t._v(t._s(t._f("loadPart")(s.load,0)))]),e("td",{staticClass:"text-center"},[t._v(t._s(t._f("loadPart")(s.load,1)))]),e("td",{staticClass:"text-center"},[t._v(t._s(t._f("loadPart")(s.load,2)))]),e("td",{staticClass:"text-left"},[t._v(t._s(t._f("datetime")(s.updated)))])])})),0)])],1)},n=[],r=(e("28a5"),e("1c93")),c={filters:{formatSeconds:function(t){return window.$tools.formatSeconds(t)},loadPart:function(t,s){return t.split(" ")[s]},datetime:function(t){return window.$tools.tsmToString(t)},status:function(t){switch(parseInt(t)){case 0:return"正常";case 1:return"维护中";case 2:return"故障中";default:return"未知"}}},data:function(){return{list:[],products:{}}},created:function(){this.refresh()},methods:{refresh:function(){var t=this;this.$axios.get("/node_info").then((function(s){var e=s.data,a=e.list,n=e.products;t.list=a,t.products=n}))}},watch:{"$store.getters.refresh":r["a"]}},i=c,l=e("2877"),o=e("eebe"),d=e.n(o),u=e("9989"),f=e("2bb1"),_=Object(l["a"])(i,a,n,!1,null,null,null);s["default"]=_.exports;d()(_,"components",{QPage:u["a"],QMarkupTable:f["a"]})}}]);