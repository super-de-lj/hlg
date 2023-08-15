import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('menuStore', () => {
    //定义需要管理的数据
    const menu = ref([]);

    //保存用户信息
    function save_menu(payload:any){
        menu.value = payload;
    }

    //删除用户信息
    function delete_menu(){
        menu.value = [];
    }
    
    return {
        menu ,save_menu,delete_menu
    };
},{persist:true})
