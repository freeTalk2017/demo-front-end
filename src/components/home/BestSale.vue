<template>
	<div class="div-wrap">
		<div class="header">
			<div class="span-wrap">
				<span>热卖</span>
			</div>
			<div class="icon-wrap">
				<i class="hot-icon"></i>
			</div>
		</div>
		
		<div class="list-wrap">
			<ul class="list">
				<li v-for="list in bestSaleList" class="list-items">
					<a :href="list.clickUrl">
						<img :src="list.image" class="inner-img">
					</a>
				</li>
			</ul>
		</div>	
	</div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      bestSaleList: [
        {
          'clickUrl': '/',
          'image': 'static/img/mech/b-554504f9/b_icon.jpg'
        },
        {
          'clickUrl': '/',
          'image': 'static/img/mech/a-9209bd76/a_icon.jpg'
        },
        {
          'clickUrl': '/',
          'image': 'static/img/mech/a-7fb5145a/a_icon.jpg'
        },
        {
          'clickUrl': '/',
          'image': 'static/img/mech/c-6520ca88/c_icon.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.header{
	width: 100%;
	height: 1.46667rem;
	font-size: .42667rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: relative;
	/*border-bottom: 1px solid #d9d9d9;*/
}

.span-wrap {
	width: 55%;
	text-align: right;
}

.icon-wrap {
	width: 45%;
	text-align: right;
}

.hot-icon {
	display: inline-block;
	width: 1.37333rem;
    height: 1.37333rem;
	background-image: url(../../assets/hot.png);
	background-repeat: no-repeat;
    background-size: 100% 100%;
}

.list {
	height: 6.24rem;
	/*margin: 0 .21333rem;*/
	position: relative;
}

.list-items {
	margin-right: .10667rem;
	margin-bottom: .10667rem;
	display: inline-block;
    position: relative;
    width: 4.42245rem;
    height: 2.95043rem;
    overflow: hidden;
    background-color: #f4f4f4;
    border: 1px solid #eaeaea;
}
</style>