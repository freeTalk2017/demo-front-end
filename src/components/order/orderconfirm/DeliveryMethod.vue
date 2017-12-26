<template>
	<div class="font-size-general">
		<div class="inner-row-wrap">
			<div class="inner-row-general no-arrow">
				<div class="left">
					<span>配送方式</span>
				</div>
				<div class="middle">
					<span>快递 免邮</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      mode: '2'
    }
  },
  mounted: function () {
    this.$store.commit('SET_ORDER_DELIVERY', this.mode)
  }
}
</script>