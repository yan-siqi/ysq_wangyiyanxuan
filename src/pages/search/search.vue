<template>
  <div class="container">
    <nut-searchbar
    placeText="好货内部评价"
    :hasIcon="true"
    :hasTextButton="true"
    textInfo="取消"
    @submit="search"
    @focus="focusFun"
    ref="myInput"
></nut-searchbar>
  </div>
</template>

<script>
import Vue from "vue";
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/nutui.css";
import { TabPanel } from "@nutui/nutui";
NutUI.install(Vue);
export default {
  name: 'Search',
  mounted(){
        //设置获取焦点
        this.$nextTick(function() {
            this.$refs.myInput.focus()
        })
    },
    methods:{
        focusFun() {
            console.log('获取焦点操作！');
        },
        inputFun(value) {
            console.log(value);
            console.log('您正在输入...');
        },
        blurFun(value) {
            console.log(value);
            console.log('您已失去焦点！');
        },
        submitFun(value) {
            console.log(value);
            console.log('默认提交操作！');
        },
        search(value) {
            //点击键盘中的’搜索‘时，失去焦点
            this.$refs.myInput.blur()
            console.log('搜索')
        }
    }
}
</script>

<style lang="less" scoped>
@basewidth:37.5rem;
.container{
  padding:20 / @basewidth;
}
</style>
