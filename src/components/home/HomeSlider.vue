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
      slideList: [],
      apiUrl: '/homeslider'
    }
  },
  mounted: function () {
    this.getSliderList()
  },
  methods: {
    getSliderList: function () {
      this.$http.get(this.apiUrl)
        .then((response) => {
          // this.$set('slideList', JSON.parse(response.data))
          this.slideList = response.data
          console.log(this.slideList)
        })
        .catch((response) => {
          console.log(response)
        })
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