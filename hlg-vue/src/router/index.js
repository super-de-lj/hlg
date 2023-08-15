import { createRouter, createWebHistory } from 'vue-router'
import routes from './routerConfig.js'
//导入进度条插件
import nProgress from 'nprogress'
//导入进度条插件的样式
import 'nprogress/nprogress.css'
import store from '@/store/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

//设置全局前置路由守卫
router.beforeEach((to, from, next) => {
  //开始播放进度条动画
  nProgress.start();
  let accessRoutes = ['/index/gwc', '/index/user'];
  let token = store.state.token;
  //如果进入的是购物车和用户页面，判断是否携带token，没带则跳去登录页面
  if (accessRoutes.includes(to.path)) {
    if (token) {
      next()
    } else { next('/login') }
  } else {
    next();
  }
})

//设置全局后置路由守卫
router.afterEach((to, from) => {
  //停止播放进度条动画
  nProgress.done();
})

export default router
