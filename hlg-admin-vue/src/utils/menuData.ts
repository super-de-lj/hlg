//菜单数据
const menuDate: any = [
    {
        id: '1',
        route: '/index/home',
        text: '首页',
        icon: '<HomeFilled />'
    },
    {
        id: '2',
        text: '轮播图管理',
        icon: '<Grid />',
        children: [
            {
                id: '2-1',
                route: '/index/swiper',
                text: '轮播图列表',
            }
        ]
    },
    {
        id: '3',
        text: '账号管理',
        icon: '<UserFilled />',
        children: [
            {
                id: '3-1',
                route: '/index/admin',
                text: '管理员列表',
            }
        ]
    },
    {
        id: '4',
        text: '产品管理',
        icon: '<Operation />',
        children: [
            {
                id: '4-1',
                route: '/index/pro',
                text: '产品列表',
            },
            {
                id: '4-2',
                route: '/index/seckill',
                text: '秒杀列表',
            },
            {
                id: '4-3',
                route: '/index/recommend',
                text: '推荐列表',
            },
            {
                id: '4-4',
                route: '/index/filter',
                text: '筛选列表',
            },
        ]
    },
    {
        id: '5',
        text: '数据可视化',
        icon: '<DataLine />',
        children: [
            {
                id: '5-1',
                route: '/index/echarts',
                text: 'echarts使用',
            }
        ]
    },
    {
        id: '6',
        text: '编辑器',
        icon: '<EditPen />',
        children: [
            {
                id: '6-1',
                route: '/index/editor',
                text: '编辑器使用',
            }
        ]
    },
    {
        id: '7',
        text: 'excel管理',
        icon: '<Failed />',
        children: [
            {
                id: '7-1',
                route: '/index/editor',
                text: 'excel使用',
            }
        ]
    },
    {
        id: '8',
        text: '地图管理',
        icon: '<Tickets />',
        children: [
            {
                id: '8-1',
                route: '/index/map',
                text: '百度地图',
            }
        ]
    },
]

//根据权限过滤数据
function getFilterMenu(checkedKeys: any, menuDate: any) {
    //如果长度为0则开放所有权限
    if (checkedKeys.length) {
        menuDate = menuDate.filter((item: any) => {
            if (checkedKeys.includes(item.id)) {
                if (item.children) {
                    item.children = getFilterMenu(checkedKeys, item.children);
                }
                return true;
            } else return false;
        })
    }
    return menuDate;
}

export { menuDate, getFilterMenu };



// <el-menu-item index="1" route="/index/home">
//             <el-icon>
//               <HomeFilled />
//             </el-icon>
//             <span>首页</span>
// </el-menu-item>
//           <!-- 轮播图管理 -->
//  <el-sub-menu index="2">
//             <template #title>
//               <el-icon>
//                 <Grid />
//               </el-icon>
//               <span>轮播图管理</span>
//             </template>
//     <el-menu-item index="2-1" route="/index/swiper">轮播图列表</el-menu-item>
//  </el-sub-menu>
//           <!-- 账号管理 -->
//           <el-sub-menu index="3">
//             <template #title>
//               <el-icon>
//                 <UserFilled />
//               </el-icon>
//               <span>账号管理</span>
//             </template>
//             <el-menu-item index="3-1" route="/index/admin">管理员列表</el-menu-item>
//           </el-sub-menu>
//           <!-- 产品管理 -->
//           <el-sub-menu index="4">
//             <template #title>
//               <el-icon>
//                 <Operation />
//               </el-icon>
//               <span>产品管理</span>
//             </template>
//             <el-menu-item index="4-1" route="/index/pro">产品列表</el-menu-item>
//             <el-menu-item index="4-2" route="/index/seckill">秒杀列表</el-menu-item>
//             <el-menu-item index="4-3" route="/index/recommend">推荐列表</el-menu-item>
//             <el-menu-item index="4-4" route="/index/filter">筛选列表</el-menu-item>
//           </el-sub-menu>
//           <!-- 数据可视化 -->
//           <el-sub-menu index="5">
//             <template #title>
//               <el-icon>
//                 <DataLine />
//               </el-icon>
//               <span>数据可视化</span>
//             </template>
//             <el-menu-item index="5-1" route="/index/echarts">echarts使用</el-menu-item>
//           </el-sub-menu>
//           <!-- 编辑器 -->
//           <el-sub-menu index="6">
//             <template #title>
//               <el-icon>
//                 <EditPen />
//               </el-icon>
//               <span>编辑器</span>
//             </template>
//             <el-menu-item index="6-1" route="/index/editor">编辑器使用</el-menu-item>
//           </el-sub-menu>
//           <!-- excel管理 -->
//           <el-sub-menu index="7">
//             <template #title>
//               <el-icon>
//                 <Failed />
//               </el-icon>
//               <span>excel管理</span>
//             </template>
//             <el-menu-item index="7-1" route="/index/excel">excel使用</el-menu-item>
//           </el-sub-menu>
//           <!-- 地图管理 -->
//           <el-sub-menu index="8">
//             <template #title>
//               <el-icon>
//                 <Tickets />
//               </el-icon>
//               <span>地图管理</span>
//             </template>
//             <el-menu-item index="8-1" route="/index/map">百度地图</el-menu-item>
//           </el-sub-menu>