webpackJsonp([2],{"6dAM":function(e,t){},UV67:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Xxa5"),n=a.n(i),s=a("exGp"),o=a.n(s),r=a("mtWM"),l=a.n(r),c=a("gyMJ"),u={data:function(){return{datalist:[]}},props:{show:{type:Boolean,default:!0},itemlist:Array,placeholder:String,nodatatext:String},watch:{itemlist:function(e){this.datalist=e.concat()}},directives:{"show-extend":function(e,t,a){t.value?e.style.display="block":(e.style.display="none",e.querySelector(".search-text").value="",a.context.datalist=a.context.itemlist)}},methods:{appClick:function(e){this.$emit("item-click",e)},search:function(e){var t=e.currentTarget.value;this.datalist=this.itemlist.filter(function(e,a,i){return-1!=e.name.indexOf(t)})}},computed:{length:function(){return this.datalist.length}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show-extend",rawName:"v-show-extend",value:e.show,expression:"show"}],staticClass:"vue-dropdown default-theme"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.itemlist.length,expression:"itemlist.length"}],staticClass:"search-module clearfix"},[a("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词"},on:{search:function(t){return e.search(t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.length,expression:"length"}],staticClass:"list-module"},e._l(e.datalist,function(t,i){return a("li",{key:i,on:{click:function(a){return e.appClick(t)}}},[a("span",{staticClass:"list-item-text"},[e._v(e._s(t.fgoods_name))])])}),0),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.length,expression:"!length"}],staticClass:"tip__nodata"},[e._v(e._s(e.nodatatext))])])},staticRenderFns:[]};var d=a("VU/8")(u,h,!1,function(e){a("6dAM")},"data-v-99b6befc",null).exports,m=a("Fd2+"),f={name:"logisticsRepair",data:function(){return{area_val:"",type_val:"",columns:[],area_columns:[],placeholder:"选择",show:!1,show_area:!1,fault:"",uploadImages:[],files:{name:"",type:""}}},components:{dropDown:d},methods:{onConfirm:function(e){"string"!=typeof e&&(e=e.toString()),this.type_val=e.split(",").join("-"),this.show=!1},area_onConfirm:function(e){"string"!=typeof e&&(e=e.toString()),this.area_val=e.split(",").join("-"),this.show_area=!1},onSubmit:function(e){var t=this;if(this.$loading("提交中"),e.image_src=this.uploadImages,e.image_src=this.uploadImages,e.image_src.length<1)return Object(m.c)("请上传图片"),this.$loading.close(),!1;Object(c.l)(e).then(function(e){200==e.data.code?(t.$loading.close(),m.c.success(e.data.msg),setTimeout(function(){t.$router.push({path:"/repairlist"})},3e3)):(t.$loading.close(),m.c.fail(e.data.msg))})},look_img:function(e,t){Object(m.b)({images:e,startPosition:t})},getreparilist:function(){var e=this;Object(c.r)({repair_type:"后勤"}).then(function(t){e.columns=t.data.data})},getareailist:function(){var e=this;Object(c.c)().then(function(t){e.area_columns=t.data.data})},imgclose:function(e){this.uploadImages.splice(e,1)},onRead:function(e){var t=this;return o()(n.a.mark(function a(){var i;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.$loading("图片上传中..."),(i=t).files.name=e.file.name,i.files.type=e.file.type,i.imgPreview(e.file);case 5:case"end":return a.stop()}},a,t)}))()},imgPreview:function(e){var t=this;if(e&&window.FileReader&&/^image/.test(e.type)){var a=new FileReader;a.readAsDataURL(e),a.onloadend=function(){var e=this.result,a=new Image;a.src=e,this.result.length<=512e3?(t.headerImage=this.result,t.postImg()):a.onload=function(){var e=t.compress(a,void 0);t.headerImage=e,t.postImg()}}}},compress:function(e,t){var a=document.createElement("canvas"),i=a.getContext("2d"),n=document.createElement("canvas"),s=n.getContext("2d"),o=e.width,r=e.height,l=void 0;(l=o*r/4e6)>1?(o/=l=Math.sqrt(l),r/=l):l=1,a.width=o,a.height=r,i.fillStyle="#fff",i.fillRect(0,0,a.width,a.height);var c=void 0;if((c=o*r/1e6)>1){var u=~~(o/(c=~~(Math.sqrt(c)+1))),h=~~(r/c);n.width=u,n.height=h;for(var d=0;d<c;d++)for(var m=0;m<c;m++)s.drawImage(e,d*u*l,m*h*l,u*l,h*l,0,0,u,h),i.drawImage(n,d*u,m*h,u,h)}else i.drawImage(e,0,0,o,r);if(""!=t&&1!=t)switch(t){case 6:this.rotateImg(e,"left",a);break;case 8:this.rotateImg(e,"right",a);break;case 3:this.rotateImg(e,"right",a),this.rotateImg(e,"right",a)}var f=a.toDataURL("image/jpeg",.6);return n.width=n.height=a.width=a.height=0,f},rotateImg:function(e,t,a){if(null!=e){var i=e.height,n=e.width,s=2;null==s&&(s=0),"right"==t?++s>3&&(s=0):--s<0&&(s=3);var o=90*s*Math.PI/180,r=a.getContext("2d");switch(s){case 0:a.width=n,a.height=i,r.drawImage(e,0,0);break;case 1:a.width=i,a.height=n,r.rotate(o),r.drawImage(e,0,-i);break;case 2:a.width=n,a.height=i,r.rotate(o),r.drawImage(e,-n,-i);break;case 3:a.width=i,a.height=n,r.rotate(o),r.drawImage(e,-n,0)}}},dataURLtoFile:function(e){for(var t=e.split(","),a=atob(t[1]),i=a.length,n=new Uint8Array(i);i--;)n[i]=a.charCodeAt(i);return new File([n],this.files.name,{type:this.files.type})},postImg:function(){var e=this;return o()(n.a.mark(function t(){var a,i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=e.dataURLtoFile(e.headerImage),(i=new window.FormData).append("file",a);try{l()({method:"post",url:"http://47.104.193.180:18086/fastfds-uploader/v3",data:i}).then(function(t){var a=t.data.url;e.uploadImages.push(a),e.$loading.close()})}catch(e){console.log(e)}case 4:case"end":return t.stop()}},t,e)}))()}},created:function(){this.getreparilist(),this.getareailist()}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:"后勤报修"}}),e._v(" "),a("van-form",{on:{submit:e.onSubmit}},[a("van-field",{attrs:{label:"区域",value:e.area_val,rules:[{required:!0,message:"请选择区域"}],name:"area",placeholder:"点击选择",readonly:""},on:{click:function(t){e.show_area=!0}}}),e._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:e.show_area,callback:function(t){e.show_area=t},expression:"show_area"}},[a("van-picker",{attrs:{columns:e.area_columns,"show-toolbar":""},on:{cancel:function(t){e.show_area=!1},confirm:e.area_onConfirm}})],1),e._v(" "),a("van-field",{attrs:{label:"报修类型",value:e.type_val,rules:[{required:!0,message:"请选择报修类型"}],name:"room_repair_type",readonly:"",placeholder:"点击选择"},on:{click:function(t){e.show=!0}}}),e._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("van-picker",{attrs:{columns:e.columns,"show-toolbar":""},on:{cancel:function(t){e.show=!1},confirm:e.onConfirm}})],1),e._v(" "),a("van-field",{attrs:{name:"room_repair_describe",rows:"2",autosize:"",label:"故障描述",rules:[{required:!0,message:"请填写故障描述"}],type:"textarea",maxlength:"30",placeholder:"请输入","show-word-limit":""},model:{value:e.fault,callback:function(t){e.fault=t},expression:"fault"}}),e._v(" "),a("div",{staticClass:"upload-images"},[e._l(e.uploadImages,function(t,i){return a("div",{key:i,staticClass:"img-box"},[a("div",{staticClass:"icon-po"},[a("img",{staticClass:"image",attrs:{src:t},on:{click:function(t){return e.look_img(e.uploadImages,i)}}}),e._v(" "),a("div",{staticClass:"icon-close",on:{click:function(t){return e.imgclose(i)}}},[e._v("×")])])])}),e._v(" "),a("van-uploader",{attrs:{"after-read":e.onRead}})],2),e._v(" "),a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)},staticRenderFns:[]};var p=a("VU/8")(f,v,!1,function(e){a("pY/U")},null,null);t.default=p.exports},"pY/U":function(e,t){}});
//# sourceMappingURL=2.a625b9f591c9b27cc477.js.map