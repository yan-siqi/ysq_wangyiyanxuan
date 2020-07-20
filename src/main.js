import Vue from 'vue'
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/css/swiper.css'
import 'swiper/swiper-bundle.css'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
Vue.config.productionTip = false//去掉不是生产环境的提示
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
