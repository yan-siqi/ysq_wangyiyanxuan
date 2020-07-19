<template>
  <div id="app">
    <Header />
    <Footer />
  </div>
</template>

<script>
import "../src/assets/function/index";

import Footer from '../src/components/Footer/Footer.vue'
import Header from '../src/components/Header/Header.vue'
//引入滑块滑动
//import BScroll from 'better-scroll'
export default {
  name: "App",
  components: {Footer,Header},
};
</script>

<style lang="stylus">
@import url('../src/assets/iconfont/iconfont.styl')
</style>
