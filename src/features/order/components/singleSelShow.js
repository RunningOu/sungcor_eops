import React from 'react'
import { Descriptions,} from 'antd'
import _ from 'lodash'

import OrderProcessShow from './orderProcessShow.js'



export default function(props) {
  const { orderInfo } = props
  const show = _.find(props.params, o => o.value == props.default_value)
  let style = {}
  let label = ''

  if(show && show.color !== undefined){
    style = {color: show.color}
  }
  if(show && show.label){
    label = show.label
  }
  return (
    <Descriptions.Item label={props.name} key={props.id} span={3}>
      <span style={style}>
        {label}
        {props.default_value === '2' && props.code === 'bxfs' ? <OrderProcessShow orderId={orderInfo.id} />: null }
      </span>
    </Descriptions.Item>
  )

}

