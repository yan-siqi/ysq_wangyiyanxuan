/* 路由器对象 */
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
//声明使用插件
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history", //配置路由模式不带#
  routes, // 配置所有路由
});
export default router;
