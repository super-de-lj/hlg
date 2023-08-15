import service from '@/utils/request'

//获取商品的列表
export function pro_list(payload = {}) {
    return service({
        url: '/pro/list',
        data: payload,
        method: 'get'
    })
}
// 修改商品是否推荐或者秒杀
export function pro_updateFlag(payload = {}) {
    return service({
        url: '/pro/updateFlag',
        data: payload,
        method: 'post'
    })
}
// 获取秒杀或者推荐的列表
export function pro_showdata(payload = {}) {
    return service({
        url: '/pro/showdata',
        data: payload,
        method: 'post'
    })
}
// 获取商品的分类
export function pro_getCategory(payload = {}) {
    return service({
        url: '/pro/getCategory',
        data: payload,
        method: 'get'
    })
}
// 获取商品的分类
export function pro_searchPro(payload = {}) {
    return service({
        url: '/pro/searchPro',
        data: payload,
        method: 'post'
    })
}