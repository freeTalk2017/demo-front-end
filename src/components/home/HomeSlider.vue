<template>
	<div class="div-wrap home-slider-wrap">
		<pagination-slider :slideList="slideList" :auto="5000" :loop="true" type="redi"></pagination-slider>
	</div>
</template>

<script>
import paginationSlider from '@/components/common/SliderTemplate'
export default {
  data: function () {
    return {
      slideList: [
        {
          'clickUrl': '/',
          'image': 'static/img/serial/serial_a_slider.jpg'
        },
        {
          'clickUrl': '/',
          'image': 'static/img/serial/serial_b_slider.jpg'
        },
        {
          'clickUrl': '/',
          'image': 'static/img/serial/serial_c_slider.jpg'
        }
      ]
    }
  },
  components: {paginationSlider}
}
</script>

<style scoped>
.home-slider-wrap {
	height: 5.33333rem;
	width: 100%;
	background-color: #fff;
}
</style>