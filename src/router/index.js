import Vue from 'vue'
import Router from 'vue-router'
import ToTop from '@/components/common/ToTop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
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
        ToTop
      }
    }
  ]
})
