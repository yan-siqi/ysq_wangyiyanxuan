<template>
  <div class="container">
    <Header />
    <!-- 内容区域 -->
    <div class="content">
      <div class="swiper-container" ref="swiper">
        <!--           <swiper-item>
            <div class="content">
              <img
                src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
                srcset=""
              />
              <img
                src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
                srcset=""
              />
              <img
                src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
                srcset=""
              />
              <img
                src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
                srcset=""
              />
              <img
                src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
                srcset=""
              />
              <img
                src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
                srcset=""
              />
            </div>
          </swiper-item> -->
        <div class="wrapper" ref="wrapper">
          <!-- 在vue中获取dom元素最简便的方法就是利用 this.$refs -->
          <ul class="content">
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
                srcset=""
              />
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/5c7d43c8f633ddfae6009ffc1a1758d5.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
                srcset=""
              />
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/99873ee03dbfa1fec94f273025baaf20.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
                srcset=""
              />
            </li>
            <li>
              <img
                src="https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                alt=""
                srcset=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header/Header";
import BScroll from "better-scroll"; //导入better-scroll
export default {
  name: "Content",
  components: { Header },
  mounted() {
    this.$nextTick(() => {
      // 使用 this.$nextTick 为了确保组件已经渲染完毕
      this.scroll = new BScroll(this.$refs.wrapper, {}); // 实例化BScroll接受两个参数，第一个为父盒子的dom节点
    });
  },
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
    .wrapper {
      display: flex;
      flex-direction: row;
       img {
      width: 100%;
     // height: rem;
      display: block;
      position: absolute;
      left: 0;
      top: 1.97rem;
    }
    }

    /* position: absolute;
    left: 0;
    top: 77 / @basewidth; */
  }
}
</style>
