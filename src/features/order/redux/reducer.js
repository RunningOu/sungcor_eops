import initialState from './initialState'
import { reducer as setForm } from './setForm'
import { reducer as setOrder } from './setOrder'

const reducers = [ setForm, setOrder ]

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default: 
      newState = state
      break
  }
  return reducers.reduce((s, r) => r(s, action), newState)
}