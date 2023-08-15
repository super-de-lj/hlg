import { lazy } from "react"
import IndexConfig from "./IndexConfig"

export default [
    {//首页
        path: '/index',
        component: lazy(() => import('@/views/Index')),
        children: IndexConfig
    },
    {//登录
        path: '/login',
        component: lazy(() => import('@/views/Login')),
    },
    {//注册
        path: '/register',
        component: lazy(() => import('@/views/Register')),
        children: [
            {//验证手机号
                path: '/register/phone',
                component: lazy(() => import('@/views/Register/Phone'))
            },
            {//验证验证码
                path: '/register/code',
                component: lazy(() => import('@/views/Register/Code'))
            },
            {//输入密码
                path: '/register/pass',
                component: lazy(() => import('@/views/Register/Pass'))
            },
            {//重定向
                from: '/register',
                to: '/register/phone'
            },
            {//404
                path: '*',
                component: lazy(() => import('@/views/NoFound')),
            },
        ]
    },
    {//城市
        path: '/city',
        component: lazy(() => import('@/views/City')),
    },
    {//详情页
        path: '/detail',
        component: lazy(() => import('@/views/Detail')),
    },
    {//商品列表
        path: '/goodlist',
        component: lazy(() => import('@/views/GoodList')),
    },
    {//搜索页
        path: '/search',
        component: lazy(() => import('@/views/Search')),
    },
    {//重定向
        from: '/',
        to: '/index'
    },
    {//404
        path: '*',
        component: lazy(() => import('@/views/NoFound')),
    },
]