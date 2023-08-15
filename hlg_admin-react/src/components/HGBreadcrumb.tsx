import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux';
import {getName} from '@/utils/menuDect'
import { HomeOutlined } from '@ant-design/icons';

const HGBreadcrumb = () => {
    //面包屑数据
    var breadcrumb = useSelector((state:any)=>state.hgBreadcrumb);

    breadcrumb = breadcrumb.map((item:any)=>{
       return {title:getName(item)}
    })
    //默认首位
    breadcrumb.reverse().unshift(
        {
            title: (
                <>
                  <HomeOutlined />
                  <span>首页</span>
                </>
              ),
            href:'/index/home'
        }
    )
    return (
        <Breadcrumb items={breadcrumb} style={{marginBottom:15}}/>
    );
};

export default HGBreadcrumb;