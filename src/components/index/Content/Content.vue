<template>
  <div class="container">
    <Header />
    <!-- 内容区域 -->
    <div class="content">
      <div class="swiper-container" ref="swiper"></div>
      
      
    </div>
  </div>
</template>

<script>
import Header from "../Header/Header";
export default {
  name: "Content",
  components: { Header },
};
</script>

<style lang="less" scoped>
@basewidth: 37.5rem;
.container {
  width: 100%;
  //position: relative;
  //overflow: hidden;
  .content {
    width: 100%;
    height: calc(100vh - 1.3rem);
    background-color: pink;
    /* position: absolute;
    left: 0;
    top: 77 / @basewidth; */
  }
}
</style>
