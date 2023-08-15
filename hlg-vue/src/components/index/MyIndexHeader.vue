<script>
import * as service from "@/api/index";
export default {
  data() {
    return {
      searchValue: "",
      searchList: [],
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    clickCity() {
      this.$router.push("/citylist");
    },
    myuser() {
      this.$router.push("/index/user");
    },
  },
  mounted() {
    // var res = await service.getSearchList({ keyword: this.searchValue }).then(res => {
    //     console.log(res);
    // })
  },
  watch: {
    async searchValue() {
      var res = await service.getSearchList({ keyword: this.searchValue });
      this.searchList = res.data.data;
    },
  },
};
</script>
<template>
  <div class="header">
    <div class="left">
      <span @click="clickCity">{{ this.$store.state.city || "西安" }}</span>
    </div>
    <div class="search">
      <van-search
        v-model="searchValue"
        shape="round"
        background="#f66"
        label=""
        placeholder="请输入搜索关键词">
      </van-search>
      <ul class="search_list" v-show="searchValue.trim() != ''">
        <li v-for="item in searchList" :key="item.proid">{{ item.brand }}</li>
      </ul>
    </div>
    <div class="right">
      <span @click="login" v-if="!$store.state.token">登录</span>
      <span @click="myuser" v-if="$store.state.token">我的</span>
    </div>
  </div>
</template>
<style scoped>
.header {
  background: #f66;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

.header .left,
.header .right {
  width: 0.1563rem;
  text-align: center;
  color: #fff;
}

.header .search {
  flex: 1;
  position: relative;
}

.header .search_list {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 54px;
  width: 90%;
  height: 50px;
  z-index: 1;
}

.header .search_list > li {
  padding: 0 10px;
  background: #f66;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webit-box-orient: vertical;
  -webit-line-clamp: 2;
}

.header .search_list > li:hover {
  background: #eee;
}
</style>
