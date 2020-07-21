<template>
  <div>
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from '../../components/index/Header/Header'
import Content from "../../components/index/Content/Content.vue";
export default {
  name: "Index",
  components: {Header, Content },
};
</script>

<style lang="less" scoped></style>
