import {
     HomeOutlined,
     RightSquareOutlined,
     UsergroupAddOutlined,
     ProfileOutlined,
     FundViewOutlined,
     EditOutlined,
     FileMarkdownOutlined,
     GlobalOutlined
} from '@ant-design/icons'
//菜单项
export function menuItems(){
     const menuItems = [
        {
            label:'首页',
            key:'1',
            icon:<HomeOutlined />,
        },
        {
            label:'轮播图管理',
            key:'2',
            icon: <RightSquareOutlined />,
            children:[
                {
                    label:'轮播图列表',
                    key:'2-1',
                }
            ]
        },
        {
            label:'账号管理',
            key:'3',
            icon:<UsergroupAddOutlined />,
            children:[
                {
                    label:'管理员列表',
                    key:'3-1',
                }
            ]
        },
        {
            label:'产品管理',
            key:'4',
            icon:<ProfileOutlined />,
            children:[
                {
                    label:'产品列表',
                    key:'4-1',
                },
                {
                    label:'秒杀列表',
                    key:'4-2',
                },
                {
                    label:'推荐列表',
                    key:'4-3',
                },
                {
                    label:'筛选列表',
                    key:'4-4',
                },
            ]
        },
        {
            label:'数据可视化',
            key:'5',
            icon:<FundViewOutlined />,
            children:[
                {
                    label:'echarts使用',
                    key:'5-1',
                }
            ]
        },
        {
            label:'编辑器',
            key:'6',
            icon:<EditOutlined />,
            children:[
                {
                    label:'编辑器使用',
                    key:'6-1',
                }
            ]
        },
        {
            label:'excel管理',
            key:'7',
            icon:<FileMarkdownOutlined />,
            children:[
                {
                    label:'excel使用',
                    key:'7-1',
                }
            ]
        },
        {
            label:'地图管理',
            key:'8',
            icon:<GlobalOutlined />,
            children:[
                {
                    label:'百度地图',
                    key:'8-1',
                }
            ]
        },
    ]
    return menuItems;
}

//菜单对应字典
export const dect:any = {
    '1':{
        name:'首页',
        route:'/index/home'
    },
    '2':{
        name:'轮播图管理'
    },
    '2-1':{
        name:'轮播图列表',
        route:'/index/swiper'
    },
    '3':{
        name:'账号管理',
    },
    '3-1':{
        name:'管理员列表',
        route:'/index/admin'
    },
    '4':{
        name:'产品管理'
    },
    '4-1':{
        name:'产品列表',
        route:'/index/pro'
    },
    '4-2':{
        name:'秒杀列表',
        route:'/index/seckill'
    },
    '4-3':{
        name:'推荐列表',
        route:'/index/recommend'
    },
    '4-4':{
        name:'筛选列表',
        route:'/index/filter'
    },
    '5':{
        name:'数据可视化',
    },
    '5-1':{
        name:'echarts使用',
        route:'/index/echarts'
    },
    '6':{
        name:'编辑器',
    },
    '6-1':{
        name:'编辑器使用',
        route:'/index/editor'
    },
    '7':{
        name:'excel管理',
    },
    '7-1':{
        name:'excel使用',
        route:'/index/excel'
    },
    '8':{
        name:'地图管理',
    },
    '8-1':{
        name:'百度地图',
        route:'/index/map'
    }
}

//得到key对应路由
export function getRoute(key:any){
    return dect[key].route;
}

//得到key对应名字
export function getName(key:any){
    return dect[key].name;
}