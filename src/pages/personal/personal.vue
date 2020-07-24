<template>
  <div class="personalContainer">
    <header class="top">
      <div class="profile">
        <div class="left">
          <img
            src="https://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png"
            alt=""
            srcset=""
          />
          <div class="info">
            <p class="nickName">严选用户666</p>
            <div class="memberShip">
              <span class="memeberTitle">普通用户</span>
            </div>
          </div>
        </div>
        <div class="right">
          <a href="">
            <i></i>
          </a>
          <div class="superEntry"></div>
        </div>
      </div>
    </header>
    <section class="myAsset">
      <span class="topTitle">我的资产</span>
      <div class="content">
        <div class="assetItem">
          <div class="assetCount">
            <span class="assetunit">￥</span>
            <span class="assetvalue"
              >0
              <span class="redDot"></span>
            </span>
          </div>
          <p class="asssetName">回馈金</p>
        </div>
        <div class="assetItem">
          <div class="assetCount">
            <span class="assetvalue">1</span>
            <span class="redDot"></span>
          </div>
          <p class="asssetName">红包</p>
        </div>
        <div class="assetItem">
          <div class="assetCount">
            <span class="assetvalue">1</span>
          </div>
          <p class="asssetName">优惠券</p>
        </div>
        <div class="assetItem">
          <div class="assetCount">
            <span class="assetunit">￥</span>
            <span class="assetvalue">0</span>
          </div>
          <p class="asssetName">津贴</p>
        </div>
        <div class="assetItem">
          <div class="assetCount">
            <span class="assetvalue">0</span>
          </div>
          <p class="asssetName">礼品卡</p>
        </div>
      </div>
    </section>
    <section class="personalList">
      <ul class="listContent">
        <li class="listItem">
          <a href="" class="menuItem">
            <i class="iconItem"></i>
            <span class="txt">我的订单</span>
          </a>
        </li>
        <li class="listItem">
          <a href="" class="menuItem">
            <i class="iconItem"></i>
            <span class="txt">周六一起拼</span>
          </a>
        </li>
        <li class="listItem">
          <a href="" class="menuItem">
            <i class="iconItem"></i>
            <span class="txt">售后服务</span>
          </a>
        </li>
        <li class="listItem">
          <a href="" class="menuItem">
            <i class="iconItem"></i>
            <span class="txt">邀请返利</span>
          </a>
        </li>
        <li class="listItem">
          <a href="" class="menuItem">
            <i class="iconItem"></i>
            <span class="txt">优先购</span>
          </a>
        </li>
        <li class="listItem">
          <a href="" class="menuItem">
            <i class="iconItem"></i>
            <span class="txt">积分中心</span>
          </a>
        </li>
        <li class="listItem">
          <a href="" class="menuItem">
            <i class="iconItem"></i>
            <span class="txt">会员俱乐部</span>
          </a>
        </li>
        <li class="listItem">
          <a href="" class="menuItem">
            <i class="iconItem"></i>
            <span class="txt">地址管理</span>
          </a>
        </li>
        <li class="listItem">
          <a href="" class="menuItem">
            <i class="iconItem"></i>
            <span class="txt">账号安全</span>
          </a>
        </li>
        <li class="listItem">
          <a href="" class="menuItem">
            <i class="iconItem"></i>
            <span class="txt">帮助与客服</span>
          </a>
        </li>
        <li class="listItem">
          <a href="" class="menuItem">
            <i class="iconItem"></i>
            <span class="txt">意见反馈</span>
          </a>
        </li>
      </ul>
    </section>
    <footer class="loginOut">
      <section class="outTxt" @click="toLoginOut('/loginOut')">退出登录</section>
    </footer>
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/index/Footer/Footer'
export default {
  name: "Personal",
  components:{Footer},
  methods:{
    toLoginOut(path) {
      this.$router.push(path);
    },
  }
};
</script>

<style lang="less" scoped>
@basewidth: 75rem;
.personalContainer {
  background-color: #eee;
  height: calc(100vh - 1.3rem);
  overflow: scroll;
  .top {
    width: 100%;
    height: 270 / @basewidth;
    //background-color: pink;
    .profile {
      //width: 100%;
      height: 270 / @basewidth;
      // background-color: pink;
      background: url(http://yanxuan.nosdn.127.net/5905098f74e04c39fa5e76ebb9ff591b.png);
      background-size: 100%;
      background-position: bottom center;
      padding-left: 0.4rem;
      overflow: hidden;
      .left {
        margin-top: 70 / @basewidth;
        height: 150 / @basewidth;
       // background-color: pink;
        display: flex;
        img {
          display: block;
          //padding-top: 20px;
          width: 142 / @basewidth;
          height: 142 / @basewidth;
          border-radius: 50%;
        }
        .info {
          height: 100%;
         // background-color: red;
          // text-align: center;
          // line-height:50 / @basewidth; ;
          .nickName {
            display: block;
            margin: 20 / @basewidth;
            color: #fff;
            font-size: 0.48rem;
            line-height: 1.2;
            text-align: left;
            margin-bottom: 0.13333rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .memberShip {
            display: block;
            margin-left: 20 / @basewidth;
            .memeberTitle {
              color: #fff;
              font-size: 0.37333rem;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
  .myAsset {
    background: #fff;
    height: 285 / @basewidth;
    line-height: 105 / @basewidth;
    text-align: left;
    font-size: 32 / @basewidth;
    //background-color: aqua;
    .topTitle {
      display: block;
      margin-left: 40 / @basewidth;
      width: 90%;
      height: 105 / @basewidth;
      border-bottom: 1 / @basewidth solid #d9d9d9;
    }
    .content {
      width: 100%;
      height: 170 / @basewidth;
      //background-color: red;
      margin: 0 auto;
      display: flex;
      .assetItem {
        width: 160 / @basewidth;
        height: 170 / @basewidth;
        //background-color: pink;
        .assetCount {
          height: 48 / @basewidth;
          // background-color: aqua;
          text-align: center;
          .assetvalue {
            position: relative;
            .redDot {
              position: absolute;
              right: 0.5;
              top: 0;
              width: 12 / @basewidth;
              height: 12 / @basewidth;
              border-radius: 50%;
              //background: red;
            }
          }
        }
        .asssetName {
          text-align: center;
        }
      }
    }
  }
  .personalList {
    width: 100%;
    height: 723.35 / @basewidth;
    //background-color: pink;
    .listContent {
      width: 100%;
      height: 100%;
      //border:1 / @basewidth solid #000;
      // box-sizing: border-box;
      .listItem {
        float: left;
        width: 246 / @basewidth;
        height: 181.1 / @basewidth;
        margin: 0 auto;
        margin: 2 / @basewidth;
        //background-color: aqua;
        .menuItem {
          display: block;
          width: 100%;
          height: 180 / @basewidth;
          padding-top: 0.6rem;
          box-sizing: border-box;
          background-color: #fff;
          text-align: center;
          .iconItem {
            display: inline-block;
            width: 50 / @basewidth;
            height: 50 / @basewidth;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sce1e54f581-5d697fd33d.png?imageView&type=webp);
            background-size: 1.12rem 17.77333rem;
          }
          .txt {
            display: block;
            text-align: center;
            font-size: 26 / @basewidth;
            font-family: PingFangSC-Light, helvetica, "Heiti SC";
          }
        }
        //box-sizing: border-box;
        //margin-right: 1 / @basewidth;
        &:nth-of-type(1) .iconItem {
          background-position: 0 -12.41333rem;
        }
        &:nth-of-type(2) .iconItem {
          background-position: 0 -13.90667rem;
        }
        &:nth-of-type(3) .iconItem {
          background-position: 0 -6.01333rem;
        }
        &:nth-of-type(4) .iconItem {
          background-position: 0 -11.61333rem;
        }
        &:nth-of-type(5) .iconItem {
          background-position: 0 -15.50667rem;
        }
        &:nth-of-type(6) .iconItem {
          background-position: 0 -14.70667rem;
        }
        &:nth-of-type(7) .iconItem {
          background-position: 0 -13.21333rem;
        }
        &:nth-of-type(8) .iconItem {
          background-position: 0 -5.21333rem;
        }
        &:nth-of-type(9) .iconItem {
          background-position: 0 -17.10667rem;
        }
        &:nth-of-type(10) .iconItem {
          background-position: 0 -9.21333rem;
        }
        &:nth-of-type(11) .iconItem {
          background-position: 0 -7.61333rem;
        }
      }
    }
  }
  .loginOut {
    width: 100;
    height: 96 / @basewidth;
    margin-top: 50 / @basewidth;
    margin-bottom: 40 / @basewidth;
    background-color: #ffffff;
    line-height: 96 / @basewidth;
    text-align: center;
  }
}
</style>
