<template lang="html">
    <div class="app-head">
        <div class="app-header-inner">
            <!-- <router-link :to="{path:'/'}">
                <img src="../../assets/logo.png" alt="">
            </router-link> -->
            <router-link :to="{ name: '', params: {} }">
                <img src="../../assets/logo.png" alt="">
            </router-link>
            <div class="head-nav">
                <ul>
                    <!-- <li></li>
                    <li>退出</li> -->
                    <li @click="showDialog('loginShow')">登录</li>
                    <li class="deliver">|</li>
                    <li @click="showDialog('registerShow')">注册</li>
                    <li class="deliver">|</li>
                    <li @click="showDialog('aboutShow')">关于</li>
                </ul>
            </div>
        </div>
        <!-- 登录 -->
        <!-- 注意一开始在此时犯错的原因，，没有正确理解v-bind  此时的:isShow是用于父子组件之间的传值 -->
        <!-- 细节注意，由于 @closeDialog="hideDialog('loginShow')" 中loginShow少""一直出错-->
        <header-dialog :isShow="loginShow" @closeDialog="hideDialog('loginShow')">
            <login-modal></login-modal>
        </header-dialog>
        <!-- 注册  -->
        <header-dialog :isShow="registerShow" @closeDialog="hideDialog('registerShow')">
            <register-modal></register-modal>
        </header-dialog>
        <!-- 关于 -->
        <header-dialog :isShow="aboutShow" @closeDialog="hideDialog('aboutShow')">
            <p class="detail-text">此页面仅作为vue项目学习的demo,可能会出现很多问题,希望在以后的学习中不断的改进。
                此页面仅作为vue项目学习的demo,可能会出现很多问题,希望在以后的学习中不断的改进。
                此页面仅作为vue项目学习的demo,可能会出现很多问题,希望在以后的学习中不断的改进。</p>
        </header-dialog>
    </div>
</template>

<script>
// 引入header的弹层
import HeaderDialog from '../dialog/dialog.vue';
// login弹层
import loginModal from '../loginModal/loginModal.vue';
// 注册
import registerModal from '../registerModal/registerModal.vue';
export default {
    data() {
        return {
            loginShow:false,
            registerShow:false,
            aboutShow:false
        }
    },
    methods:{
        // 显示弹层
        showDialog(key) {
            console.info(key)
            this[key] = true;
        },
        // 隐藏弹层
        hideDialog(key){
            console.info(123)
            console.info(key)
            this[key] = false;
        }
    },
    components:{
        // 组件
        HeaderDialog,
        loginModal,
        registerModal
    }
}
</script>

<style lang="less">

</style>
