webpackJsonp([6],{EEkw:function(t,a,e){"use strict";var n=e("//Fk"),r=e.n(n),s=e("2we2"),i=e("yy7u");a.a=function(){var t=Object(i.a)(),a=s.a.auth().currentUser;return new r.a(function(e,n){t.collection("boards").where("owner","==",a.uid).orderBy("createdAt","desc").limit(10).get().then(function(t){var a=[];t.forEach(function(t){a.push({id:t.id,data:t.data()})}),e(a)}).catch(function(t){n(t)})})}},HPBw:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("Xt3m"),r=e("vzYm"),s=e("VU/8")(n.a,r.a,!1,null,null,null);s.options.__file="pages/profile/joined/index.vue",a.default=s.exports},Xt3m:function(t,a,e){"use strict";var n=e("Xxa5"),r=e.n(n),s=e("exGp"),i=e.n(s),c=e("EEkw"),o=e("2we2");a.a={data:function(){return{boards:[]}},mounted:function(t){var a=this;o.a.auth().onAuthStateChanged(function(){var t=i()(r.a.mark(function t(e){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(c.a)();case 3:a.boards=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));return function(a){return t.apply(this,arguments)}}())}}},vzYm:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("h1",{staticClass:"title"},[t._v("参加した卓一覧")]),t._l(t.boards,function(a,n){return e("div",{key:n},["open"===a.data.state?e("p",{staticClass:"link-wrapper"},[e("nuxt-link",{staticClass:"link",attrs:{to:"/board/?"+a.id}},[t._v(t._s(a.data.name))])],1):e("p",{staticClass:"link-wrapper",attrs:{p:""}},[e("nuxt-link",{staticClass:"link",attrs:{to:"/board/?"+a.id}},[t._v(t._s(a.data.name))])],1)])}),e("nuxt-link",{staticClass:"button-link create-button",attrs:{to:"/board/create/"}},[t._v("卓を作成")])],2)};n._withStripped=!0;var r={render:n,staticRenderFns:[]};a.a=r}});