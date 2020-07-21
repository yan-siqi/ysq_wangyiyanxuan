<template>
  <div class="container">
    <Header />
    <!-- 内容区域 -->
    <div class="content">
      <!-- 首页轮播 -->
      <el-carousel trigger="click" height="150px" class="carsoulContainer">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
            src="https://yanxuan.nosdn.127.net/99873ee03dbfa1fec94f273025baaf20.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt=""
          />
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <!-- 网页自营品牌 -->
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
      <!-- 商品列表 -->
      <div class="listContainer">
        <a class="listItem">
          <div class="icon">
            <img
              src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
              alt=""
            />
          </div>
          <div class="text">新品首发</div>
        </a>
        <a class="listItem">
          <div class="icon">
            <img
              src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"
              alt=""
            />
          </div>
          <div class="text">居家生活</div>
        </a>
        <a class="listItem">
          <div class="icon">
            <img
              src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png"
              alt=""
            />
          </div>
          <div class="text">服饰鞋靴</div>
        </a>
        <a class="listItem">
          <div class="icon">
            <img
              src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
              alt=""
            />
          </div>
          <div class="text">美食酒水</div>
        </a>
        <a class="listItem">
          <div class="icon">
            <img
              src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"
              alt=""
            />
          </div>
          <div class="text">个护清洁</div>
        </a>
        <a class="listItem">
          <div class="icon">
            <img
              src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"
              alt=""
            />
          </div>
          <div class="text">母婴亲子</div>
        </a>
        <a class="listItem">
          <div class="icon">
            <img
              src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png"
              alt=""
            />
          </div>
          <div class="text">运动旅行</div>
        </a>
        <a class="listItem">
          <div class="icon">
            <img
              src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"
              alt=""
            />
          </div>
          <div class="text">数码家电</div>
        </a>
        <a class="listItem">
          <div class="icon">
            <img
              src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png"
              alt=""
            />
          </div>
          <div class="text">全球特色</div>
        </a>
        <a class="listItem">
          <div class="icon">
            <img
              src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif"
              alt=""
            />
          </div>
          <div class="text">好货抄底</div>
        </a>
      </div>
      <!-- 新人专享 -->
      <div class="newShare">
        <!-- 新人专享 -->
        <div class="newShareImg">
          <a href="">
            <img
              src="https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif?imageView&quality=75"
              alt=""
              srcset=""
            />
          </a>
        </div>
        <!-- 9.9专区 -->
        <div class="shopDiscount">
          <div class="item1">
            <a href="">
              <img
                src="https://yanxuan.nosdn.127.net/8b5c103801f035cc7369afc1a46e0bc5.png?quality=75&type=webp&imageView&thumbnail=375x0"
                alt=""
                srcset=""
              />
            </a>
          </div>
          <div class="item2">
            <a href="">
              <img
                src="https://yanxuan.nosdn.127.net/ec70074e0737bb666805fc63e908b234.png?quality=75&type=webp&imageView&thumbnail=375x0"
                alt=""
                srcset=""
              />
            </a>
          </div>
        </div>
      </div>
      <!-- 新人专享礼 -->
      <div class="freshmanModule">
        <div class="topTitle">
          <span class="txt">
            - 新人专享礼 -
          </span>
        </div>
        <div class="contentFresh">
          <div class="left">
            <div class="name">新人专享礼包</div>
            <div class="imgWrap">
              <div class="leftImg">
                <img
                  src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                  alt=""
                />
              </div>
              <div class="animate"></div>
            </div>
          </div>
          <div class="right">
            <!-- 右侧上边 -->
            <div class="module1">
              <div class="activityItem">
                <div class="picWrap">
                  <div class="pic">
                    <img
                      src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?quality=75&type=webp&imageView&thumbnail=200x200"
                      alt=""
                    />
                  </div>
                  <div class="discount">
                    <div class="line1">¥59</div>
                    <div class="line2">¥69</div>
                  </div>
                </div>
                <div class="txtArea">
                  <div class="title">福利社</div>
                  <div class="subTitle">今日特价</div>
                </div>
              </div>
            </div>
            <!-- 右侧下边 -->
            <div class="module2">
              <div class="activityItem">
                <div class="picWrap">
                  <div class="pic">
                    <img
                      src="https://yanxuan-item.nosdn.127.net/2738944ac699357481e5c1a94b56bdea.png?quality=75&type=webp&imageView&thumbnail=200x200"
                      alt=""
                    />
                    <div class="discount">
                      <div class="line1">¥4.9</div>
                      <div class="line2">¥19.9</div>
                    </div>
                  </div>
                </div>
                <div class="txtArea">
                  <div class="title">新人拼团</div>
                  <div class="subTitle">一元起包邮</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 类目热销榜 -->
      <div class="moduleTitle">
        <span>类目热销榜</span>
      </div>
      <div class="moduleContentHot">
        <div class="moduleContentHotList">
          <div class="item-big">
            <div class="itembig1">
            </div>
            <div class="itembig2"></div>
          </div>
          <div class="item-small">
            <div class="smallItem">
              <div class="txt">美食酒水</div>
              <img
                src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
                srcset=""
              />
            </div>
            <div class="smallItem">
              <div class="txt">美食酒水</div>
              <img
                src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
                srcset=""
              />
            </div>
            <div class="smallItem">
              <div class="txt">美食酒水</div>
              <img
                src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
                srcset=""
              />
            </div>
            <div class="smallItem">
              <div class="txt">美食酒水</div>
              <img
                src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
                srcset=""
              />
            </div>
            <div class="smallItem">
              <div class="txt">美食酒水</div>
              <img
                src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
                srcset=""
              />
            </div>
            <div class="smallItem">
              <div class="txt">美食酒水</div>
              <img
                src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
                srcset=""
              />
            </div>
            <div class="smallItem">
              <div class="txt">美食酒水</div>
              <img
                src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
                srcset=""
              />
            </div>
            <div class="smallItem">
              <div class="txt">美食酒水</div>
              <img
                src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header/Header";
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
    //background-color: pink;
    position: relative;
    .carsoulContainer {
      /* position: absolute;
      left: 0;
      top: 89 / @basewidth; */
      width: 100%;
      // height: 10rem;
      //background-color: brown;
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
      // background-color: brown;

      .g-grow {
        width: 90%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        //background-color: blueviolet;
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
            background-image: url("https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png");
          }
        }
      }
    }
    .listContainer {
      height: 170.5 / @basewidth;
      width: 100%;
      //background-color: chartreuse;
      .listItem {
        display: block;
        width: 1.46667rem;
        height: 2.08rem;
        float: left;
        margin: 0.13333rem 0.26667rem 0;
        //background-color: red;
        .icon {
          width: 1.46667rem;
          height: 1.46667rem;
          background-color: #fff;
          img {
            width: 1.46667rem;
            height: 1.46667rem;
          }
        }
        .text {
          margin-top: 0.13333rem;
          text-align: center;
          font-size: 0.32rem;
          color: #333;
          line-height: 0.48rem;
          white-space: nowrap;
        }
      }
    }
    .newShare {
      width: 100%;
      height: 273.75 / @basewidth;
      //background-color: pink;
      .newShareImg {
        width: 100%;
        height: 160.75 / @basewidth;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .shopDiscount {
        height: 100 / @basewidth;
        background-color: #333;
        padding: 10 / @basewidth;
        padding-bottom: 0;
        display: flex;
        .item1 {
          height: 90.045 / @basewidth;
          width: 175.9 / @basewidth;
          background-color: pink;
          margin-right: 10 / @basewidth;
          border-radius: 10 / @basewidth;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .item2 {
          height: 90.045 / @basewidth;
          width: 175.9 / @basewidth;
          background-color: pink;
          border-radius: 10 / @basewidth;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .freshmanModule {
      padding-left: 0.4rem;
      overflow: hidden;
      .topTitle {
        height: 1.2rem;
        width: 100%;
        line-height: 1.2rem;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 0.42667rem;
        .txt {
          display: inline-block;
          //position: relative;
        }
      }
      .contentFresh {
        width: 100%;
        //height: 270 / @basewidth;
        display: flex;
        .left {
          height: 234 / @basewidth;
          display: block;
          width: 4.57333rem;
          height: 210 / @basewidth;
          background: #f9e9cf;
          border-radius: 0.05333rem;
          margin-right: 0.05333rem;
          float: left;
          color: #333;
          .name {
            font-family: PingFangSC-Medium;
            font-size: 0.42667rem;
            padding: 0.4rem 0 0 0.4rem;
          }
          .imgWrap {
            margin: 0.49333rem auto;
            width: 3.44rem;
            height: 3rem;
            position: relative;
            .leftImg {
              width: 3.44rem;
              height: 3.42667rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .animate {
              position: absolute;
              width: 0.4rem;
              height: 0.26667rem;
              bottom: 0.24rem;
              right: 0.86667rem;
              background: url(//yanxuan.nosdn.127.net/3f7e731….png) no-repeat;
              background-size: 100% 100%;
              animation: carousel 1s linear infinite;

              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .right {
          display: block;
          height: 103.5 / @basewidth;
          width: 171.5 / @basewidth;
          float: right;
          .module1 {
            width: 100%;
            height: 100%;
            background: #fbe2d3;

            .activityItem {
              //position: relative;
              display: block;
              color: #333;
              width: 4.57333rem;
              height: 2.86667rem;
              float: left;
              border-radius: 0.05333rem;
              margin: 0 0.05333rem 0.05333rem 0;
              font-size: 0.32rem;
              padding: 0.26667rem 0 0 0.4rem;
              position: relative;
              .picWrap {
                position: absolute;
                right: 14 / @basewidth;
                top: -8 / @basewidth;
                .pic {
                  width: 2.66667rem;
                  height: 2.66667rem;
                  img {
                    width: 100%;
                    height: auto;
                  }
                }
                .discount {
                  position: absolute;
                  top: 0.4rem;
                  right: 0.45333rem;
                  width: 1.06667rem;
                  height: 1.06667rem;
                  opacity: 0.8;
                  background: #f59524;
                  border-radius: 50%;
                  padding-top: 0.13333rem;
                  color: #fff;
                  text-align: center;
                  .line1 {
                    font-size: 0.32rem;
                  }
                  .line2 {
                    font-size: 0.26667rem;
                    margin-top: -0.09333rem;
                    text-decoration: line-through;
                  }
                }
              }
            }
            .txtArea {
              .title {
                font-family: PingFangSC-Medium;
                font-size: 0.42667rem;
              }
              .subTitle {
                color: #7f7f7f;
              }
            }
          }
          .module2 {
            margin-top: 3 / @basewidth;
            width: 100%;
            height: 100%;
            background: #ffecc2;

            .activityItem {
              //position: relative;
              display: block;
              color: #333;
              width: 4.57333rem;
              height: 2.86667rem;
              float: left;
              border-radius: 0.05333rem;
              margin: 0 0.05333rem 0.05333rem 0;
              font-size: 0.32rem;
              padding: 0.26667rem 0 0 0.4rem;
              position: relative;
              .picWrap {
                position: absolute;
                right: 9 / @basewidth;
                top: -20 / @basewidth;
                .pic {
                  width: 2.66667rem;
                  height: 2.66667rem;
                  img {
                    width: 100%;
                    height: auto;
                  }
                }
                .discount {
                  position: absolute;
                  top: 0.4rem;
                  right: 0.45333rem;
                  width: 1.06667rem;
                  height: 1.06667rem;
                  opacity: 0.8;
                  background: #f59524;
                  border-radius: 50%;
                  padding-top: 0.13333rem;
                  color: #fff;
                  text-align: center;
                  .line1 {
                    font-size: 0.32rem;
                  }
                  .line2 {
                    font-size: 0.26667rem;
                    margin-top: -0.09333rem;
                    text-decoration: line-through;
                  }
                }
              }
            }
            .txtArea {
              .title {
                font-family: PingFangSC-Medium;
                font-size: 0.42667rem;
              }
              .subTitle {
                color: #fff;
                background: #cbb693;
                display: inline;
              }
            }
          }
          /* .module2 {
            width: 100%;
            position: relative;
            .activityItem {
              width: 100%;
              background: #ffecc2;
              display: block;
              color: #333;
              width: 4.57333rem;
              height: 2.86667rem;
              float: left;
              border-radius: 0.05333rem;
              font-size: 0.32rem;
              padding: 0.26667rem 0 0 0.4rem;
              position: relative;
              .picWrap {
                position: absolute;
                right: 0;
                top: 0.2rem;
                .pic {
                  width: 2.66667rem;
                  height: 2.66667rem;
                  img {
                    width: 100%;
                    height: auto;
                  }
                }
                .discount {
                  position: absolute;
                  top: 0.4rem;
                  right: 0.45333rem;
                  width: 1.06667rem;
                  height: 1.06667rem;
                  opacity: 0.8;
                  background: #f59524;
                  border-radius: 50%;
                  padding-top: 0.13333rem;
                  color: #fff;
                  text-align: center;
                  .line1 {
                    font-size: 0.32rem;
                  }
                  .line2 {
                    font-size: 0.26667rem;
                    margin-top: -0.09333rem;
                    text-decoration: line-through;
                  }
                }
              }
            }
            .txtArea {
              .title {
                font-family: PingFangSC-Medium;
                font-size: 0.42667rem;
              }
              .subTitle {
                color: #fff;
                background: #cbb693;
                display: inline;
              }
            }
          } */
        }
      }
    }
    .moduleTitle {
      height: 50 / @basewidth;
      width: 100%;
      span {
        display: block;
        // width: rem;
        height: 100%;
        //background-color: pink;
        margin: 15 / @basewidth;
        line-height: 50 / @basewidth;
        font-size: 17 / @basewidth;
      }
    }
    .moduleContentHot {
      width: 100%;
      height: 305.14 / @basewidth;
     // background-color: aqua;
      .moduleContentHotList {
        .item-big {
          .itembig1 {
            width: 45%;
            height: 100 / @basewidth;
            background-color: antiquewhite;
            display: inline-block;
            margin: 15 / @basewidth 5 / @basewidth 0 15 / @basewidth;
           
            }
          }
          .itembig2 {
            width: 45%;
            height: 100 / @basewidth;
            background-color: antiquewhite;
            display: inline-block;
          }
        }
        .item-small {
          padding: 0 15 / @basewidth;
          .smallItem {
            float: left;
            width: 82.5 / @basewidth;
            height: 90 / @basewidth;
           // background-color: pink;
            margin: 3 / @basewidth 0 / @basewidth 3 / @basewidth 3 / @basewidth;
            .txt {
              height: 18 / @basewidth;
              line-height: 18 / @basewidth;
              text-align: center;
              width: 100%;
             // background-color: red;
              font-size: 12 / @basewidth;
              color: #333;
            }
            img {
              width: 100%;
              height: 72 / @basewidth;
            }
          }
        }
      }
    }
  }

</style>
