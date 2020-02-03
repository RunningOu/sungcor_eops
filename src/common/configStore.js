import { createStore } from 'redux'
import rootReducer from './rootReducer'

let devToolsExtension = f => f;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, devToolsExtension)

  return store
}