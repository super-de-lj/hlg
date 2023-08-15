import { Component, Suspense } from 'react';

//对所有路由使用Suspense包裹
export function LazyComponent({children}:any){
    return <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
}

//获取抽屉的树形选框数据
export function getTree(treeData:any){
    var map:any = []
    treeData.forEach((item:any,index:number)=>{
        map.push({key:item.key,title:item.label});
        if(item.children != undefined){
            map[index].children = [];
            map[index].children = getTree(item.children);
        }
    })
    return map;
}

//权限
//参数一:菜单，参数二:用户权限
export function getAuthority(menu:any,permissions:any){
    if(!permissions.length) return menu;
    var newPermissions = JSON.parse(JSON.stringify(permissions));
    //补齐权限缺失部分
    newPermissions.map((item:any)=>{
        if(!newPermissions.includes(item.split('-')[0])){
            //如果权限里不包含一级菜单，则添加一级菜单
            newPermissions.push(item.split('-')[0])
            return true;
        }
    })
    
    //根据权限总体匹配用户权限
    var quanxian = (menu:any)=>{
        // 遍历菜单
        return menu.filter((item:any)=>{
            // 如果菜单项没有子菜单
            if(!item.children){
                // 判断菜单项是否在权限数组中
                return newPermissions.includes(item.key);
            }
            // 如果菜单项有子菜单，则递归调用该函数过滤子菜单
            item.children = quanxian(item.children);
            // 如果过滤后子菜单不为空，则返回包含该子菜单的菜单项
            return item.children.length > 0;
            
        })
    }
    return quanxian(menu);
}


















//防抖：有定时器则清除定时器，开启新的定时器
export function anti_shake(func:Function,time:number,data:any){
    let timer:any = null;
    return function(){
        if(timer){
           clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            func(data);
        },time)
    }
}

//节流：没有定时器，则开启定时器
export function throttle(func:Function,time:number,data:any){
    let tiemr:any = null;
    return function () {
        if(!tiemr){
            tiemr = setTimeout(() => {
                func(data);
                clearTimeout(tiemr);
                tiemr = null;   
            }, time);
        }
    }

}

//拖拽
export function DragHOC(Element:any){
    return class tools extends Component<any,any> {
        constructor(props:any){
            super(props);
            this.state = {left:0,top:0}
        }
        handleMouseDown(){
            document.onmousemove = (e)=>{
                this.setState({ left: e.pageX, top: e.pageY });
            }
            document.onmouseup = ()=>{
                document.onmousemove = null;
            }
        }
        render() {
            return (
                <div onMouseDown={()=>{this.handleMouseDown() }} style={{ position:'absolute',left: this.state.left + 'px' ,top: this.state.top + 'px',width:'100%'}}>
                    <Element/>
                </div>
            )
        }
    }
    
}