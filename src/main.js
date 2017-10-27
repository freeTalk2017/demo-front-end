// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueLazyload)
Vue.use(VueResource)
Vue.prototype.$api = process.env.NODE_ENV === 'production' ? 'http://59.110.240.8:8888/Goal' : '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    title: 'Goal - 发现好东西'
  }
})
