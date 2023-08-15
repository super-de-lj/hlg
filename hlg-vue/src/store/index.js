import { createStore, createLogger } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state: {//负责存储数据
        user_phone: 0,//用户手机号
        token: '',//token
        Userid: '',//用户id
        city: ''//地址
    },
    getters: {//定义计算方法

    },
    mutations: {//定义同步方法
        setPhone(state, payload) {
            state.user_phone = payload;
        },
        setToken(state, payload) {
            state.token = payload;
        },
        setUserid(state, payload) {
            state.Userid = payload;
        },
        setCity(state, payload) {
            state.city = payload;
        },
        //清除登录信息
        clearUser(state) {
            state.user_phone = 0;
            state.token = ''
            state.Userid = ''
        }
    },
    actions: {//定义异步方法

    },
    modules: {//模块化管理state中的数据

    },
    plugins: [
        createPersistedState(),//日志打印
        createLogger(),//持久化存储
    ]
})



export default store;