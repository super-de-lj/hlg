import service from '@/utils/request'

//获取商品的列表
export function pro_list(payload = {}) {
    return service.get('/admin/pro/list', { params: payload })
}
//获取商品的列表
export function pro_updateFlag(payload = {}) {
    return service.post('/admin/pro/updateFlag',  payload )
}

// 获取秒杀或者推荐的列表
export function pro_showdata(payload = {}) {
    return service.post('/admin/pro/showdata',  payload )
}
// 获取商品的分类
export function pro_getCategory(payload = {}) {
    return service.get('/admin/pro/getCategory',  { params: payload })
}
// 筛选商品
export function pro_searchPro(payload = {}) {
    return service.post('/admin/pro/searchPro', payload )
}
