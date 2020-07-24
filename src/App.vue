<template>
  <div id="app">
    <router-view></router-view>
   
  <!--   <Test />  -->
  </div>
</template>

<script>
import "../src/assets/function/index";
import Test from '../src/pages/test/test'

//引入滑块滑动
//import BScroll from 'better-scroll'
export default {
  name: "App",
  components: { },
};
</script>

<style lang="stylus">
@import url('../src/assets/iconfont/iconfont.styl')

#app{
  display flex
  flex-direction column
  justify-content space-between
}
</style>
