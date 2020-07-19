import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index.js'
import cart from './modules/cart.js'
Vue.use(Vuex)//使用vuex扩展库
const store =new Vuex.Store({
    modules:{
        index,cart
    }
})
export default store