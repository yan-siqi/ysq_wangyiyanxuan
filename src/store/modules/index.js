import request from '../../utils/request.js'
const state={
    initData:'初始化的测试数据',
    indexData:{}//主页的数据
}
const mutations={
    changeIndexData(state,indexData){
        state.indexData=indexData
    }
}
const actions={
    async getIndexData({commit}){
       let indexDataResult =await request ('/getIndexData')
       //将异步数据交给mutations
       indexDataResult.code===200 && commit('changeIndexData',indexDataResult.data)
    }
}
export default {
    state,
    mutations,
    actions
}