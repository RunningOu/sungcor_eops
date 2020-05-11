// import React, { useState } from 'react'
import React from 'react'
import { HeaderBar } from '../common'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, message } from 'antd';
import { connect } from 'react-redux'
import { USER_INFO_ID } from '../../config'
// import { bindActionCreators } from 'redux'
// import * as actions from './redux/actions'
import { passwordChange } from '../../common/request'

import './Password.less'
const formItemLayout = {
  labelCol: {
    span: 8 
  },
  wrapperCol: {
    span: 16 
  },
};
const key = "PASSWORDKEY"
const Password = (props) => {
  const history = useHistory()
  const {userAccountInfo} = props
  const { getFieldDecorator,getFieldsValue, } = props.form;
  
  const submit = (e) => { 
    e.preventDefault()
    const formdata = getFieldsValue()
    let pass = true
    props.form.validateFieldsAndScroll((err, value) => {
      if (err) {
        pass = false
      }
    })
    if (!pass) {
      message.warning('请填写必要信息！')
      return
    }
    if(formdata.newPassword1 === formdata.newPassword2) {
      message.loading({ content: '正在修改密码...', key });
      passwordChange({
        userId: userAccountInfo.userId,
        newPwd: formdata.newPassword1,
        oldPwd: formdata.oldPassword
      }).then((d) => { 
        if(d.code === 500) {
          message.error({ content: d.message, key })
        }else {
          message.success({ content: d.data, key })
          setTimeout(
            () => {
               localStorage.removeItem(USER_INFO_ID)
               history.push('/user/login')
            },1000)
        }
      }).catch((e) => {message.error({ content: '修改失败，访问出错。', key })})
    }else {
      message.warning('2次输入密码必须一致')
    }
  }
  return (
    <div className="password">
      <HeaderBar title="修改密码" />
      <Form {...formItemLayout} onSubmit={submit} className="login-form">
        <Form.Item label="旧密码">
          {getFieldDecorator('oldPassword', {rules: [ {required: true, message: '请输入密码' }]})(
            <Input.Password />
          )}
        </Form.Item>
        <Form.Item label="新密码">
          {getFieldDecorator('newPassword1', {rules: [ {required: true, message: '请输入新密码' }]})(
            <Input.Password />
          )}
        </Form.Item>
        <Form.Item label="重复密码">
          {getFieldDecorator('newPassword2', {rules: [ {required: true, message: '请再次输入密码' }]})(
            <Input.Password />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            修改密码
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}


function mapStateToProps(state) {
  return {
    userAccountInfo: state.user.userAccountInfo,
  }
}


export default connect(mapStateToProps)(Form.create({ name: 'dynamic_rule' })(Password))
