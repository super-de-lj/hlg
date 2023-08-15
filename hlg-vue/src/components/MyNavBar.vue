<script>
export default {
    props: ['title', 'left', 'rightText'],
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() { }
    }
}
</script>
<template>
    <van-nav-bar :title="title" :left-arrow="left || false" :right-text="rightText" @click-left="onClickLeft"
        @click-right="onClickRight" />
</template>
<style  scoped></style>