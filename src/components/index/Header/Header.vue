<template>
  <div>
    <div class="headerContainer">
      <div class="top1">
        <img
          class="hLogo"
          src="../../../assets/images/logo.png"
          alt=""
          srcset=""
        />
        <div class="search" @click="toSearch('./search')">
          <i class="iconfont icon-sousuo"></i>
          <div class="hIpt " type="text" placeholder="请按你的需求搜索">
            请按你的需求搜索
          </div>
        </div>
        <button class="hLogin">登录</button>
      </div>
      <!-- 导航区域 -->
      <div class="top2">
        <div class="hLeftTabs" enable-flex scroll-x="true">
          <div class="tabList" scroll>
            <ul class="content">
              <li class="tabItem"></li>
            </ul>
            <div class="tabItem" @tab-switch="tabSwitch" :is-scroll="true">
              <span class="txt" tab-title="推荐">
                推荐
              </span>
            </div>

            <div class="tabItem">
              <a class="txt">居家生活</a>
            </div>
            <div class="tabItem">
              <a class="txt">
                服饰鞋包
              </a>
            </div>
            <div class="tabItem">
              <a class="txt">
                美食酒水
              </a>
            </div>
            <div class="tabItem">
              <span class="txt">
                推荐
              </span>
            </div>
            <div class="tabItem">
              <span class="txt">
                推荐
              </span>
            </div>
            <div class="tabItem">
              <span class="txt">
                推荐
              </span>
            </div>
            <div class="tabItem">
              <span class="txt">
                推荐
              </span>
            </div>
            <div class="tabItem">
              <span class="txt">
                推荐
              </span>
            </div>
            <div class="tabItem">
              <span class="txt">
                推荐
              </span>
            </div>
          </div>
        </div>
        <div class="hRight">
          <div class="linner"></div>
          <div class="toogle">
            <i class="icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Vue from "vue";
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/nutui.css";
import { TabPanel } from "@nutui/nutui";
NutUI.install(Vue);
//import BScroll from 'better-scroll'

//new BScroll(".tabList");
export default {
  name: "Header",
  components: {
    // Recommend,
  },
  async mounted() {
    //获取首页数据
    this.getIndexData();
  },
  methods: {
    tabSwitch: function(index, event) {
      console.log(index + "--" + event);
    },
    ...mapActions({
      getIndexData: "getIndexData",
    }),
    changeNavId(navIndex, navId) {
      this.navIndex = navIndex;
      this.navId = navId;
    },
    //跳转到search界面
    toSearch(path) {
      this.$router.push(path);
    },
  },
  computed: {
    ...mapState({
      indexData: (state) => state.index.indexData,
    }),
  },
};
</script>

<style lang="less">
@basewidth: 37.5rem;
.headerContainer {
  z-index: 5;
  width: 375 / @basewidth;
  height: 74 / @basewidth;
  //background-color: brown;
  /*  position: fixed;
  left: 0;
  top: 0; */
  //margin: 5px 0px 0 5px;

  .top1 {
    width: 345 / @basewidth;
    height: 44 / @basewidth;
    //background-color: burlywood;
    display: flex;
    justify-content: space-around;
    align-items: center;
   // background-color: pink;
    margin: 5px auto;
    .hLogo {
      height: 20 / @basewidth;
      height: 20 / @basewidth;
      width: 69 / @basewidth;
      height: 20 / @basewidth;
      display: inline-block;
    }
    .search {
      position: relative;
      width: 210 / @basewidth;
      height: 30 / @basewidth;
      border: 1 / @basewidth solid #666666;
      border-radius: 5 / @basewidth;
      background: #ededed;
      .iconfont {
        font-size: 15 / @basewidth;
        position: absolute;
        top: 25%;
        left: 5 / @basewidth;
      }
      .hIpt {
        width: 190 / @basewidth;
        height: 30 / @basewidth;
        line-height: 30 / @basewidth;
        margin-left: 25 / @basewidth;
        font-size: 13 / @basewidth;
        text-align: left;
      }
    }
    .hLogin {
      width: 0.98667rem;
      height: 0.53333rem;
      line-height: 0.53333rem;
      text-align: center;
      color: #dd1a21;
      border: 1px solid #dd1a21;
      border-radius: 0.10667rem;
      margin-left: 0.21333rem;
      font-size: 0.32rem;
    }
  }
  .top2 {
    width: 345 / @basewidth;
    height: 30 / @basewidth;
    margin :0 auto;
    //background-color: palevioletred;
    .hLeftTabs {
      width: 80%;
      height: 100%;
      //background-color: yellowgreen;
      display: inline-block;
      /* 默认是基线对齐 */
      vertical-align: top;
      .tabList {
        // width: 5 / @basewidth;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        // padding: 0 0.4rem;
        background: #fff;
        overflow: hidden;
        .tabItem {
          .txt {
            white-space: nowrap;
            display: inline-block;
            padding: 0 0.21333rem;
            line-height: 0.8rem;
            font-size: 0.37333rem;
            color: #333;
            text-align: center;
          }
        }
      }
    }
    .hRight {
      display: inline-block;
      width: 19%;
      height: 100%;
      position: relative;
      .linner {
        width: 50%;
        height: 0.8rem;
        // background-color: tomato;
      }
      .toogle {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        .icon {
          width: 50%;
          height: 50%;
          margin-top: 0.2rem;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp);
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
