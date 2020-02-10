import React from 'react'
import { Checkbox } from 'antd'

export default function(props) {
  return (<Checkbox.Group options={props.params}/>)
}