import React from 'react'
import { Descriptions } from 'antd'
export default function (props) {
  return (
    <Descriptions.Item label={props.name} key={props.id} row="2" span={3}>
      {props.default_value}
    </Descriptions.Item>
  )
}