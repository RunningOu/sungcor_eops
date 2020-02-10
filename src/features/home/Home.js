import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions'

import { FooterBar } from '../common'

import { 
  Carousel,
  Ribbon, 
  Repairs,
  Notice
} from './components'

const Home = (props) => {
  return (
    <div>
      <Carousel /> 
      <Ribbon />
      <Repairs />
      <Notice />
      <FooterBar pathname={props.location.pathname}/>
    </div>
  )
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