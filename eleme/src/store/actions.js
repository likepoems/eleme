import * as mutationType from './mutation-type'
export default{
  activity ({commit}, payload) {
    setTimeout(function () {
      commit(mutationType.ADD_COUPON, payload.coupon)
      commit(mutationType.UPDATE_INTEGRAL, 20)
    }, 2000)
  }
}
