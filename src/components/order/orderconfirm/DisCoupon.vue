<template>
	<div class="font-size-general">
		<div class="inner-row-wrap">
			<div class="inner-row-general">
				<div class="left">
					<span>优惠券</span>
				</div>
				<div class="middle">
					<span>{{count}}张</span>
				</div>
			<i class="bar-icon bar-arrow"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>

</style>