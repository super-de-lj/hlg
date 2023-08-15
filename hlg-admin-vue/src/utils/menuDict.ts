const menuDict:any={
    '1':'首页',
    '2':'轮播图管理',
    '2-1':'轮播图列表',
    '3':'管理员管理',
    '3-1':'管理员列表',
    '4':'商品管理',
    '4-1':'产品列表',
    '4-2':'秒杀列表',
    '4-3':'推荐列表',
    '4-4':'筛选列表',
    '5':'数据可视化',
    '5-1':'echarts使用',
    '6':'编辑器',
    '6-1':'编辑器使用',
    '7':'excel管理',
    '7-1':'excel使用',
    '8':'地图管理',
    '8-1':'百度地图'
}

export function getTextPath(indexPath:any){
    
    return menuDict[indexPath];
}

export default menuDict;