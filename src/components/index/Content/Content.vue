<template>
  <div class="container">
    <Header />
    
  </div>
</template>

<script>
import Header from "../Header/Header";
export default {
  name: "Content",
  components:{Header}
};
</script>

<style lang="less" scoped>
@font: 37.5rem;
.container {
  width: 100%;
  height: (100vh - 10rem);
  background-color: pink;
}
</style>
