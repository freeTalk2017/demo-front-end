<template v-if="imgList">
	<div class="div-wrap">
		<div class="img-head">商品图片</div>
		<div v-for="item in imgList" class="img-wrap">
			<img v-lazy="item.picURL" class="inner-img">
		</div>
	</div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      imgList: '',
      apiUrl: this.$api + '/detail/description/' + this.$route.query.id
    }
  },
  mounted: function () {
    this.getImgList()
  },
  methods: {
    getImgList: function () {
      this.$http.get(this.apiUrl)
        .then((response) => {
          this.imgList = response.data
        })
        .catch((response) => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>
.img-head {
	font-size: .37333rem;
	padding: .23333rem 0 .32rem;
}

.img-wrap {
	min-height: 1.63265rem;
}
</style>