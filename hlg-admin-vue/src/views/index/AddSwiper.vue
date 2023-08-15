<script setup lang="ts">
import { ref } from 'vue';
import { ElNotification } from 'element-plus'
import 'element-plus/es/components/notification/style/css'
import * as service from '@/api/index';
import router from '@/router';
//表单验证规则
const rules = {
    img: [
        { required: true, message: '请输入轮播图地址', trigger: 'change' }
    ],
    alt: [
        { required: true, message: '请输入轮播图提示', trigger: 'change' }
    ],
    link: [
        { required: true, message: '请输入轮播图链接', trigger: 'change' }
    ]
}
const formref = ref();
const loading = ref(false);
//表单数据对象
var ruleForm = ref({ img:'',alt:'',link:''});

var onSubmit = (formref:any) => {
    formref.validate(async (valia:boolean)=>{
        if(valia){
            loading.value = true;
            var res = await service.home.banner_add(ruleForm.value);
            loading.value = false;
            if(res.data.code == 200){
                ElNotification.closeAll();
                ElNotification.success(res.data.message);
                router.push('/index/swiper');
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
    <div class="addSwiper">
        <el-form ref="formref" :model="ruleForm" :rules="rules" class="form">
            <el-form-item prop="adminname" label="轮播图地址">
                <el-input v-model="ruleForm.img" />
            </el-form-item>
            <el-form-item prop="password" label="轮播图提示">
                <el-input v-model="ruleForm.alt"  />
            </el-form-item>
            <el-form-item prop="password" label="轮播图链接">
                <el-input v-model="ruleForm.link"  />
            </el-form-item>
            <el-form-item>
                <el-button :disabled="loading" type="primary" @click="onSubmit(formref)" class="btn">新增图片</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style  scoped>

</style>
