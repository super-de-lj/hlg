<script setup lang="ts">
import * as service from "@/api/index";
import { onMounted, ref } from "vue";

var goodSum = ref();
var goodNew = 11.28;
var userSum = ref();
var userNew = 21.28;
onMounted(async () => {
  var res = await service.home.statistic_product();
  goodSum.value = res.data.data;
  var res = await service.home.statistic_user();
  userSum.value = res.data.data;
});
</script>
<template>
  <div class="home">
    <el-statistic title="新增用户" :value="goodSum" />
    <el-statistic title="同比新增" value="">
      <template #suffix>
        <el-icon color="green" size="24" style="vertical-align: middle"
          ><Top
        /></el-icon>
        <span>{{ goodNew }}%</span>
      </template>
    </el-statistic>
    <el-statistic title="新增交易额" :value="userSum" />
    <el-statistic title="同比新增" value="">
      <template #suffix>
        <el-icon color="green" size="24" style="vertical-align: middle"
          ><Top
        /></el-icon>
        <span>{{ userNew }}%</span>
      </template>
    </el-statistic>
  </div>
</template>
<style scoped>
.home {
  width: 80%;
  display: flex;
  justify-content: space-between;
}
:deep(.el-statistic__head) {
  font-size: 16px;
  color: #aaa;
  margin-bottom: 10px;
}
:deep(.el-statistic__suffix) {
  font-size: 18px;
  color: green;
}
</style>
