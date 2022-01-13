<template>
  <div id="app">
    <!-- 上面显示路由组件 -->
    <router-view/>
    <!-- $router代表当前路由 -->
    <FooterGuide v-show="$route.meta.showFooter"/>
    <!-- 下面显示底部导航 -->
  </div>
</template>

<script>
// 引入底部导航
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// 映射成标签
export default {
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>