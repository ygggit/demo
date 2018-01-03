<template lang="html">
  <div class="detail">
      <div class="">
          <h1 class="title">流量分析</h1>
          <p class="info">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
          <div class="data-wrapper">
              <div class="data-content">
                  <div class="content-title">
                      <p>购买数量：</p>
                  </div>
                  <div class="">
                      <!-- 组件传值 -->
                      <counter></counter>
                  </div>
              </div>
              <div class="data-content">
                  <div class="content-title">
                      <p>产品类型：</p>
                  </div>
                  <div class="">
                     <picker :city="style"></picker>
                  </div>
              </div>
              <div class="data-content">
                  <div class="content-title">
                      <p>有效时间：</p>
                  </div>
                  <div class="">
                    <choose :edition="time"></choose>
                  </div>
              </div>
              <div class="data-content">
                  <div class="content-title">
                      <p>产品版本：</p>
                  </div>
                  <div class="">
                    <choose :edition="product"></choose>
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
          <p class="info">2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒…… 以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。 大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。 作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。 关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
          <div class="user">
              <h2>用户行为指标</h2>
              <ul>
                  <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
                  <li>用户在网站的停留时间；</li>
                  <li>用户来源网站（也叫“引导网站”）；</li>
                  <li>用户所使用的搜索引擎及其关键词；</li>
                  <li>在不同时段的用户访问量情况等。</li>
              </ul>
          </div>
          <div class="web-style">
              <h2>浏览网站方式</h2>
              <ul>
                  <li>用户上网设备类型</li>
                  <li>用户浏览器的名称和版本</li>
                  <li>访问者电脑分辨率显示模式</li>
                  <li>用户所使用的操作系统名称和版本</li>
                  <li>用户所在地理区域分布状况等</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import counter from "../../../components/counter/counter.vue"
import choose from "../../../components/choose/choose.vue"
import picker from "../../../components/picker/picker.vue"
export default {
    data(){
        return{
            style:[
                {'name':'入门版'},
                {'name':'中级版'},
                {'name':'高级版'}
            ],
            time:[
                {'style':'半年'},
                {'style':'一年'},
                {'style':'两年'}
            ],
            product:[
                {'style':'客户版'},
                {'style':'代理商版'},
                {'style':'专家版'}
            ]
        }
    },
    components:{
        counter,
        picker,
        choose
    }
}
</script>

<style lang="css">
</style>
