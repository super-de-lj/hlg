<script>
import * as service from "@/api/index";
import MyNavBar from "@/components/MyNavBar.vue";
export default {
  components: { MyNavBar },
  async mounted() {
    let obj = JSON.parse(this.$route.params.id);
    var res = await service.categorybrandprolist(obj);
    this.goodlist = res.data.data;
  },
  data() {
    return {
      goodlist: [],
    };
  },
  methods: {
    goGood(id) {
      this.$router.push("/good/" + id);
    },
  },
};
</script>
<template>
  <div class="goodlist">
    <MyNavBar title="商品列表" :left="true" />
    <div class="list">
      <div
        class="pro"
        v-for="good in goodlist"
        :key="good.proid"
        @click="goGood(good.proid)">
        <img :src="good.img1" alt="" />
        <div class="name">{{ good.proname }}</div>
        <div class="price">￥{{ good.originprice }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.goodlist .list {
  display: flex;
  justify-content: space-between;
  padding: 0 0.0313rem;
}

.goodlist .list .pro {
  width: 48%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
}

.goodlist .list .pro .name {
  font-size: 14px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 5px;
}

.goodlist .list .pro img {
  width: 149px;
  height: 149px;
}

.goodlist .list .pro .price {
  color: #f66;
}
</style>
