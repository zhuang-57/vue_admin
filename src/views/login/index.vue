<template>
  <div>
   <el-card class="login-from-layout">
    <el-form 
    autoComplete="on"
    :model="loginForm" 
    :rules="rules" 
    ref="loginForm" 
    status-icon 
    label-position="left">
    <div style="text-align: center">
      <i class="el-icon-s-shop" style="width:56px;height:56px;color:#409EFF;font-size: 50px;"></i>
    </div>
    <h2 class="login-title color-main">mall-admin-web</h2>
    <el-form-item prop="username">
    <el-input type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名">
    <span slot="prefix">
      <i class="el-icon-user-solid color-main"></i>
    </span>
    </el-input>
  </el-form-item>
  <el-form-item prop="pass">
    <el-input :type="pwdType" v-model="loginForm.pass" autocomplete="on" placeholder="请输入密码">
      <span slot="prefix">
        <i class="el-icon-lock color-main"></i>
      </span>
      <span slot="suffix" @click="showPwd">
        <i class="el-icon-view color-main"></i>
      </span>
    </el-input>
  </el-form-item>
  <el-form-item style="margin-bottom:60px;text-align:center">
    <el-button type="primary" :loading="loading" @click="submitForm('loginForm')">登录</el-button>
    <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
  </el-form-item>
</el-form>
   </el-card>
   <img :src="login_center_bg" class="login-center-layout">
  </div>
  </template>

<script>
import login_center_bg from '@/assets/images/login_center_bg.png'
import { isValidateUsername } from '@/utils/validate';

export default {
    name:'login',
    data() {
      var validateUsername = (rule, value, callback) => {
        if (!isValidateUsername(value)) {
           callback(new Error('请输入正确的用户名'));
        }else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value < 3) {
          callback(new Error('密码不能小于六位数'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          username:'',
          pass: ''
        },
        rules: {
          username: [
            // 是否为必填，验证器，何事触发
            {required:true, validator: validateUsername, trigger: 'blur' }
          ],
          pass: [
            {required:true, validator: validatePass, trigger: 'blur' }
          ]
        },
        login_center_bg,
        pwdType: 'password',
        loading:false
      };
    },
    methods: {
      showPwd(){
        if(this.pwdType === 'password'){
          this.pwdType = '';
        }else{
          this.pwdType = 'password';
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true;
            if(this.loginForm.username === 'nannan' && this.loginForm.pass === '111'){
              this.loading = false;
              this.$router.push({path: '/'});
            }        
           } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
.login-from-layout {
  position: absolute;
  right: 0;
  left: 0;
  width:360px;
  margin:140px auto;
  border-top: 10px solid #409eff;
}

.login-title {
  text-align: center;
}

.login-center-layout {
  background:#409eff;
  width:auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>