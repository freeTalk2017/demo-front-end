<template>
	<nav class="fixed-foot m-foot">
		<router-link class="bar active" to="/">
			<i class="bar-icon bar-index"></i>
			<span class="txt">首页</span>
		</router-link>
		<router-link class="bar" to="/">
			<i class="bar-icon bar-cart"></i>
			<span class="txt">购物车</span>
		</router-link>
		<router-link class="bar" to="/">
			<i class="bar-icon bar-mine"></i>
			<span class="txt">我的</span>
		</router-link>
	</nav>
</template>

<style scoped>
.m-foot {
	height: 1.30667rem;
	justify-content: space-around;
	-webkit-justify-content: space-around;
}

.bar {
	flex: 0 1 auto;
	position: relative;
    text-align: center;
    text-decoration: none;
    -webkit-box-align: center;
}

.bar-index {
	background-image: url(../../assets/home/home_active.png);
}

.bar-cart {
	background-image: url(../../assets/common/cart.png);
}

.bar-mine {
	background-image: url(../../assets/common/user.png);
}

.txt {
	display: block;
    margin-top: .09333rem;
    font-size: .32rem;
    color: #808080;
    line-height: 1;
}

.active .txt{
	color: #42b983;
}
</style>