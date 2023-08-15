import { lazy } from "react"

export default [
    {//主页
        path: '/index/home',
        component: lazy(() => import('@/views/Index/Home')),
    },
    {//分类页面
        path: '/index/type',
        component: lazy(() => import('@/views/Index/MyType')),
    },
    {//购物车
        path: '/index/gwc',
        component: lazy(() => import('@/views/Index/Gwc')),
    },
    {//用户页面
        path: '/index/user',
        component: lazy(() => import('@/views/Index/User')),
    },
    {//重定向
        from: '/index',
        to: '/index/home'
    },
    {//404
        path: '*',
        component: lazy(() => import('@/views/NoFound')),
    },
]