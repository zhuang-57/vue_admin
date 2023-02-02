<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
         <!-- 路由出口，路由匹配到的组件将渲染到这里 -->
         <router-view/>
    </transition>
  </section>
</template>

<script>
export default {
    name:'AppMain',
    computed: {
        // key() {
        //     return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
        // }
    }
}
</script>
