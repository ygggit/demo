<template lang="html">
  <div class="picker-wrapper">
     <div class="city-select" @click="TogglechangeCity">
         <span class="city">{{}}</span>
         <span class="arrow"></span>
     </div>
     <div class="city-list" v-show="cityListShow">
         <ul>
             <li v-for="(val,index) in city" @click="selectCity(index)">{{val.name}}</li>
         </ul>
     </div>
  </div>
</template>

<script>
export default {
    props:['city'],
    data(){
        return{
            cityListShow:false
        }
    },
    methods:{
        TogglechangeCity(){
            this.cityListShow = !this.cityListShow
        },
        selectCity(index){

        }
    }
}
</script>

<style lang="less">
@import "picker.less";
</style>
