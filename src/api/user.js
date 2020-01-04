import axios from '@/http/api.js'
import BasePageApi from './BasePageApi'
const baseURL = '/user/'

const userApi = new BasePageApi(baseURL)
userApi.login = (param) => {
		return  axios({
                method:'post',
                url:'/login',
                data:param
            }).then(data => {
				return data
			})
}

export default userApi