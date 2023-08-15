import { MenuFoldOutlined, MenuUnfoldOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';
import { Header } from 'antd/es/layout/layout';
import {useSelector , useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

const HGLayRightTop = () => {
    //路由
    var navigate = useNavigate();
    const collapsed = useSelector((state:any)=>state.collapsed);
    var dispatch = useDispatch()
     //方法
     var dispatch = useDispatch();
     //获取用户名
     var username = useSelector((state:any)=>state.userInfo.adminname);;
    
    //菜单开关
    var handleFlag = ()=> dispatch({type:'TOGGLE_Collapsed'})
     //admin下拉菜单
     var items =[
        {
            label:<span>设置</span>,
            key:'1',
        },
        {
            label:<span onClick={()=>{dispatch({type:'REMOVE_USER'});navigate('/login')}}>退出</span>,
            key:'2',
        }
    ]
    return (
        <Header style={{  padding: 0, background: '#001529'}} className="right-header">
            <Button type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={handleFlag}
                style={{fontSize: '16px',width: 64,height: 64,color:'#fff'
                }}
            />
            <div className="right">
                <span>欢迎：{username}</span>
                <Dropdown menu={{ items }} >
                    <UserSwitchOutlined />
                </Dropdown>
            </div>
        </Header>
    );
};

export default HGLayRightTop;