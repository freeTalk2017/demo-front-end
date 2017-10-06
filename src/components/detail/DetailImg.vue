<template v-if="imgList">
	<div class="div-wrap">
		<div class="img-head">商品图片</div>
		<div v-for="item in imgList" class="img-wrap">
			<img v-lazy="item.image" class="inner-img">
		</div>
	</div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      imgList: [
        {
          image: 'https://dummyimage.com/980x980/3f51b5/ffffff'
        },
        {
          image: 'https://dummyimage.com/980x490/9c27b0/ffffff'
        },
        {
          image: 'https://dummyimage.com/980x245/f44336/ffffff'
        },
        {
          image: 'https://dummyimage.com/490x490/cddc39/ffffff'
        },
        {
          image: 'https://dummyimage.com/200x100/607d8b/ffffff'
        },
        {
          image: 'https://dummyimage.com/1000x2000/00bcd4/ffffff'
        }
      ]
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