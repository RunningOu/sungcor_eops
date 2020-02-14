import { ORDER_CREATE_ORDER, ORDER_SET_ORDER } from './constants'
export function setOrder(orderInfo) {
  return {
    type: ORDER_SET_ORDER,
    orderInfo
  }
}
export function createOrder(order) {
  return {
    type: ORDER_CREATE_ORDER,
    order
  }
}
export function reducer(state, action) {
  switch (action.type) {
    case ORDER_SET_ORDER:
      return {
        ...state,
        order:{
          ...state.order,
          ...action.orderInfo
        }
      }
    case ORDER_CREATE_ORDER:
      return {
        ...state,
        order:{
          ...action.order
        }
      }
    default:
      return state
  }
}