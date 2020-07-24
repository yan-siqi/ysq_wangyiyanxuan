<template>
  <div class="loginContainer">
      <!-- 头部 -->
      <div class="loginTop">
          <div class="loginRow">
              <van-icon @click="toIndex" name="wap-home-o" />
              <div class="text">
                  网易严选
              </div>
              <div class="right">
                <van-icon class="search" name="search" />
                <van-icon name="shopping-cart-o" />
              </div>
          </div>
      </div>

      <div class="loginContent">
          <div class="img">
              <img class="image" src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
          </div>
          <div class="loginBtn">
              <div class="phoneBtn" @click="toLogin">
                  <van-icon name="phone-o" />
                  手机号快捷登录
              </div>
              <div class="emailBtn">
                  <van-icon name="envelop-o" />
                  邮箱账号登录
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
    name:'LoginOut',
    methods:{
        toIndex(){
            this.$router.push('/')
        },
        toLogin(){
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
.loginTop{
    height: 1.16rem;
    background-color: #fbfbfb;
    padding: 0 8px 0 12px;
}
.loginRow{
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding-top: .2rem
}
.loginRow .text{
    width: 172px;
    height: 54px;
    font-size: 0.55rem;
    font-weight: 600;
    font-family: cursive;
}
.loginRow .right  .search{
    margin-right: .26667rem
}

/* 内容区 */
.loginContent{
    background: #F2F5F4;
    height: 1246px;
    display: block
}
.loginContent .img{
    text-align: center;
    padding-top: 2.13333rem;
    padding-bottom: 3.09333rem
}
.loginContent .img .image{
    width: 3.57333rem;
    height: 1.2rem
}
/* 手机邮箱登录 */
.loginBtn{
    padding: 0 .53333rem;
    margin-bottom: 2.73333rem
}
.loginBtn .phoneBtn{
    height: 1.25333rem;
    line-height: 1.25333rem;
    color:#fff;
    text-align: center;
    font-size: .4rem;
    border-radius: .1rem;
    background-color: #DD1A21;
    margin-bottom: 32px;
}
.loginBtn .emailBtn{
    height: 1.25333rem;
    line-height: 1.25333rem;
    color:#DD1A21;
    text-align: center;
    font-size: .4rem;
    border-radius: .1rem;
    border: 1px solid #DD1A21;
}
</style>