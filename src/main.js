import Vue from 'vue'
import App from './App.vue'
//import 'lib-flexible/flexible'//适配
Vue.config.productionTip = false//去掉不是生产环境的提示

new Vue({
  render: h => h(App),
}).$mount('#app')
