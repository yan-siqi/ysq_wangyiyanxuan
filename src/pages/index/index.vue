<template>
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>

import Footer from '../src/components/index/Footer/Footer.vue'
import Content from '../src/components/index/Content/Content'
import Header from '../src/components/index/Header/Header.vue'
export default {
  name: "Index",
  components: {Footer,Header,Content},
};
</script>

<style lang="less" scoped></style>
