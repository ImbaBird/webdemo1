webpackJsonp([13],{HA74:function(e,i){},U8W5:function(e,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=r("Fd2+"),a=r("gyMJ"),n={name:"logisticsDistribute",data:function(){return{fid:"",frepair_type:"",frepair_build:"",frepair_person_name:"",room_num:"",frepair_date:"",area:"",frservice_describe:"",img:[],remark:"",repair_person:[],showPicker:!1,repairPerson:"",repair_user_id:"",show:!1,repair_fin_out:"",repair_finout:["内修","外修","驳回"]}},methods:{getimg:function(){Object(t.b)(this.img)},getrepairinfo:function(){var e=this,i={fid:this.fid};Object(a.o)(i).then(function(i){console.log(i.data.data);var r=i.data.data[0];e.frepair_type=r.room_repair_type,e.area=r.area,e.frservice_describe=r.room_repair_describe,e.frepair_person_name=r.person_name;for(var t=0;t<r.file_path.length;t++)e.img.push(r.file_path[t].url)})},getrepair_person:function(){var e=this,i={fid:this.fid};Object(a.k)(i).then(function(i){console.log(i.data),e.repair_person=i.data.data})},person_confirm:function(e){this.repairPerson=e.repair_user,this.repair_user_id=e.fid,this.showPicker=!1},finout_confirm:function(e){this.repair_fin_out=e,this.show=!1},onSubmit:function(e){var i=this;this.$loading("提交中"),Object(a.g)(e).then(function(e){200==e.data.code?(i.$loading.close(),t.c.success(e.data.msg),setTimeout(function(){i.$router.push({path:"/distributelist"})},3e3)):(i.$loading.close(),t.c.success(e.data.msg))})}},created:function(){this.fid=this.$route.query.fid,this.getrepairinfo(),this.getrepair_person()}},o={render:function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("div",[r("van-form",{on:{submit:e.onSubmit}},[r("van-nav-bar",{attrs:{title:"报修分配（后勤）"}}),e._v(" "),r("van-field",{staticStyle:{display:"none"},attrs:{name:"fid"},model:{value:e.fid,callback:function(i){e.fid=i},expression:"fid"}}),e._v(" "),r("van-cell",{attrs:{title:"报修人:",value:e.frepair_person_name}}),e._v(" "),r("van-cell",{attrs:{title:"区域:",value:e.area}}),e._v(" "),r("van-cell",{attrs:{title:"报修类型:",value:e.frepair_type}}),e._v(" "),r("van-cell",{attrs:{title:"故障描述:",value:e.frservice_describe}}),e._v(" "),r("van-button",{staticStyle:{width:"90%",margin:"10px auto"},attrs:{type:"info",plain:"",block:""},on:{click:function(i){return e.getimg()}}},[e._v("查看维修图片")]),e._v(" "),r("van-field",{attrs:{readonly:"",clickable:"",name:"repair_user",value:e.repairPerson,label:"维修工",placeholder:"点击选择维修工"},on:{click:function(i){e.showPicker=!0}}}),e._v(" "),r("van-field",{staticStyle:{display:"none"},attrs:{name:"repair_user_id",label:"维修工："},model:{value:e.repair_user_id,callback:function(i){e.repair_user_id=i},expression:"repair_user_id"}}),e._v(" "),r("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker,callback:function(i){e.showPicker=i},expression:"showPicker"}},[r("van-picker",{attrs:{"show-toolbar":"",columns:e.repair_person,"value-key":"repair_user"},on:{confirm:e.person_confirm,cancel:function(i){e.showPicker=!1}}})],1),e._v(" "),r("van-field",{attrs:{readonly:"",clickable:"",name:"repair_fin_out",value:e.repair_fin_out,label:"维修类型",placeholder:"点击选择维修类型"},on:{click:function(i){e.show=!0}}}),e._v(" "),r("van-popup",{attrs:{position:"bottom"},model:{value:e.show,callback:function(i){e.show=i},expression:"show"}},[r("van-picker",{attrs:{"show-toolbar":"",columns:e.repair_finout},on:{confirm:e.finout_confirm,cancel:function(i){e.show=!1}}})],1),e._v(" "),r("van-field",{attrs:{name:"message",rows:"2",autosize:"",label:"备注",type:"textarea",maxlength:"100",placeholder:"请输入","show-word-limit":""},model:{value:e.remark,callback:function(i){e.remark=i},expression:"remark"}}),e._v(" "),r("van-button",{staticStyle:{width:"100%",position:"fixed",bottom:"0px",left:"0px"},attrs:{block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)},staticRenderFns:[]};var s=r("VU/8")(n,o,!1,function(e){r("HA74")},null,null);i.default=s.exports}});
//# sourceMappingURL=13.ea9739ae9f115c265663.js.map