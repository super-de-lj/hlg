<script>
import * as service from "@/api/index";
import MySwipe from "../MySwipe.vue";
import MyCell from "../MyCell.vue";
import MySeckill from "./MySeckill.vue";
import MyGoodList from "./MyGoodList.vue";
export default {
  components: { MySwipe, MySwipe, MyCell, MySeckill, MyGoodList },
  data() {
    return {
      swipelist: [],
      catelist: [],
    };
  },
  mounted() {
    service.getBanner().then((res) => {
      res.data.data.forEach((item) => {
        this.swipelist.push(item.img);
      });
    });
    service.getCatelist().then((res) => {
      this.catelist = res.data.data;
    });
  },
};
</script>
<template>
  <div class="myIndexMain">
    <div class="swipe">
      <MySwipe :swipelist="swipelist" :height="160" />
    </div>
    <div class="catelist">
      <MyCell :num="5" :list="catelist" />
    </div>
    <MySeckill />
    <MyGoodList />
  </div>
</template>
<style>
.myIndexMain {
  overflow-y: auto;
  margin-top: 50px;
  height: 100%;
}

.myIndexMain .swipe {
  height: 0.5rem;
}

.myIndexMain .swipe img {
  width: 1rem;
  height: 0.5rem;
}
</style>
