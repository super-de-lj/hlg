<script>
import * as service from '../../api/index';
import { showSuccessToast, showFailToast } from 'vant';
export default {
    data() {
        return {
            password: '',
            passwordRegExp: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/
        }
    },
    methods: {
        async onSubmit(val) {
            var res = await service.dofinishregister({ tel: this.$store.state.user_phone, password: val.password });
            console.log(res);
            if (res.data.code == 200) this.$router.push('/login');
        }
    }
}
</script>
<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="password" type="password" name="password" placeholder="请设置至少6位登录密码"
                :rules="[{ pattern: passwordRegExp, required: true, message: '密码强度校验,最少6位,包括至少1个大写字母,1个小写字母,1个数字' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>
<style  scoped></style>