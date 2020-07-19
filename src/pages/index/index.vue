<template>
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/index/Header/Header.vue'
import Content from '../../components/index/Content/Content.vue'
import Footer from '../../components/index/Footer/Footer.vue'
export default {
  name: "Index",
  components: {Footer,Header,Content},
};
</script>

<style lang="less" scoped></style>
