<template>
  <div class="buyContainer">
    <!-- 头部 -->
    <div class="top"></div>
    <!-- 内容区 -->
    <div class="content">
   
    </div>
  </div>
</template>

<script>
export default {
  name: "Buy",
};
</script>

<style lang="less" scoped>
@basewidth: 37.5rem;
.buyContainer {
  .top {
    width: 100%;
    height: 50 / @basewidth;
    background-color: pink;
  }
  .content{
    width: 100%;
    height: calc(100vh - 2.64rem);
    background-color: aquamarine;
    overflow: scroll;
  }
}
</style>
