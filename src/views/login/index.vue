<template>
  <div>
   <el-card class="login-from-layout">
    <el-form 
    autoComplete="on"
    :model="loginForm" 
    :rules="loginRules" 
    ref="loginForm" 
    status-icon 
    label-position="left">
    <div style="text-align: center;">
      <svg-icon icon-class="login-mall" style="width:56px;height:56px;color:#409EFF;font-size: 50px;"></svg-icon>
    </div>
    <h2 class="login-title color-main">vue-admin-web</h2>
    <el-form-item prop="username">
      <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名">
    <span slot="prefix">
      <i class="el-icon-user-solid color-main"></i>
    </span>
    </el-input>
  </el-form-item>
  <el-form-item prop="password">
    <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autocomplete="on" placeholder="请输入密码">
      <span slot="prefix">
        <i class="el-icon-lock color-main"></i>
      </span>
      <span slot="suffix" @click="showPwd">
        <i class="el-icon-view color-main"></i>
      </span>
    </el-input>
  </el-form-item>
  <el-form-item style="margin-bottom:60px;text-align:center">
    <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
    <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
  </el-form-item>
</el-form>
   </el-card>
   <img :src="login_center_bg" class="login-center-layout">
  </div>
  </template>

<script>
import login_center_bg from '@/assets/images/login_center_bg.png';
import { isValidateUsername } from '@/utils/validate';
import {setSupport,getSupport,setCookie,getCookie} from '@/utils/support';

export default {
    name:'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isValidateUsername(value)) {
           callback(new Error('请输入正确的用户名'));
        }else{
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 3) {
          callback(new Error('密码不能小于3位数'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          username:'',
          password: '',
        },
        loginRules: {
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
        loading:false,
        dialogVisible:false,
        supportDialogVisible:false
      };
    },
    created(){
      this.loginForm.username = getCookie("username");
      this.loginForm.password = getCookie("password");
      if(this.loginForm.username === undefined || this.loginForm.username == null || this.loginForm.username === ''){
        this.loginForm.username = 'admin';
      }
      if(this.loginForm.password === undefined || this.loginForm.password == null){
        this.loginForm.password = '';
      }
    },
    methods: {
      showPwd(){
        if(this.pwdType === 'password'){
          this.pwdType = '';
        }else{
          this.pwdType = 'password';
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            // let isSupport = getSupport();
            // if(isSupport===undefined || isSupport===null){
            //   this.dialogVisible = true;
            //   return;
            // }
            this.loading = true;
            this.$store.dispatch('Login',this.loginForm).then(() =>{
              this.loading = false;
              setCookie("username",this.loginForm.username,15);
              setCookie("password",this.loginForm.password,15);
              // console.log("true");
              this.$router.push({path: '/'});
            }).catch(() => {
                this.loading = false
            })      
           } else {
            console.log('参数验证不合法!');
            return false;
          }
        });
      },
      handleTry(){
        this.dialogVisible = true;
      },
      dialogConfirm(){
        this.dialogVisible = false;
        setSupport(true);
      },
      dialogCancel(){
        this.dialogVisible = false;
        setSupport(false);
      }
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
  margin: 15px 0;
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