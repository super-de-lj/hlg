<script>
import * as service from "@/api/index";
export default {
  data() {
    return {
      recommendlist: [], //推荐商品
      count: 0,
      loading: false,
      finished: false,
    };
  },
  methods: {
    goodpage(id) {
      this.$router.push("/good/" + id);
    },
    async onLoad() {
      var res = await service.getrecommendlist({
        count: this.count + 1,
        limitNum: 10,
      });
      this.recommendlist = [...this.recommendlist, ...res.data.data];
      this.count = this.count + 1;
      // console.log(this.count);
      // 加载状态结束
      this.loading = false;
      // 数据全部加载完成
      if (res.data.data.length == 0) {
        console.log(this.loading);
        this.finished = true;
      }
    },
  },
};
</script>
<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    :offset="70"
    loading-text="加载中...">
    <div class="goods">
      <div
        class="goodItem"
        v-for="good in recommendlist"
        :key="good.proid"
        @click="goodpage(good.proid)">
        <img :src="good.img1" alt="" />
        <div class="name">{{ good.proname }}</div>
        <div class="price">¥{{ good.originprice }}</div>
      </div>
    </div>
  </van-list>
</template>
<style scoped>
.van-list {
  margin-bottom: 100px;
}

.goods {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 10px;
}

.goods .goodItem {
  width: 49%;
  background: #fff;
  padding: 5px;
  border-radius: 10px;
  margin-top: 10px;
}

.goods .goodItem img {
  height: 0.4281rem;
  width: 0.4281rem;
}

.goods .goodItem .name {
  font-size: 14px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin: 10px 0;
}

.goods .goodItem .price {
  color: #f66;
}
</style>
