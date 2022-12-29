<template>
  <div id="app">
    <!-- 路由呈现的位置 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="less">
html,body {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
.color-main {
  color: #409eff;
}
</style>

