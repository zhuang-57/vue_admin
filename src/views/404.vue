<template>
  <div>
    <div class="app_container">
      <el-col :span="12"
        ><img :src="img_404" alt="404" class="img_style"
      /></el-col>
      <el-col :span="12">
        <h1>OOPS!</h1>
        <h2>很抱歉，页面它不小心迷路了！</h2>
        <p>
          请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告
        </p>
        <button @click="handleGoMain">返回首页</button>
      </el-col>
    </div>
  </div>
</template>

<script>
import img_404 from "@/assets/images/gif_404.gif";
export default {
  name: "wrongPage",
  data() {
    return {
      img_404,
    };
  },
  methods: {
    handleGoMain() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.app_container {
  width: 80%;
  margin: 120px auto;
}
.img_style {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>