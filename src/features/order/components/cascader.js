import React from 'react'
import { Cascader } from 'antd'
export default function(props) {
  return (
    <Cascader options={props.cascade} placeholder={`请选择${props.name}`} />
  )
}