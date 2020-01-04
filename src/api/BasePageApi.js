import BaseApi from './BaseApi'
import request from '@/http/api.js'
import qs from 'qs'
import PageInfo from '@/components/hsl-table/pagination/PageInfo'
let PAGE_INFO = new PageInfo()

class BasePageApi extends BaseApi {
  findByPage(condiEntity, pageInfo) {
    PAGE_INFO = pageInfo || PAGE_INFO
    return request({
      url: this.baseURL + 'findByPage',
      method: 'post',
      data: (
        {
          conditionEntity: condiEntity,
          pageInfo: PAGE_INFO
        })
    })
  }
}

export default BasePageApi
