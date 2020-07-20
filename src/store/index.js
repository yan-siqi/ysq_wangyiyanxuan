import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index.js'
Vue.use(Vuex)//使用vuex扩展库
const store =new Vuex.Store({
    modules:{
        index
    }
})
export default store