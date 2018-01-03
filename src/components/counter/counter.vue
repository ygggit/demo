<template lang="html">
  <div class="counter-wrapper">
      <span @click='reduce'>-</span>
      <input type="text" name="" v-model="count" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
      <span @click='add'>+</span>
  </div>
</template>

<script>
import Vue from "vue";
export default {
    data(){
        return{
            type:Number,
            count:1
        }
    },
    methods:{
        add(){
            let count;
            if(!this.count){
                this.count = 1;
                Vue.set(this,'count', 1)
            }else{
                this.count++;
            }
        },
        reduce(){
            if(!this.count || this.count == 1){
                this.count = 1;
                console.info(this.count)
                this.$set(this,'count', 1)
                // Vue.set(this,'count', 1)
            }else{
                this.count--;
            }
        }
    }
}
</script>

<style lang="less">
.counter-wrapper{
    font-size:0;
    span{
        display: inline-block;
        width:20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border:1px solid #e3e3e3;
        font-size:14px;
        cursor: pointer;
        &:hover{
            background:#4fc08d;
            color:#fff;
        }
    }
    input{
        width:30px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border:1px solid #e3e3e3;
        font-size: 14px;
        padding:0px;
        outline: none;
        border-left:none;
        border-right:none;
    }
}
</style>
