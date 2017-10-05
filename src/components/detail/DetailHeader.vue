<template>
	<div class="fixed-head g-head">
		<router-link to="/homepage">
			<i class="bar-icon bar-index"></i>
		</router-link>
		<span class="">Goal</span>
		<router-link to="/">
			<i class="bar-icon bar-cart"></i>
		</router-link>
	</div>
</template>

<style scoped>
.g-head {
	display: flex;
	justify-content: center;
    align-items: center;
    background-color: #fafafa;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    align-content: flex-start;
    font-size: .47333rem;
}

.bar-icon {
	display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: .63333rem .63333rem;
    width: .63333rem;
    height: .63333rem;
}

.bar-index {
	background-image: url(../../assets/common/home.png);
}

.bar-cart {
	background-image: url(../../assets/common/cart.png);
}
</style>