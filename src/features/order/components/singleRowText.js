import React from 'react'
import { Input } from 'antd'
export default function(props) {
  let placeholder = `请输入${props.name}`
  if(props.disabled) {
    placeholder = '将根据规则自动填写'
  }
  return (<Input disabled={props.disabled} placeholder={placeholder}/>)
}