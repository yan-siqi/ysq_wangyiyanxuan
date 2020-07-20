<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import "../src/assets/function/index";
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
  justify-content space-between
  position relative
}
</style>
