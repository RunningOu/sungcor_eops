import React from 'react'
import { Descriptions } from 'antd'

const { Item } = Descriptions
export default function(props) {
  return (
    <Item label={props.name} key={props.id} span={3}>
      {props.default_value}
    </Item>
  )
}