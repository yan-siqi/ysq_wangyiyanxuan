<template>
  <div>
    <Header />
    <Content />
     <Footer />
  </div>
</template>

<script>
import Header from '../../components/index/Header/Header'
import Content from "../../components/index/Content/Content.vue";
import Footer from '../../components/index/Footer/Footer'
export default {
  name: "Index",
  components: {Header, Content,Footer },
};
</script>

<style lang="less" scoped></style>
