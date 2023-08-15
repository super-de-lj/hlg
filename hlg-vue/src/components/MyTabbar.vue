<script>
import { showLoadingToast } from 'vant';
export default {
    data() {
        return {
            active: 0
        }
    },
    props: ['tabbrlist'],
    // watch: {
    //     active() {
    //         showLoadingToast({
    //             message: '加载中...',
    //             forbidClick: true,
    //             loadingType: 'spinner',
    //         });
    //     }
    // }
}
</script>
<template>
    <van-tabbar v-model="active" active-color="#ee0a24" :index="active" route>
        <van-tabbar-item icon="home-o" to="/index/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/index/type">分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/index/gwc">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/index/user">我的</van-tabbar-item>
    </van-tabbar>
</template>
<style  scoped></style>