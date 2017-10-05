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
          'image': 'https://dummyimage.com/980x980/54bff0/ffffff'
        },
        {
          'image': 'https://dummyimage.com/980x980/ffa273/ffffff'
        },
        {
          'image': 'https://dummyimage.com/980x980/89d68e/ffffff'
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