import axios from "axios";
import { store } from "@/store";
import {createBrowserHistory} from 'history';
import { message } from "antd";
var history = createBrowserHistory();

const service = axios.create({
    timeout:10*1000,
    baseURL:process.env.REACT_APP_BASE_API
})
service.interceptors.request.use(
    (config)=>{
        config.headers['token'] = store.getState().userInfo.token;
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    (res)=>{
        if(res.data.code == '10119'){
            history.push('/login');
            history.go(0);
        }
        return res;
    },
    (error)=>{
        if( error.response.status == 401 ){
            history.push('/login')
            history.go(0);
            message.open({type:'error',content:'登陆过期,请重新登录'} )
        }else if( error.response.status == 404 ){
            message.open({type:'error',content:'访问路径有误!'} )
        }else if( error.response.status == 500 ){
            message.open({type:'error',content:'服务器内部错误!'} )
        }else if( error.response.status == 503 ){
            message.open({type:'error',content:'服务器不可用!'} )
        }
        return Promise.reject(error);
    }
)
export default service;
