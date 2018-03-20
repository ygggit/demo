<template>
<div id="app">
  <v-header></v-header>
  <div class="container">
      <router-view></router-view>
      <div class="test">
          <h3>Vuex购物车demo</h3>
          <product></product>
          <cart></cart>
          <info></info>
      </div>

  </div>
  <v-footer></v-footer>
  <!-- <count-demo></count-demo> -->
</div>
</template>

<script>
import VHeader from './components/header/header'
import VFooter from './components/footer/footer'
import product from './components/product'
import cart from './components/cart'
import info from './components/info'
export default {
  name: 'app',
  components: {
    VHeader,
    VFooter,
    product,
    cart,
    info
  },


}
</script>
<style lang="less">
@import './common/common.less';
.test{
    text-align: center;
}
.test >h3{
    padding:10px 0;
}
</style>
