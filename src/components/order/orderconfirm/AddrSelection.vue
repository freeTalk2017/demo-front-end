<template>
	<div class="div-wrap addr-items font-size-general">
		<div class="padding-row-general">
			<div class="left">
				<p class="name-info text-no-overflow">{{addr.receiver}}</p>
				<i class="bar-icon bar-addr"></i>
			</div>
			<div class="middle">
				<p class="phone-info">{{addr.telephone}}</p>
				<span class="addr-info">{{addr.province}}{{addr.city}}{{addr.district}}{{addr.street}}</span>
			</div>
			<i class="bar-icon bar-arrow"></i>
		</div>
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      addr: {
        receiver: '用户名11231',
        telephone: '158****1158',
        province: '四川省',
        city: '成都市',
        district: '高新区',
        street: '天府二街998号'
      }
    }
  },
  mounted: function () {
    var app = document.getElementById('app')
    app.style.paddingTop = 0
    this.$store.commit('SET_ORDER_ADDRESS', this.addr)
  },
  destroyed: function () {
    var app = document.getElementById('app')
    app.style.paddingTop = '1.26658rem'
  },
  methods: {
    getDefaultInfo: function () {
      this.$http.get(this.apiUrl)
        .then((response) => {
          this.name = response.data.name
          this.phone = response.data.phone
          this.addr = response.data.addr
        })
        .catch((response) => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>
.addr-items {
	text-align: left;
	position: relative;
}

.left {
	position: relative;
  float: left;
  width: 1.6rem;
  margin: 0;
}

.middle {
	overflow: hidden;
}

.name-info {
	margin-top: -.06333rem;
  margin-bottom: .06667rem;
}

.phone-info {
	margin-top: 0;
	margin-bottom: .08rem;
}

.addr-info {
	font-size: .32rem;
	color: #515151;
}

.bar-addr {
	position: absolute;
	margin: auto;
	left: 0;
	right: 0;
	background-image: url(../../../assets/order/addr.png);
}
</style>