import React from 'react'
import { Input } from 'antd'
export default function(props) {
  return (<Input placeholder={`请输入${props.name}`}/>)
}