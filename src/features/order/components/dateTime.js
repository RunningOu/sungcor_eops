import React from 'react'
import { DatePicker } from 'antd'
export default function(props) {
  console.log(props)
  return (
    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
  )
}