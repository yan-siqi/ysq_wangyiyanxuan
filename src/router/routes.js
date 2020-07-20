/* 
配置所有路由组件
*/
import Index from '../pages/index/index.vue'
import Personal from "../pages/personal/personal.vue";
import Search from "../pages/search/search.vue";
import Category from "../pages/category/category.vue";
import Cart from '../pages/cart/cart.vue'
import Buy from '../pages/buy/buy.vue'
//定义路由
const routes=[
  {
    //首页
    path:'/',
    name:'index',
    component:Index
  },
  {
    //个人中心页面
    path:'/personal',
    name:'personal',
    component:Personal
  },
  {//搜索页(可能会定义二级路由)
    path:'/search',
    name:'search',
    component:Search
  },
  {//商品分类页面
    path:'/category',
    name:'category',
    component:Category
  },
  {
    //购物车页面
    path:'/cart',
    name:'cart',
    component:Cart
  },
  {
    //值得买页面
    path:'/buy',
    name:'buy',
    component:Buy
  },
]
//注册路由
export default routes
