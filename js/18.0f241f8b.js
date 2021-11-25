(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"5f3f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"text-center"},[t._v("创建工单")]),t._m(0),a("div",{staticClass:"ticket-form"},[a("q-form",{staticClass:"q-mb-md",on:{submit:t.onSubmit,reset:t.onReset}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-grow q-gutter-md"},[a("q-input",{attrs:{filled:"",label:"标题 *","lazy-rules":"",rules:[function(t){return t&&t.length>0||"请输入标题"}]},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"q-mr-md",staticStyle:{"line-height":"40px"}},[t._v("类型")]),a("q-option-group",{attrs:{options:t.options,color:"primary",inline:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),"service"==t.form.type||"refund"==t.form.type?a("q-select",{attrs:{filled:"",options:t.services,multiple:"","emit-value":"","map-options":"",label:"涉及的服务(可多选)",loading:t.serviceLoading},model:{value:t.form.services,callback:function(e){t.$set(t.form,"services",e)},expression:"form.services"}}):t._e(),a("q-editor",{ref:"editor",attrs:{"min-height":"10rem",placeholder:"内容",toolbar:[["bold","italic","underline","strike"],["undo","redo"]]},nativeOn:{paste:function(e){return function(e){return t.contentProcess(e)}(e)},drop:function(e){return function(e){return t.contentProcess(e)}(e)}},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),a("div",[a("q-btn",{attrs:{label:"提交",type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"重置",type:"reset",color:"primary",flat:""}})],1)],1),a("div",{staticClass:"q-gutter-md q-ml-xs q-mt-md",staticStyle:{width:"350px"}},[a("q-uploader",{attrs:{url:t.uploadUrl,headers:t.uploadHeader,label:"上传附件",multiple:"","auto-upload":"",accept:".jpg,.jpeg,.png,.bmp,.zip,.rar,.7z,.gz"},on:{uploaded:t.uploaded}}),a("p",[t._v("上传后，若要删除附件，请点击“已上传附件列表”在列表中删除附件，上面清空队列是没有用的。")]),a("p",{staticClass:"text-center"},[a("q-btn",{attrs:{flat:"",color:"primary",label:"已上传附件列表"},on:{click:t.showUploaded}})],1)],1)])]),a("q-dialog",{model:{value:t.showFiles,callback:function(e){t.showFiles=e},expression:"showFiles"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("已上传文件列表")])]),a("q-card-section",{staticClass:"q-pt-none"},t._l(t.fileList,(function(e,i){return a("div",{key:i},[a("p",[a("q-icon",{attrs:{name:"attach_file"}}),t._v("\n              "+t._s(e.name)+"\n              "),a("q-btn",{attrs:{icon:"delete",round:"",size:"sm",flat:""},on:{click:function(e){return t.deleteAttach(i)}}})],1)])})),0),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"关闭",color:"primary"}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.deleting,callback:function(e){t.deleting=e},expression:"deleting"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("警告")])]),a("q-card-section",{staticClass:"row items-center"},[t._v("\n          您打算删除文件 "+t._s(t.fileList[t.deletingId]?t.fileList[t.deletingId].name:"")+" 吗\n        ")]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"否",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"是",color:"primary"},on:{click:function(e){return t.deleteAttach(t.deletingId,!0)}}})],1)],1)],1)],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center"},[t._v("\n    注：工单不接受任何客户端用法等问题，若有这方面问题可加入\n    "),a("a",{attrs:{target:"_blank",href:"https://t.me/misakamisaka_want_to_say"}},[t._v("Telegram群组")]),t._v("\n    讨论\n  ")])}],o=(a("ac6a"),a("cadf"),a("06db"),a("456d"),a("a481"),{data:function(){return{form:{title:"",type:"service",services:[],content:"",files:[]},options:[{label:"服务售后",value:"service"},{label:"咨询",value:"consult"},{label:"退款",value:"refund"},{label:"建议",value:"advice"},{label:"投诉",value:"complain"}],services:[],fileList:{},showFiles:!1,deleting:!1,deletingId:0,serviceLoading:!1}},created:function(){var t=this;this.serviceLoading=!0,this.$axios.get("/service/selectList").then((function(e){t.services=e.data,t.serviceLoading=!1}))},methods:{onSubmit:function(){var t=this;""!==this.form.content.replace(/<[^<>]+>/g,"")?(this.form.files=Object.keys(this.fileList),this.$axios.post("/ticket/create",this.form).then((function(e){t.$router.push("/ticket/"+e.data)})).catch((function(){t.$q.notify({message:"提交失败，请重试",color:"red",position:"top"})}))):this.$q.notify({message:"请输入内容",color:"orange",position:"center"})},onReset:function(){this.form={title:"",type:"service",services:[],content:"",files:[]}},contentProcess:function(t){var e,a;t.preventDefault(),t.originalEvent&&t.originalEvent.clipboardData.getData?(e=t.originalEvent.clipboardData.getData("text/plain"),this.$refs.editor.runCmd("insertText",e)):t.clipboardData&&t.clipboardData.getData?(e=t.clipboardData.getData("text/plain"),this.$refs.editor.runCmd("insertText",e)):window.clipboardData&&window.clipboardData.getData&&(a||(a=!0,this.$refs.editor.runCmd("ms-pasteTextOnly",e)),a=!1)},uploaded:function(t){var e=t.files,a=t.xhr,i=JSON.parse(a.response)[0];this.fileList[i]=e[0]},showUploaded:function(){this.showFiles=!0},deleteAttach:function(t,e){var a=this;e?this.$axios.post("/file/delete/"+t).then((function(){a.$q.notify("已删除"),a.$delete(a.fileList,t)})).catch((function(){a.$q.notify("删除失败")})):(this.deletingId=t,this.deleting=!0)}},components:{},computed:{uploadUrl:function(){return window.appConfig.apiUrl+"/upload"},uploadHeader:function(){return[{name:"Authorization",value:"Bearer ".concat(this.$store.getters.authToken)}]}}}),s=o,r=(a("6c51"),a("2877")),l=a("eebe"),c=a.n(l),d=a("0378"),p=a("27f9"),u=a("9f0a"),f=a("ddd8"),m=a("d66b"),v=a("9c40"),h=a("ee89"),b=a("24e8"),g=a("f09f"),q=a("a370"),w=a("0016"),y=a("4b7e"),x=a("7f67"),_=Object(r["a"])(s,i,n,!1,null,"02ebaa98",null);e["default"]=_.exports;c()(_,"components",{QForm:d["a"],QInput:p["a"],QOptionGroup:u["a"],QSelect:f["a"],QEditor:m["a"],QBtn:v["a"],QUploader:h["a"],QDialog:b["a"],QCard:g["a"],QCardSection:q["a"],QIcon:w["a"],QCardActions:y["a"]}),c()(_,"directives",{ClosePopup:x["a"]})},"6c51":function(t,e,a){"use strict";var i=a("9747"),n=a.n(i);n.a},9747:function(t,e,a){}}]);