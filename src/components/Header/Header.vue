<template>
  <div>
    <div class="headerContainer">
      <div class="top1">
        <img class="hLogo" src="../../assets/images/logo.png" alt="" srcset="" />
        <input class="hIpt" type="text" placeholder="请按你的需求搜索" />
        <button class="hLogin">登录</button>
      </div>
      <div class="top2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less">
.headerContainer {
  width: 375/ (37.5rem);
  height: 74/ (37.5rem);
  background-color: brown;
  position: fixed;
  left: 0;
  top: 0;
  padding: 0.2rem 0.4rem;
  .top1 {
    width: 345/ (37.5rem);
    height: 44/ (37.5rem);
    background-color: burlywood;

    .hLogo {
      width: 69/ (37.5rem);
      height: 20/ (37.5rem);
      display: inline-block;
    }
  }
  .top2 {
    width: 345/ (37.5rem);
    height: 30/ (37.5rem);
    background-color: palevioletred;
  }
}
</style>
