<template>
	<div v-el:swipe class='swipe bar-slider'>
    <div class='swipe-wrap'>
        <div v-for="item in swipeinfo">
          <a :href="item.clickUrl">
            <img :src="item.image" >
          </a>
        </div>
    </div>

    <div class="pagination">
        <span class="swipe-pagination-switch swipe-active-switch" @click="slideToCur(0)"></span>
        <span class="swipe-pagination-switch" @click="slideToCur($index+1)" v-for="item in slideNum"></span>
    </div>
  </div>
</template>

<script>
export default {
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
      ]
    }
  }
}
</script>

<style scoped>
.swipe {
    overflow: hidden;
    visibility: hidden;
    position: relative;
    height: 5.33333rem;
    width: 100%;
    .swipe-wrap {
        position: relative;
        overflow: hidden;
        height: 100%;
        div {
            float: left;
            width: 100%;
            position: relative;
            margin: 0;
            a {
                width: 100%;
                height: 100%;
                background-position: center 0;
                background-repeat: no-repeat;
                background-color: transparent;
                display: block;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .pagination {
        text-align: center;
        position: relative;
        bottom: .4rem;
        cursor: pointer;
    }
    .swipe-pagination-switch {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: #000;
        opacity: 0.2;
        margin: 0 8px;
        &:first-child {
            background: #ee3a4a;
        }
    }
    .swipe-active-switch {
        opacity: 1;
    }
}
</style>