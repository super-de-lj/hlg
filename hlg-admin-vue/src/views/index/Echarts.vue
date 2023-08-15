<script setup lang="ts">
import { onMounted } from "vue";
import { tu1, tu2 } from "@/utils/echarts";

onMounted(async () => {
  tu1(document.getElementById("echarts1"));
  tu2(document.getElementById("echarts2"));
});
</script>
<template>
  <div class="echarts">
    <div id="echarts1"></div>
    <div id="echarts2"></div>
  </div>
</template>
<style scoped>
.echarts {
  display: flex;
}
#echarts1 {
  width: 500px;
  height: 300px;
}
#echarts2 {
  width: 500px;
  height: 300px;
}
</style>
