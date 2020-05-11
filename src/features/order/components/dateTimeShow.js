import React from 'react'
// import moment from 'moment';
import { Descriptions } from 'antd'
const { Item } = Descriptions
export default function(props) {
  return (
    <Item label={props.name} key={props.id}>
      {/* {moment(props.default_value).format('YYYY-MM-DD HH:mm:ss')} */}
    </Item>
  )
}