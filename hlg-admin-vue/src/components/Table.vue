<script>
export default {

}
</script>
<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="" label="序号">
            <template #default="scope">
                <span>{{ scope.$index + 1 }}</span>
            </template>
        </el-table-column>
        <el-table-column label="图片" width="180">
            <template #default="scope">
                <img :src="scope.row.img" alt="">
            </template>
        </el-table-column>
        <el-table-column label="图片链接">
            <template #default="scope">
                <el-link type="primary" :href="scope.row.link">链接</el-link>
            </template>
        </el-table-column>
        <el-table-column prop="alt" label="提示"></el-table-column>
        <el-table-column label="是否展示">
            <template #default="scope">
                <el-switch v-model="scope.row.flag" :loading="scope.row.loading" @change="toggleBtn(scope.row)" />
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template #default="scope">
                <el-button type="danger" @click="deleteSwiper(scope.row.bannerid)">delete</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<style  scoped></style>