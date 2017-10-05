<template>
	<div class="div-wrap slideWrap">
		<transition-group tag="div" class='slide-div' name="list">
			<div v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go" class="img-wrap">
				<a :href="list.clickUrl">
					<img :src="list.image" class="inner-img">
				</a>
			</div>
		</transition-group>
		<div class="slide-cursors">
      			<span class="cursor" v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" v-on:click="change(index)"></span>
    	</div>
	</div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      slideList: [
        {
          'clickUrl': '/',
          'image': 'https://dummyimage.com/980x522/54bff0/ffffff'
        },
        {
          'clickUrl': '/',
          'image': 'https://dummyimage.com/980x522/ffa273/ffffff'
        },
        {
          'clickUrl': '/',
          'image': 'https://dummyimage.com/980x522/89d68e/ffffff'
        },
        {
          'clickUrl': '/',
          'image': 'static/img/home/slide/slider01.jpg'
        },
        {
          'clickUrl': '/',
          'image': 'static/img/home/slide/slider02.jpg'
        }
      ],
      currentIndex: 0,
      timer: '',
      time: 5000
    }
  },
  methods: {
    go () {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, this.time)
    },
    stop () {
      clearInterval(this.timer)
      this.timer = null
    },
    change (index) {
      this.currentIndex = index
      clearInterval(this.timer)
      this.timer = null
      this.go()
    },
    autoPlay () {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, this.time)
    })
  }
}

</script>

<style scoped>
.slideWrap {
	height: 5.33333rem;
	width: 100%;
	position: relative;
	overflow: hidden;
	background-color: #fff;
}

.slide-div {
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  font-size: 0;
}

.img-wrap {
	width: 100%;
	height: 100%;
}

.slide-cursors {
  position: absolute;
  bottom: .4rem;
  width: 100%;
  margin: 0 auto;
}

.cursor {
  display: inline-block;
  height: .05333rem;
  width: .53333rem;
  margin: 0 10px;
  background-color: #b2b2b2;
  cursor: pointer;
}

.active {
    background-color: #ffffff;
}

.list-enter {
}

.list-enter-active {
  transition: all .8s ease;
  transform: translateX(100%);
  position: absolute;
}

.list-enter-to {
  transform: translateX(0);
}

.list-leave {

}

.list-leave-active {
  transition: all .8s ease;
  /*transform: translateX(-100%);*/
}

.list-leave-to {

}

</style>