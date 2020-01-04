import request from '@/http/api.js'
import qs from 'qs'

class BaseApi {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  add(entity) {
    return request({
      url: this.baseURL + 'add',
      method: 'post',
      data: qs.stringify(entity)
    })
  }

  del(id) {
    return request({
      url: this.baseURL + 'del',
      method: 'get',
      params: { id }
    })
  }

  findBy(entity) {
    return request({
      url: this.baseURL + 'findBy',
      method: 'post',
      data: qs.stringify(entity)
    })
  }

  findById(id) {
    const condiEntity = {
      id
    }
    return this.findBy(condiEntity)
  }

  findAll() {
    return request({
      url: this.baseURL + 'find',
      method: 'post'
    })
  }

  update(entity) {
    return request({
      url: this.baseURL + 'update',
      method: 'post',
      data: qs.stringify(entity)
    })
  }
}

export default BaseApi
