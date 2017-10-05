<template>
	<div class="g-foot">
		<router-link class="bar" to="/">
			<i class="bar-icon bar-serv"></i>
			<span class="txt">客服</span>
		</router-link>
		<router-link class="bar" to="/">
			<i class="bar-icon bar-fav"></i>
			<span class="txt">收藏</span>
		</router-link>
		<router-link class="trad-wrap to-cart-wrap" to="/">
			加入购物车
		</router-link>
		<router-link class="trad-wrap buy-wrap" to="/">
			立即购买
		</router-link>
	</div>
</template>

<style scoped>
.g-foot {
	position: relative;
	justify-content: center;
    align-items: center;
    display: -webkit-flex;
    display: flex;
	position: fixed;
	left: 0;
    bottom: 0;
    width: 100%;
    height: 1.30667rem;
    background-color: #fafafa;
    border-top: 1px solid #d9d9d9;
    align-content: flex-start;
}

.bar {
	flex: 0 1 auto;
	position: relative;
    text-align: center;
    text-decoration: none;
    -webkit-box-align: center;
    width: 2rem;
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

.to-cart-wrap {
	background-color: #FF9500;
	width: 3.36rem;
}

.buy-wrap {
	background-color: #c12026;
	width: 2.73rem;
}

.bar-serv {
	background-image: url(../../assets/common/service.png);
}

.bar-fav {
	background-image: url(../../assets/common/star-empty.png);
}

.txt {
	display: block;
    margin-top: .09333rem;
    font-size: .32rem;
    color: #808080;
    line-height: 1;
}
</style>