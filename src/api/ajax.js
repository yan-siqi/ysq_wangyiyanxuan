import axios from 'axios' 
import store from '../store/index'
import config from '../utils/config'
//配置通用的基础路径
const instance =axios.create({
    baseUrl:'/api'//代理服务器转发数据
})
//设置axios请求拦截器
instance.interceptors.request.use(config=>{
    return config
})
//设置axios响应拦截器
instance.interceptors.response.use(response=>{
    return response.data//直接返回响应体数据
})
export default instance