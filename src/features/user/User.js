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
  // console.log(userAccountInfo,'userAccountInfo');
  return {
    // getMyTodo: {"conditions":[{"field":"executor","value":userAccountInfo.userId,"operator":"IN"}],"ass":[{"cjt":"OR","conditions":[{"field":"formData.sfbx","value":"gqsh","operator":"EQ"}]}]},
    getMyTodo:{"conditions": [{"field": "executor","value": userAccountInfo.userId,"operator": "IN"},
                              {"field": "modelId","value": "a50f0654c8a7465291f17769d4b61fae","operator": "EQ"},
                              {"field": "status","value": [1,2],"operator": "IN"}],
                "ass": [{"cjt": "OR","conditions": []}],
                "pageNum": 1,
                "pageSize": 1
              },
    // [
    //   { field: "executor", value: userAccountInfo.userId,operator: "IN"},
    //   { field:"status", value: [1,2], operator: "IN" },
    //   { field: "formData.sfbx", value: "wgq", operator: "EQ" },
    // ],
    getMyparticipation:{"conditions":[{"field":"participation","value":userAccountInfo.userId,"operator":"IN"},{"field":"status","value":[1,2,10],"operator":"IN"}],"ass":[{"cjt":"OR","conditions":[]}],"pageNum":1,"pageSize":1}
      // [{"field":"participation","value":userAccountInfo.userId,"operator":"IN"},{"field":"status","value":[1,2],"operator":"IN"},{"field":"modelId","value":"a50f0654c8a7465291f17769d4b61fae","operator":"EQ"}]
  }
}

const { Item } = List
const User = (props) => {
  // console.log(props,'pros');
  const { userAccountInfo } = props
  const history = useHistory()

  const [myToDo, setMyToDo] = useState(0)
  const [participation, setParticipation] = useState(0)

  useEffect(() => {
    if(typeof userAccountInfo.realname === 'string' && userAccountInfo.realname.includes('图像组管理员')) {
      let param = params(userAccountInfo).getMyTodo;
      let cons = param.conditions
      //去掉工单状态
      cons.splice(0,1)
      param.conditions = cons
      param.ass[0].conditions.push({field:'formData.sfbx',value:'gqsh',operator:'EQ'})
      param.ass[0].conditions.push({field: "executor",value: userAccountInfo.userId,operator: "IN"})
      console.log(param)
      queryOrderCount(param).then(res=>{
        console.log(res,'??res');
        setMyToDo(res.result.total)
      })
    }else {
      queryOrderCount(params(userAccountInfo).getMyTodo).then(res=>{
        console.log(res,'??res');
        setMyToDo(res.result.total)
      })
    }
    queryOrderCount(params(userAccountInfo).getMyparticipation).then(d => {
      // console.log(d)
      setParticipation(d.result.total)
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