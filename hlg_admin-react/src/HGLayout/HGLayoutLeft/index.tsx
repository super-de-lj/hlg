import {getRoute} from '@/utils/menuDect'
import { useNavigate } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import {useSelector , useDispatch} from 'react-redux'
import { Menu} from 'antd'
import {menuItems} from '@/utils/menuDect'
import { getAuthority } from '@/utils/tools'
import { useEffect } from 'react';

const HGLayoutLeft = () => {
      //路由
    var navigate = useNavigate();
    var user =  useSelector((state:any)=>state.userInfo);
    useEffect(()=>{
        if(!Object.keys(user).length){
            navigate('/login')
        }
    },[])
    //方法
   var dispatch = useDispatch();
    var keyPath =  useSelector((state:any)=>state.hgBreadcrumb);
    //用户权限
    var items = getAuthority(menuItems(),user.checkedkeys || []);
    
    //菜单出现隐藏
    const collapsed = useSelector((state:any)=>state.collapsed);
      //点击菜单项
    var handleMenu = ({  key, keyPath  }:any)=>{
        var route = getRoute(key);
        //存储keyPath
        dispatch({type:'SET_BREAD',payload:keyPath});
        navigate(route)
    }
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            {/* 左侧菜单logo */}
            {!collapsed &&<div  className="logo" style={{fontSize:"18px"}}>欢乐购后台管理系统</div>}
            <Menu theme="dark"
                mode="inline"
                defaultSelectedKeys={keyPath}
                defaultOpenKeys={keyPath}
                items={items}
                onClick={handleMenu}
            />
        </Sider>
    );
};

export default HGLayoutLeft;