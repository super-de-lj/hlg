import axios from "axios";
import { ElNotification } from 'element-plus'
import 'element-plus/es/components/notification/style/css'
import {userStore} from  '@/stores/index'
import router from '@/router';


var store = userStore();


//1、实例化
const service = axios.create({
    timeout:10*1000,//超时时间
    baseURL:'',//基准路径
})

//2.设置请求拦截器
service.interceptors.request.use(
    (config):any=>{
        // 设置请求头
        config.headers['token'] = store.user.token || '';
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

//3.设置响应拦截器
service.interceptors.response.use(
    (res):any=>{
        //未携带token
        if( res.data.code == 10119 ){
            ElNotification.error({message:'登陆过期,请重新登录' });
            router.push('/login');
        }
        return res;
    },
    (error)=>{
        if( error.response.status == 401 ){
            ElNotification.error({message:'登陆过期,请重新登录' });
            //删除过期的token
            //跳转登录页
            router.push('/login');
        }else if( error.response.status == 404 ){
            ElNotification.error({message:'访问路径有误!' });
        }else if( error.response.status == 500 ){
            ElNotification.error({message:'服务器内部错误!' });
        }else if( error.response.status == 503 ){
            ElNotification.error({message:'服务器不可用!' });
        }
        return Promise.reject(error);
    }
)

export default service;



