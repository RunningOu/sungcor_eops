import React from 'react';
import { useHistory } from 'react-router-dom'
import { Icon } from 'antd' 

import './HeaderBar.less';

export default function(props) {
  const history = useHistory()
  
  const onBack = () => {
    if(props.route) {
      history.push(props.route)
    } else {
      history.go(-1)
    }
  }

  return (
      <div className='common-header-bar'>
        <div className='navbar-left' onClick={onBack}>
          <Icon type="left" />
        </div>
        <div className='navbar-title'>{props.title}</div>
        <div className='navbar-right'>
          {props.rightContent}
        </div>
      </div>
  )
}