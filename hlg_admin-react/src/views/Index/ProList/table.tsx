import type { ColumnsType } from "antd/es/table";
import {Button,Switch,message,Image, Popconfirm} from 'antd'
import {pro} from '@/api'

//轮播图管理表单列配置
export function ProColumns(){
    var handleChange = async ({proid}:any,type:string,flag:boolean)=>{
        var res = await pro.pro_updateFlag({proid,type,flag})
        if(res.data.code == 200){
            message.open({ type: 'success', content:'切换成功'});
        }else{
            message.open({ type: 'error', content:'切换失败'});
        }
    }
    const ProColumns:ColumnsType<{}> = [
        {
            title:'序号',
            render:(value, record, index:number)=>index+1,
            key:'index'
        },
        {
            title:'图片',
            dataIndex:'img1',
            render(value, record, index) {
                return  <Image style={{maxHeight:60,height:60,width:60}} src={value}/>
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
        {
            title:'是否售卖',
            dataIndex:'issale',
            render(value:any, record:any, index) {
                return <Switch defaultChecked={value} loading={false} onChange={(flag:boolean)=>{handleChange(record,'issale',flag)}} />
            },
            key:'index'
        },
        {
            title:'是否秒杀',
            dataIndex:'isseckill',
            render(value:any, record:any, index) {
                return <Switch defaultChecked={value} loading={false} onChange={(flag:boolean)=>{handleChange(record,'isseckill',flag)}
            } />
            },
            key:'index'
        },
        {
            title:'是否推荐',
            dataIndex:'isrecommend',
            render(value:any, record:any, index) {
                return <Switch defaultChecked={value} loading={false} onChange={(flag:boolean)=>{handleChange(record,'isrecommend',flag)}} />
            },
            key:'index'
        },
        {
            title:'操作',
            render(value:any, record:any, index) {
                return <Popconfirm
                    title="确认删除吗"
                    onConfirm={async ()=>{
                        message.open({ type: 'error', content: '没有商品啦，不能删了！'});
                    }}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="primary" danger>Delete</Button>
                </Popconfirm>
            },
            key:'index'
        },
    ]
    return ProColumns;
}