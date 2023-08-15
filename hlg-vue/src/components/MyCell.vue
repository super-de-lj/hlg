<script>
export default {
  props: ["num", "list"],
};
</script>
<template>
  <van-grid :column-num="5">
    <van-grid-item
      v-for="cate in list"
      :key="cate.navid"
      :icon="cate.imgurl"
      :text="cate.title.replace('嗨购', '欢乐购')" />
  </van-grid>
</template>
<style scoped>
:deep(.van-grid-item__content) {
  padding: 10px 0;
}
</style>
