import React from 'react'
import { Radio } from 'antd'
export default function(props) {
  return (
    <Radio.Group>
      {props.params.map( o => <Radio value={o.value} key={o.label}>{o.label} </Radio>)}
    </Radio.Group>
  )
}