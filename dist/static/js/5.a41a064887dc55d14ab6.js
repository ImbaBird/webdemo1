webpackJsonp([5],{XuGM:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Fd2+"),n=a("gyMJ"),o={name:"insideRepair",data:function(){return{fid:"",frepair_type:"",frepair_build:"",frepair_person_name:"",room_num:"",frepair_date:"",area:"",frservice_describe:"",img:[],searchlist_show:!0,show:!1,names:"",datalist:[],goods_name:"",goods_code:"",goods_price:"",goods_nums:"",table_list:[],data_down:"",remark:""}},methods:{getimg:function(){Object(i.b)(this.img)},getrepairinfo:function(){var e=this,t={fid:this.fid};Object(n.r)(t).then(function(t){var a=t.data.data[0];e.frepair_type=a.frepair_type,e.frepair_build=a.frepair_build,e.frservice_describe=a.frservice_describe,e.area=a.area,e.frepair_person_name=a.frepair_person_name,e.room_num=a.room_num,e.frepair_date=a.frepair_date,e.img=a.url_list_array})},onSubmit:function(){var e=this;this.$loading("提交中");var t={fid:this.fid,goodlist:this.table_list,remark:this.remark};Object(n.m)(t).then(function(t){200==t.data.code?(e.$loading.close(),i.c.success(t.data.msg),setTimeout(function(){e.$router.push({path:"/waitrepairlist"})},3e3)):(e.$loading.close(),i.c.success(t.data.msg))})},goodsearch:function(){var e=this,t={fid:this.fid,fgoods_name:this.names};Object(n.l)(t).then(function(t){e.datalist=t.data.data,""!=t.data.data?e.searchlist_show=!1:e.searchlist_show=!0})},appClick:function(e){console.log(e),this.goods_name=e.fgoods_name+"-"+e.fbrand,this.goods_code=e.fid,this.goods_price=e.fprice+"元",this.goods_nums=e.fstock+e.funit},opendialog:function(e){this.names="",this.goods_name="",this.goods_code="",this.show=!0,this.goodsearch(),this.data_down=e},beforeClose:function(e,t){"confirm"===e?(this.table_list[this.data_down].inames=this.goods_name,this.table_list[this.data_down].icodes=this.goods_code,t()):"cancel"===e&&t()},addmore:function(){this.table_list.push({inames:"",icodes:"",inums:""})},Delete:function(e){for(var t in this.table_list.splice(e,1),this.table_list)this.table_list[t].index=t}},created:function(){this.fid=this.$route.query.fid,this.getrepairinfo(),this.goodsearch()}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:"报修处理（内修）"}}),e._v(" "),a("van-field",{staticStyle:{display:"none"},attrs:{name:"fid"},model:{value:e.fid,callback:function(t){e.fid=t},expression:"fid"}}),e._v(" "),a("van-cell",{attrs:{title:"报修人:",value:e.frepair_person_name}}),e._v(" "),""!=e.frepair_build?a("van-cell",{attrs:{title:"楼号:",value:e.frepair_build}}):e._e(),e._v(" "),""!=e.room_num?a("van-cell",{attrs:{title:"房间号:",value:e.room_num}}):e._e(),e._v(" "),a("van-cell",{attrs:{title:"报修时间:",value:e.frepair_date}}),e._v(" "),null!=e.area?a("van-cell",{attrs:{title:"区域:",value:e.area}}):e._e(),e._v(" "),a("van-cell",{attrs:{title:"报修类型:",value:e.frepair_type}}),e._v(" "),a("van-cell",{attrs:{title:"故障描述:",value:e.frservice_describe}}),e._v(" "),a("van-button",{staticStyle:{width:"90%",margin:"10px auto"},attrs:{type:"info",plain:"",block:""},on:{click:function(t){return e.getimg()}}},[e._v("查看维修图片")]),e._v(" "),a("van-field",{attrs:{name:"remark",rows:"2",autosize:"",label:"备注",type:"textarea",maxlength:"100",placeholder:"请输入","show-word-limit":""},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}}),e._v(" "),a("van-divider",[e._v("选择物料")]),e._v(" "),a("van-button",{attrs:{block:"",type:"info"},on:{click:function(t){return e.addmore()}}},[e._v("添加新一行")]),e._v(" "),a("van-list",{staticStyle:{"margin-bottom":"44px",height:"400px"}},e._l(e.table_list,function(t,i){return a("van-cell-group",{key:i},[a("van-swipe-cell",{scopedSlots:e._u([{key:"right",fn:function(){return[a("van-button",{staticStyle:{height:"100%"},attrs:{square:"",text:"删除",type:"danger"},on:{click:function(t){return e.Delete(i)}}})]},proxy:!0}],null,!0)},[a("van-field",{attrs:{label:"物料名称：",center:"",value:t.inames,readonly:""},scopedSlots:e._u([{key:"button",fn:function(){return[a("van-button",{attrs:{size:"small",type:"info"},on:{click:function(t){return e.opendialog(i)}}},[e._v("选择物料")])]},proxy:!0}],null,!0)}),e._v(" "),a("van-field",{staticStyle:{display:"none"},attrs:{label:"物料编码：",value:t.icodes}}),e._v(" "),a("van-field",{attrs:{label:"物料数量：",placeholder:"请输入数量",value:t.inums},model:{value:t.inums,callback:function(a){e.$set(t,"inums",a)},expression:"item.inums"}})],1)],1)}),1),e._v(" "),a("van-button",{staticStyle:{width:"100%",position:"fixed",bottom:"0px",left:"0px"},attrs:{block:"",type:"info"},on:{click:function(t){return e.onSubmit()}}},[e._v("提交")]),e._v(" "),a("van-dialog",{attrs:{title:"选择物料","show-cancel-button":"",beforeClose:e.beforeClose},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词"},on:{search:e.goodsearch},scopedSlots:e._u([{key:"action",fn:function(){return[a("div",{on:{click:e.goodsearch}},[e._v("搜索")])]},proxy:!0}]),model:{value:e.names,callback:function(t){e.names=t},expression:"names"}}),e._v(" "),a("van-field",{attrs:{label:"物料名称：",value:"",readonly:""},model:{value:e.goods_name,callback:function(t){e.goods_name=t},expression:"goods_name"}}),e._v(" "),a("van-field",{attrs:{label:"物料价格：",value:"",readonly:""},model:{value:e.goods_price,callback:function(t){e.goods_price=t},expression:"goods_price"}}),e._v(" "),a("van-field",{attrs:{label:"仓库库存：",value:"",readonly:""},model:{value:e.goods_nums,callback:function(t){e.goods_nums=t},expression:"goods_nums"}}),e._v(" "),a("van-list",{staticStyle:{height:"300px","overflow-y":"scroll"}},[e.searchlist_show?a("van-cell",[e._v("无数据")]):e._e(),e._v(" "),e._l(e.datalist,function(t){return a("van-cell",{key:t.fid,attrs:{title:t.fgoods_name+"-"+t.fbrand},on:{click:function(a){return e.appClick(t)}}})})],2)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(o,s,!1,function(e){a("mTzy")},null,null);t.default=r.exports},mTzy:function(e,t){}});
//# sourceMappingURL=5.a41a064887dc55d14ab6.js.map