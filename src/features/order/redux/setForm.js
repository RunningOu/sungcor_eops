import { ORDER_SET_FORM, ORDER_CLEAR_FORM } from './constants'
export function setForm(from) {
  return {
    type: ORDER_SET_FORM,
    from: from
  }
}
export function clearForm() {
  return {
    type: ORDER_CLEAR_FORM
  }
}
export function reducer(state, action) {
  switch (action.type) {
    case ORDER_SET_FORM:
      return {
        ...state,
        form:{
          ...state.form,
          ...action.from
        }
      }
    case ORDER_CLEAR_FORM:
      return {
        ...state,
        form: {}
      }
    default:
      return state
  }
}