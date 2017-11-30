<template>
	<div class="pay-wrap">
		<input class="pay-wrap" type="submit" value="点击支付" @click="callpaynew">
    <input class="pay-wrap" type="submit" value="点击支付2" @click="callwxpay">
	</div>
</template>
<script>
export default {
  data: function () {
    return {
      slideList: [],
      apiUrl: this.$api + '/trade/code'
    }
  },
  mounted: function () {

  },
  methods: {
    callpay: function () {
      this.$http.get('/wx_auth/connect/oauth2/authorize?appid=wxa1378048216955b0&redirect_uri=http://www.makeiteasy.xin/trade/wxpay&response_type=code&scope=snsapi_base#wechat_redirect').then((response) => {
        console.log(response)
        /* eslint-disable*/
        WeixinJSBridge.invoke(
        /* eslint-enable */
          'getBrandWCPayRequest', {
            'appId': response.data.appId,
            'timeStamp': response.data.timeStamp,
            'nonceStr': response.data.nonceStr,
            'package': response.data.package_pre,
            'signType': response.data.signType,
            'paySign': response.data.paySign
          },
       function (res) {
         if (res.err_msg === 'get_brand_wcpay_request:ok') {
           console.log('right')
         }
       }
        )
      })
    },
    callpaynew: function{
      top.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc7f83b1938b89316&redirect_uri=http://www.makeiteasy.xin/apis/Goal/trade/check&response_type=code&scope=snsapi_base#wechat_redirect'
    },
    callwxpay: function () {
      this.$http.get(this.apiUrl).then((response) => {
        console.log(response)
        /* eslint-disable*/
        WeixinJSBridge.invoke(
        /* eslint-enable */
          'getBrandWCPayRequest', {
            'appId': response.data.appId,
            'timeStamp': response.data.timeStamp,
            'nonceStr': response.data.nonceStr,
            'package': response.data.package_pre,
            'signType': response.data.signType,
            'paySign': response.data.paySign
          },
       function (res) {
         if (res.err_msg === 'get_brand_wcpay_request:ok') {
           console.log('right')
         }
       }
        )
      })
    }
  }
}
</script>
<style scoped>
.pay-wrap {
  font-size: 80px;
  line-height: 1;
  color: #7f7f7f;
  text-align: left;
  margin: 0 10px 10px 10px;
}
</style>