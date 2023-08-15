<script>
import MyNavBar from "@/components/MyNavBar.vue";
import MySwipe from "@/components/MySwipe.vue";
import { showSuccessToast, showFailToast } from "vant";

import * as service from "../api/index";
export default {
  components: { MyNavBar, MySwipe },
  data() {
    return {
      goodlist: "",
      imgslist: [],
    };
  },
  methods: {
    onClickKefu() {
      // console.log('客服');
    },
    onClickGwc() {
      this.$router.push("/index/Gwc");
    },
    onClickDp() {
      // console.log('店铺');
    },
    async onClickBuy() {
      var res = await service.addCart({
        userid: this.$store.state.Userid,
        proid: this.$route.params.id,
        num: 1,
      });
      console.log(res);
      if (res.data.code == 200) showSuccessToast("加入购物车成功");
      if (res.data.code == 10119) this.$router.push("/login");
    },
  },
  async mounted() {
    var res = await service.getdetail({ proid: this.$route.params.id });
    this.goodlist = res.data.data;
    this.imgslist = [
      res.data.data.img1,
      res.data.data.img2,
      res.data.data.img3,
      res.data.data.img4,
    ];
  },
};
</script>
<template>
  <div class="good">
    <MyNavBar title="商品详细" :left="true" />
    <MySwipe height="300" :swipelist="imgslist" :customIndicator="true" />
    <div class="proinfo">
      <div class="name"><span>欢乐购超市</span>{{ goodlist.proname }}</div>
      <div class="price_sales">
        <div class="price">
          价格:<span>￥{{ goodlist.originprice }}</span>
        </div>
        <div class="sales">
          销量:<span>￥{{ goodlist.sales }}</span>
        </div>
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" @click="onClickKefu" />
      <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickGwc" />
      <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickDp" />
      <van-action-bar-button
        type="danger"
        text="加入购物车"
        @click="onClickBuy" />
    </van-action-bar>
  </div>
</template>
<style scoped>
.good {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #fff;
}

.good .proinfo {
  margin: 0.0938rem 0.0625rem;
  font-size: 0.05rem;
}

.good .proinfo .name {
  line-height: 0.0688rem;
}

.good .proinfo .name span {
  font-size: 12px;
  padding: 2px 5px;
  background-color: #f66;
  color: #fff;
  border-radius: 5px;
  margin-right: 10px;
}

.good .price_sales {
  display: flex;
  margin: 30px 0;
}

.good .price_sales .price {
  margin-right: 20px;
}

.good .price_sales span {
  color: #f66;
}
</style>
