import service from '@/utils/request'

//查看轮播图数据
export function banner_list(payload = {}) {
    return service({
        url: '/banner/list',
        data: payload,
        method: 'get'
    })
}
// 访问状态更新
export function banner_updateFlag(payload = {}) {
    return service({
        url: '/banner/updateFlag',
        data: payload,
        method: 'post'
    })
}
// 删除单条数据
export function banner_delete(payload = {}) {
    return service({
        url: '/banner/delete',
        params: payload,
        method: 'get'
    })
}
// 插入轮播图数据
export function banner_add(payload = {}) {
    return service({
        url: '/banner/add',
        data: payload,
        method: 'post'
    })
}