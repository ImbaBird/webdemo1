webpackJsonp([9],{"O4/d":function(t,e){},WlNz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Fd2+"),i=n("gyMJ"),l={name:"sanitationRecord",data:function(){return{loading:!1,finished:!1,page:1,pageSize:5,total:0,checklist:[]}},methods:{onLoad:function(){this.page++,this.getlist()},getlist:function(){var t=this,e={page:this.page,pageSize:this.pageSize};Object(i.a)(e).then(function(e){t.loading=!1,t.total=e.data.count;var n=e.data.data;null!=n&&0!==n.length?(t.checklist=t.checklist.concat(n),t.isLoading=!1,t.checklist.length>=t.total&&(t.finished=!0)):t.finished=!0})},getimg:function(t){0==t.length?Object(a.c)("暂无图片"):Object(a.b)(t)}},created:function(){this.getlist()}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"f5"},[n("van-nav-bar",{attrs:{title:"检查历史"}}),t._v(" "),n("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"finished-text":"没有更多了",offset:10},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.checklist,function(e,a){return n("van-cell-group",{key:a},[n("van-cell",{attrs:{title:"楼号",value:e.floor_num}}),t._v(" "),n("van-cell",{attrs:{title:"房间号",value:e.room_num}}),t._v(" "),n("van-cell",{attrs:{title:"检查类型",value:e.check_type}}),t._v(" "),n("van-cell",{attrs:{title:"检查结果",value:e.check_state}}),t._v(" "),0!=e.punish_money?n("van-cell",{attrs:{title:"奖罚金额",value:e.punish_money}}):t._e(),t._v(" "),n("van-cell",{attrs:{title:"检查时间",value:e.check_date}}),t._v(" "),n("van-cell",{attrs:{title:"检查图片"}},[n("van-button",{staticStyle:{margin:"0 auto"},attrs:{size:"small",type:"info"},on:{click:function(n){return t.getimg(e.img)}}},[t._v("查看图片")])],1)],1)}),1)],1)},staticRenderFns:[]};var s=n("VU/8")(l,c,!1,function(t){n("O4/d")},null,null);e.default=s.exports}});
//# sourceMappingURL=9.0588096a18f0f65d59e6.js.map