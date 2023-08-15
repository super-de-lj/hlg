import { lazy } from 'react';
import { Navigate } from 'react-router-dom'
import { LazyComponent } from '@/utils/tools'

import IndexConfig from './IndexConfig';
var Login = lazy(() => import('@/views/Login'));
var Index = lazy(() => import('@/views/Index'));
var NotFound = lazy(() => import('@/views/NotFound'));

//配置路由表
export default [
    {
        path:'/index',
        element: <LazyComponent><Index/></LazyComponent>,
        children: IndexConfig
    },
    {
        path: '/login',
        element: <LazyComponent><Login/></LazyComponent>
    },
    {
        path:'/',
        element: <LazyComponent><Navigate to='/index'/></LazyComponent>
    },
    {
        path:'*',
        element: <LazyComponent><NotFound /></LazyComponent>
    }
]