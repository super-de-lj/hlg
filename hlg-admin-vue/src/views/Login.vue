<script setup lang="ts">
import { ref } from 'vue';
import { ElNotification } from 'element-plus'
import 'element-plus/es/components/notification/style/css'
import  {userStore} from '@/stores/index'
import * as service from '@/api/index';
import router from '@/router';
//表单验证规则
const rules = {
    adminname: [
        { required: true, message: '请输入账号', trigger: 'change' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'change' }
    ]
}
const formref = ref();
//表单数据对象
var ruleForm = ref({ adminname: 'admin', password: '123456' });

var onSubmit = (formref:any) => {
    formref.validate(async (valia:boolean)=>{
        if(valia){
            var res = await service.login.admin_login(ruleForm.value);
            if(res.data.code == 200){
                //创建了一个user的pinia实例
                var store =  userStore();
                store.save_user(res.data.data);
                ElNotification.success(res.data.message);
                router.push('/index/home');
            }else{
                ElNotification.closeAll();
                ElNotification.error(res.data.message);
            }
        }else{
            ElNotification.closeAll();
            ElNotification.error('登录失败')
        }
    })
}

</script>
<template>
    <div class="login">
        <h2>嗨购后台管理系统</h2>
        <el-form ref="formref" :model="ruleForm" :rules="rules" class="form">
            <el-form-item prop="adminname">
                <el-input v-model="ruleForm.adminname" placeholder="输入账号" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="ruleForm.password" placeholder="输入密码" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit(formref)" class="btn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style  scoped>
.login {
    height: 100%;
    background: url(../assets/login_bg.jpg) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.login .form {
    min-width: 300px;
    background: #fff;
    padding: 30px;
    border-radius: 15px;
    margin-top: 30px;
}

.login .form .btn {
    width: 100%;
}
</style>