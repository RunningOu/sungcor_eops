import { ORDER_SET_FORM, ORDER_CLEAR_FORM, ORDER_MERGE_FORM } from './constants'
export function setForm(form) {
  return {
    type: ORDER_SET_FORM,
    form: form
  }
}

export function clearForm() {
  return {
    type: ORDER_CLEAR_FORM
  }
}
export function reducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    case ORDER_SET_FORM:
      let newState = { ...state }
      newState.form = {
        ...newState.form,
        ...action.form
      }
      return newState
    case ORDER_CLEAR_FORM:
      return {
        ...state,
        form: {}
      }
    default:
      return state
  }
}