import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { USER_INFO_ID } from '../../config'
import { local_set, local_get } from '../../utils/index'
import { Icon, message } from 'antd'
import { login, queryUserInfo } from '../../common/request'

import './Login.less'

const Login = (props) => {
  const { accountLogin } = props.actions
  const history = useHistory()
  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')
  
  useEffect(() => {
    if(local_get(USER_INFO_ID)) {
      accountLogin(local_get(USER_INFO_ID))
      history.push('/')
    }
  }, [accountLogin, history])
  
  return (
    <div className='user-page-login'>
      <div className='login_logo'>
        <img src={require('../../assets/home/login_logo.png')} alt="logo" />
      </div>
      <div>
        <div className='login_view'>
          <div
            className='login_input'
            data-title="优云账号">
            <span><Icon type="user" /></span>
            <input onChange={(v) => {
              setUserName(v.target.value)
            }} />
          </div>
          <div
            className='login_input'
            data-title="优云密码">
            <span><Icon type="lock" /></span>
            <input type="password" onChange={(v) => {
              setPassWord(v.target.value)
            }} />
          </div>
          <p className='login_ts'>
            忘记密码？
          </p>
          <Button
            className='login_btn'
            onClick={() => {
              if (userName === '' || passWord === '') {
                message.warning('账户密码不能为空');
                return
              }
              login({ passWord, userName })
                .then(dd => {
                  if (!dd.data) {
                    message.error(dd.message)
                    return
                  }
                  queryUserInfo(dd.data)
                    .then(d => {
                      const userInfo = {
                        userId: dd.data.userId,
                        username: d.username,
                        apiKey: d.apiKeys[0].key,
                        role: d.role,
                        roleName: d.roleName,
                        realname: d.realname,
                        mobile: d.mbile
                      }
                      local_set(USER_INFO_ID, userInfo)
                      accountLogin(userInfo)
                      history.push('/')
                    })
                })
            }}>登录</Button>
        </div>
        <p className='version'>
          Vol.0.001 - 上海尚禾技术支持
        </p>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)