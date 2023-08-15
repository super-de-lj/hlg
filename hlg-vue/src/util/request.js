import axios from 'axios';
//导入弹框函数
import { showToast } from 'vant';
import 'vant/es/toast/style';
import store from '@/store/index.js'

const service = axios.create({
    timeout: 10 * 1000,
    baseURL: ''
});

service.interceptors.request.use(
    (config) => {
        // config.headers["Content-Type"] = 'application/x-www-form-urlencoded; charset=UTF-8';
        // console.log(config.headers);
        //添加token
        config.headers["token"] = store.state.token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        if (error.response.status == 401) {
            showToast('登陆过期,请重新登录!');
            //删除过期token
            store.state.token = '';
            //跳转到登录页面
            router.push('/login')
        } else if (error.response.status == 404) {
            showToast('访问的资源找不到!')
        }
        else if (error.response.status == 500) {
            showToast('服务器内部错误!')
        }
        else if (error.response.status == 503) {
            showToast('服务器不可用,请及时联系管理员!')
        }
        return Promise.reject(error);
    }
)


export default service;