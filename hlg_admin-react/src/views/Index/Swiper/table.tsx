import type { ColumnsType } from "antd/es/table";
import {Button,Switch,message,Image, Popconfirm} from 'antd'
import {banner} from '@/api'
import { useDispatch } from "react-redux";

//轮播图管理表单列配置
export function SwiperColumns(){
     var dispatch = useDispatch()
     const SwiperColumns:ColumnsType<{}> = [
        {
            title:'序号',
            render:(a:any,b:any,index:number)=>index+1,
            key:'bannerid'
        },
        {
            title:'图片',
            dataIndex:'img',
            render(value, record, index) {
                return  <Image style={{maxHeight:60,objectFit:"contain"}} src={value}/>
            },
            key:'img'
        },
        {
            title:'链接',
            dataIndex:'link',
            render(value, record, index) {
                return  <Button type="link" href={value}>链接</Button>
            },
            key:'link'
        },
        {
            title:'提示',
            dataIndex:'alt',
            key:'alt'
        },
        {
            title:'是否展示',
            dataIndex:'flag',
            render(value:any, record:any, index) {
                return <Switch defaultChecked={value} loading={ record.loading} onChange={async (val)=>{
                    var res = await banner.banner_updateFlag({bannerid:record.bannerid,flag:val});
                    res.data.code == 200 && message.open({ type: 'success', content:'切换成功'});
                }} />
            },
            key:'flag'
        },
        {
            title:'操作',
            render(value:any, record:any, index) {
                return <Popconfirm
                    title="确认删除吗"
                    onConfirm={async ()=>{
                        var res = await banner.banner_delete(record);
                        if(res.data.code == 200){
                            //更新表格
                            dispatch({type:'UPDATE_TABLE'})
                            message.open({ type: 'success', content: '删除成功'});
                        }
                    }}
                    okText="Yes"
                    cancelText="No"
                >
                   <Button type="primary" danger>Delete</Button>
                </Popconfirm>
            },
        }
    
    ]
    return SwiperColumns;
}