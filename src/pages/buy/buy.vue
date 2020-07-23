<template>
  <div class="buyContainer">
    <!-- 头部 -->
    <div class="top">
      <div class="contentTop">
        <div class="contentLeft">
          <a href="">
            <i class="icon"></i>
          </a>
        </div>
        <span class="topTitle">值得买</span>
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
    <!-- 内容区 -->
    <div class="content">
      <!--  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/nutui.css";
import { TabPanel } from "@nutui/nutui";
NutUI.install(Vue);
export default {
  /*   data() {
    return {
      data: new Array(30),
      page: 5,
      num: 30,
      isHasMore: true,
      isLoading: false,
      isErr: false,
      timer: null,
    };
  },
  methods: {
    onInfinite() {
      this.isLoading = true;
      this.timer = setTimeout(() => {
        if (this.page <= 5) {
          this.data = new Array(this.num * this.page);
          this.page = this.page + 1;
        } else {
          this.isHasMore = false;
        }
        this.isLoading = false;
      }, 100);
    },
  },
  destroyed() {
    clearTimeout(this.timer);
  }, */

  data() {
    return {
      count: 0,
    };
  },
  methods: {
    load() {
      this.count += 2;
    },
  },
};
</script>

<style lang="less" scoped>
@basewidth: 37.5rem;
.buyContainer {
  .top {
    width: 100%;
    height: 50 / @basewidth;
   // background-color: pink;
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
        font-size: 22 / @basewidth;
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
            background-size:  23 / @basewidth 23 / @basewidth;
            width: 31 / @basewidth;
            height:50 / @basewidth;
          }
        }
        .cart {
          .cartIcon {
            display: inline-block;
            //position: relative;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=);
            background-size:  23 / @basewidth 23 / @basewidth;
             width: 24.5 / @basewidth;
            height:50 / @basewidth;
          }
        }
      }
    }
  }
  .content {
    width: 100%;
    height: calc(100vh - 2.64rem);
    background-color: aquamarine;
    overflow: scroll;
  }
}
</style>
