<template>
  <div class="div1">
    <div class="clearfix"></div>
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
      <div class="title-container">
        <h3 class="title">登录</h3>
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username" autocomplete="off" placeholder="请输入账号"
                    prefix-icon="el-icon-search"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" autocomplete="off" placeholder="请输入密码"
                    prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </div>

    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      const validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号！'))
        } else {
          callback()
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码！'))
        } else {
          callback()
        }
      };
      return {
        loginForm: {
          username: '',
          password: '',
        },

        rules: {
          username: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ],

        },

      }
    },
    methods: {
      submitForm(formName) {

        this.$refs[formName].validate((valid) => {
          console.log(this.loginForm.username)
          console.log(this.loginForm.password)
          if (valid) {
            alert("登录成功！");
            this.$router.push({name: 'Home'})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
  .div1 {
    width: 500px;
    margin: 0px auto;
    text-align: center;
    background: #e8e8e8;
    /*border: #2c0f0c solid 1px;*/
  }

  .demo-loginForm {
    width: 500px;
    text-align: center;
    margin: 0px;
  }

  .title-container {
    position: relative;
    width: 500px;
    margin: 0px auto;
    text-align: center;
  }

  .title {
    font-size: 26px;
    color: #576b95;
    margin: 0px auto 10px auto;
    text-align: center;
    font-weight: bold;
  }
</style>
