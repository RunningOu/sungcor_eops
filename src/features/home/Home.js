import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions'
const Home = (props) => {
  console.log(props)
  return (<div>Home Page</div>)
}

function mapStateToProps(state) {
  return {
    home: state.home,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)