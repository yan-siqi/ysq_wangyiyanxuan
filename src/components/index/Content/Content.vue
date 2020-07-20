<template>
  <div class="container">
    <Header />
    <!-- 内容区域 -->
    <div class="content">
      <el-carousel trigger="click" height="150px" class="carsoulContainer">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="https://yanxuan.nosdn.127.net/99873ee03dbfa1fec94f273025baaf20.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <!--   <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/99873ee03dbfa1fec94f273025baaf20.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
              alt=""
              srcset=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
              alt=""
              srcset=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="swiper-slide-paginnation-bullets">
          <span class="swiper-paginnation-bullet"></span>
          <span class="swiper-paginnation-bullet"></span>
          <span class="swiper-paginnation-bullet"></span>
          <span class="swiper-paginnation-bullet"></span>
          <span class="swiper-paginnation-bullet"></span>
          <span class="swiper-paginnation-bullet"></span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Header from "../Header/Header";
//import Swiper from "swiper"; //自动轮播
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
  //position: relative;
  //overflow: hidden;
  .content {
    width: 100%;
    height: calc(100vh - 1.4rem);
    background-color: pink;
    position: relative;
    .carsoulContainer {
      position: absolute;
      left: 0;
      top: 89 / @basewidth;
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
        img{
          width: 100%;
          height: 100%;
        }
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
    /* .swiper-container {
      width: 100%;
      height: 8rem;
      position: absolute;
      left: 0;
      top: 89 / @basewidth;
      .swiper-slide {
        width: 100%;
        height: 4rem;
        background-color: blueviolet;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .swiper-slide-paginnation-bullets {
        position: absolute;
        left: 50%;
        bottom: 0.4rem;
        width: 100%;
        text-align: center;
      }
    } */
  }
}
</style>
