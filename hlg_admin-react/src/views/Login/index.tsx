import './index.scss';
import {Form,Input,Button, message} from 'antd'
import { admin } from '@/api';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    var dispatch = useDispatch();
    var navigate = useNavigate();
    
    var onFinish = async (value:any)=>{
        var res = await admin.login(value);
        if(res.data.code == 200){
            dispatch({type:'save_user',payload:res.data.data});
            navigate('/index/home');
        }else if(res.data.code == 10005){
            message.open({type:'error',content:'账号未注册'})
        }
        else if(res.data.code == 10003){
            message.open({type:'error',content:'密码错误'})
        }
    }
    var onFinishFailed = ()=>{}

    return (
        <div className='login'>
            <div className="title">欢乐购后台管理系统</div>
            <Form
                className='form'
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                name="adminname"
                rules={[{ required: true, message: '请输入账号' }]}
                >
                    <Input placeholder='默认账号：admin' autoComplete="off"/>
                </Form.Item>

                <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password placeholder='默认密码：123456' autoComplete='current-password'/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">登录</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;