<template>
	<div class="div-wrap selec-wrap left-padding" @click="toSku">
		<div class="font-size-general">
			<span class="text-no-overflow">请选择规格数量</span>
		</div>
		<i class="bar-icon bar-arrow"></i>
	</div>
</template>

<script>
export default {
  methods: {
    toSku: function () {
      var sku = document.getElementsByClassName('sku-wrap')
      sku[0].className = 'sku-wrap show'
      document.body.style.overflow = 'hidden'
    }
  }
}
</script>

<style scoped>
.selec-wrap {
	position: relative;
	display: flex;
	height: 1.18667rem;
	align-items: center;
}
</style>