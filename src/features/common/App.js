import React, {useEffect} from 'react'
import { USER_INFO_ID } from '../../config'
import { local_get } from '../../utils/index'
import { bindActionCreators } from 'redux'
import * as actions from '../user/redux/actions'
import { connect } from 'react-redux'
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  }
}

export default connect(undefined, mapDispatchToProps)(props => {
  const { history, actions: {accountLogin}} = props
  useEffect(() => {
    if(local_get(USER_INFO_ID)) {
      accountLogin(local_get(USER_INFO_ID))
    }else {
      history.push('/user/login')
    }
  }, [accountLogin, history])
  return (
    <div>
      <div className='native-header' />
      {props.children}
    </div>
  )
})