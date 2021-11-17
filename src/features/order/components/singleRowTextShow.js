import React from 'react'
import { Descriptions } from 'antd'

export default function (props) {
  if (props.type === 'attachfile') return null
  return (
    <Descriptions.Item label={props.name} key={props.id} span={3}>
      {props.default_value === 'null' ? '' : props.default_value}
    </Descriptions.Item>
  )
}