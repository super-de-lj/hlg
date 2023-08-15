<script>
import * as service from "@/api/index";
import MyNavBar from "@/components/MyNavBar.vue";
export default {
  components: { MyNavBar },
  data() {
    return {
      citylist: [],
    };
  },
  async mounted() {
    var res = await service.getSortCity();
    this.citylist = res.data;
  },
  methods: {
    Item(val) {
      this.$store.commit("setCity", val.name);
      this.$router.push("/index");
    },
  },
};
</script>
<template>
  <div class="city">
    <div class="title">
      <MyNavBar title="城市" :left="true" />
    </div>
    <div class="list">
      <van-index-bar>
        <template v-for="city in citylist" :key="city.letter">
          <van-index-anchor :index="city.letter"></van-index-anchor>
          <van-cell
            :title="cityItem.name"
            v-for="cityItem in city.data"
            :key="cityItem.cityId"
            @click="Item(cityItem)" />
        </template>
      </van-index-bar>
    </div>
  </div>
</template>
<style scoped>
.city {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.city .title {
  height: 0.1563rem;
}

.city .list {
  flex: 1;
  overflow-y: auto;
}
</style>
