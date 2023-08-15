import service from '@/utils/request'

//简单K线图
export function admin_kData(payload = {}) {
    return service.get('/admin/data/kData', { params: payload })
}
//简单图表数据
export function admin_simpleData(payload = {}) {
    return service.get('/admin/data/simpleData', { params: payload })
}