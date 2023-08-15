<script>
import * as service from "@/api/index";
export default {
  data() {
    return {
      current: 0,
      typelist: [],
      TypeCatelist: [],
    };
  },
  async mounted() {
    var res = await service.getTypelist();
    this.typelist = res.data.data;

    var res = await service.getTypeCatelist({ category: this.typelist[0] });
    this.TypeCatelist = res.data.data;
  },
  methods: {
    async typeclick(index, typeitem) {
      this.current = index;
      var res = await service.getTypeCatelist({ category: typeitem });
      this.TypeCatelist = res.data.data;
    },
    goGoodList(value) {
      console.log(this.typelist[this.current], value.brand);
      let obj = { category: this.typelist[this.current], brand: value.brand };
      obj = JSON.stringify(obj);
      this.$router.push(`/goodlist/${obj}`);
    },
  },
};
</script>
<template>
  <div class="type">
    <div class="title">商品分类</div>
    <div class="main">
      <div class="left">
        <div
          :class="{ cate: true, active: index == current }"
          v-for="(typeitem, index) in typelist"
          @click="typeclick(index, typeitem)"
          :key="index">
          <div class="text">{{ typeitem }}</div>
        </div>
      </div>
      <div class="right">
        <div
          class="rightItem"
          v-for="(typecate, index) in TypeCatelist"
          :key="index"
          @click="goGoodList(typecate)">
          <van-icon name="photo-o" style="font-size: 30px" />
          <div class="name">{{ typecate.brand }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.type {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;
}

.type .title {
  line-height: 0.1437rem;
  background: #fff;
  text-align: center;
  color: var(--van-nav-bar-title-text-color);
  font-weight: var(--van-font-bold);
  font-size: var(--van-nav-bar-title-font-size);
}

.type .main {
  height: 100%;
  display: flex;
  overflow: auto;
}

.type .main .left {
  width: 0.3125rem;
  text-align: center;
  overflow: auto;
  margin-bottom: 50px;
}

.type .main .left .cate {
  padding: 3px 0;
}

.type .main .left .cate .text {
  margin: 8px 0 8px 5px;
  border-left: 3px solid transparent;
}

.type .main .left .cate.active {
  background: #fff;
}

.type .main .left .cate.active .text {
  border-left: 3px solid #f66;
}

.type .main .right {
  flex: 1;
  width: 100%;
  overflow: auto;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
  padding: 0 0.0156rem;
}

.type .main .right .rightItem {
  width: 33%;
  text-align: center;
  padding: 0.0313rem 0;
  box-sizing: border-box;
}

.type .main .right .rightItem .name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  margin-top: 6px;
}
</style>
