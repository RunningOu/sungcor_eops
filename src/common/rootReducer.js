import { combineReducers } from 'redux'
import homeReducer from '../features/home/redux/reducer'

const reducerMap = {
  home: homeReducer
}

export default combineReducers(reducerMap)