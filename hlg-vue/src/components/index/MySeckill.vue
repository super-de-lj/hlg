<script>
import * as service from "@/api/index";
import MyCountDown from "../MyCountDown.vue";
export default {
  data() {
    return {
      time: 3600000,
      seckilllist: [], //秒杀
    };
  },
  mounted() {
    service.getseckilllist().then((res) => {
      this.seckilllist = res.data.data;
    });
  },
  methods: {
    seckilClick(id) {
      this.$router.push("/good/" + id);
    },
  },
};
</script>
<template>
  <div class="seckill">
    <div class="title">
      <div class="left">
        <span>欢乐购秒杀</span>
        <span>8点场</span>
        <MyCountDown :time="time" />
      </div>
      <div class="right">爆款轮番秒</div>
    </div>
    <div class="seckilllist">
      <div
        class="good"
        v-for="seckillItem in seckilllist"
        @click="seckilClick(seckillItem.proid)">
        <img :src="seckillItem.img1" alt="" />
        <div class="price">￥{{ seckillItem.originprice }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.seckill {
  background: #fff;
  margin: 10px 6px;
  border-radius: 10px;
}

.seckill .title {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 0.0437rem;
}

.seckill .left {
  display: flex;
}

.seckill .left > span {
  margin-right: 15px;
}

.seckilllist {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.seckilllist .good {
  font-size: 14px;
  width: 16%;
}

.seckilllist .good img {
  width: 80%;
  width: 0.1219rem;
  height: 0.1875rem;
  margin-bottom: 10px;
}

.seckilllist .good .price {
  color: red;
  margin-bottom: 10px;
  font-size: 14px;
  overflow: hidden;
}
</style>
