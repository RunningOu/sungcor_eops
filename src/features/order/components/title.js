import React from 'react'
import { Descriptions } from 'antd'
// import _ from 'lodash'
export default function(props) {
//   const show = _.find(props.params, o => o.value == props.default_value)
  return (
    <Descriptions.Item label='' key={props.id} >
        <h3 style={{color: "#0e6dfb"}}>{props.value}</h3>
    </Descriptions.Item>
  )
}