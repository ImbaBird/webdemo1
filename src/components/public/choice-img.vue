<template>
  <div class="choice_img_box">
    <input @change="uploadIMG" accept="image/x-png" type="file" v-if="png">
    <input @change="uploadIMG" accept="image/x-png, image/jpg, image/jpeg" type="file" v-else>
  </div>
</template>

<script>
  export default {
    props: {
      png: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        picavalue: '',
        imgUrl: ''
      }
    },
    methods: {
      uploadIMG(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.picavalue = files[0];
        // console.log(this.picavalue.size / 1024);
        if (this.picavalue.size / 1024 > 5000) {
          alert('图片过大不支持上传')
        } else if (this.picavalue.size / 1024 < 300) {
          this.imgNexview(this.picavalue)
        } else {
          this.imgPreview(this.picavalue);
        }
      },
      //获取不压缩图片
      imgNexview(file) {
        let self = this;
        if (!file || !window.FileReader) return;
        if (/^image/.test(file.type)) {
          //创建一个reader
          let reader = new FileReader();

          //将图片转成base64格式
          reader.readAsDataURL(file);
          //读取成功后的回调
          reader.onloadend = function () {
            let result = this.result;
            self.imgUrl = result;
            var conversions = self.base64ToBlob(result);
            var filename = file.name;
            let returnObj = {
              base64: result,
              bold: conversions,
              name: filename
            }
            self.$emit('returnChoice', returnObj);
          }
        }
      },
      //获取压缩图片
      imgPreview(file, callback) {
        let self = this;
        //判断支不支持FileReader
        if (!file || !window.FileReader) return;
        if (/^image/.test(file.type)) {
          //创建一个reader
          let reader = new FileReader();

          //将图片转成base64格式
          reader.readAsDataURL(file);
          //读取成功后的回调
          reader.onloadend = function () {
            let result = this.result;
            let img = new Image();
            img.src = result;
            // console.log("********未压缩前的图片大小********");
            // console.log(result.length);
            img.onload = function () {
              let data = self.compress(img);
              self.imgUrl = data;
              var conversions = self.base64ToBlob(data);
              let returnObj = {
                base64: data,
                bold: conversions,
                name: filename
              }
              self.$emit('returnChoice', returnObj);
            };
          };
        }
      },
      // 压缩图片
      compress(img) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let initSize = img.src.length;
        let width = img.width;
        let height = img.height;
        canvas.width = width;
        canvas.height = height;
        // 铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, width, height);

        //进行最小压缩
        let ndata = canvas.toDataURL("image/jpeg", 0.1);
        // console.log("*******压缩后的图片大小*******");
        // console.log(ndata)
        // console.log(ndata.length);
        return ndata;
      },
      base64ToBlob(urlData) {
        var type = this.picavalue.type;
        var arr = urlData.split(',');
        var mime = arr[0].match(/:(.*?);/)[1] || type;
        // 去掉url的头，并转化为byte
        var bytes = window.atob(arr[1]);
        // 处理异常,将ascii码小于0的转换为大于0
        var ab = new ArrayBuffer(bytes.length);
        // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
        var ia = new Uint8Array(ab);
        for (var i = 0; i < bytes.length; i++) {
          ia[i] = bytes.charCodeAt(i);
        }
        return new Blob([ab], {
          type: mime
        });
      }
    }
  }
</script>

<style scoped>
  .choice_img_box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 33;
  }

  .choice_img_box input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
