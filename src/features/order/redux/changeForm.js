import { ORDER_CHANGE_FORM, ORDER_CHANGE_FORM_RESOURCE } from './constants'
export function changeForm(from) {
  return {
    type: ORDER_CHANGE_FORM,
    from: from
  }
}
export function changeFormResource(devices) {
  return {
    type: ORDER_CHANGE_FORM_RESOURCE,
    resource: devices,
  }
}
export function reducer(state, action) {
  switch (action.type) {
    case ORDER_CHANGE_FORM:
      return {
        ...state,
        orderForm:{
          ...action.from
        }
      }
    case ORDER_CHANGE_FORM_RESOURCE:
      return {
        ...state,
        orderForm: {
          ...state.orderForm,
          resource: action.resource
        }
      }
    default:
      return state
  }
}