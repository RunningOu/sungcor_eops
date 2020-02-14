import React from 'react'
import { Descriptions } from 'antd'
const OrderBuilder = (props) => {
  const { meta } = props
  function render(item) {
    return item.widget ? item.widget(item) : null
  }
  return (
    <Descriptions title="工单详情" size="middle">
      {meta.map(render)}
    </Descriptions>
  )
}

export default OrderBuilder