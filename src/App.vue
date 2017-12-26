<template>
  <div id="app">
    <router-view name="HomeHeader"></router-view>
    <router-view name="HomeSlider"></router-view>
    <!-- <router-view name="BestSale"></router-view> -->
    <router-view name="RecomList"></router-view>
    <router-view name="HomeFooter"></router-view>
    <router-view name="DetailHeader"></router-view>
    <router-view name="DetailSlider"></router-view>
    <router-view name="DetailBasic"></router-view>
    <router-view name="SpecificSelection"></router-view>
    <router-view name="DetailFooter"></router-view>
    <router-view name="SkuCover"></router-view>
    <router-view name="AttrSection"></router-view>
    <router-view name="DetailImg"></router-view>
    <router-view name="AddrSelection"></router-view>
    <router-view name="CommList"></router-view>
    <router-view name="DisCoupon"></router-view>
    <router-view name="Invoice"></router-view>
    <router-view name="DeliveryMethod"></router-view>
    <router-view name="InputComment"></router-view>
    <router-view name="ConfirmFooter"></router-view>
    <router-view name="ToTop"></router-view>
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

.fixed-foot {
  position: relative;
  justify-content: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fafafa;
  border-top: 1px solid #d9d9d9;
  align-content: flex-start;
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

.bar-arrow {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0.21333rem;
  margin: auto;
  background-image: url(./assets/common/arrow-right.png);
}

.left-padding {
  padding-left: 0.4rem;
}

.font-size-general {
  font-size: .37333rem;
}

.padding-row-general {
  padding: .53333rem 1.14667rem .53333rem .4rem;
}

.inner-row-general {
  padding: .53333rem 1.14667rem .53333rem .4rem;
  background-color: #ffffff;
  position: relative;
}

.inner-row-general .left {
  position: relative;
  float: left;
  margin: 0;
}

.inner-row-general .middle{
  overflow: hidden;
  text-align: right;
}

.no-arrow {
  padding-right: .4rem;
}

.inner-row-wrap:after {
  content: '';
  position: absolute;
  background-color: #d9d9d9;
  left: 0;
  width: 100%;
  height: 1px;
}

.text-no-overflow {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.price {
  color: #c12026;
  font-weight: 700;
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
  word-break: break-word;
}

input {
  border: none;
  font-size: .37333rem;
  width: 100%;
  outline: 0;
  color: #999;
}

::-webkit-input-placeholder {
  color: #999;
}

:-moz-placeholder {
  color: #999;
}

::-moz-placeholder {
  color: #999;
}

:-ms-input-placeholder{
  color: #999;
}

.div-wrap {
  margin-bottom: .26667rem;
  background-color: #ffffff;
}

.disabled {
  pointer-events: none;
  color: #fff;
  background-color: #ccc!important;
}

</style>
