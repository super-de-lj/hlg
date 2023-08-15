import type { ColumnsType } from "antd/es/table";
import {Button,Switch,message, Tag, Popconfirm} from 'antd'
import { admin } from "@/api";
import { useDispatch } from "react-redux";
import { useGetAdmin } from "@/utils/serverFun";

//管理员表单列配置
export var useTable = ()=>{
    var dispatch = useDispatch();
    const AdminColumns:ColumnsType<{}> = [
        {
            title:'序号',
            render:(a:any,b:any,index:number)=>index+1,
            key:'name'
        },
        {
            title:'账号',
            dataIndex:'adminname',
            key:'name'
        },
        {
            title:'权限',
            render:(value:any,b:any,index:number)=>{
                return <Tag color="#87d068">{value.role == 2?'超级管理员':'管理员'}</Tag>
            },
            key:'name'
        },
        {
            title:'操作',
            render(value:any, record:any, index) {
                return (
                <>
                    <Button type="primary" onClick={()=>{
                        //添加抽屉数据
                        dispatch({type:'ADD_Drawer',payload:value});
                        //打开抽屉
                        dispatch({type:'UPDATE_DRAW',payload:true});
                    }}>Edit</Button>&emsp;
                    <Popconfirm
                    title="确认删除吗"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={async ()=>{
                        var res = await admin.admin_delete({adminid:value.adminid});
                        if(res.data.code == 200){
                            dispatch({type:'UPDATE_TABLE'});
                            message.open({type: 'success', content: '删除管理员成功'})
                        }
                    }}
                    >
                        <Button type="primary" danger>Delete</Button>
                    </Popconfirm>
                </>
                )
            },
            key:'name'
        },
    ]
    return AdminColumns;
}