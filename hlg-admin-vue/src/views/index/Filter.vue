<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import * as service from '@/api'

//下拉数据
const filterList = ref([]);
//表格数据
const tableList = ref([]);
//选择的
let selectValue = ref('手机');
//加载
const loading = ref(false);
//获取下拉数据
const getList = async () => {
    var res = await service.pro.pro_getCategory();
    filterList.value = res.data.data;
    // selectValue.value = filterList.value[0];
}
//初始化
onMounted(async () => {
    getList();
    getType();
})

//根据分类获取数据
const getType = async (search='') => {
    loading.value = true;
    var res = await service.pro.pro_searchPro({ category: selectValue.value,search})
    loading.value = false;
    tableList.value = res.data.data;
}

//侦听下拉菜单
watch(selectValue, () => {
    getType();
})

//输入框的内容
let inputValue = ref();

//搜索
const searchDate = ()=>{
    getType(inputValue.value)
}

</script>
<template>
    <div class="filter">
        <div class="header">
            <el-select v-model="selectValue" :placeholder="filterList[0]">
                <el-option v-for="(index, filter) in filterList" :key="index" :label="filter[index]" :value="index" />
            </el-select>
            <el-input v-model="inputValue"  size="small" placeholder="请输入商品关键字" class="search"/>
            <el-button type="primary" @click="searchDate">搜索</el-button>
        </div>
        <el-table :data="tableList" v-loading="loading" style="width: 100%" class="table">
            <el-table-column label="序号">
                <template #default="scope">
                    <span style="color:#000">{{ scope.$index + 1 }}</span>
                </template>
            </el-table-column>
            <el-table-column label="图片">
                <template #default="scope">
                    <img :src="scope.row.img1" alt="">
                </template>
            </el-table-column>
            <el-table-column prop="proname" label="名称" width="180"></el-table-column>
            <el-table-column prop="brand" label="品牌"></el-table-column>
            <el-table-column prop="category" label="分类"></el-table-column>
            <el-table-column prop="originprice" label="原价"></el-table-column>
            <el-table-column prop="discount" label="折扣"></el-table-column>
            <el-table-column prop="sales" label="销量" width="85"></el-table-column>
        </el-table>
    </div>
</template>
<style  scoped>
.filter img {
    max-height: 80px;
}
.filter .header {
    display: flex;
}
.filter .header .search{
    width: 300px;
    margin: 0 5px 0 20px;
}
</style>