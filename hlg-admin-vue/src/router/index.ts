import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routerConfig.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

//前置守卫
router.beforeEach((to, from, next) => {
  next()
})

//后置守卫
router.afterEach((to, from) => {

})

export default router
