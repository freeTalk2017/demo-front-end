<template v-if="attrList">
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
</template>

<script>
module.exports = {
  data: function () {
    return {
      attrList: [
        {
          attrTitle: 'title1',
          attrInfo: '详细参数1'
        },
        {
          attrTitle: 'title2title2title2title2',
          attrInfo: '详细参数2'
        },
        {
          attrTitle: 'title3',
          attrInfo: '详细参数3'
        },
        {
          attrTitle: 'title4',
          attrInfo: '详细参数4详细参数详细参数详细4参数详4细参数4详细'
        }
      ]
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
	border-top: dashed #e2e2e2;
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