import config from './config.js'
import ajax from '../api/ajax'
export default (url, data={}, method='GET') => {
	return new Promise((resolve, reject) => {
		// 执行异步任务
		ajax({
			url: config.host + url, 
			data,
			method,
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
			}
		})
	})
}