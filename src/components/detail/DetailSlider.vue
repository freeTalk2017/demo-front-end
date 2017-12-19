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
      slideList: [],
      apiUrl: this.$api + '/detail/display/' + this.$route.query.id
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
  components: {noswipeSlider}
}
</script>

<style scoped>
.detail-silder-wrap {
	width: 100vw;
	height: 100vw;
}
</style>