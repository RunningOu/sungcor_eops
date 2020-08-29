import React from 'react'
import { Descriptions } from 'antd'
import _ from 'lodash'
export default function(props) {
  const show = _.find(props.params, o => o.value === props.default_value)
  return (
    <Descriptions.Item label={props.name} key={props.id} span={3}>
      <span style={{color: show && show.color ? show.color : null}}>{show && show.label ? show.label : ''}</span>
    </Descriptions.Item>
  )
}