webpackJsonp([1],{KR8f:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("gyMJ"),a=i("22O3"),o={data:function(){return{showPicker:!1,chose_place:[],value:"",place:a.a.get("place")}},methods:{getlist:function(){var t=this;Object(e.j)().then(function(n){t.chose_place=n.data.data})},onConfirm:function(t){var n=this;this.$dialog.confirm({title:"提示",message:"确定切换到【"+t.fcom_id+"】吗？"}).then(function(){Object(e.t)(t).then(function(i){200==i.data.code&&(a.a.set("place",t.fcom_id),n.$dialog({message:i.data.msg}),n.place=t.fcom_id)}),n.showPicker=!1}).catch(function(){n.showPicker=!1})}},created:function(){this.getlist()}},c={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"top"},[i("div",{staticClass:"place"},[t._v("当前所在地区："),i("span",[t._v(t._s(t.place))])]),t._v(" "),i("div",{staticClass:"user",on:{click:function(n){t.showPicker=!0}}},[t._v("切换地区"),i("van-icon",{attrs:{name:"arrow-down"}})],1),t._v(" "),i("van-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(n){t.showPicker=n},expression:"showPicker"}},[i("van-picker",{attrs:{title:"选择地区","show-toolbar":"",columns:t.chose_place,"value-key":"fcom_id"},on:{confirm:t.onConfirm,cancel:function(n){t.showPicker=!1}}})],1)],1)},staticRenderFns:[]};var s=i("VU/8")(o,c,!1,function(t){i("Ka1L")},null,null).exports,r={data:function(){return{list:[{img:i("d+fs")},{img:i("RMYu")},{img:i("eBQN")},{img:i("iBFy")},{img:i("Y3nl")}]}}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white"}},this._l(this.list,function(t,i){return n("van-swipe-item",{key:i},[n("div",{staticClass:"banner"},[n("img",{attrs:{src:t.img,alt:""}})])])}),1)},staticRenderFns:[]};var u=i("VU/8")(r,l,!1,function(t){i("LHna")},null,null).exports,f={data:function(){return{show:a.a.get("show"),repair:a.a.get("repair")}},computed:{},created:function(){}},v={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"in_nav"},[i("ul",[i("li",[i("router-link",{attrs:{to:"/costlist"}},[i("i",{staticClass:"icon1 iconfont iconfeiyong2"}),t._v(" "),i("h2",[t._v("费用查询")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/repairlist"}},[i("i",{staticClass:"icon2 iconfont iconweixiu"}),t._v(" "),i("h2",[t._v("报修申请")])])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/myrecord"}},[i("i",{staticClass:"icon3 iconfont iconjilu"}),t._v(" "),i("h2",[t._v("卫生记录")])])],1),t._v(" "),t.show?i("li",[i("router-link",{attrs:{to:"/checklist"}},[i("i",{staticClass:"icon3 iconfont icondengjizongshu"}),t._v(" "),i("h2",[t._v("卫生检查")])])],1):t._e(),t._v(" "),t.repair?i("li",[i("router-link",{attrs:{to:"/waitrepairlist"}},[i("i",{staticClass:"icon4 iconfont iconbaoxiu"}),t._v(" "),i("h2",[t._v("报修处理")])])],1):t._e()])])},staticRenderFns:[]};var p=i("VU/8")(f,v,!1,function(t){i("qOW7")},null,null).exports,d=(i("vLgD"),{name:"Home",data:function(){return{}},components:{InBanner:u,InNav:p,InHeader:s},methods:{},created:function(){}}),h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("in-header"),this._v(" "),n("in-banner"),this._v(" "),n("in-nav")],1)},staticRenderFns:[]};var _=i("VU/8")(d,h,!1,function(t){i("wMTe")},null,null);n.default=_.exports},Ka1L:function(t,n){},LHna:function(t,n){},RMYu:function(t,n,i){t.exports=i.p+"static/img/banner2.6366e52.jpg"},Y3nl:function(t,n,i){t.exports=i.p+"static/img/banner5.11d0336.jpg"},"d+fs":function(t,n,i){t.exports=i.p+"static/img/banner1.53f0827.jpg"},eBQN:function(t,n,i){t.exports=i.p+"static/img/banner3.b923169.jpg"},iBFy:function(t,n,i){t.exports=i.p+"static/img/banner4.2c70bc2.jpg"},qOW7:function(t,n){},wMTe:function(t,n){}});
//# sourceMappingURL=1.40e3f8cccdc2a607751e.js.map