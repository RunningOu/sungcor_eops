import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions'

import { FooterBar } from '../common'

import { 
  Carousel,
  Ribbon,
  Alert,
  Statistic,
  Charts
} from './components'

import './Home.less'

const Home = (props) => {
  const { userInfo } = props
  console.log(props);
  return (
    <div className="home-page-home">
      <Carousel /> 
      <Ribbon role={userInfo.role?.menus.ConvenientMenu}/>
      {/* <Repairs /> */}
      {/* <Notice /> */}
      <Statistic role={userInfo.role?.menus.StatisticsView} userInfo={userInfo}/>
      <Charts role={userInfo.role?.menus.ReportView} />
      <Alert />
      <FooterBar pathname={props.location.pathname} userInfo={userInfo}/>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    home: state.home,
    userInfo: state.user.userAccountInfo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)