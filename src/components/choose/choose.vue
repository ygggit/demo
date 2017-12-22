<template lang="html">
  <div class="choose-wrapper">
      <ul>
          <li v-for="(val,index) in edition" :class="{'active':index===activeIndex}" @click="change(index)">{{val.style}}</li>
      </ul>
  </div>
</template>

<script>

export default {
    props:['edition'],
    data(){
        return{
            activeIndex:0
        }
    },
    methods:{
        change(index){
            this.activeIndex = index
        }
    }
}
</script>

<style lang="less">
@import "choose.less";
</style>
