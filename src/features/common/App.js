import React, { useEffect } from 'react'
import { USER_INFO_ID } from '../../config'
import { local_get } from '../../utils/index'
import { bindActionCreators } from 'redux'
import * as actions from '../user/redux/actions'
import { connect } from 'react-redux'
import { message } from 'antd'
import { local_set } from '../../utils/index'
import { wxGetAccessToken, wxQuickLogin } from '../../common/request'
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
const App = props => {
  const { history, actions: { accountLogin } } = props
  useEffect(() => {
    const userInfo = local_get(USER_INFO_ID)
    //如果有用户信息缓存
    if (userInfo) {
      accountLogin(local_get(USER_INFO_ID))
    } else {
      if (GetQueryString('code') != null) {
        wxGetAccessToken({ code: GetQueryString('code') }).then((d) => {
          const { openId } = d
          if (openId) {
            wxQuickLogin({ openId }).then(d => {
              if (Object.keys(d).length) {
                // const userInfo = {
                //   userId: d.userId,
                //   username: d.username,
                //   apiKey: d.apiKeys[0].key,
                //   role: d.role,
                //   roleName: d.roleName,
                //   realname: d.realname,
                //   mobile: d.mobile,
                //   depts: d.depts,
                //   openId: d.openId
                // }
                const userInfo = {...d,apiKey:d.apiKeys[0].key}
                if (!Object.keys(d.role.menus).length) {
                  message.warning('该用户没有被授权,请联系管理人员。')
                  history.push('/user/login')
                } else {
                  local_set(USER_INFO_ID, userInfo)
                  // if(userInfo){

                  // }
                  accountLogin(userInfo)
                  history.push('/')
                }
              } else {
                history.push('/user/login')
                accountLogin({
                  openId
                })
              }
            })
          } else {
            history.push('/user/login')
          }
        })
      } else {
        history.push('/user/login')
      }
    }
  }, [accountLogin, history])
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