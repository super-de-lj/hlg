<script setup lang="ts">
import {ref} from 'vue';
import * as service from "@/api/index";
import { onMounted } from 'vue';
import { ElNotification } from 'element-plus'
//产品列表数据
var tableData = ref([]);
//加载
var loading = ref(false);

//获取产品列表数据
var getdata = async ()=>{
    loading.value = true;
    var res = await service.pro.pro_list();
    res.data.data.forEach(item => {
        item.issale = Boolean(item.issale);
        item.isseckill = Boolean(item.isseckill);
        item.isrecommend= Boolean(item.isrecommend);
    });
    tableData.value = res.data.data;
    loading.value = false;
    // console.log(res.data.data);
}
//初始化
onMounted(()=>{
    getdata();
})
//删除
var deletePro = (row:any)=>{}

//修改商品是否推荐或者秒杀
var  handleUpdate = async (obj:any)=>{
    var res = await service.pro.pro_updateFlag(obj);
    if(res.data.code==200){
        ElNotification.closeAll();
       obj.type == 'isseckill'?ElNotification.success('修改秒杀状态成功'):ElNotification.success('修改推荐状态成功')
    }else{
        ElNotification.closeAll();
        ElNotification.error('修改状态失败')
    }
}

</script>
<template>
    <div class="pro">
        <el-table :data="tableData" v-loading="loading" style="width: 100%" class="table">
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
            <el-table-column label="是否售卖">
                <template #default="scope">
                    <el-switch v-model="scope.row.issale" />
                </template>
            </el-table-column>
            <el-table-column  label="是否秒杀" >
                <template #default="scope">
                    <el-switch v-model="scope.row.isseckill" @change="handleUpdate({proid:scope.row.proid,type:'isseckill',flag:scope.row.isseckill})"/>
                </template>
            </el-table-column>
            <el-table-column  label="是否推荐" >
                <template #default="scope">
                    <el-switch v-model="scope.row.isrecommend" @change="handleUpdate({proid:scope.row.proid,type:'isrecommend',flag:scope.row.isrecommend})"/>
                </template>
            </el-table-column>
            <el-table-column  label="操作" >
                <template #default="scope">
                    <el-button type="danger" @click="deletePro(scope.row)">delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style  scoped>
:deep(.el-table .cell){
    color: #000;
}
.table img{
    max-height: 80px;
}
</style>