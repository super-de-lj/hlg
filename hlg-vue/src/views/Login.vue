<script>
import * as service from "@/api/index";
import MyNavBar from "@/components/MyNavBar.vue";
export default {
  components: { MyNavBar },
  data() {
    return {
      username: "15555555551",
      password: "Abcde14",
    };
  },
  methods: {
    async onSubmit(val) {
      if (val.username.trim() && val.password.trim()) {
        var res = await service.Login({
          loginname: val.username,
          password: val.password,
        });
        if (res.data.code == 10011) console.log(res.data.message);
        if (res.data.code == 200) {
          this.$store.commit("setPhone", val.username);
          this.$store.commit("setToken", res.data.data.token);
          this.$store.commit("setUserid", res.data.data.userid);
          this.$router.push("/index/home");
        }
      } else {
        console.log("用户名或密码为输入");
      }
    },
  },
};
</script>
<template>
  <div class="login">
    <MyNavBar title="登录" :left="true" />
    <div class="from">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            placeholder="请输入手机号/账户号/邮箱" />
          <van-field
            v-model="password"
            name="password"
            type="password"
            placeholder="请输入密码" />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
    <div class="other">
      <router-link to="/register">手机快速注册</router-link>
    </div>
  </div>
</template>
<style scoped>
.login {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  background: #fff;
}

.login .from {
  margin: 0.0938rem 0;
}

.login .other {
  text-align: right;
  margin-right: 0.0625rem;
}
</style>
