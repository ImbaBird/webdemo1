webpackJsonp([16],{Fzfd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("gyMJ"),r={name:"waitRepair",data:function(){return{wait_list:[],repair_show:!1}},methods:{getlist:function(){var t=this;Object(i.t)().then(function(e){console.log(e.data),t.wait_list=e.data.data})}},created:function(){this.getlist()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"待报修处理"}}),t._v(" "),t._l(t.wait_list,function(e,i){return a("van-cell-group",{key:i},["内修"===e.frepair_state?a("van-cell",{attrs:{value:e.repair_date,label:e.frepair_type,"is-link":"",to:{path:"/insiderepair",query:{fid:e.fid}}},scopedSlots:t._u([{key:"title",fn:function(){return[a("span",{staticClass:"custom-title"},[t._v(t._s(e.type)+"报修")]),t._v(" "),a("van-tag",{attrs:{type:"primary"}},[t._v(t._s(e.frepair_state))])]},proxy:!0}],null,!0)}):a("van-cell",{attrs:{value:e.repair_date,label:e.frepair_type,"is-link":"",to:{path:"/outsiderepair",query:{fid:e.fid}}},scopedSlots:t._u([{key:"title",fn:function(){return[a("span",{staticClass:"custom-title"},[t._v(t._s(e.type)+"报修")]),t._v(" "),a("van-tag",{attrs:{type:"warning"}},[t._v(t._s(e.frepair_state))])]},proxy:!0}],null,!0)})],1)})],2)},staticRenderFns:[]};var s=a("VU/8")(r,n,!1,function(t){a("hFOL")},null,null);e.default=s.exports},hFOL:function(t,e){}});
//# sourceMappingURL=16.6c075f337ac7200ad750.js.map