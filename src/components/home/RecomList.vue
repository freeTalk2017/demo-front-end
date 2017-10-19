<template>
	<div class="div-wrap">
		<div class="list-wrap">
			<ul class="list">
				<li v-for="list in recomList" class="list-items">
					<router-link :to="{path:'/detail', query: { id: list.cmdId }}" class="item">
						<div class="item-desc">
							<div class="img-wrap">
								<img v-lazy="list.picURL" class="inner-img">
							</div>
							<div class="desc">
								{{list.desc}}
							</div>
						</div>
						<div class="itemInfo">
							<div class="name">
								{{list.name}}
							</div>
							<div class="price">
								¥ {{list.price}}
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      recomList: [],
      apiUrl: this.$api + '/homepage/serials/recommend/'
    }
  },
  mounted: function () {
    this.getRecomList()
  },
  methods: {
    getRecomList: function () {
      this.$http.get(this.apiUrl)
        .then((response) => {
          this.recomList = response.data
        })
        .catch((response) => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>
.list-wrap {
	width: 100%;
	padding-top: 1.10667rem;
}

.list-items {
	width: 4.42245rem;
	display: inline-block;
	margin-right: .10667rem;
  margin-bottom: .10667rem;
}

.item-desc {
	background: #F1ECE2;
	width: 4.42235rem;
}

.img-wrap {
	width: 100%;
  height: 2.95043rem;
}

.item {
	text-decoration:none;
}

.desc {
	font-size: .32rem;
	color: #9F8A60;
	text-align: left;
	line-height: .48667rem;
	padding-left: .13333rem;
}

.name {
	font-size: .37333rem;
	color: #333;
	text-align: left;
	padding-left: .13333rem;
}

.price {
	font-size: .42667rem;
	color: #b4282d;
	text-align: left;
	padding-left: .13333rem;
}
</style>