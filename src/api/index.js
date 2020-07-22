/* 
包含所有接口请求函数
*/

import ajax from "./ajax";
import axios from "axios";
const BASE_URL = "/api";
//请求获取分类页的数据
export function reqCategoryData() {
  return axios.get("/api/getCateGoryData");
}
//获取分类页的左侧导航数据
export function reqCategoryNavData(){
  return axios.get('/api/getCateGoryNavData')
}
