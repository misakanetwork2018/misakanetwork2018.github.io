(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"80ab":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"auth-form"},[a("h4",[e._v("登录")]),a("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit}},[a("q-input",{attrs:{filled:"",label:"用户名/邮箱","lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入用户名或邮箱"}]},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("q-input",{attrs:{filled:"",type:"password",label:"密码","lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("vue-telegram-login",{attrs:{mode:"callback","telegram-login":e.tgBotName},on:{callback:e.onTelegramLogin}}),e.needV2?a("vue-recaptcha",{attrs:{sitekey:e.v2_key,loadRecaptchaScript:!0,recaptchaHost:"www.recaptcha.net"},on:{verify:e.onCaptchaVerify}}):e._e(),a("recaptcha-js-v3"),a("div",[a("q-btn",{attrs:{label:"登录",type:"submit",color:"primary",loading:e.doing,disable:e.doing}}),e.allowRegister?a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"去注册",color:"primary",flat:"",to:"/register"}}):e._e(),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"忘记密码",color:"primary",flat:"",to:"/password_reset_request"}})],1)],1)],1)])},r=[],o=(a("551c"),a("06db"),a("097d"),a("d226")),s=a("e096"),i={data:function(){return{username:"",password:"",needV2:!1,recaptcha_v2:null,doing:!1,allowRegister:!1}},created:function(){var e=this;this.$axios.get("/cfg/allowRegister").then((function(t){e.allowRegister=t.data}))},methods:{onCaptchaVerify:function(e){this.recaptcha_v2=e},onSubmit:function(){var e=this;this.doing=!0,grecaptcha.ready((function(){grecaptcha.execute(e.v3_key,{action:"login"}).then((function(t){e.$axios.post("/user/auth/login",{user:e.username,pass:e.password,"recaptcha-v3-token":t,"g-recaptcha-response":e.recaptcha_v2}).then((function(t){t.data.success?(e.$store.dispatch("auth/login",t.data.token),e.$store.dispatch("auth/expire",t.data.expire),e.removeCaptchaBadge(),e.$router.push(e.$route.query.redirect?e.$route.query.redirect:"overview")):t.data?(t.data.needV2&&(e.needV2=!0),e.$q.notify({position:"top",message:t.data.msg})):e.$q.notify({position:"top",message:"未知错误，请重试"}),e.doing=!1})).catch((function(t){e.doing=!1}))}))}))},onTelegramLogin:function(e){var t=this;this.$q.loading.show({delay:400}),this.$axios.post("/user/auth/telegram",e).then((function(e){t.$store.dispatch("auth/login",e.data.token),t.$store.dispatch("auth/expire",e.data.expire),t.removeCaptchaBadge(),t.$router.push(t.$route.query.redirect?t.$route.query.redirect:"overview")})).catch((function(e){switch(e.response.status){case 403:case 404:case 419:t.$q.notify(e.response.data.message);break;default:t.$q.notify("未知错误")}})).finally((function(){t.$q.loading.hide()}))},removeCaptchaBadge:function(){document.querySelector(".grecaptcha-badge").remove()}},components:{vueTelegramLogin:o["vueTelegramLogin"],"recaptcha-js-v3":{render:function(e){return e("script",{attrs:{type:"text/javascript",src:"https://www.recaptcha.net/recaptcha/api.js?render="+window.appConfig.recaptcha.v3_sitekey}})}},VueRecaptcha:s["a"]},computed:{tgBotName:function(){return window.appConfig.telegramBotName},v3_key:function(){return window.appConfig.recaptcha.v3_sitekey},v2_key:function(){return window.appConfig.recaptcha.v2_sitekey},enableTelegramLogin:function(){return window.appConfig.enableTelegramLogin}}},c=i,l=a("2877"),u=a("eebe"),p=a.n(u),d=a("9989"),g=a("0378"),h=a("27f9"),f=a("9c40"),m=Object(l["a"])(c,n,r,!1,null,null,null);t["default"]=m.exports;p()(m,"components",{QPage:d["a"],QForm:g["a"],QInput:h["a"],QBtn:f["a"]})}}]);