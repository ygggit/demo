<template>
<div id="app">
  <v-header></v-header>
  <div class="container">
      <router-view></router-view>
  </div>
  <v-footer></v-footer>
</div>
</template>

<script>
import VHeader from './components/header/header'
import VFooter from './components/footer/footer'
export default {
  name: 'app',
  components: {
    VHeader,
    VFooter
  },


}
</script>
<style lang="less">
@import './common/less/common.less';
</style>
