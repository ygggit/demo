<template lang="html">
  <div class="picker-wrapper">
     <div class="city-select" @click="TogglechangeCity">
         <span class="city">{{city[selectedIndex].name}}</span>
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
            cityListShow:false,
            selectedIndex:0
        }
    },
    methods:{
        TogglechangeCity(){
            this.cityListShow = !this.cityListShow
        },
        selectCity(index){
            this.selectedIndex = index;
            this.cityListShow = false;
        }
    },
    mounted(){
        // eventBus.$emit()    
    }
}
</script>

<style lang="less">
@import "picker.less";
</style>
