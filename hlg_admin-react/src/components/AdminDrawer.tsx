import { Button, Drawer, Form, Input, message, Select, Tree } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {menuItems} from '@/utils/menuDect'
import {getTree} from '@/utils/tools'
import { admin } from '@/api';
import { useEffect, useState } from 'react';

const AdminDrawer = () => {
    //表单实例
    const [form] = Form.useForm();
    var open = useSelector((state:any)=>state.DrawerFlag);
    var dispatch = useDispatch();

    //表单账号密码的禁用与否
    var [isdisabled,setIsdisabled] = useState(false);
    //抽屉树形控件默认数据
    var fromDefault = useSelector((state:any)=>state.DrawerDetail);
    //树形控件数据源
    var [checkedKeys,setCheckedKeys] = useState([])
    //树形控件数据
    var treeData:any = getTree(menuItems());
    //点击树形控件
    var handleTree = (checkedKeys:any)=>{
        form.setFieldValue('checkedKeys',checkedKeys);
        setCheckedKeys(checkedKeys)
    };
    
    useEffect(()=>{
        //禁用账号密码
        if(fromDefault.adminid) setIsdisabled(true);
        //回显表单数据
        form.setFieldsValue(fromDefault);
        //回显树状控件数据
        setCheckedKeys(fromDefault.checkedKeys);
    },[fromDefault])

    //关闭抽屉
    var onClose = ()=>{
        setIsdisabled(false);
        //清空表单值
        form.setFieldsValue({adminname:'',password:'',role:'',checkedKeys:'',adminid:''});
        //清空树形控件状态值
        setCheckedKeys([]);
        //清空存储的表单值
        dispatch({type:'ADD_Drawer',payload:{adminname:'',password:'',role:'',checkedKeys:''}});
        //关闭抽屉
        dispatch({type:'UPDATE_DRAW',payload:false});
    }
    //提交表单
    var onFinish = async (value:any)=>{
        if(isdisabled){
            // 更新管理员
            var res = await admin.admin_update(value);
            if(res.data.code == 200){
                message.open({ type: 'success', content: '修改管理员信息成功'});
                dispatch({type:'UPDATE_TABLE'})
            }
        }else{
            var res = await admin.admin_add(value);
            if( res.data.code == 200){
                message.open({ type: 'success', content: '添加管理员成功'});
                dispatch({type:'UPDATE_TABLE'})
            }else{
                message.open({ type: 'error', content: '添加失败，已存在'});
            }
        }
        onClose();
    }
    return (
        <Drawer title={fromDefault.adminid?"更新管理员":"新增管理员"} closable={true} onClose={onClose} open={open} >
             <Form onFinish={onFinish} form={form}>
                <Form.Item label="账号" name="adminname"
                    rules={[{ required: true, message: '请输入账号！' }]} 
                >
                    <Input disabled={isdisabled}/>
                </Form.Item>

                <Form.Item label="密码" name="password"
                    rules={[{ required: true, message: '请输入密码！' }]}
                >
                    <Input.Password disabled={isdisabled}/>
                </Form.Item>

                <Form.Item label="角色" name="role" rules={[{ required: true, message: '请输入角色！' }]}>
                    <Select placeholder="请选择" options={[
                        {  
                            value:2,
                            label:'超级管理员'
                        },
                        {  
                            value:1,
                            label:'管理员'
                        },
                    ]}>
                    </Select>
                </Form.Item>

                <Form.Item label="权限" name="checkedKeys" rules={[{ required: true, message: '请配置权限！' }]}>
                    <Tree 
                        checkable
                        checkedKeys={checkedKeys}
                        onCheck={handleTree}
                        treeData={treeData}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit">{fromDefault.adminid?"更新管理员":"新增管理员"}</Button>
                </Form.Item>
            </Form>
        </Drawer>
    );
};

export default AdminDrawer;