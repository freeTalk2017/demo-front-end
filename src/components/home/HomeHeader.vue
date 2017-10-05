<template>
	<div class="fixed-head m-head">
		<div class="head">
		  <a class="head-cate" href="/"></a>
		  <div class="top-searchInp">
		  	<i class="icon"></i>
		  	<span class="placeholder">搜索商品、品牌</span>
		  </div>
		</div>
	</div>
</template>

<style scoped>
.m-head {
    border-bottom: 1px solid #d9d9d9;
    background-color: #fafafa;
}

.head {
	position: relative;
    display: flex;
    padding: 0.21333rem .4rem;
}

.head-cate {
	width: .84rem;
	height: .84rem;
	background-image: url(../../assets/home/cate.png);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}

.top-searchInp {
	background-color: #ededed;
	flex-grow: 1;
	height: .74667rem;
    font-size: .37333rem;
    border-radius: .10667rem;
    vertical-align: middle;
    justify-content:center;
    align-items:center;
    display:-webkit-flex;
}

.icon {
	display: inline-block;
	width: .37333rem;
    height: .37333rem;
	background-image: url(../../assets/common/search.png);
	background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: .13333rem;
}

.placeholder {
	color: #808080;
}
</style>