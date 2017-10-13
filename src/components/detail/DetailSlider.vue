<template>
	<div class="detail-silder-wrap">
		<noswipe-slider :slideList="slideList" :auto="0" :loop="false"></noswipe-slider>
	</div>
</template>

<script>
import noswipeSlider from '@/components/common/SliderTemplate'
export default {
  data: function () {
    return {
      slideList: [
        {
          'picURL': 'https://dummyimage.com/980x980/54bff0/ffffff'
        },
        {
          'picURL': 'https://dummyimage.com/980x980/ffa273/ffffff'
        },
        {
          'picURL': 'https://dummyimage.com/980x980/89d68e/ffffff'
        }
      ]
    }
  },
  components: {noswipeSlider}
}
</script>

<style scoped>
.detail-silder-wrap {
	width: 100vw;
	height: 100vw;
	background-color: #fff;
}
</style>