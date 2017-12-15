<template lang="html">
    <div class="scroll-content">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- <div class="swiper-slide">
                    <img src="../../assets/swiper/pic1.jpg" alt="">
                </div> -->
                <div class="swiper-slide" v-for="val in urlList">
                    <img :src="val.urlLink" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->

            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>
</template>

<script>
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css';
export default {
    data() {
        return{
            urlList:[
                {urlLink:'./static/swiper/pic1.jpg'},
                {urlLink:'./static/swiper/pic2.jpg'},
                {urlLink:'./static/swiper/pic3.jpg'},
                {urlLink:'./static/swiper/pic4.jpg'}

            ]
        }
    },
    mounted() {
            console.log('mounted', this)
            var swiper = new Swiper('.swiper-container', {
                loop:true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: true
            });
        }


}
</script>

<style lang="css">
.swiper-slide img{
    width:100%;
}
</style>
