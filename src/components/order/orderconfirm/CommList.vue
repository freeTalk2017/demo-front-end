<template>
	<div class="div-wrap font-size-general">
		<div v-for="item in list" class="item-line">
			<div class="item-wrap left-padding">
				<div class="img-wrap">
					<img :src="item.picURL" class="inner-img">
				</div>
				<div class="content-wrap">
					<p class="name-info">{{item.name}}</p>
					<p class="spec-info">{{item.specific}}</p>
					<p class="price-info">{{item.price}}</p>
				</div>
				<div class="quantity-wrap">
					<span >{{item.quantity}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      list: [
        {
          picURL: 'https://dummyimage.com/183x183/54bff0/ffffff',
          name: '商品名称八心八箭九心九箭十心十箭为所欲为',
          specific: '白色； 10克拉',
          price: '¥98.88',
          quantity: 'x1'
        },
        {
          picURL: 'https://dummyimage.com/183x183/ffa273/ffffff',
          name: '商品名称',
          specific: '亚克力； 30W',
          price: '¥28888',
          quantity: 'x3'
        }
      ]
    }
  }
}
</script>

<style scoped>
.item-wrap {
	text-align: left;
	padding: .26667rem .4rem;
}

p {
	margin: 0;
}

.item-line:after {
	content: '';
    position: absolute;
    background-color: #d9d9d9;
    left: 0;
    width: 100%;
    height: 1px;
}

.name-info {
    margin-bottom: .08rem;
}

.spec-info {
	font-size: .32rem;
	color: #999;
	margin-top: 0;
}

.price-info {
	margin-top: 0.48rem;
  	color: #c12026;
  	font-weight: 700;
}

.content-wrap {
	overflow: hidden;
}

.img-wrap {
	width: 1.86667rem;
	height: 1.86667rem;
	margin-right: .26667rem;
	position: relative;
	float: left;
}

.quantity-wrap {
	float: right;
}

.quantity-info {
	position: absolute;
	right: 0.21333rem;
}
</style>