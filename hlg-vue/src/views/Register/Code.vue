<script>
import * as service from '../../api/index';
import { showSuccessToast, showFailToast } from 'vant';
export default {
    data() {
        return {
            sms: ''
        }
    },
    methods: {
        async getYzm() {
            var res = await service.dosendmsgcode({ tel: this.$store.state.user_phone });
            this.sms = res.data.data;
        },
        async onSubmit() {
            var res = await service.docheckcode({ tel: this.$store.state.user_phone, telcode: this.sms });
            if (res.data.code == 200) {
                this.$router.push('/register/pass');
            } else {
                showSuccessToast('验证码有误');
            }
        }
    }
}
</script>
<template>
    <van-form inset @submit="onSubmit">
        <van-field v-model="sms" center clearable placeholder="请输入短信验证码">
            <template #button>
                <van-button size="small" type="primary" round @click="getYzm">发送验证码</van-button>
            </template>
        </van-field>
        <van-button round block type="primary" native-type="submit" class="yzbtn">
            提交
        </van-button>
    </van-form>
</template>
<style  scoped>
.yzbtn {
    margin-top: .0938rem;
}
</style>