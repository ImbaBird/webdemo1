webpackJsonp([15],{d5LD:function(e,t){},iS32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("mvHQ"),o=n.n(a),i=n("gyMJ"),r=n("22O3"),c={name:"Homeindex",data:function(){return{chose_place:[],showPicker:!1,value:""}},methods:{getlist:function(){var e=this;Object(i.h)().then(function(t){e.chose_place=t.data.data})},onConfirm:function(e){this.value=e.fcom_id,this.showPicker=!1},onSubmit:function(e){var t=this;console.log("submit",e),Object(i.p)(e).then(function(e){200==e.data.code&&t.$router.push({path:"/home"})})}},created:function(){var e=this;dd.runtime.permission.requestAuthCode({corpId:"ding4b76df8fb11dede535c2f4657eb6378f",onSuccess:function(t){Object(i.k)(t.code).then(function(t){200==t.data.code&&(r.a.set("openID",t.data.ding_user_id),r.a.set("show",t.data.role_health),r.a.set("repair",t.data.role_repair),alert(t.data.user_area),1==t.data.user_area&&e.$router.push({path:"/home"}))})},onFail:function(e){alert(o()(e))}}),this.getlist()}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-nav-bar",{attrs:{title:"用户登录"}}),e._v(" "),n("van-form",{on:{submit:e.onSubmit}},[n("van-field",{attrs:{readonly:"",clickable:"",name:"fcom_id",value:e.value,label:"选择地区",placeholder:"点击选择地区",rules:[{required:!0,message:"请选择地区"}]},on:{click:function(t){e.showPicker=!0}}}),e._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[n("van-picker",{attrs:{title:"选择地区","show-toolbar":"",columns:e.chose_place,"value-key":"fcom_id"},on:{confirm:e.onConfirm,cancel:function(t){e.showPicker=!1}}})],1),e._v(" "),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("立即登录")])],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(c,s,!1,function(e){n("d5LD")},null,null);t.default=u.exports}});
//# sourceMappingURL=15.9f541338103e65eb1442.js.map