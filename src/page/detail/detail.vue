<template lang="html">
  <div class="detail-wrapper">
      <div class="detail-left">
          <div class="product-icon">
              	<img :src="productIcon">
          </div>
          <div class="product-title">
              <ul>
                  <li v-for='name in productName'>
                      <router-link :to="{ path:name.path }">{{name.title}}</router-link>
                  </li>
              </ul>
          </div>
      </div>
      <div class="detail-right">
          <div class="detail-right-content">
            <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    // props:['msg'],
    data() {
        return{
            product:{
                    '/detail/detail1':'../static/home/1.png',
                    '/detail/detail2':'../static/home/2.png',
                    '/detail/detail3':'../static/home/3.png',
                    '/detail/detail4':'../static/home/4.png',
            },
            productName:[
                {
                    title:'数据统计',
                    path:'detail1'
                },
                {
                    title:'数据预测',
                    path:'detail2'
                },
                {
                    title:'流量分析',
                    path:'detail3'
                },
                {
                    title:'广告发布',
                    path:'detail4'
                }
            ]

        }
    },
    computed:{
        productIcon(){
            console.info(11)
            console.info(this.product)
            console.info(this.$route.path)
            console.info(this.product[this.$route.path])
            return this.product[this.$route.path]
        }
    }

}
</script>

<style lang="less">
@import 'detail.less';
</style>
