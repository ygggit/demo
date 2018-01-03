<template lang="html">
  <div class="detail">
      <div class="">
          <h1 class="title">数据统计</h1>
          <p class="info">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
          <div class="data-wrapper">
              <div class="data-content">
                  <div class="content-title">
                      <p>产品类型：</p>
                  </div>
                  <div class="">
                      <!-- 组件传值 -->
                      <choose :edition="dataList"></choose>
                  </div>
              </div>
              <div class="data-content">
                  <div class="content-title">
                      <p>适用地区：</p>
                  </div>
                  <div class="">
                     <picker :city="cityList"></picker>
                  </div>
              </div>
              <div class="data-content">
                  <div class="content-title">
                      <p>有效时间：</p>
                  </div>
                  <div class="">
                    <p>半年</p>
                  </div>
              </div>
              <div class="data-content">
                  <div class="content-title">
                      <p>总价：</p>
                  </div>
                  <div class="">
                        <p>676元</p>
                  </div>
              </div>
              <div class="buy">
                  <p>立即购买</p>
              </div>
          </div>
      </div>
      <div class="">
          <h1 class="title">产品说明</h1>
          <p class="info">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
          <div class="product-list">
              <ul>
                  <li>安全安保</li>
                  <li>办公文教</li>
                  <li>彩票</li>
                  <li>车辆物流</li>
                  <li>成人用品</li>
                  <li>出版传媒</li>
                  <li>电脑硬件</li>
                  <li>电子电工</li>
                  <li>房地产建筑装修</li>
                  <li>分类平台</li>
                  <li>服装鞋帽</li>
                  <li>箱包饰品</li>
                  <li>化工原料制品</li>
                  <li>机械设备</li>
                  <li>家庭日用品</li>
                  <li>家用电器</li>
                  <li>教育培训</li>
                  <li>节能环保</li>
                  <li>金融服务</li>
                  <li>礼品</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
                  <li>旅游住宿</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import choose from "../../../components/choose/choose.vue"
import picker from "../../../components/picker/picker.vue"
export default {
    data() {
        return {
            dataList:[
                {'style':'红色版'},
                {'style':'绿色版'},
                {'style':'紫色版'}
            ],
            cityList:[
                {'name':'北京'},
                {'name':'上海'},
                {'name':'广州'},
                {'name':'天津'},
                {'name':'江苏'},
                {'name':'浙江'},
                {'name':'安徽'},
            ]
        }
    },
    components:{
        choose,
        picker
    }
}
</script>

<style lang="less">
</style>
