/* 
配置所有路由组件
*/

import Personal from "../pages/personal/personal.vue";
//定义路由
const routes=[
  {
    path:'/personal',
    name:'personal',
    component:Personal
  },
]
//注册路由
export default routes
