<template>
  <div class="container">
    <Header />
    <!-- 内容区域 -->
    <div class="content">
      <el-carousel trigger="click" height="150px" class="carsoulContainer">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
            src="https://yanxuan.nosdn.127.net/99873ee03dbfa1fec94f273025baaf20.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <div class="indexService">
        <ul class="g-grow">
          <li class="item">
            <a href="">
              <i class="one"></i>
              <span class="text">网易自营品牌</span>
            </a>
          </li>
          <li class="item">
            <a href="">
              <i class="two"></i>
              <span class="text">30天无忧退货</span>
            </a>
          </li>

          <li class="item">
            <a href="">
              <i class="three"></i>
              <span class="text">48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="listContainer">
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header/Header";
//import { TabPanel } from "@nutui/nutui";
export default {
  name: "Content",
  mounted() {},
  components: { Header },
};
</script>

<style lang="less" scoped>
@basewidth: 37.5rem;
.container {
  width: 100%;
  height: calc(100vh-1.3rem);
  overflow: scroll;
  .content {
    width: 100%;
    height: calc(100vh - 3.6rem);
    overflow: scroll;
    background-color: pink;
    position: relative;
    .carsoulContainer {
      /* position: absolute;
      left: 0;
      top: 89 / @basewidth; */
      width: 100%;
      // height: 10rem;
      background-color: brown;
      .el-carousel__item {
        h3 {
          color: #475669;
          font-size: 14px;
          opacity: 0.75;
          line-height: 150px;
          margin: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .indexService {
      width: 100%;
      height: 36 / @basewidth;
     /*  position: absolute;
      left: 0;
      top: 239 / @basewidth; */
      background-color: brown;

      .g-grow {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        background-color: blueviolet;
        .item {
          width: 33.33%;
          height: 100%;
          .text {
            font-size: 0.32rem;
            color: #333;
            margin-left: 0.10667rem;
            line-height: 36 / @basewidth;
            display: inline-block;
            vertical-align: middle;
          }
          i {
            display: inline-block;
            vertical-align: middle;
            //background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-index-bf1239c157.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 0.42667rem;
            height: 0.42667rem;
          }
          .one {
            background-image: url("https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png");
          }
          .two {
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-index-bf1239c157.png);
          }
          .three {
            background-image:url("https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png");
          }
        }
      }
    }
    .listContainer{
     /*  width: 100%;
      height: 170/@basewidth; */
      background-color: chartreuse;
    }
  }
}
</style>
