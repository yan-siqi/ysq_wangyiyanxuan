<template>
  <div class="cateGoryContainer">
    <div class="header">
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        搜索商品,共有3445款好物
      </div>
    </div>
    <div class="content">
      <!-- 左侧导航栏 -->
      <div class="leftContainer">
        <div
          class="scrollContainer"
          @click="changeNavIndex(navItem.id)"
          v-for="(item, index) in cateGoryList.data"
          :key="index"
        >
          <div class="navItem">
            {{ item.name }}
          </div>
        </div>
      </div>
      <!-- 右侧商品列表 -->
      <div class="rightContainer">
        <div class="scrollContainer">
          <div class="proList">
            <img
            :src="cateGoryList.data[0].imgUrl"
              alt="头部图片"
            />
            <div>
              <div class="proItem" v-for="(item,index) in cateGoryList.data[0].subCateList" :key="index">
                <img
                  :src="item.wapBannerUrl"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/index/Footer/Footer'
import { reqCategoryData, reqCategoryNavData } from "@/api";
import "../../api/index";
export default {
  name: "Category",
  data() {
    return {
      cateGoryList: [], //获取分类页的数据
      navIndex: 0, //设置导航标识
    };
  },
  components:{Footer},
  async mounted() {
    //发请求获取异步数据
    let cateGoryListData = await reqCategoryData("/api/getCateGoryData");
    this.cateGoryList = cateGoryListData.data;
    let result = this.cateGoryList;
    this.navIndex = this.cateGoryList;
    console.log( this.navIndex);
  },
  methods: {
    changeNavIndex(navIndex) {
      this.navIndex = navIndex;
    },
  },
  computed: {
    cateGoryObj() {
      //console.log('categoryList.data :>> ', categoryList.data);
      //获取分页列表对象
      return this.categoryList.data.find((item) => item.id === this.navIndex);
    },
  },
};
</script>

<style lang="less">
@font: 37.5rem;
.cateGoryContainer {
  .header {
    padding: 0.2rem 0.4rem;
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
    
    .leftContainer {
      width: 25%;
      
      box-sizing: border-box;
      padding-top: 10 / @font;
      .scrollContainer {
        
        height: 40 / @font;
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
      border-left: 1 / @font solid #000;
      overflow: hidden;
      .proList {
        padding: 10 / @font;
        //height: 100%;
        img {
          width: 98%;
          height: 100%;
          padding-bottom: 10 / @font;
        }

        .proItem {
          width: 1.9rem;
          height: 1.9rem;
          background-color: #eee;
          margin-right: 15 / @font;
          margin-bottom: 10 / @font;
          display: inline-block;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
