(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{1793:function(e,t,r){"use strict";var s=r("8fcc"),n=r.n(s);n.a},"8fcc":function(e,t,r){},e83e:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-linear-progress",{attrs:{size:"10px",value:e.progress,color:e.progressColor}}),r("ul",{staticClass:"usage"},[r("li",[e._v("总流量："+e._s(e._f("bytesToSize")(e.total)))]),r("li",[e._v("已使用流量："+e._s(e._f("bytesToSize")(e.usage)))]),r("li",[e._v("剩余流量："+e._s(e._f("bytesToSize")(e.rest)))]),r("li")])],1)},n=[],o={filters:{bytesToSize:function(e){return window.$tools.bytesToSize(e)}},props:{info:{type:Object,required:!0}},created:function(){this.refresh()},data:function(){return{}},computed:{progress:function(){return this.usage/this.total},total:function(){return parseInt(this.info.extra.total)},usage:function(){return parseInt(this.info.extra.usage)},rest:function(){return this.total-this.usage},progressColor:function(){return this.progress>.9?"red":this.progress>.8?"warning":"primary"}},methods:{refresh:function(){}}},i=o,u=(r("1793"),r("2877")),a=r("eebe"),c=r.n(a),f=r("6b1d"),l=Object(u["a"])(i,s,n,!1,null,"19811692",null);t["default"]=l.exports;c()(l,"components",{QLinearProgress:f["a"]})}}]);