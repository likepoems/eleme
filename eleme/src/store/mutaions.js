import * as types from './mutation-type'
export default{
  [types.UPDATE_INTEGRAL] (state, newInteral) {
    state.UPDATE_INTEGRAL += newInteral
  },
  [types.ADD_COUPON] (state, coupon) {
    state.coupon.push(coupon)
  }
}
