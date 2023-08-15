<script>
import * as service from "@/api/index";
import MyNavBar from "@/components/MyNavBar.vue";
import { showLoadingToast, showToast } from "vant";
export default {
  components: { MyNavBar },
  data() {
    return {
      cartlist: [],
      show: false,
    };
  },
  async mounted() {
    this.updata();
  },
  methods: {
    async queren() {
      var res = await service.removeall({ userid: this.$store.state.Userid });
      this.updata();
    },
    //点击清空，弹出确认框
    clearCart() {
      this.show = true;
    },
    //点击提交
    onSubmit() {
      showToast("下单");
    },
    //更新数据
    async updata() {
      showLoadingToast({ message: "加载中...", forbidClick: true });
      var res = await service.cartlist({ userid: this.$store.state.Userid });
      this.cartlist = res.data.data || [];
    },
    async check(id, flag) {
      //改变状态
      var res = await service.selectone({ cartid: id, flag: !flag });
      this.updata();
    },
    //加号
    async jiaNum(id, num) {
      var res = await service.updatenum({ cartid: id, num: ++num });
      this.updata();
    },
    //减号
    async jianNum(id, num) {
      if (num > 1) {
        var res = await service.updatenum({ cartid: id, num: --num });
        this.updata();
      }
    },
  },
  computed: {
    //总价
    sumPrice() {
      return (
        this.cartlist
          .filter((item) => item.flag)
          .reduce((prev, item) => (prev += item.num * item.originprice), 0) *
        100
      );
    },
    //全选
    isAll: {
      get() {
        if (this.cartlist.length) {
          return this.cartlist.every((item) => item.flag);
        }
      },
      async set(val) {
        var res = await service.selectall({
          userid: this.$store.state.Userid,
          type: val,
        });
        this.updata();
      },
    },
  },
};
</script>
<template>
  <div class="gwc">
    <MyNavBar title="购物车" rightText="清空" @click="clearCart" />
    <van-dialog
      v-model:show="show"
      title="清空购物车所有商品?"
      show-cancel-button
      @confirm="queren"></van-dialog>
    <div class="context">
      <div class="good" v-for="cartitem in cartlist" :key="cartitem.cartid">
        <div class="check">
          <van-checkbox
            :checked="cartitem.flag"
            @click="check(cartitem.cartid, cartitem.flag)"></van-checkbox>
        </div>
        <div class="img_box"><img :src="cartitem.img1" alt="" /></div>
        <div class="text">
          <h3>{{ cartitem.proname }}</h3>
          <div class="price">￥{{ cartitem.originprice }}</div>
        </div>
        <div class="btns">
          <button @click="jianNum(cartitem.cartid, cartitem.num)">-</button>
          <span>{{ cartitem.num }}</span>
          <button @click="jiaNum(cartitem.cartid, cartitem.num)">+</button>
        </div>
      </div>
    </div>
    <van-submit-bar :price="sumPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="isAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<style scoped>
h3 {
  font-weight: normal;
}

.gwc {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.gwc .context {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 0.3125rem;
}

.gwc .context .check {
  margin-right: 10px;
}

.gwc .context .check input {
  border-radius: 50%;
  width: 15px;
  height: 15px;
}

.gwc .context .good {
  display: flex;
  align-items: center;
  margin: 0 10px 10px;
  padding: 10px;
  box-sizing: border-box;
  background: #eee;
  border-radius: 10px;
  position: relative;
}

.gwc .good .img_box {
  width: 0.25rem;
}

.gwc .good .img_box img {
  width: 0.225rem;
  height: 0.225rem;
  border-radius: 5px;
}

.gwc .good .text {
  font-size: 12px;
  flex: 1;
}

.gwc .good .text h3 {
  font-size: 13px;
  text-align: left;
}

.gwc .good .text .price {
  margin: 20px 0 0;
  font-size: 16px;
  color: #f66;
}

.gwc .good .btns {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.gwc .good .btns button {
  padding: 5px 10px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
}

.gwc .good .btns button:hover {
  background: #eee;
}

.gwc .good .btns span {
  margin: 0 5px;
}

.van-submit-bar {
  margin-bottom: 50px;
}
</style>
