<template>
	<div class="fixed-foot o-foot">
		<div class="left-padding font-size-general">
			<span>共</span>
			<span class="price">{{$store.state.orderQuantity}}</span>
			<span>件,</span>
			<span>应付:</span>
			<span class="price">
				¥{{$store.state.orderTotalPrice}}
			</span>
		</div>
		<div class="trad-wrap buy-wrap" @click="callPay()">
			去付款
		</div>
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      orderId: '',
      apiUrl: this.$api + '/orders/orderConfirmation/'
    }
  },
  methods: {
    generateOrder: function () {
      this.$http.post(this.apiUrl)
        .then((response) => {
          this.orderId = response.data
          this.callPay()
        })
        .catch((response) => {
          console.log(response)
        })
    },
    callPay: function () {
      top.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa1378048216955b0&redirect_uri=http%3A%2F%2Fwww.makeiteasy.xin%2Fapis%2FGoal%2Ftrade%2Fcheck&response_type=code&scope=snsapi_base&state=' + this.orderId + '#wechat_redirect'
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
