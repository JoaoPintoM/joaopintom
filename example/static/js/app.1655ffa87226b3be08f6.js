webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),s={name:"Surprise",data:function(){return{showBackDropTest:!1,showBackDrop:!1}},methods:{displayBackDrop:function(){this.showBackDrop=!0}},mounted:function(){var t=this;setTimeout(function(){document.getElementById("myAudio").play(),t.showBackDrop=!0},1e4)}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"surprise"},[this._m(0),this._v(" "),this.showBackDrop?e("div",{attrs:{id:"qBackDrop"}}):this._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("audio",{attrs:{id:"myAudio"}},[e("source",{attrs:{src:"/static/test.mp3",type:"audio/mpeg"}})])}]};var a={name:"App",components:{Surprise:n("VU/8")(s,i,!1,function(t){n("W3Ge")},"data-v-4ba6132c",null).exports},data:function(){return{}},beforeCreate:function(){}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Surprise")],1)},staticRenderFns:[]},c=n("VU/8")(a,o,!1,null,null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#appSurprise",components:{App:c},template:"<App/>"})},W3Ge:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1655ffa87226b3be08f6.js.map