import service from '@/utils/request'

//插入轮播图数据
export function banner_add(payload = {}) {
    return service.post('/admin/banner/add',  payload )
}
//获取管理员列表
export function admin_list(payload = {}) {
    return service.get('/admin/admin/list',  { params: payload })
}
//添加管理员
export function admin_add(payload = {}) {
    return service.post('/admin/admin/add',   payload )
}
//修改管理员信息
export function admin_update(payload = {}) {
    return service.post('/admin/admin/update',  payload )
}
//删除管理员
export function admin_delete(payload = {}) {
    return service.post('/admin/admin/delete',  payload )
}