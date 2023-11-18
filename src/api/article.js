import request from '@/utils/request'
export const artGetChannelService = () => {
  return request.get('/my/cate/list')
}
//添加文章分类
export const artAddChannelService = (data) => {
  return request.post('/my/cate/add', data)
}
//编辑文章分类
export const artEditChannelService = (data) => {
  return request.put('/my/cate/info', data)
}
//删除文章分类
export const artDelChannelService = (id) => {
  return request.delete('/my/cate/del', {
    params: { id }
  })
}
//获取文章列表
export const artGetListService = (params) => {
  return request.get('/my/article/list', { params })
}
//添加文章
export const artPublishService = (data) => request.post('/my/article/add', data)
//获取文章详情
export const artGetDetailService = (id) =>
  request.get('my/article/info', { params: { id } })
//编辑文章
export const artEditService = (data) => request.put('my/article/info', data)
//删除文章
export const artDelService = (id) =>
  request.delete('my/article/info', { params: { id } })
