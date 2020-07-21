<template>
  <div class="buyContainer">
    <!-- 头部 -->
    <div class="top">
      <nut-tab @tab-switch="tabSwitch" :is-scroll="true">
        <nut-tab-panel tab-title="页签1">页签1</nut-tab-panel>
        <nut-tab-panel tab-title="页签2">页签2</nut-tab-panel>
        <nut-tab-panel tab-title="页签3">页签3</nut-tab-panel>
        <nut-tab-panel tab-title="页签4">页签4</nut-tab-panel>
        <nut-tab-panel tab-title="页签5">页签5</nut-tab-panel>
        <nut-tab-panel tab-title="页签6">页签6</nut-tab-panel>
        <nut-tab-panel tab-title="页签7">页签7</nut-tab-panel>
      </nut-tab>
    </div>
    <!-- 内容区 -->
    <div class="content"></div>
  </div>
</template>

<script>
import Vue from "vue";
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/nutui.css";
import { TabPanel } from "@nutui/nutui";
NutUI.install(Vue);
export default {
  name: "Buy",
  methods: {
    tabSwitch: function(index, event) {
      console.log(index + "--" + event);
    },
  },
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
  .content {
    width: 100%;
    height: calc(100vh - 2.64rem);
    background-color: aquamarine;
    overflow: scroll;
  }
}
</style>
