<script>
import MyNavBar from "@/components/MyNavBar.vue";
export default {
  components: { MyNavBar },
};
</script>
<template>
  <div class="register">
    <div class="title">
      <MyNavBar title="注册" :left="true" />
    </div>
    <div class="phone">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
.register {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 2;
}

.register .phone {
  margin: 0.0938rem 0;
}
</style>
