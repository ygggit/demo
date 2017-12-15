<template lang="html">
    <div class="container-wrapper">
        <div class="container-left">
            <ul>
                <li v-for="(slidebarList,index) in slidebar">
                    <h3>{{slidebarList.firstTitle}}</h3>
                    <ul>
                        <li v-for="list in slidebarList.secondList">
                            <p>{{list.secondTitle}}</p>
                            <ul>
                                <li v-for="detail in list.secondDetail">
                                    <a href="#">{{detail}}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="container-right">
            <div class="right-content">
                <!-- el测试 -->
                <!-- <el-row>
                  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple-light">
                      <el-button type="primary" icon="el-icon-search">搜索</el-button>
                  </div></el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
                  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
                  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
                </el-row> -->
                <my-swiper></my-swiper>
            </div>

        </div>
    </div>
</template>

<script>
// 引入轮播组件
import MySwiper from '../../components/swiper/swiper'
export default {
    data(){
        return{
            slidebar:[
                {
                    firstTitle:'全部产品',
                    secondList:[
                        {
                            secondTitle:'PC产品',
                            secondDetail:['数据统计','数据推测','流量分析','广告发布']
                        },
                        {
                            secondTitle:'手机应用类',
                            secondDetail:['91助手','产品助手','智能地图','团队语言']
                        }
                    ]
                },
                {
                    firstTitle:'最新消息',
                    secondList:[
                        {
                            secondTitle:'头条消息',
                            secondDetail:['新闻标题1','新闻标题2','新闻标题3','新闻标题4']
                        }
                    ]
                }
            ]
        }
    },
    components:{
        MySwiper
    }
}
</script>

<style lang="less">
@import 'home.less';
  //   .grid-content{
  //       border-radius: 4px;
  //       min-height: 36px;
  //       height:50px;
  //   }
  // .el-col {
  //   border-radius: 4px;
  // }
  // .bg-purple-dark {
  //   background: #99a9bf;
  // }
  // .bg-purple {
  //   background: #d3dce6;
  // }
  // .bg-purple-light {
  //   background: #e5e9f2;
  // }
</style>
