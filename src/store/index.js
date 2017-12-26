import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderTotalPrice: 0,
    orderQuantity: 0,
    orderAddress: '',
    orderDelivery: '',
    orderCmdList: ''
  },
  mutations: {
    // clear catch for total price and quantity
    CLEAR_CATCH (state) {
      state.orderTotalPrice = 0
      state.orderQuantity = 0
    },
    INCREMENT_PRICE (state, price) {
      state.orderTotalPrice += price
    },
    INCREMENT_QUANTITY (state, quantity) {
      state.orderQuantity += quantity
    },
    SET_ORDER_ADDRESS (state, addr) {
      state.orderAddress = addr
    },
    SET_ORDER_DELIVERY (state, mode) {
      state.orderDelivery = mode
    }
  }
})
