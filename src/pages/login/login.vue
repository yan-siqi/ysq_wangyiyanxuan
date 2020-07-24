<template>
  <div class="loginContainer">
    <!-- 头部 -->
    <div class="top">
      <div class="contentTop">
        <div class="contentLeft">
          <a href="">
            <i class="icon"></i>
          </a>
        </div>
        <span class="topTitle">网易严选</span>
        <div class="contentRight">
          <div class="search">
            <i class="searchIcon"></i>
          </div>
          <div class="cart">
            <i class="cartIcon"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <div class="view">
        <img
          src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        />
        <div class="form">
          <!-- 表单校验 -->
          <van-form @submit="onSubmit">
            <div style="display:flex">
              <van-field
                style="display:inline-block"
                v-model="phone"
                placeholder="请输入手机号"
                name="pattern"
                :rules="[{ pattern, message: '重新输入手机号' }]"
              />
              <van-icon name="close" @click="toClear" />
            </div>
            <div class="checkCode">
              <van-field
                v-model="password"
                type="txt"
                name="validator"
                placeholder="请输入短信验证码"
                :rules="[{ validator, message: '请输入正确的短信验证码' }]"
              />
              <van-button
                type="default"
                style="width:170px;height:30px;margin-top:5px"
                >获取验证码?</van-button
              >
            </div>
            <div class="checkCode">
              <van-field
                v-model="password"
                type="txt"
                placeholder="遇到问题?"
                :rules="[{ required: true, message: '' }]"
              />
              <van-button type="default" style="width:250px;margin-top:5px"
                >使用密码验证码登录</van-button
              >
            </div>
            <div style="margin: 16px;">
              <van-button
                type="danger"
                size="large"
                @click="toPersonal('/personal')"
                >登录</van-button
              >
            </div>
            <van-checkbox v-model="checked" shape="square"
              >我同意<span style="color:skyblue">《服务条款》</span>和<span
                style="color:skyblue"
                >《网易隐私政策》</span
              ></van-checkbox
            >
          </van-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/nutui.css";
import { TabPanel } from "@nutui/nutui";
import Vant from "vant";
import { Form, Field, Button } from "vant";
import "vant/lib/index.css";
Vue.use(Form);
Vue.use(Vant);
NutUI.install(Vue);
export default {
  data() {
    return {
      data: [],
      col: 5,
      phone: "", //手机号
      checkCode: "", //验证码
      pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
    };
  },
  methods: {
    //函数校验规则
    validator(val) {
      return /^[a-z0-9]+$/i.test(val);
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    //校验跳转到个人中心页面
    toPersonal(path) {
      this.$router.push(path);
    },
    /* login() {
      const { mobile, password } = this;
   try{
        //发送注册请求
         await this.$store.dispatch('login', {
             phone,checkCode
            })
      }catch(err){
        //如果登陆失败提示文本
      }
    }, */
    toClear() {
      //点击数据进行清除
      phone: "";
    },
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  computed: {
    itemWidth() {
      return 138 * 0.5 * (document.documentElement.clientWidth / 375); // #rem布局 计算宽度
    },
    gutterWidth() {
      return 9 * 0.5 * (document.documentElement.clientWidth / 375); //	#rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
    },
  },
};
</script>

<style lang="less" scoped>
@basewidth: 37.5rem;
.loginContainer {
  .top {
    width: 100%;
    height: 50 / @basewidth;
    // background-color: #ffc0cb;
    .contentTop {
      width: 92%;
      margin: 0 auto;
      height: 100%;
      //background-color: red;
      display: flex;
      justify-content: space-between;
      .contentLeft {
        .icon {
          display: block;
          position: relative;
          background-position: center;
          background-repeat: no-repeat;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=);
          background-size: 23 / @basewidth 23 / @basewidth;
          width: 23 / @basewidth;
          height: 50 / @basewidth;
          line-height: 50 / @basewidth;
        }
      }
      .topTitle {
        line-height: 50 / @basewidth;
        font-size: 18 / @basewidth;
      }
      .contentRight {
        width: 70 / @basewidth;
        height: 100%;
        // background-color: yellowgreen;
        display: flex;
        justify-content: space-between;
        .search {
          .searchIcon {
            display: inline-block;
            //position: relative;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC);
            background-size: 23 / @basewidth 23 / @basewidth;
            width: 31 / @basewidth;
            height: 50 / @basewidth;
          }
        }
        .cart {
          .cartIcon {
            display: inline-block;
            //position: relative;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=);
            background-size: 23 / @basewidth 23 / @basewidth;
            width: 24.5 / @basewidth;
            height: 50 / @basewidth;
          }
        }
      }
    }
  }
  .content {
    width: 100%;
    // height: calc(100vh - 2.64rem);
    overflow: scroll;
    .view {
      width: 100%;
      height: 395 / @basewidth;
      //background-color: pink;
      margin-top: 40 / @basewidth;
      img {
        width: 134 / @basewidth;
        height: 45 / @basewidth;
        margin-left: 120 / @basewidth;
      }
    }
    .form {
      width: 90%;
      margin-left: 5%;
      height: 220 / @basewidth;
      // background-color: red;
      .checkCode {
        display: flex;
      }
    }
  }
}
</style>
