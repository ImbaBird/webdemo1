webpackJsonp([12],{lwlC:function(t,e){},n4EF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("gyMJ"),i={name:"otherCost",data:function(){return{loading:!1,finished:!1,page:1,pageSize:5,total:0,otherlist:[]}},methods:{onLoad:function(){this.page++,this.getList()},getList:function(){var t=this,e={page:this.page,pageSize:this.pageSize};Object(n.l)(e).then(function(e){t.loading=!1,t.total=e.data.count;var a=e.data.data;null!=e.data.data&&0!==a.length?(t.otherlist=t.otherlist.concat(a),t.isLoading=!1,t.otherlist.length>=t.total&&(t.finished=!0)):t.finished=!0})}},created:function(){this.getList()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"其他费用查询"}}),t._v(" "),a("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"finished-text":"没有更多了",offset:10},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.otherlist,function(e,n){return a("van-cell-group",{key:n},[a("van-cell",{attrs:{title:"房间号",value:e.room_num}}),t._v(" "),a("van-cell",{attrs:{title:"费用类型",value:e.cost_type}}),t._v(" "),a("van-cell",{attrs:{title:"名字",value:e.person_name}}),t._v(" "),a("van-cell",{attrs:{title:"费用金额",value:e.cost}}),t._v(" "),a("van-cell",{attrs:{title:"时间",value:e.meter_date}})],1)}),1)],1)},staticRenderFns:[]};var o=a("VU/8")(i,l,!1,function(t){a("lwlC")},null,null);e.default=o.exports}});
//# sourceMappingURL=12.34913076e278c094b29d.js.map