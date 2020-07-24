import Vue from 'vue'
import ElementUI from 'element-ui';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/swiper-bundle.css'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import waterfall from 'vue-waterfall2';
Vue.use(waterfall);//vue使用瀑布流
Vue.use(ElementUI);//使用elementui组件库
NutUI.install(Vue);
Vue.config.productionTip = false//去掉不是生产环境的提示
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
