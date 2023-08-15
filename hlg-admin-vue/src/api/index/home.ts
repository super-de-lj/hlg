import service from '@/utils/request'

//查看轮播图
export function banner_list(payload = {}) {
    return service.get('/admin/banner/list', { params: payload })
}
//访问轮播图状态更新
export function banner_updateFlag(payload = {}) {
    return service.post('/admin/banner/updateFlag', payload)
}
//插入轮播图数据
export function banner_add(payload = {}) {
    return service.post('/admin/banner/add', payload)
}
//删除单条数据
export function banner_delete(payload = {}) {
    return service.get('/admin/banner/delete', { params: payload })
}
//商品总数量
export function statistic_product(payload = {}) {
    return service.get('/admin/statistic/product', { params: payload })
}
//用户总数量
export function statistic_user(payload = {}) {
    return service.get('/admin/statistic/user', { params: payload })
}