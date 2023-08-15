import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('userStore', () => {
    //定义需要管理的数据
    const user = ref({});

    //保存用户信息
    function save_user(payload: any) {
        user.value = payload;
    }

    //删除用户信息
    function delete_user() {
        user.value = {};
    }

    return {
        user, save_user, delete_user
    };
}, { persist: true })
