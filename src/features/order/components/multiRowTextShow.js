import React from 'react'
import { Descriptions } from 'antd'
export default function (props) {
  return (
    <Descriptions.Item label={props.name} key={props.id} row="2">
      {props.default_value}
    </Descriptions.Item>
  )
}