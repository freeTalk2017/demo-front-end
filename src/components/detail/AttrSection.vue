<template>
	<div v-if="attrList.length !== 0">
		<div class="div-wrap attr-wrap">
			<div class="attr-head">
				商品参数
			</div>
			<div v-for="attr in attrList" class="attr-list">
				<div class="attr-title">
					{{attr.attrTitle}}
				</div>
				<div class="attr-info">
					{{attr.attrInfo}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      attrList: [],
      apiUrl: this.$api + '/detail/param/' + this.$route.query.id
    }
  },
  mounted: function () {
    this.getAttrList()
  },
  methods: {
    getAttrList: function () {
      this.$http.get(this.apiUrl)
        .then((response) => {
          this.attrList = response.data
        })
        .catch((response) => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>
.attr-wrap {
	padding: .4rem;
	text-align: left;
}

.attr-head {
	font-size: .37333rem;
	padding: .23333rem 0 .32rem;
}

.attr-list {
	display: flex;
	border-top: .0233rem dashed #e2e2e2;
	font-size: .32rem;
	padding: .13333rem .4rem.13333rem 0;
}

.attr-title {
	color: #999;
	width: 1.97333rem;
	display: table;
}

.attr-info {
	margin-left: .24rem;
}
</style>