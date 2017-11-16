<template>
	<div class="fixed-foot o-foot">
		<div class="left-padding font-size-general">
			<span>共</span>
			<span class="price">{{quantity}}</span>
			<span>件,</span>
			<span>应付:</span>
			<span class="price">
				<span>¥{{amount}}</span>
			</span>
		</div>
		<router-link class="trad-wrap buy-wrap" to="/">
			去付款
		</router-link>
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      quantity: 4,
      amount: 998
    }
  }
}
</script>

<style scoped>
.o-foot {
	justify-content: space-between;
	height: 1.30667rem;
}

.trad-wrap {
	font-size: .37333rem;
	color: #ffffff;
	text-decoration: none;
	height: 100%;
	line-height: 1.30667rem;
	overflow: hidden;
	text-align: center;
}

.buy-wrap {
	background-color: #c12026;
	width: 2.73rem;
}
</style>