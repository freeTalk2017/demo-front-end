import Vue from 'vue'
import Router from 'vue-router'
import ToTop from '@/components/common/ToTop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      redirect: '/'
    },
    {
      path: '/',
      components: {
        HomeHeader: resolve => { require(['@/components/home/HomeHeader'], resolve) },
        HomeFooter: resolve => { require(['@/components/home/HomeFooter'], resolve) },
        HomeSlider: resolve => { require(['@/components/home/HomeSlider'], resolve) },
        BestSale: resolve => { require(['@/components/home/BestSale'], resolve) },
        RecomList: resolve => { require(['@/components/home/RecomList'], resolve) },
        ToTop
      }
    },
    {
      path: '/detail',
      components: {
        DetailHeader: resolve => { require(['@/components/detail/DetailHeader'], resolve) },
        DetailSlider: resolve => { require(['@/components/detail/DetailSlider'], resolve) },
        DetailFooter: resolve => { require(['@/components/detail/DetailFooter'], resolve) },
        DetailBasic: resolve => { require(['@/components/detail/DetailBasic'], resolve) },
        SpecificSelection: resolve => { require(['@/components/detail/SpecificSelection'], resolve) },
        AttrSection: resolve => { require(['@/components/detail/AttrSection'], resolve) },
        DetailImg: resolve => { require(['@/components/detail/DetailImg'], resolve) },
        ToTop
      }
    },
    {
      path: '/order/confirm',
      components: {
        AddrSelection: resolve => { require(['@/components/order/orderconfirm/AddrSelection'], resolve) },
        CommList: resolve => { require(['@/components/order/orderconfirm/CommList'], resolve) },
        DisCoupon: resolve => { require(['@/components/order/orderconfirm/DisCoupon'], resolve) },
        Invoice: resolve => { require(['@/components/order/orderconfirm/Invoice'], resolve) },
        DeliveryMethod: resolve => { require(['@/components/order/orderconfirm/DeliveryMethod'], resolve) },
        InputComment: resolve => { require(['@/components/order/orderconfirm/InputComment'], resolve) },
        ConfirmFooter: resolve => { require(['@/components/order/orderconfirm/ConfirmFooter'], resolve) }
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
