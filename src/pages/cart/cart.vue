<template>
  <div class="container">
    <div class="top">
      <div class="topTitle">购物车</div>
      <div class="right">
        <div class="coupon">
          <span class="palceholder">领券</span>
        </div>
      </div>
    </div>
    <div class="titles">
      <ul class="servicePolicy">
        <li class="item">
          <i class="icon"></i>
          <span>30天无理由退货</span>
        </li>
        <li class="item">
          <i class="icon"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="item">
          <i class="icon"></i>
          <span>满99元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="defaultPage">
      <div class="cotainer">
        <div class="img"></div>
        <div class="txt">去添加点什么吧</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style lang="less" scoped>
@basewidth: 37.5rem;
.container {
  width: 100%;
  height: calc(100vh - 1.3rem);
  //background-color: pink;
  .top {
    width: 94%;
    margin: 0 auto;
    height: 44 / @basewidth;
    background-color: white;
    display: flex;
    justify-content: space-between;
    .topTitle {
      line-height: 44 / @basewidth;
      font-size: 21 / @basewidth;
    }
    .palceholder {
      width: 32 / @basewidth;
      height: 20 / @basewidth;
      line-height: 20 / @basewidth;
      display: block;
      background-color: orangered;
      font-size: 11 / @basewidth;
      color: white;
      text-align: center;
      margin-top: 13 / @basewidth;
      margin-right: 15 / @basewidth;
      position: relative;
      &::before {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        content: "";
        background-color: white;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) translateX(-60%);
      }
      &::after {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        content: "";
        background-color: white;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%) translateX(60%);
      }
    }
  }
  .titles {
    height: 35 / @basewidth;
    width: 100%;
    background-color: #eee;

    .servicePolicy {
      width: 94%;
      height: 100%;
      margin: 0 auto;
      //background-color: yellow;
      display: flex;
      .item {
        //width: 27%;
        height: 100%;
        margin-right: 8.6%;
        //background-color: yellowgreen;
        .icon {
          display: inline-block;
          width: 3 / @basewidth;
          height: 3 / @basewidth;
          border-radius: 50%;
          border: 1 / @basewidth solid #999;
        }
        span {
          discolor: #666;
          font-size: 12px;
          line-height: 35 / @basewidth;
        }
      }
    }
    
  }
  .defaultPage {
      position: relative;
      width: 100%;
      height: calc(100vh - 3.6rem);
      background-color:#eee;
      .cotainer {
        position: absolute;
        top: -0.66667rem;
        right: 0;
        bottom: 0;
        left: 0;
        height: 4rem;
        margin: auto;
        .img {
          display: block;
          // vertical-align: middle;
          width: 116.39 / @basewidth;
          height: 116.39 / @basewidth;
          margin-bottom: 0.10667rem;
          margin: auto;
          background-size: 3.30667rem 3.30667rem;
          background-position: center center;
          background-repeat: no-repeat;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp);
        }
        .txt {
          font-size: 0.37333rem;
          line-height: 1;
          color: #7f7f7f;
          text-align: center;
        }
      }
    }
}
</style>
