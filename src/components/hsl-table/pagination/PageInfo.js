const DEFAULT_ORDERBY_COLUMN = 'create_time desc'
class PageInfo {
  constructor(pageNum, pageSize) {
    this.pageNum = pageNum || 1
    this.pageSize = pageSize || 20
    this.loadNextPage = false
    this.total = 0
    this.orderBy = DEFAULT_ORDERBY_COLUMN
  }
}

export default PageInfo
