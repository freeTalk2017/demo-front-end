<template>
	<div class="sku-wrap">
		<div class="wrap-bg" @click="hide"></div>
		<div class="content-wrap font-size-general">
			<div class="header">
				<div class="img-wrap">
					<img src="https://dummyimage.com/100x100/54bff0/ffffff" class="inner-img">
				</div>
				<div class="content">
					<div class="price">¥{{price}}</div>
					<div class="stock">库存 {{stock}}件</div>
					<div class="sku-select">请选择:</div>
				</div>
				<i class="close bar-icon" @click="hide"></i>
			</div>
			<div class="body">
				<div class="sku-list-wrap">
					<div class="">
						<p>颜色</p>
						<div class="skus">
							<div class=""></div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer">
				
			</div>
		</div>
	</div>	
</template>

<script>
export default {
  data: function () {
    return {
      price: 469,
      stock: 25
    }
  },
  methods: {
    hide: function () {
      var sku = document.getElementsByClassName('sku-wrap')
      sku[0].className = 'sku-wrap'
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped>
.sku-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  pointer-events: none;
  opacity: 0;
  transition: opacity .3s 80ms;
  will-change: opacity;
  text-align: left;
}

.show {
  pointer-events: auto;
  opacity: 1;
}

.show .content-wrap{
  transform: translate3d(0,0,0);
}

.wrap-bg {
  background-color: rgba(0,0,0,.5);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.content-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 20%;
  background-color: #fff;
  transition: transform .3s cubic-bezier(0,0,.25,1) 80ms;
  transform: translate3d(0,100%,0);
}

.content-wrap .header {
  padding: .24155rem 0 .24155rem 3.04348rem;
  position: relative;
}

.header .content {
  padding-right: 0.48309rem;
}

.img-wrap {
  width: 2.41546rem;
  height: 2.41546rem;
  position: absolute;
  top: -.67633rem;
  left: .24155rem;
  border-radius: .09662rem;
  overflow: hidden;
  border: .02416rem solid rgba(0,0,0,.1);
  padding: .02416rem;
  background-color: #fff;
}

.content .sku-select {
  overflow: hidden;
  height: 1rem;
  padding-right: .48309rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.content-wrap .body {
  padding: 0 .36232rem .24155rem;
}

.content-wrap .body:before {
  content: "";
  display: block;
  border-bottom: 1px solid rgba(0,0,0,.1);
}

.content-wrap .footer {

}

.close {
  background-image: url('../../assets/common/close.png');
  position: absolute;
  right: .24155rem;
  top: .24155rem;
}
</style>