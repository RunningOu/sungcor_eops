import React, { useEffect } from 'react'
import { USER_INFO_ID } from '../../config'
import { local_get } from '../../utils/index'
import { bindActionCreators } from 'redux'
import * as actions from '../user/redux/actions'
import { connect } from 'react-redux'
import { message } from 'antd'

const App = props => {
  const { history, actions: { accountLogin }, userInfo } = props
  useEffect(() => {
    const userInfo = local_get(USER_INFO_ID)
    if (userInfo) {
      accountLogin(local_get(USER_INFO_ID))
    } else {
      history.push('/user/login')

    }
  }, [accountLogin, history])
  useEffect(() => {
    if (userInfo.username) {
      if (!Object.keys(userInfo.role.menus).length) {
        message.warning('该用户没有被授权,请联系管理人员。')
        setTimeout(() => {
          history.push('/user/login')
        }, 0)
      }
    }
  }, [userInfo, history])
  message.destroy()
  return (
    <div>
      <div className='native-header' />
      {props.children}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userInfo: state.user.userAccountInfo,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)