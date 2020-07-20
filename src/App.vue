<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Index /> -->
    <Footer />
  </div>
</template>

<script>
import "../src/assets/function/index";
//import Index from "../src/pages/index/index.vue";
import Footer from "../src/components/index/Footer/Footer";
//引入滑块滑动
//import BScroll from 'better-scroll'
export default {
  name: "App",
  components: { Footer },
};
</script>

<style lang="stylus">
@import url('../src/assets/iconfont/iconfont.styl')
#app{
  display flex
  flex-direction column
}
</style>
