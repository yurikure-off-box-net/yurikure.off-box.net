webpackJsonp([3],{DUMe:function(t,e,i){var r=i("f0Kx");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i("rjj0")("cb211cd0",r,!1,{sourceMap:!1})},HMzw:function(t,e,i){"use strict";var r=i("Xxa5"),s=i.n(r),a=i("exGp"),o=i.n(a);i("NYxO");e.a={data:function(){return{submitDisabled:!1,buttonText:"作成！",message:""}},methods:{onSubmit:function(){var t=o()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.submitDisabled=!0,this.buttonText="送信中…",t.next=4,this.$store.dispatch("board/create");case 4:"saved"===this.$store.state.board.syncState?this.$router.push("/board/?"+this.$store.state.board.bid):(this.message="送信に失敗しました",this.submitDisabled=!1,this.buttonText="作成！");case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:{name:{get:function(){return this.$store.state.board.board.name},set:function(t){this.$store.commit("board/updateName",t)}},girl0:{get:function(){return this.$store.state.board.board.girls[0].icon},set:function(t){console.log(t),this.$store.commit("board/updateGirl",{index:0,url:t})}},girl1:{get:function(){return this.$store.state.board.board.girls[1].icon},set:function(t){this.$store.commit("board/updateGirl",{index:1,url:t})}},girl2:{get:function(){return this.$store.state.board.board.girls[2].icon},set:function(t){this.$store.commit("board/updateGirl",{index:2,url:t})}},girl3:{get:function(){return this.$store.state.board.board.girls[3].icon},set:function(t){this.$store.commit("board/updateGirl",{index:3,url:t})}},girl4:{get:function(){return this.$store.state.board.board.girls[4].icon},set:function(t){this.$store.commit("board/updateGirl",{index:4,url:t})}},girl5:{get:function(){return this.$store.state.board.board.girls[5].icon},set:function(t){this.$store.commit("board/updateGirl",{index:5,url:t})}},girl6:{get:function(){return this.$store.state.board.board.girls[6].icon},set:function(t){this.$store.commit("board/updateGirl",{index:6,url:t})}},girl7:{get:function(){return this.$store.state.board.board.girls[7].icon},set:function(t){this.$store.commit("board/updateGirl",{index:7,url:t})}},girl8:{get:function(){return this.$store.state.board.board.girls[8].icon},set:function(t){this.$store.commit("board/updateGirl",{index:8,url:t})}},girl9:{get:function(){return this.$store.state.board.board.girls[9].icon},set:function(t){this.$store.commit("board/updateGirl",{index:9,url:t})}}}}},f0Kx:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".input-wrapper[data-v-63c4e27e]{grid-template-columns:50px,160px;display:grid;width:75%;background-color:#faebd7;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;align-self:center}",""])},wXOG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("HMzw"),s=i("yOMP"),a=!1;var o=function(t){a||i("DUMe")},n=i("VU/8")(r.a,s.a,!1,o,"data-v-63c4e27e",null);n.options.__file="pages/board/create/index.vue",e.default=n.exports},yOMP:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wrapper"},[i("h1",{staticClass:"title"},[t._v("卓作成画面")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),i("div",{staticClass:"input-wrapper"},[i("div",[i("img",{staticClass:"girl-icon",attrs:{src:t.girl1}})]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.girl1,expression:"girl1"}],attrs:{type:"text"},domProps:{value:t.girl1},on:{input:function(e){e.target.composing||(t.girl1=e.target.value)}}})]),i("div",[i("img",{staticClass:"girl-icon",attrs:{src:t.girl2}})]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.girl2,expression:"girl2"}],attrs:{type:"text"},domProps:{value:t.girl2},on:{input:function(e){e.target.composing||(t.girl2=e.target.value)}}})]),i("div",[i("img",{staticClass:"girl-icon",attrs:{src:t.girl3}})]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.girl3,expression:"girl3"}],attrs:{type:"text"},domProps:{value:t.girl3},on:{input:function(e){e.target.composing||(t.girl3=e.target.value)}}})]),i("div",[i("img",{staticClass:"girl-icon",attrs:{src:t.girl4}})]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.girl4,expression:"girl4"}],attrs:{type:"text"},domProps:{value:t.girl4},on:{input:function(e){e.target.composing||(t.girl4=e.target.value)}}})]),i("div",[i("img",{staticClass:"girl-icon",attrs:{src:t.girl5}})]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.girl5,expression:"girl5"}],attrs:{type:"text"},domProps:{value:t.girl5},on:{input:function(e){e.target.composing||(t.girl5=e.target.value)}}})]),i("div",[i("img",{staticClass:"girl-icon",attrs:{src:t.girl6}})]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.girl6,expression:"girl6"}],attrs:{type:"text"},domProps:{value:t.girl6},on:{input:function(e){e.target.composing||(t.girl6=e.target.value)}}})]),i("div",[i("img",{staticClass:"girl-icon",attrs:{src:t.girl7}})]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.girl7,expression:"girl7"}],attrs:{type:"text"},domProps:{value:t.girl7},on:{input:function(e){e.target.composing||(t.girl7=e.target.value)}}})]),i("div",[i("img",{staticClass:"girl-icon",attrs:{src:t.girl8}})]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.girl8,expression:"girl8"}],attrs:{type:"text"},domProps:{value:t.girl8},on:{input:function(e){e.target.composing||(t.girl8=e.target.value)}}})]),i("div",[i("img",{staticClass:"girl-icon",attrs:{src:t.girl9}})]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.girl9,expression:"girl9"}],attrs:{type:"text"},domProps:{value:t.girl9},on:{input:function(e){e.target.composing||(t.girl9=e.target.value)}}})])]),i("button",{staticClass:"create-button",attrs:{disabled:t.submitDisabled},on:{click:t.onSubmit}},[t._v(t._s(t.buttonText))]),i("div",[t._v(t._s(t.message))])])};r._withStripped=!0;var s={render:r,staticRenderFns:[]};e.a=s}});