<template>
  <div class="container">
    <div class="wrapper">
      <ul class="content">
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
/* let wrapper = document.querySelector(".wrapper");
let scroll = new BScroll(wrapper); */
//let scroll = new BScroll('.wrapper')
export default {
  name: "Test",
};
</script>

<style lang="less" scoped>
.container {
  width: 200px;
  height: 200px;
  background-color: pink;
  // overflow: hidden;
}
</style>
