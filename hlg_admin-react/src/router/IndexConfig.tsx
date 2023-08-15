import { lazy } from 'react';
import { LazyComponent } from '@/utils/tools'
var Home = lazy(()=>import('@/views/Index/Home'));
var Swiper = lazy(()=>import('@/views/Index/Swiper'));
var SwiperAdd = lazy(()=>import('@/views/Index/SwiperAdd'));
var Admin = lazy(()=>import('@/views/Index/Admin'));
var ProList = lazy(()=>import('@/views/Index/ProList'));
var SeckillList = lazy(()=>import('@/views/Index/SeckillList'));
var RecommendList = lazy(()=>import('@/views/Index/RecommendList'));
var FilterList = lazy(()=>import('@/views/Index/FilterList'));
var Echarts = lazy(()=>import('@/views/Index/Echarts'));
var MyEditor = lazy(()=>import('@/views/Index/MyEditor'));
var Excel = lazy(()=>import('@/views/Index/Excel'));
var Map = lazy(()=>import('@/views/Index/Map'));


//配置index路由表
export default [
    {
        path: '/index/home',
        element: <LazyComponent><Home/></LazyComponent>
    },
    {
        path:'/index/swiper',
        element:<LazyComponent><Swiper/></LazyComponent>
    },
    {
        path:'/index/swiperadd',
        element:<LazyComponent><SwiperAdd/></LazyComponent>
    },
    {
        path:'/index/admin',
        element:<LazyComponent><Admin/></LazyComponent>
    },
    {
        path:'/index/pro',
        element:<LazyComponent><ProList/></LazyComponent>
    },
    {
        path:'/index/seckill',
        element:<LazyComponent><SeckillList/></LazyComponent>
    },
    {
        path:'/index/recommend',
        element:<LazyComponent><RecommendList/></LazyComponent>
    },
    {
        path:'/index/filter',
        element:<LazyComponent><FilterList/></LazyComponent>
    },
    {
        path:'/index/echarts',
        element:<LazyComponent><Echarts/></LazyComponent>
    },
    {
        path:'/index/editor',
        element:<LazyComponent><MyEditor/></LazyComponent>
    },
    {
        path:'/index/excel',
        element:<LazyComponent><Excel/></LazyComponent>
    },
    {
        path:'/index/map',
        element:<LazyComponent><Map/></LazyComponent>
    },
]