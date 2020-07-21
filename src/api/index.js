/* 
包含所有接口请求函数
*/

import ajax from './ajax'
const BASE_URL='/api'
//import request from '../utils/request'
//请求获取分类页的数据
export function reqCategoryData(){
    return ajax({
        method:'GET',
        url:''
    })
}