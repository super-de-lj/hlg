import {Form,Input,Button,message} from 'antd'
import {banner} from '@/api'
import { useNavigate } from 'react-router-dom';

const SwiperAdd = () => {
    //路由
    var navigate = useNavigate();
    var onFinish = async (value:{img:string,alt:string,link:string})=>{
        var res = await banner.banner_add(value);
        if(res.data.code == 200 ){
            message.open({ type: 'success', content: res.data.message});
            navigate('/index/swiper')
        }else{
            message.open({ type: 'error', content: res.data.message});
        }
    }
    var onFinishFailed =()=>{}
    return (
        <div className='swipeerAdd'>
            <Form
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="轮播图链接"
                    name="img"
                    rules={[{ required: true, message: '请输入轮播图链接' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label="轮播图提示"
                name="alt"
                rules={[{ required: true, message: '请输入轮播图提示' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                label="&emsp;图片地址"
                name="link"
                rules={[{ required: true, message: '请输入图片地址' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit">新增图片</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SwiperAdd;