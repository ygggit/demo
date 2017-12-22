<template lang="html">
  <div class="detail">
      <div class="">
          <h1 class="title">数据统计</h1>
          <p class="info">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
          <div class="data-wrapper">
              <div class="data-content">
                  <div class="">
                      <p>产品类型：</p>
                  </div>
                  <div class="">
                      <!-- 组件传值 -->
                      <choose :edition="dataList"></choose>
                  </div>
              </div>
              <div class="data-content">
                  <div class="">
                      <p>适用地区：</p>
                  </div>
                  <div class="">

                  </div>
              </div>
              <div class="data-content">
                  <div class="">
                      <p>有效时间：</p>
                  </div>
                  <div class="">

                  </div>
              </div>
              <div class="data-content">
                  <div class="">
                      <p>总价：</p>
                  </div>
                  <div class="">

                  </div>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
import choose from "../../../components/choose/choose.vue"
export default {
    data() {
        return {
            dataList:[
                {'style':'红色版'},
                {'style':'绿色版'},
                {'style':'紫色版'}
            ]
        }
    },
    components:{
        choose
    }
}
</script>

<style lang="less">
</style>
