<template>
	<div class="div-wrap swiper-container">
    <div class="swiper-wrapper">
  		<div class="swiper-slide" v-for="list in slideList" :style="{ backgroundImage: 'url(' + list.image + ')' }"></div>
    </div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data: function () {
    return {
      slideList: [
        {
          'clickUrl': '/',
          'image': 'https://dummyimage.com/980x522/54bff0/ffffff'
        },
        {
          'clickUrl': '/',
          'image': 'https://dummyimage.com/980x522/ffa273/ffffff'
        },
        {
          'clickUrl': '/',
          'image': 'https://dummyimage.com/980x522/89d68e/ffffff'
        },
        {
          'clickUrl': '/',
          'image': 'static/img/home/slide/slider01.jpg'
        },
        {
          'clickUrl': '/',
          'image': 'static/img/home/slide/slider02.jpg'
        }
      ]
    }
  },
  mounted () {
    console.log('mounted', this)
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true,
      speed: 600,
      autoplay: 5000,
      autoplayDisableOnInteraction: false,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      onTouchEnd: function () {
        swiper.startAutoplay()
      }
    })
  }
}

</script>

<style scoped>
.swiper-container {
	height: 5.33333rem;
	width: 100%;
	background-color: #fff;
  position: relative;
  overflow: hidden;
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
}

.img-wrap {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.swiper-pagination-bullet {
  display: inline-block;
  height: .05333rem;
  width: .53333rem;
  background-color: #b2b2b2;
}

.slide-div {
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  font-size: 0;
}

.slide-cursors {
  position: absolute;
  bottom: .4rem;
  width: 100%;
  margin: 0 auto;
}

.cursor {
  display: inline-block;
  height: .05333rem;
  width: .53333rem;
  margin: 0 10px;
  background-color: #b2b2b2;
  cursor: pointer;
}

.active {
    background-color: #ffffff;
}
</style>