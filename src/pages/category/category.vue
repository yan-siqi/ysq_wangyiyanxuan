<template>
  <div class="cateGoryContainer">
    <div class="header">
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        搜索商品,共有3445款好物
      </div>
    </div>
    <div class="content">
      <div class="leftContainer">
        <div class="scrollContainer">
          <div class="navItem">推荐专区</div>
          <div class="navItem">新品专区</div>
          <div class="navItem">居家生活</div>
          <div class="navItem">服饰鞋包</div>
          <div class="navItem">美食酒水</div>
          <div class="navItem">个护清洁</div>
          <div class="navItem">母婴亲子</div>
          <div class="navItem">运动旅行</div>
          <div class="navItem">数码家电</div>
          <div class="navItem">严选全球</div>
        </div>
      </div>
      <div class="rightContainer">
        <div class="scrollContainer">
          <div class="proList">
            <img
              src="https://yanxuan.nosdn.127.net/13b5104f7b382c46afd827a9733075bf.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
              alt="头部图片"
            />
           <div>
              <div class="proItem">
              <img src="https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView" alt="" srcset="">
            </div>
            <div class="proItem">
              <img src="https://yanxuan.nosdn.127.net/036640056a47089a8a437cb14dc127e8.png?quality=75&type=webp&imageView" alt="" srcset="">
            </div>
            <div class="proItem">
              <img src="https://yanxuan.nosdn.127.net/3e234d8b3af71c7cd1d45bb57ed6f874.png?quality=75&type=webp&imageView" alt="" srcset="">
            </div>
            <div class="proItem">
              <img src="https://yanxuan.nosdn.127.net/302806b76899547e9b500215feb2e455.png?quality=75&type=webp&imageView" alt="" srcset="">
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import request from '../../utils/request.js'
export default {
  name: "Category",
};
</script>

<style lang="less">
@font: 37.5rem;
.cateGoryContainer {
  .header {
    padding: 0.2rem 0.4rem;
    // background-color: pink;
    border-bottom: 1 / @font solid #000;
    .search {
      width: 100%;
      height: 30 / @font;
      line-height: 30 / @font;
      text-align: center;
      background-color: #eee;
      border-radius: 5 / @font;
    }
  }
  .content {
    display: flex;
    height: calc(100vh - 2.6rem);
    border-bottom: 1 / @font solid #000;
    //padding:20/@font 10/@font;
    .leftContainer {
      width: 25%;
      border-right: 1 / @font solid #000;
      box-sizing: border-box;
      padding-top: 10 / @font;
      .scrollContainer {
        height: 100%;
        .navItem {
          position: relative;
          height: 40 / @font;
          line-height: 40 / @font;
          text-align: center;
          font-size: 15 / @font;
        }
      }
    }
    .rightContainer {
      width: 75%;
      .proList {
        
        padding: 10 / @font;
        img {
          width: 98%;
          height: 100%;
          padding-bottom: 10 / @font;
        }
          

        .proItem {
          width: 1.9rem;
          height: 1.9rem;
          background-color: pink;
          margin-right: 15 / @font;
          margin-bottom: 10 / @font;
          display: inline-block;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
