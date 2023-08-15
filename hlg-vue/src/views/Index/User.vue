<script>
import MyNavBar from "@/components/MyNavBar.vue";
export default {
  components: { MyNavBar },
  data() {
    return {
      show: false,
      actions: [{ name: "退出登录", color: "#ee0a24" }],
    };
  },
  methods: {
    //点击三个小点底部弹框
    onClickRight() {
      this.show = true;
    },
    onSelect(val, index) {
      if (index == 0) {
        this.$store.commit("clearUser");
        this.$router.push("/login");
      }
    },
  },
};
</script>
<template>
  <div class="user">
    <MyNavBar title="我的" right-text="..." @click="onClickRight" />
    <van-action-sheet
      v-model:show="show"
      cancel-text="取消"
      close-on-click-action
      :actions="actions"
      @select="onSelect" />
    <div class="userMain">
      <div class="userInfo">
        <img src="http://180.76.99.14/hg/assets/avatar-b27101e4.jpg" alt="" />
        <div class="phone">{{ this.$store.state.user_phone }}</div>
      </div>
      <div class="block">
        <h3>我的订单</h3>
        <div class="list">
          <div class="item" v-for="(item, index) in 5" :key="index">
            <van-icon name="chat-o" badge="99+" />
            <span>全部订单</span>
          </div>
        </div>
      </div>
      <div class="block">
        <h3>工具包</h3>
        <div class="list">
          <div class="item" v-for="(item, index) in 5" :key="index">
            <van-icon name="chat-o" /><span>全部订单</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.user {
  background: #eee;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.user .userInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  box-sizing: border-box;
}

.user .userInfo .phone {
  margin: 50px 10px;
}

.user .userInfo img {
  width: 0.1875rem;
  height: 0.1875rem;
  border-radius: 50%;
  margin-bottom: 15px;
}

.user .userMain {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 0.1563rem;
}

.user .block {
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 5px;
}

.user .block .list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user .block .list .item {
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.user .block .list .item span {
  margin-top: 5px;
  font-size: 0.0437rem;
}
</style>
