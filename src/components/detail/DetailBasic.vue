<template>
	<div class="div-wrap basic-content">
		<div class="name-wrap">{{name}}</div>
		<div class="desc-wrap">{{desc}}</div>
		<div class="price-group">
			<div class="price-wrap">{{price}}</div>
			<div v-if="originPrice !== ''" class="origin-wrap">{{originPrice}}</div>
		</div>		
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      name: '',
      desc: '',
      price: '',
      originPrice: '',
      apiUrl: this.$api + '/detail/commodity/' + this.$route.query.id
    }
  },
  mounted: function () {
    this.getBasicInfo()
  },
  methods: {
    getBasicInfo: function () {
      this.$http.get(this.apiUrl)
        .then((response) => {
          this.name = response.data.name
          this.desc = response.data.desc
          this.price = '¥' + response.data.price
          if (response.data.originPrice) {
            this.originPrice = '¥' + response.data.originPrice
          }
        })
        .catch((response) => {
          console.log(response)
        })
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