<script>
import MyTabbar from "@/components/MyTabbar.vue";
export default {
  components: {
    MyTabbar,
  },
};
</script>
<template>
  <div class="index">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <Transition name="index">
          <component :is="Component" />
        </Transition>
      </keep-alive>
    </router-view>

    <MyTabbar />
  </div>
</template>
<style scoped>
.index {
  height: 100%;
}

.index-enter-active,
.index-leave-active {
  transition: all 0.3s ease-out;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
}

.index-enter,
.index-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.index-enter-to,
.index-leave {
  opacity: 1;
  transform: translateX(0);
}
</style>
