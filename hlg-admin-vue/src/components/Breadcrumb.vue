<script setup lang="ts">
    import {menuStore} from '@/stores/index';
    import {getTextPath} from '@/utils/menuDict'
    var menu_store = menuStore();
    var handleIndex = ()=>{
        menu_store.save_menu(['1']);
    }
</script>
<template>
 <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }" @click="handleIndex" ><el-icon style="margin-right:5px;">
      <HomeFilled /></el-icon>首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in menu_store.menu" :key="index">{{ getTextPath(item) }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style  scoped>
</style>