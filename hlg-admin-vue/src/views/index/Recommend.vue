<script setup lang="ts">
import * as service from '@/api'
import { onMounted,ref,watch } from 'vue';

const recommendList = ref([]);

//获取秒杀数据
const getrecommend = async (flag:any)=>{
    loading.value = true
    var res = await service.pro.pro_showdata({type:'isrecommend',flag});
    loading.value = false;
    recommendList.value = res.data.data;
}
//初始化
onMounted(()=>{
    getrecommend(selectList.value);
})

//加载
var loading = ref(false);

let selectList = ref(1);

 watch(selectList,()=>{
    getrecommend(selectList.value);
 })

</script>
<template>
    <div class="recommend">
        <el-select v-model="selectList" placeholder="">
            <el-option :key="1" label="选中的" :value="1" />
            <el-option :key="0" label="未选中的" :value="0" />
        </el-select>
        <el-table :data="recommendList" v-loading="loading" style="width: 100%" class="table">
            <el-table-column  label="序号" >
                <template #default="scope">
                    <span style="color:#000">{{ scope.$index+1 }}</span>
                </template>
            </el-table-column>
            <el-table-column  label="图片" >
                <template #default="scope">
                    <img :src="scope.row.img1" alt="">
                </template>
            </el-table-column>
            <el-table-column prop="proname" label="名称" width="180"></el-table-column>
            <el-table-column prop="brand" label="品牌" ></el-table-column>
            <el-table-column prop="category" label="分类" ></el-table-column>
            <el-table-column prop="originprice" label="原价" ></el-table-column>
            <el-table-column prop="discount" label="折扣" ></el-table-column>
            <el-table-column prop="sales" label="销量" width="85"></el-table-column>
        </el-table>
    </div>
</template>
<style  scoped>
.recommend img{
    max-height: 80px;
}
</style>