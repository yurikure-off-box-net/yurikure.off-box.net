webpackJsonp([2],{"/TYz":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("vL3g"),i=e("rGQh"),o=!1;var s=function(t){o||e("y0RJ")},r=e("VU/8")(a.a,i.a,!1,s,"data-v-2a183b29",null);r.options.__file="pages/index.vue",n.default=r.exports},gAyo:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"h1[data-v-2a183b29],h2[data-v-2a183b29]{font-weight:400}ul[data-v-2a183b29]{list-style-type:none;padding:0}li[data-v-2a183b29]{display:inline-block;margin:0 10px}a[data-v-2a183b29]{color:#42b983}.signup[data-v-2a183b29]{margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}input[data-v-2a183b29]{margin:10px 0;padding:10px}.signup[data-v-2a183b29]{border-color:transparent;background-color:transparent}.signup-icon[data-v-2a183b29]{height:46px;widows:191px}",""])},rGQh:function(t,n,e){"use strict";var a=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"signup"},[n("h2",[this._v("ログインして利用")]),n("button",{staticClass:"signup",on:{click:this.signUp}},[n("img",{staticClass:"signup-icon",attrs:{src:"/app/images/btn_google_signin_dark_normal_web@2x.png"}})]),n("p",[n("nuxt-link",{attrs:{to:"/trial/"}},[this._v("ログインせずに利用：入力は保存されません")])],1)])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};n.a=i},vL3g:function(t,n,e){"use strict";var a=e("2we2");n.a={name:"Signup",data:function(){return{username:"",password:""}},methods:{signUp:function(){console.log("begin singup");var t=this,n=new a.a.auth.GoogleAuthProvider,e=a.a.auth();e.setPersistence(a.a.auth.Auth.Persistence.LOCAL),e.signInWithPopup(n).then(function(n){console.log("success",n),t.$router.push({path:"/profile/joined/"})}).catch(function(t){console.log("error",t)})},addEntry:function(){var t=a.a.auth().currentUser;console.log(t.uid);var n=a.a.firestore();n.settings({timestampsInSnapshots:!0}),n.collection("inputs").add({uid:t.uid,bid:"testXXXXXXXX"}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},getEntry:function(){a.a.auth().currentUser;console.log("somtheingelse");var t=a.a.firestore();t.settings({timestampsInSnapshots:!0}),t.collection("inputs").where("uid","==","somtheingelse").where("bid","==","testXXXXXXXX").get().then(function(t){t.forEach(function(t){console.log(t)})})}}}},y0RJ:function(t,n,e){var a=e("gAyo");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("3d0abbaf",a,!1,{sourceMap:!1})}});