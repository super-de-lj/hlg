import service from '@/util/request.js';

//获取城市列表
export function getSortCity(payload = {}) {
    return service.get('/city/sortCity.json', { params: payload })
}
//获取搜索列表
export function getSearchList(payload = {}) {
    return service.get('/api/pro/search', { params: payload })
}
//查看首页轮播图
export function getBanner(payload = {}) {
    return service.get('/api/banner/list', { params: payload })
}
//查看首页小卡片
export function getCatelist(payload = {}) {
    return service.get('/api/index/catelist', { params: payload })
}
//查看首页秒杀
export function getseckilllist(payload = {}) {
    return service.get('/api/pro/seckilllist', { params: payload })
}
//获取首页推荐商品
export function getrecommendlist(payload = {}) {
    return service.get('/api/pro/recommendlist', { params: payload })
}
//获取商品详细页
export function getdetail(payload = {}) {
    console.log(payload);
    return service.get('/api/pro/detail/' + payload.proid)
}

//获取分类列表
export function getTypelist(payload = {}) {
    return service.get('/api/pro/categorylist', { params: payload })
}
//获取分类下数据列表
export function getTypeCatelist(payload = {}) {
    return service.get('/api/pro/categorybrandlist', { params: payload })
}
//获取某分类下某品牌的产品列表
export function categorybrandprolist(payload = {}) {
    return service.get('/api/pro/categorybrandprolist', { params: payload })
}

//登录
export function Login(payload = {}) {
    return service.post('/api/user/login', payload)
}
//验证手机号是否注册
export function docheckphone(payload = {}) {
    return service.post('/api/user/docheckphone', payload)
}
//发送验证码
export function dosendmsgcode(payload = {}) {
    return service.post('/api/user/dosendmsgcode', payload)
}
//检验验证码
export function docheckcode(payload = {}) {
    return service.post('/api/user/docheckcode', payload)
}
//注册
export function dofinishregister(payload = {}) {
    return service.post('/api/user/dofinishregister', payload)
}

//加入购物车
export function addCart(payload = {}) {
    return service.post('/api/cart/add', payload)
}
//获取购物车列表
export function cartlist(payload = {}) {
    return service.post('/api/cart/list', payload)
}
//更新当前购物车数据的选中状态
export function selectone(payload = {}) {
    return service.post('/api/cart/selectone', payload)
}
//更新所有购物车数据的选中状态
export function selectall(payload = {}) {
    return service.post('/api/cart/selectall', payload)
}
//更新所有购物车数量
export function updatenum(payload = {}) {
    return service.post('/api/cart/updatenum', payload)
}
//清空购物车数据
export function removeall(payload = {}) {
    return service.post('/api/cart/removeall', payload)
}
