import { Outlet, useNavigate } from 'react-router-dom';
import {Layout} from 'antd'
import HGLayoutLeft from './HGLayoutLeft';
import HGLayRightTop from './HGLayRightTop';
import HGBreadcrumb from '@/components/HGBreadcrumb';

const {Content} = Layout
const HGLayout = () => {
    return (
        <Layout className='lay-box' style={{height:'100%'}}>
            {/* 左侧菜单 */}
            <HGLayoutLeft/>
            <Layout>
                {/* 右侧顶部 */}
                <HGLayRightTop/>
                {/* 右侧内容区域 */}
                <Content className='main' >
                    {/* 面包屑  */}
                    <HGBreadcrumb/>
                    {/* 二级路由出口 */}
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};

export default HGLayout;