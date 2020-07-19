<template>
  <div id="app">
    <!-- 显示当前路由组件 -->
    <!-- <router-view></router-view> -->
    <Index />
  </div>
</template>

<script>
import "../src/assets/function/index";
import "../src/pages/index/index";
//引入滑块滑动
//import BScroll from 'better-scroll'
export default {
  name: "App",
  components: { Index },
};
</script>

<style lang="stylus">
@import url('../src/assets/iconfont/iconfont.styl')
#app{
  display flex
  flex-direction column
}
</style>
