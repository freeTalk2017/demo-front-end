<template id="slider-template">
  <div ref="swipe" class="wipe bar-slider">
    <div class='swipe-wrap'>
        <div v-for="item in tempList">
          <router-link v-if="type === 'redi'" :to="item.clickURL">
            <img :src="item.picURL" >
          </router-link>
          <img v-else :src="item.picURL" >
        </div>
    </div>

    <div class="pagination">
        <span class="swipe-pagination-switch" @click="slideToCur(index)" v-for="(item,index) in slideList"></span>
    </div>
  </div>
</template>

<script>
var Swipe = require('swipe-js')
var speed = 800

export default {
  name: 'pagination-swipe',
  props: ['slideList', 'auto', 'loop', 'type'],
  data: function () {
    return {
      mySwipe: {},
      tempList: []
    }
  },
  watch: {
    'slideList': function (val, oldVal) {
      var _self = this
      _self.tempList = val
      _self.$nextTick(function () {
        _self.creatSlide()
      })
    }
  },
  methods: {
    creatSlide: function () {
      var self = this
      var slides = self.$refs.swipe.getElementsByClassName('swipe-pagination-switch')
      slides[0].style.opacity = '0.8'
      slides[0].style.background = '#b2b2b2'
      slides[0].style.width = '0.53333rem'
      slides[0].style.borderRadius = '15%'
      self.mySwipe = new Swipe(self.$refs.swipe, {
        startSlide: 0,
        continuous: this.loop,
        speed: speed,
        auto: this.auto,
        stopPropagation: false,
        callback: function (index, elem) {
          for (var i = 0; i < slides.length; i++) {
            if (i !== index) {
              slides[i].style.opacity = '0.5'
              slides[i].style.background = '#ffffff'
              slides[i].style.width = '0.13333rem'
              slides[i].style.borderRadius = '100%'
            } else {
              slides[index].style.opacity = '0.8'
              slides[index].style.background = '#b2b2b2'
              slides[index].style.width = '0.53333rem'
              slides[index].style.borderRadius = '15%'
            }
          }
        }
      })
    },
    slideToCur: function (index) {
      var self = this
      self.mySwipe.slide(index, speed)
    }
  }
}
</script>

<style scoped>
.wipe {
  overflow: hidden;
  visibility: hidden;
  position: relative;
}
.swipe-wrap {
  position: relative;
  overflow: hidden;
  height: 100%;
}
.swipe-wrap div {
  float: left;
  width: 100%;
  position: relative;
  margin: 0;
}
.swipe-wrap a {
  width: 100%;
  height: 100%;
  background-position: center 0;
  background-repeat: no-repeat;
  background-color: transparent;
  display: block;
}
.swipe-wrap img {
  width: 100%;
  height: 100%;
}
.pagination {
  text-align: center;
  position: relative;
  bottom: .4rem;
  cursor: pointer;
}
.swipe-pagination-switch {
  display: inline-block;
  height: .13333rem;
  width: .13333rem;
  margin: 0 0.1rem;
  border-radius: 100%;
  background-color: #ffffff;
  opacity: 0.5;
}
</style>