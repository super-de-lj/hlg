import service from '@/utils/request'

//简单K线图
export function kData(payload = {}) {
    return service({
        url: '/data/kData',
        data: payload,
        method: 'get'
    })
}
//简单K线图
export function simpleData(payload = {}) {
    return service({
        url: '/data/simpleData',
        data: payload,
        method: 'get'
    })
}