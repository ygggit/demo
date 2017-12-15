<template lang="html">
    <div class="dialog" v-if="isShow">
        <div class="dialog-mask" @click="hideDialog"></div>
        <div class="dialog-wrapper">
            <div class="dialog-content">
                <a href="#" class="btn-close" @click="hideDialog">X</a>
                <slot>具名插槽</slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        'isShow':{
            type: Boolean,
            default:false
        }
    },
    data(){
        return{

        }
    },
    methods:{
        hideDialog(){
            // 子组件向父组件传值
            this.$emit('closeDialog')
        }
    }
}
</script>

<style lang="less">
    @import 'dialog.less';
</style>
