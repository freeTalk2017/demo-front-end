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
      apiUrl: this.$api + '/homepage/serials/sliders'
    }
  },
  mounted: function () {
    this.getSlideList()
  },
  methods: {
    getSlideList: function () {
      this.$http.get(this.apiUrl)
        .then((response) => {
          this.slideList = response.data
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
}
</style>