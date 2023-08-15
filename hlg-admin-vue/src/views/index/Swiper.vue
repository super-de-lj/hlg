<script setup lang="ts">
import * as service from "@/api/index";
import { onMounted ,ref} from "vue";
import { ElNotification } from 'element-plus'
import router from '@/router/index'

//轮播图数据
var tableData = ref([]);
//加载
var loading = ref(false);

//初始加载轮播图数据
let init = async ()=>{
    loading.value=true;
    var res = await service.home.banner_list();
    res.data.data.forEach(item => {item.loading = false});
    loading.value=false;
    tableData.value = res.data.data;
}

 onMounted(()=>{
    init();
 })

//修改轮播图状态
var toggleBtn = (async (row:any)=>{
    row.loading = true;
    var res = await service.home.banner_updateFlag({bannerid:row.bannerid,flag:row.flag})
    //关闭加载动画
    row.loading = false;
    if(res.data.code==200){
        ElNotification.closeAll();
        ElNotification.success('修改状态成功')
    }else{
        ElNotification.closeAll();
        ElNotification.error('修改状态失败')
    }
})

//新增轮播图
var addSwiper = (()=>{
    router.push('/index/addswiper');
})

//删除轮播图
var deleteSwiper =(async (id:any)=>{
    var  res = await service.home.banner_delete({bannerid:id});
    init();
})
</script>
<template>
    <div class="swiper">
        <el-button type="primary" @click="addSwiper">添加轮播图<el-icon><Plus/></el-icon></el-button>
        <el-table :data="tableData" style="width: 100%" class="table" v-loading="loading">
            <el-table-column prop="" label="序号" >
                <template #default="scope">
                    <span>{{ scope.$index+1 }}</span>
                </template>
            </el-table-column>
            <el-table-column  label="图片" width="180">
                <template #default="scope">
                    <img :src="scope.row.img" alt="">
                </template>
            </el-table-column>
            <el-table-column label="图片链接" >
                <template #default="scope">
                    <el-link type="primary" :href="scope.row.link">链接</el-link>
                </template>
            </el-table-column>
            <el-table-column prop="alt" label="提示"></el-table-column>
            <el-table-column  label="是否展示">
                <template #default="scope">
                    <el-switch v-model="scope.row.flag" :loading="scope.row.loading" @change="toggleBtn(scope.row)"/>
                </template>
            </el-table-column>
            <el-table-column  label="操作">
                <template #default="scope">
                    <el-button type="danger" @click="deleteSwiper(scope.row.bannerid)">delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style  scoped>
.swiper .table img{
    max-height: 60px;
}
</style>