import React from 'react';
import { Icon } from 'antd';
import { useHistory } from 'react-router-dom'

import './Repairs.less'

export default function() {
  const history = useHistory()
  return (
    <div className='home-components-repairs'>
      <button className='entrance' onClick={() => history.push('/order/create')}>
        <Icon type="plus" />
      </button>
    </div>
  )
}