import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
import * as actions from './redux/actions'
import { useHistory } from 'react-router-dom'
import { USER_INFO_ID } from '../../config'
import { List, Icon, Tag } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { queryOrderCount } from '../../common/request'

import './User.less'

const { Item } = List
const User = (props) => {
  const { userAccountInfo } = props
  const history = useHistory()
  const [myToDo, setMyToDo] = useState(0)
  const [participation, setParticipation] = useState(0)
  useEffect(() => {
    queryOrderCount([{ key: "executor", value: userAccountInfo.userId, operator: "IN" }, { key: "status", value: "1,2", operator: "IN" }]).then(d => { setMyToDo(d.count) })
    queryOrderCount([{ key: "participation", value: userAccountInfo.userId, operator: "IN" }]).then(d => { setParticipation(d.count) })
  }, [userAccountInfo])
  return (
    <div className='user-page-index'>
      <HeaderBar title="个人" />
      <div className="user">
        <h3 className='username' data-job={userAccountInfo.roleName}>{userAccountInfo.realname || ''}</h3>
        <p className='corporation'><Icon type="phone" />{" " + userAccountInfo.mobile || ""}</p>
      </div>
      <div className="main">
        <h4 className="list-title">作业状态</h4>
        <List className="handle-list" >
          <Item onClick={() => {
            history.push('/order?state=1')
          }}>
            <Item.Meta title={(<div className="item-title"><Icon type="pushpin" />我的待办</div>)} />
            <div><Tag color="#f50">{myToDo}</Tag><Icon type="right" /></div>
          </Item>
          <Item onClick={() => {
            history.push('/order?state=2')
          }}>
            <Item.Meta title={(<div className="item-title"><Icon type="team" />我的参与</div>)} />
            <div><Tag color="#108ee9">{participation}</Tag><Icon type="right" /></div>
          </Item>
        </List>
        <h4 className="list-title">账户相关</h4>
        <List className="handle-list" title="账户相关">
          <Item onClick={() => {
            localStorage.removeItem(USER_INFO_ID)
            history.push('/user/login')
          }}>
            <Item.Meta title={(<div className="item-title"><Icon type="swap" />切换用户</div>)} />
            <div><Icon type="right" /></div>
          </Item>
        </List>
      </div>
      <FooterBar pathname={props.location.pathname} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userAccountInfo: state.user.userAccountInfo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)