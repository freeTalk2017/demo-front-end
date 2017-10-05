<template>
	<div class="div-wrap basic-content">
		<div class="name-wrap">{{name}}</div>
		<div class="desc-wrap">{{desc}}</div>
		<div class="price-group">
			<div class="price-wrap">¥{{price}}</div>
			<div v-if="discount" class="origin-wrap">¥{{originPrice}}</div>
		</div>		
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      name: '名字名字我是名字',
      desc: '描述描述我是描述',
      price: '998.00',
      discount: true,
      originPrice: '233.33'
    }
  }
}
</script>

<style scoped>
.basic-content {
	padding: .53333rem 0 .53333rem .4rem;
	text-align: left;
}

.name-wrap {
	font-size: .48rem;
  margin-bottom: .06667rem;
}

.desc-wrap {
	font-size: .37333rem;
  line-height: 1;
  color: #7f7f7f;
  margin-bottom: .06667rem;
}

.price-group {
	display: flex;
}

.price-wrap {
	font-size: .64rem;
  color: #c12026;
  font-weight: 700;
}

.origin-wrap {
	position: relative;
  margin-left: .21333rem;
	font-size: .37333rem;
  color: #999;
  text-decoration: line-through;
  line-height: 0.96333rem;
}
</style>