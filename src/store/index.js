import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state , payload) {
      //state.cartList.push(payload)
      //let oldProduct = state.cartList.find(item => item.iid === payload.iid)
      let oldProduct = null
      for(let item of state.cartList){
        if(item.iid === payload.iid){
          oldProduct = item
        }
      }
      if(oldProduct){
        oldProduct.count += 1
      }else {
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  }
})

export default store