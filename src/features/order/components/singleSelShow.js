import React from 'react'
import { Descriptions } from 'antd'
import _ from 'lodash'
export default function(props) {
  const show = _.find(props.params, o => o.value == props.default_value)
  let style = {}
  let label = ''
  console.log(show)
  if(show && show.color !== undefined){
    style = {color: show.color}
  }
  if(show && show.label){
    label = show.label
  }
  return (
    <Descriptions.Item label={props.name} key={props.id} span={3}>
      <span style={style}>{label}</span>
    </Descriptions.Item>
  )
}