import Vue from 'vue'
import App from './App'
// 第一种写法是直接把组件放在main.js中写，例如：
// import Router from 'vue-router'
// import Home from './page/home/home'
// Vue.use(Router)
// const router = new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     }
//   ]
// })
// 但是我们经常不这么做，，而是把路由写在router.js(或者是router/index.js)
import router from './router/index.js'

// el使用
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// swiper
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
// 注意在使用swiper时要设置一个全局变量
global.Swiper =Swiper
Vue.config.productionTip = false
Vue.use(ElementUi)
// Vue.use(Swiper)

/* eslint-disable no-new */

// 挂载实例的3种写法
// 1
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

// 2
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})

// 3
// new Vue({
//   router,
//   render:h=>h(App)
// }).$mount("#app");


