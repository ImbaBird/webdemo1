webpackJsonp([17],{"0VpA":function(t,e){},E9aC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("gyMJ"),i={name:"electricityCost",data:function(){return{loading:!1,finished:!1,page:1,pageSize:5,total:0,eleclist:[]}},methods:{onLoad:function(){this.page++,this.getList()},getList:function(){var t=this,e={page:this.page,pageSize:this.pageSize};Object(n.i)(e).then(function(e){t.loading=!1,t.total=e.data.data.count;var a=e.data.data.info;null!=e.data.data.info&&0!==a.length?(t.eleclist=t.eleclist.concat(a),t.isLoading=!1,t.eleclist.length>=t.total&&(t.finished=!0)):t.finished=!0})}},created:function(){this.getList()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"f5"},[a("van-nav-bar",{attrs:{title:"电费查询"}}),t._v(" "),a("van-list",{attrs:{finished:t.finished,"immediate-check":!1,"finished-text":"没有更多了",offset:10},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.eleclist,function(e,n){return a("van-cell-group",{key:n},[a("van-cell",{attrs:{title:"房间号",value:e.room_num}}),t._v(" "),a("van-cell",{attrs:{title:"总金额",value:e.allmoney}}),t._v(" "),t._l(e.cost_detail,function(t){return a("van-cell",{key:t.person_name,attrs:{title:t.person_name,value:t.elec_cost}})}),t._v(" "),a("van-cell",{attrs:{title:"时间",value:e.meter_date}})],2)}),1)],1)},staticRenderFns:[]};var s=a("VU/8")(i,l,!1,function(t){a("0VpA")},null,null);e.default=s.exports}});
//# sourceMappingURL=17.ccf9997b4850b70d692f.js.map