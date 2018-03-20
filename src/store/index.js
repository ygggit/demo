// 组装模块并导出store的地方
import Vue from 'vue'
import VueX from 'vuex'
// 购物车
import cartList from './modules/cart.js'

Vue.use( VueX );

export default new VueX.Store({
	modules: {
		cartList
	},
	strict: process.env.NODE_ENV !== 'production', // 严格模式
});