<template>
  <div class="buyContainer">
    <!-- 头部 -->
    <div class="top">
      <div class="contentTop">
        <div class="contentLeft">
          <a href=""></a>
        </div>
        <span>值得买</span>
        <div class="contentRight"></div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="content">
     <!--  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/nutui.css";
import { TabPanel } from "@nutui/nutui";
NutUI.install(Vue);
export default {
/*   data() {
    return {
      data: new Array(30),
      page: 5,
      num: 30,
      isHasMore: true,
      isLoading: false,
      isErr: false,
      timer: null,
    };
  },
  methods: {
    onInfinite() {
      this.isLoading = true;
      this.timer = setTimeout(() => {
        if (this.page <= 5) {
          this.data = new Array(this.num * this.page);
          this.page = this.page + 1;
        } else {
          this.isHasMore = false;
        }
        this.isLoading = false;
      }, 100);
    },
  },
  destroyed() {
    clearTimeout(this.timer);
  }, */


  data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    } 
};
</script>

<style lang="less" scoped>
@basewidth: 37.5rem;
.buyContainer {
  .top {
    width: 100%;
    height: 50 / @basewidth;
    background-color: pink;
    .contentTop{
      width: 92%;
      margin:0 auto;
      height: 100%;
      background-color: red;
    }
  }
  .content {
    width: 100%;
    height: calc(100vh - 2.64rem);
    background-color: aquamarine;
    overflow: scroll;
  }
}
</style>
