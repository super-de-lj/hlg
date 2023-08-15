<script setup lang="ts">
import { ref, onMounted } from "vue";
import { userStore, menuStore } from "@/stores/index";
import Breadcrumb from "@/components/Breadcrumb.vue";
import router from "@/router";
import { menuDate, getFilterMenu } from "@/utils/menuData";

var collapse = ref(true);
var filterMenu = ref([]);

var user_store = userStore();
var menu_tore = menuStore();
var handleMenu = (index: any, indexPath: any) => {
  menu_tore.save_menu(indexPath);
};

let Keys = user_store.user.checkedkeys || [];

Keys.forEach((item: any) => {
  if (item.split("-").length > 1) {
    if (!Keys.includes(item.split("-")[0])) {
      Keys.push(item.split("-")[0]);
    }
  }
});

filterMenu.value = getFilterMenu(Keys, menuDate);

var handleCollapse = () => (collapse.value = !collapse.value);

var setting = () => {};
var exit = () => {
  user_store.delete_user();
  router.push("/login");
};
</script>
<template>
  <div class="index">
    <el-container>
      <el-aside width="auto">
        <el-menu
          router
          active-text-color="#ffd04b"
          background-color="#000"
          default-active="2"
          text-color="#fff"
          :collapse="collapse"
          @select="handleMenu">
          <el-menu-item v-show="!collapse">
            <div class="title">欢乐购后台管理系统</div>
          </el-menu-item>

          <template v-for="item in filterMenu">
            <el-menu-item
              v-if="!item.children"
              :index="item.id"
              :route="item.route">
              <el-icon>
                <HomeFilled />
              </el-icon>
              <span>{{ item.text }}</span>
            </el-menu-item>

            <el-sub-menu v-else :index="item.id">
              <template #title>
                <el-icon>
                  <HomeFilled />
                </el-icon>
                <span>{{ item.text }}</span>
              </template>
              <el-menu-item
                v-for="childItem in item.children"
                :index="childItem.id"
                :route="childItem.route">
                {{ childItem.text }}
              </el-menu-item>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-aside>
      <el-container class="contain">
        <!-- 头部 -->
        <el-header class="header">
          <div class="left" @click="handleCollapse">
            <el-icon v-if="collapse">
              <Expand />
            </el-icon>
            <el-icon v-else>
              <Fold />
            </el-icon>
          </div>
          <div class="right">
            <span>欢迎：{{ user_store.user.adminname || "" }}</span>
            <el-dropdown>
              <el-icon color="#fff">
                <Avatar />
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="setting">设置</el-dropdown-item>
                  <el-dropdown-item @click="exit">退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <!-- 内容 -->
        <Breadcrumb style="padding: 20px 0 20px 15px" />
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.index {
  height: 100%;
  background: #eee;
}

.index .contain {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.el-container {
  height: 100%;
}

.index .title {
  text-align: center;
  color: #fff;
  padding: 10px 20px;
  font-size: 20px;
}

.index .el-dropdown {
  vertical-align: middle;
  margin-left: 5px;
}

.index .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  color: #fff;
  min-width: 200px;
}

.index .header .left {
  cursor: pointer;
}

.index .main {
  padding-top: 20px;
  min-width: 300px;
  overflow-y: auto;
  margin: 0 50px 0 20px;
  background: #fff;
  border-radius: 15px;
}
</style>
