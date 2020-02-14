import React from 'react'
import { HeaderBar, FooterBar, IconFont } from '../common'
import * as actions from './redux/actions'
import { useHistory } from 'react-router-dom'
import { USER_INFO_ID } from '../../config'
import { List } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './User.less'

const { Item } = List
const User = (props) => {
  const history = useHistory()
  return (
    <div className='user-page-index'>
      <HeaderBar title="个人" />
      <div className="main">
        <Item arrow="horizontal" onClick={() => {
          localStorage.removeItem(USER_INFO_ID)
          history.push('/user/login')
        }}>     <IconFont type={'iconqiehuan'} /> 切换用户
      </Item> 
      </div>
        {/* <div className='header'>
          <h3 className='username' data-job={userAccountInfo.roleName}>{userAccountInfo.realname || 'unknow'}</h3>
          <p className='corporation'><IconFont type="iconposition" />{"上海尚禾信息技术有限公司"}</p>
      </div>
          <Row gutter={16} className='data_info'>
            <Col span={12} onClick={() => { history.push({pathname: './order' , query: { state: 1 }}) }}>
              <Statistic title="我的待办" value={120} />
            </Col>
            <Col span={12} onClick={() => { history.push({pathname: './order' , query: { state: 2}}) }}>
              <Statistic title="我的参与" value={9}/>
            </Col>
          </Row>
        {/* <Item arrow="horizontal" multipleLine onClick={() => { }}>
          <IconFont type="iconicon-test2" /> 修改密码
        </Item>
        <Item arrow="horizontal" multipleLine onClick={() => {
          localStorage.removeItem(USER_INFO_ID) 
          history.push('/user/login')
        }}>
          <IconFont type={'iconqiehuan'} /> 切换用户
        </Item> */}
        <FooterBar pathname={props.location.pathname} />
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
        actions: bindActionCreators({...actions}, dispatch),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(User)