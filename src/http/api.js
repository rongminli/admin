import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
// 请求拦截器
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('userToken');
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.accessToken = token;
    }
    return config;
  }, 
  error => {
    return Promise.reject(error);
  })
// 响应拦截器
axios.interceptors.response.use(response => {
	const data = response.data
	if(data.code != 2000){
		Message({
		  message: data.text || 'Error',
		  type: 'error',
		  duration: 5 * 1000
		})
		
		return Promise.reject(new Error(data.text|| 'Error'))
	}else{
		return data
	}
  },
  error => {
    return Promise.reject(error);
  })
export default axios