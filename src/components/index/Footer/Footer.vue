<template>
  <div>
    <!--  <div class="footer">
      <div class="foot_item" @click="toIndex('/')" >
        <i class="icon active"></i>
        <span class="icon_text active">首页</span>
      </div>
      <div class="foot_item" @click="toCategory('/category')">
        <div class="icon "></div>
        <span class="icon_text">分类</span>
      </div>
      <div class="foot_item" @click="toBuy('/buy')">
        <div class="icon "></div>
        <span class="icon_text">值得买</span>
      </div>
      <div class="foot_item" @click="toCart('/cart')">
        <div class="icon"></div>
        <span class="icon_text">购物车</span>
      </div>
      <div class="foot_item" @click="toPersonal('/personal')">
        <div class="icon"></div>
        <span class="icon_text">个人中心</span>
      </div>
    </div> -->
    <!-- <nut-tabbar @tab-switch="tabSwitch3" :tabbar-list="tabList3" :bottom="true">
    </nut-tabbar> -->
    <van-tabbar v-model="active" route>

  <van-tabbar-item icon="wap-home-o" replace to="/">主页</van-tabbar-item>
  <van-tabbar-item icon="notes-o" replace to="/category">分类页</van-tabbar-item>
  <van-tabbar-item icon="debit-pay" replace to="/buy">值得买</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" replace to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item badge="3" replace to="/personal">
    <span>个人</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
/* export default {
  components: {
    //[TabBar.name]: tabbar,
  },
  data() {
    return {
      tabList3:[
        {
          'tabTitle':'主页',
          'curr':true,
          'iconPath':'../../../assets/images/tabBar/tab-home.png',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg',
          'href':'/'
          
        },
        {
          'tabTitle':'分类',
          'curr':false,
          'icon':'http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg',
          'href':'/category'
        },
        {
          'tabTitle':'值得买',
          'curr':false,
          'icon':'http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg',
          'href':'###'
        },
        {
          'tabTitle':'购物车',
          'curr':false,
          'num':2,
          'icon':'http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg',
          'activeIcon':'http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg',
          'href':'###'
        },
        {
          'tabTitle':'我的',
          'curr':false,
          'icon':'http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg',
          'href':'###'
        }
      ]
    };
  },
  methods: {
      tabSwitch3:function(value,index){
        console.log(index);
      }
  }
}; */
export default{
   data() {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
}
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
