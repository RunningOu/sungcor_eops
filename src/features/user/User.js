import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { List, Icon, Tag } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { HeaderBar, FooterBar } from '../common'
import * as actions from './redux/actions'
import { queryOrderCount, queryOrderList  } from '../../common/request'
import { USER_INFO_ID } from '../../config'

import './User.less'

const params = (userAccountInfo) => {
  return {
    getMyTodo: [
      { key: "executor", value: userAccountInfo.userId,operator: "IN"},
      { key:"status", value: "1,2", operator: "IN" },
      { key: "formData.sfbx", value: "wgq", operator: "EQ" },
    ],
    getMyparticipation: 
      [{"key":"participation","value":userAccountInfo.userId,"operator":"IN"},{"key":"status","value":"1,2","operator":"IN"},{"key":"modelId","value":"a50f0654c8a7465291f17769d4b61fae","operator":"EQ"}]
  }
}

const { Item } = List
const User = (props) => {
  const { userAccountInfo } = props
  const history = useHistory()

  const [myToDo, setMyToDo] = useState(0)
  const [participation, setParticipation] = useState(0)

  useEffect(() => {
    let requestTodoList = []
    if(typeof userAccountInfo.realname === 'string' && userAccountInfo.realname.includes('图像组管理员')) {
      requestTodoList.push(queryOrderCount([{key:'status',value:'1,2',operator: 'IN'},{key:'formData.sfbx',value:'gqsh',operator:'EQ'}]))
    }
    requestTodoList.push(queryOrderCount(params(userAccountInfo)['getMyTodo']))
    Promise.all(requestTodoList).then(res => {
      const myTodoCount = res.reduce((p,c) => p + c.count,0)
      setMyToDo(myTodoCount)
    })
    queryOrderCount(params(userAccountInfo)['getMyparticipation']).then(d => {
      setParticipation(d.count)
    })
  },[userAccountInfo])

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
            history.push('/user/password')
          }}>
            <Item.Meta title={(<div className="item-title"><Icon type="barcode" />修改密码</div>)} />
            <div><Icon type="right" /></div>
          </Item>
          <Item onClick={() => {
            localStorage.removeItem(USER_INFO_ID)
            history.push('/user/login')
          }}>
            <Item.Meta title={(<div className="item-title"><Icon type="swap" />切换用户</div>)} />
            <div><Icon type="right" /></div>
          </Item>
        </List>
      </div>
      <FooterBar pathname={props.location.pathname} userInfo={userAccountInfo} />
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