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
		<a id="topay" class="trad-wrap buy-wrap" @click="generateOrder()">
			去付款
		</a>
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      orderId: '',
      apiUrl: this.$api + '/orders/orderConfirmation/',
      mockData: {
        'userId': '123',
        'deliveryWay': '2',
        'orderCmdList': [
          {
            'cmdCount': '10',
            'cmdId': '0411258d-029e-4634-ac7f-6b499ba05387',
            'cmdSkuId': '123',
            'skuPrice': '110'
          }
        ],
        'orderAddress': {
          'receiver': 'lee',
          'telephone': '13438928131',
          'province': 'sichuan',
          'city': 'chengdu',
          'street': 'yuanJingRoad',
          'zipCode': '610000'
        }
      }
    }
  },
  methods: {
    generateOrder: function () {
      this.disablePay()
      this.$http.post(
        this.apiUrl,
        JSON.stringify(this.mockData)
      )
      .then((response) => {
        this.orderId = response.data.orderId
        this.callPay()
      })
      .catch((response) => {
        console.log('fail:' + response)
        this.enablePay()
      })
    },
    callPay: function () {
      top.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa1378048216955b0&redirect_uri=http%3A%2F%2Fwww.makeiteasy.xin%2Fapis%2FGoal%2Ftrade%2Fcheck&response_type=code&scope=snsapi_base&state=' + this.orderId + '#wechat_redirect'
    },
    disablePay: function () {
      var toPay = document.getElementById('topay')
      toPay.className += ' disabled'
    },
    enablePay: function () {
      var toPay = document.getElementById('topay')
      toPay.className = toPay.className.replace((new RegExp('(^|\\s)' + 'disabled' + '(\\s|$)')), '')
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
