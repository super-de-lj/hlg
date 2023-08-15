import type { ColumnsType } from "antd/es/table";
import {Image} from 'antd'

//轮播图管理表单列配置
export const SeckillColumns:ColumnsType<{}> = [
    {
        title:'序号',
        render:(value, record, index:number)=>index+1,
        key:'index'
    },
    {
        title:'图片',
        dataIndex:'img1',
        render(value, record, index) {
            return  <Image style={{maxHeight:60,height:60,width:60,objectFit:"contain"}} src={value}/>
        },
        key:'index'
    },
    {
        title:'名称',
        dataIndex:'proname',
        width:300,
        key:'index'
    },
    {
        title:'品牌',
        dataIndex:'brand',
        key:'index'
    },
    {
        title:'分类',
        dataIndex:'category',
        key:'index'
    },
    {
        title:'原价',
        dataIndex:'originprice',
        key:'index'
    },
    {
        title:'折扣',
        dataIndex:'discount',
        key:'index'
    },
    {
        title:'销量',
        dataIndex:'sales',
        key:'index'
    },
]