import service from '@/utils/request'

//管理员登录
export function login(payload = {}) {
    return service({
        url: '/admin/login',
        data: payload, //post请求的参数
        method: 'post'
    })
}
//获取管理员信息
export function detail(payload = {}) {
    return service({
        url: '/admin/detail',
        data: payload,
        method: 'get'
    })
}
//管理员列表
export function admin_list(payload = {}) {
    return service({
        url: '/admin/list',
        data: payload,
        method: 'get'
    })
}
//添加管理员
export function admin_add(payload = {}) {
    return service({
        url: '/admin/add',
        data: payload,
        method: 'post'
    })
}
//删除管理员
export function admin_delete(payload = {}) {
    return service({
        url: '/admin/delete',
        data: payload,
        method: 'post'
    })
}
//修改管理员
export function admin_update(payload = {}) {
    return service({
        url: '/admin/update',
        data: payload,
        method: 'post'
    })
}