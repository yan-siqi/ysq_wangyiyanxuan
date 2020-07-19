<template>
  <div id="app">
    <Header />
    <Footer />
  </div>
</template>

<script>
import "../src/assets/function/index";
import Footer from '../src/components/Footer/Footer.vue'
import Header from '../src/components/Header/Header.vue'
export default {
  name: "App",
  components: {Footer,Header},
};
</script>

<style>
</style>
