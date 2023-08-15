<script>
import * as service from '../../api/index';
import { showSuccessToast, showFailToast } from 'vant';
export default {
    data() {
        return {
            phone: '',
        }
    },
    methods: {
        async onclick() {
            let regexp = /^1\d{10}$/;
            if (regexp.test(this.phone)) {
                var res = await service.docheckphone({ tel: this.phone });
                if (res.data.code == 200) {
                    this.$store.commit('setPhone', this.phone);
                    this.$router.push('/register/code');
                } else if (res.data.code == 10005) {
                    showSuccessToast(res.data.message);
                }
            } else {
                showSuccessToast('手机号格式有误');
            }
        }
    },
}
</script>
<template>
    <van-form>
        <van-field v-model="phone" placeholder="请输入手机号" />
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit" @click="onclick">
                提交
            </van-button>
        </div>
    </van-form>
</template>
<style  scoped></style>