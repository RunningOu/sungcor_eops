import React from 'react'
import { Select } from 'antd'

const { Option } = Select
export default function(props) {
  return (
    <Select placeholder={`请选择${props.name}`}>
      {props.params.map( o => <Option value={o.value} key={o.label}>{o.label}</Option>)}
    </Select>
  )
}