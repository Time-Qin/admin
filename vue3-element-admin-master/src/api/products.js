import request from '@/utils/request'

export const GetRequest = data => {
  return request({
    url:
      '/api/goods/load?cityId=110&bid=1&fid=0&page=1&count=31&search=&total=31',
    method: 'GET',
    data,
  })
}
export const GetRequest1 = data => {
  return request({
    url: '/api/goods/category',
    method: 'GET',
    data,
  })
}
export const GetRequest2 = () => {
  return request({
    // url: '/api/goods/category',
    url: '/api/goods/load?bid=1&tid=0&fid=193&page=1&count=36',
    method: 'GET',
    // data,
  })
}
