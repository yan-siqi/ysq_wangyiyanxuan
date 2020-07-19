<template>
  <div>
    <div class="footer">
      <div class="foot_item">
        <i class="icon active"></i>
        <span class="icon_text active">首页</span>
      </div>
      <div class="foot_item">
        <div class="icon "></div>
        <span class="icon_text">分类</span>
      </div>
      <div class="foot_item">
        <div class="icon "></div>
        <span class="icon_text">值得买</span>
      </div>
      <div class="foot_item">
        <div class="icon"></div>
        <span class="icon_text">购物车</span>
      </div>
      <div class="foot_item" @click="toPersonal('/personal')">
<!--        <router-link to='/personal'></router-link> -->
        <div class="icon"></div>
        <span class="icon_text">个人中心</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    toPersonal(path) {
      console.log('点击事件后触发了')
      console.log(this.$router)
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less">
@font: 37.5rem;
.footer {
  width: 375 / @font;
  height: 49 / @font;
  // background-color: brown;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  .foot_item {
    width: 20%;
    height: 100%;
    text-align: center;
    .icon {
      width: 20 / @font;
      height: 20 / @font;
      //align-items: center;
      background-size: 0.53333rem 6.53333rem;
      margin-top: 0.2rem;
      display: inline-block;
      vertical-align: middle;
    }
    &:nth-child(1) .icon {
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp);
    }
    &:nth-child(2) .icon {
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp);
      background-position: 0 -2rem;
    }
    &:nth-child(3) .icon {
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp);
      background-position: 0 -4.66667rem;
    }
    &:nth-child(4) .icon {
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp);
      background-position: 0 -0.66667rem;
    }
    &:nth-child(5) .icon {
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp);
      background-position: 0 -6rem;
    }
    .icon_text {
      display: block;
      margin-top: 0.09333rem;
      font-size: 0.32rem;
      color: #666;
      line-height: 1;
    }
  }
}
</style>
