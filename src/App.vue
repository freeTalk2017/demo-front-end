<template>
  <div id="app">
    <router-view name="HomeHeader"></router-view>
    <router-view name="HomeSlider"></router-view>
    <router-view name="BestSale"></router-view>
    <router-view name="RecomList"></router-view>
    <router-view name="HomeFooter"></router-view>
    <router-view name="ToTop"></router-view>
    <router-view name="DetailHeader"></router-view>
    <router-view name="DetailSlider"></router-view>
    <router-view name="DetailBasic"></router-view>
    <router-view name="SpecificSelection"></router-view>
    <router-view name="DetailFooter"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  text-align: center;
  width: 10rem;
  font-family: Helvetica, Tahoma, Arial, "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  padding-top: 1.26658rem;
  padding-bottom: 1.30667rem;
}

.fixed-head {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.26658rem;
  z-index: 5;
}

.inner-img {
  display: block;
  width: 100%;
  height: 100%;
  border: 0 none;
}

.bar-icon {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-size: .53333rem .53333rem;
  width: .53333rem;
  height: .53333rem;
}

ul {
  padding-left: .10667rem;;
}

li {
  list-style: none;
}

body {
  padding: 0;
  margin: 0;
  background-color: #f4f4f4;
}

.div-wrap {
  margin-bottom: .26667rem;
  background-color: #ffffff;
}

</style>
