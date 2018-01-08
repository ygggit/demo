<template lang="html">
        <!-- <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="val in imgList">
                    <img :src="val.imgLink" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
            div class="swiper-buttom-prev"></div>
            <div class="swiper-buttom-next"></div>
            <div class="swiper-scrollbar"></div>
        </div> -->
        <swiper :options="swiperOption" ref="mySwiper" class="carrousel">
            <swiper-slide v-for="img in imgList" :key="img.id">
                <a :href="img.url">
                    <img :src="img.imgLink">
                </a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
         </swiper>

</template>

<script type="text/ecmascript-6">
// 直接在当前页面使用
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css';
// 使用vue-awesome-swiper
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    name:'carrousel',
    data() {
        return{
            // 注意图片的默认路径是static  如果想把图片放在assets下面则使用require()
            imgList:[
                {
                    imgLink:require('../../assets/swiper/pic1.jpg'),
                    url:'https://www.baidu.com/',
                    id:1
                },
                {
                    imgLink:'./static/swiper/pic2.jpg',
                    url:'http://starcraft.com',
                    id:2
                },
                {
                    imgLink:'./static/swiper/pic3.jpg',
                    url:'http://warcraft.com',
                    id:3
                },
                {
                    imgLink:'./static/swiper/pic4.jpg',
                    url:'http://hearstone.com',
                    id:4
                }

            ],
            swiperOption:{
                loop:true,
                notNextTick:true,
                speed:300,
                autoplay : {
                   delay:3000
                },
                paginationClickable: true,
                pagination: {
                  el: '.swiper-pagination',
                  clickable :true,
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                // scrollbar: {
                //   el: '.swiper-scrollbar',
                // },
                observeParents:true,
            }
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    computed:{
        swiper() {
            return this.$refs.mySwiper.swiper
            console.info(this.$refs.mySwiper.swiper)

        }
    },
    mounted() {
            // var swiper = new Swiper('.swiper-container', {
            //     loop:true,
            //     pagination: '.swiper-pagination',
            //     paginationClickable: true,
            //     speed: 600,
            //     autoplay: true
            // });
            // console.log('this is current swiper instance object',this.swiper)
            // this.swiper.slideTo(3,1000,false)
            console.info(this.$refs)
    }

}
</script>

<style lang="less">
.swiper-slide img{
    width:100%;
}
</style>
