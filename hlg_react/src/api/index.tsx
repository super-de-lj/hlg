import service from "../utils/request";

//轮播图
export function banner_list(payload={}){
    return service.get('/banner/list',{params:payload});
}
// 查看首页快捷分类
export function index_catelist(payload={}){
    return service.get('/index/catelist',{params:payload});
}
// 获取秒杀产品列表的数据
export function pro_seckilllist(payload={}){
    return service.get('/pro/seckilllist',{params:payload});
}
// 获取推荐产品列表的数据
export function pro_recommendlist(payload={}){
    return service.get('/pro/recommendlist',{params:payload});
}
//  产品的分类列表
export function pro_categorylist(payload={}){
    return service.get('/pro/categorylist',{params:payload});
}
// 产品分类下品牌列表
export function pro_categorybrandlist(payload={}){
    return service.get('/pro/categorybrandlist',{params:payload});
}
// 获取某分类下某品牌的产品列表
export function pro_categorybrandprolist(payload={}){
    return service.get('/pro/categorybrandprolist',{params:payload});
}
// 管理系统登录
export function login(payload={}){
    return service.post('/user/login',payload);
}
// 验证手机号码是否被注册过
export function docheckphone(payload={}){
    return service.post('/user/docheckphone',payload);
}
// 发送短信验证码
export function dosendmsgcode(payload={}){
    return service.post('/user/dosendmsgcode',payload);
}
// 验证短信验证码
export function docheckcode(payload={}){
    return service.post('/user/docheckcode',payload);
}
// 注册
export function dofinishregister(payload={}){
    return service.post('/user/dofinishregister',payload);
}
// 获取产品的详情数据
export function detail(payload={proid:''}){
    return service.get('/pro/detail/' + payload.proid)
}
// 加入购物车
export function cart_add(payload={}){
    return service.post('/cart/add' , payload)
}
// 查看购物车
export function cart_list(payload={}){
    return service.post('/cart/list' , payload)
}
// 更新当前购物车数据的选中状态
export function cart_selectone(payload={}){
    return service.post('/cart/selectone' , payload)
}
// 更新所有购物车数据的选中状态
export function cart_selectAll(payload={}){
    return service.post('/cart/selectall' , payload)
}
// 更新购物车数量
export function cart_updatenum(payload={}){
    return service.post('/cart/updatenum' , payload)
}
// 删除当前用户的购物车数据
export function cart_removeall(payload={}){
    return service.post('/cart/removeall' , payload)
}
// 获取城市列表
export function getSortCity(payload = {}) {
    return service.get('/city/sortCity.json', { params: payload })
}
// 热门搜索
export function hotword(payload = {}) {
    return service.get('/pro/hotword', { params: payload })
}
// 搜索列表
export function pro_search(payload = {}) {
    return service.get('/pro/search', { params: payload })
}