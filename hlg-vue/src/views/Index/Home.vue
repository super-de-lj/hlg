<script>
import MyIndexHeader from "@/components/index/MyIndexHeader.vue";
import MyIndexMain from "@/components/index/MyIndexMain.vue";
export default {
  components: { MyIndexHeader, MyIndexMain },
};
</script>
<template>
  <div class="home">
    <MyIndexHeader />
    <MyIndexMain />
  </div>
</template>
<style scoped>
.home {
  height: 100%;
}
</style>
