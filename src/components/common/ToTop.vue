<template>
	<div class="to-top" v-on:click="goTop" v-show="toTop">
		<i class="top-icon inner-img"></i>
	</div>
</template>

<script>
export default {
  data: function () {
    return {
      toTop: false,
      timer: null,
      time: 10
    }
  },
  methods: {
    goTop: function () {
      clearInterval(this.timer)
      this.timer = setInterval(function () {
        let curHeight = document.documentElement.scrollTop || document.body.scrollTop
        document.documentElement.scrollTop = document.body.scrollTop = curHeight -= 100
      }, this.time)
    },
    needToTop: function () {
      let curHeight = document.documentElement.scrollTop || document.body.scrollTop
      let viewHeight = document.documentElement.clientHeight
      if (curHeight > viewHeight) {
        this.toTop = true
      } else {
        this.toTop = false
      }
      if (curHeight <= 0) {
        clearInterval(this.timer)
        this.timer = null
      }
    }
  },
  created () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.needToTop)
    })
  }
}
</script>

<style scoped>
.to-top {
	background-color: #fff;
  z-index: 10;
}

.top-icon {
	position: fixed;
	right: .30667rem;
	bottom: 1.6rem;
	width: 1.09333rem;
	height: 1.09333rem;
	background-image: url(../../assets/common/top.png);
	background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: .8;
}
</style>