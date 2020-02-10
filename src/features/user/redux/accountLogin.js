import { USER_ACCOUNT_LOGIN } from './constants'

export function accountLogin(userInfo) {
  return {
    type: USER_ACCOUNT_LOGIN,
    userInfo: userInfo
  }
}

export function reducer(state, action) {
  switch (action.type) {
    case USER_ACCOUNT_LOGIN:
      return {
        ...state,
        userAccountInfo: {
          ...action.userInfo
        }
      }
    default:
      return state
  }
}