<script>
export default {
    props: ['time']
}
</script>
<template>
    <van-count-down :time="time">
        <template #default="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
        </template>
    </van-count-down>
</template>
<style  scoped>
.colon {
    display: inline-block;
    margin: 0 4px;
    color: red;
}

.block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: red;
    border-radius: 5px;
}
</style>