import axios from "axios";

//配置通用的基础路径
const instance = axios.create({
  baseUrl: "/api", //代理服务器转发数据
});
//设置axios请求拦截器
instance.interceptors.request.use((config) => {
  return config;
});
//设置axios响应拦截器
instance.interceptors.response.use(
  (response) => {
    //响应成功
    return response.data; //直接返回响应体数据
  },
  //响应失败
  (error) => {
      //统一处理错误信息
      alert(`请求出现错误:${error.message || '未知错误'}`)
      return Promise.reject(error)//响应失败返回
  }
);
export default instance;
