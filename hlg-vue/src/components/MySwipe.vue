<script>
export default {
    props: ['swipelist', 'height', 'customIndicator']
}
</script>
<template>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white" :height="height">
        <van-swipe-item v-for="item, index in swipelist" :key="index"><img :src="item" alt=""></van-swipe-item>
        <template #indicator="{ active, total }" v-if="customIndicator">
            <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
    </van-swipe>
</template>
<style  scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    text-align: center;
    background-color: #39a9ed;
}

.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

img {
    height: 100%;
}
</style>