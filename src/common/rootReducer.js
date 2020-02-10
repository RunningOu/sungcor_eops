import { combineReducers } from 'redux'
import homeReducer from '../features/home/redux/reducer'
import userReducer from '../features/user/redux/reducer'
import orderReducer from '../features/order/redux/reducer'

const reducerMap = {
  home: homeReducer,
  user: userReducer,
  order: orderReducer
}

export default combineReducers(reducerMap)