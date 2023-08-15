import axios from "axios";
import {store} from '@/store'
import {Toast} from 'antd-mobile'

const service = axios.create({
    timeout:10*1000,
    baseURL: process.env.REACT_APP_BASE_API
})

service.interceptors.request.use(
    (config)=>{
        //从store中获取token
        var token = store.getState().token
        config.headers['token'] = token;
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    (res)=>{
        return res;
    },
    (error)=>{
        console.log(error);
        if( error.response.status == 401 ){
            Toast.show({content: '登陆过期,请重新登录'})
        }else if( error.response.status == 404 ){
            Toast.show({content: '访问路径有误!'})
        }else if( error.response.status == 500 ){
            Toast.show({content: '服务器内部错误!'})
        }else if( error.response.status == 503 ){
            Toast.show({content: '服务器不可用!'})
        }
        return Promise.reject(error);
    }
)
export default service;
