webpackJsonp([8],{E5n4:function(e,t){},lPQj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Xxa5"),n=a.n(i),r=a("exGp"),o=a.n(r),s=a("mtWM"),l=a.n(s),c=a("gyMJ"),d=a("Fd2+"),u={name:"addRepair",data:function(){return{files:{name:"",type:""},headerImage:null,type_val:"",columns:[],placeholder:"选择",show:!1,fault:"",uploadImages:[]}},methods:{onConfirm:function(e){"string"!=typeof e&&(e=e.toString()),this.type_val=e.split(",").join("-"),this.show=!1},onSubmit:function(e){var t=this;if(this.$loading("提交中"),e.image_src=this.uploadImages,e.image_src=this.uploadImages,e.image_src.length<1)return Object(d.c)("请上传图片"),this.$loading.close(),!1;Object(c.s)(e).then(function(e){(e.data.code=200)?(t.$loading.close(),d.c.success(e.data.msg),setTimeout(function(){t.$router.push({path:"/repairlist"})},3e3)):(t.$loading.close(),d.c.fail(e.data.msg))})},getreparilist:function(){var e=this;Object(c.r)({repair_type:"宿舍"}).then(function(t){console.log(t.data.data),e.columns=t.data.data})},look_img:function(e,t){Object(d.b)({images:e,startPosition:t})},imgclose:function(e){this.uploadImages.splice(e,1)},onRead:function(e){var t=this;return o()(n.a.mark(function a(){var i;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.$loading("图片上传中..."),(i=t).files.name=e.file.name,i.files.type=e.file.type,i.imgPreview(e.file);case 5:case"end":return a.stop()}},a,t)}))()},imgPreview:function(e){var t=this;if(e&&window.FileReader&&/^image/.test(e.type)){var a=new FileReader;a.readAsDataURL(e),a.onloadend=function(){var e=this.result,a=new Image;a.src=e,this.result.length<=512e3?(t.headerImage=this.result,t.postImg()):a.onload=function(){var e=t.compress(a,void 0);t.headerImage=e,t.postImg()}}}},compress:function(e,t){var a=document.createElement("canvas"),i=a.getContext("2d"),n=document.createElement("canvas"),r=n.getContext("2d"),o=e.width,s=e.height,l=void 0;(l=o*s/4e6)>1?(o/=l=Math.sqrt(l),s/=l):l=1,a.width=o,a.height=s,i.fillStyle="#fff",i.fillRect(0,0,a.width,a.height);var c=void 0;if((c=o*s/1e6)>1){var d=~~(o/(c=~~(Math.sqrt(c)+1))),u=~~(s/c);n.width=d,n.height=u;for(var h=0;h<c;h++)for(var m=0;m<c;m++)r.drawImage(e,h*d*l,m*u*l,d*l,u*l,0,0,d,u),i.drawImage(n,h*d,m*u,d,u)}else i.drawImage(e,0,0,o,s);if(""!=t&&1!=t)switch(t){case 6:this.rotateImg(e,"left",a);break;case 8:this.rotateImg(e,"right",a);break;case 3:this.rotateImg(e,"right",a),this.rotateImg(e,"right",a)}var g=a.toDataURL("image/jpeg",.6);return n.width=n.height=a.width=a.height=0,g},rotateImg:function(e,t,a){if(null!=e){var i=e.height,n=e.width,r=2;null==r&&(r=0),"right"==t?++r>3&&(r=0):--r<0&&(r=3);var o=90*r*Math.PI/180,s=a.getContext("2d");switch(r){case 0:a.width=n,a.height=i,s.drawImage(e,0,0);break;case 1:a.width=i,a.height=n,s.rotate(o),s.drawImage(e,0,-i);break;case 2:a.width=n,a.height=i,s.rotate(o),s.drawImage(e,-n,-i);break;case 3:a.width=i,a.height=n,s.rotate(o),s.drawImage(e,-n,0)}}},dataURLtoFile:function(e){for(var t=e.split(","),a=atob(t[1]),i=a.length,n=new Uint8Array(i);i--;)n[i]=a.charCodeAt(i);return new File([n],this.files.name,{type:this.files.type})},postImg:function(){var e=this;return o()(n.a.mark(function t(){var a,i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=e.dataURLtoFile(e.headerImage),(i=new window.FormData).append("file",a);try{l()({method:"post",url:"http://47.104.193.180:18086/fastfds-uploader/v3",data:i}).then(function(t){var a=t.data.url;e.uploadImages.push(a),e.$loading.close()})}catch(e){console.log(e)}case 4:case"end":return t.stop()}},t,e)}))()}},created:function(){this.getreparilist()}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:"宿舍报修"}}),e._v(" "),a("van-form",{on:{submit:e.onSubmit}},[a("van-field",{attrs:{label:"报修类型",value:e.type_val,readonly:"",rules:[{required:!0,message:"请选择报修类型"}],name:"room_repair_type",placeholder:"点击选择"},on:{click:function(t){e.show=!0}}}),e._v(" "),a("van-popup",{attrs:{position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("van-picker",{attrs:{columns:e.columns,"show-toolbar":""},on:{cancel:function(t){e.show=!1},confirm:e.onConfirm}})],1),e._v(" "),a("van-field",{attrs:{name:"room_repair_describe",rows:"2",autosize:"",label:"故障描述",rules:[{required:!0,message:"请填写故障描述"}],type:"textarea",maxlength:"30",placeholder:"请输入","show-word-limit":""},model:{value:e.fault,callback:function(t){e.fault=t},expression:"fault"}}),e._v(" "),a("div",{staticClass:"upload-images"},[e._l(e.uploadImages,function(t,i){return a("div",{key:i,staticClass:"img-box"},[a("div",{staticClass:"icon-po"},[a("img",{staticClass:"image",attrs:{src:t},on:{click:function(t){return e.look_img(e.uploadImages,i)}}}),e._v(" "),a("div",{staticClass:"icon-close",on:{click:function(t){return e.imgclose(i)}}},[e._v("×")])])])}),e._v(" "),a("van-uploader",{attrs:{"after-read":e.onRead,accept:"image/gif, image/jpeg, image/png","max-size":6e6}})],2),e._v(" "),a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)},staticRenderFns:[]};var m=a("VU/8")(u,h,!1,function(e){a("E5n4")},null,null);t.default=m.exports}});
//# sourceMappingURL=8.01778de5f4771e990615.js.map