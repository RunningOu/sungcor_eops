import React from 'react'
import { Descriptions , Collapse } from 'antd'

const { Panel } = Collapse

const OrderBuilder = (props) => {
  const { meta,order } = props
  console.log('OrderBuilder',props)

  function render(item) {
    if (item.code === 'overdueNotify' || item.code === 'resource') {
      return null
    }
    return item.widget ? item.widget(item) : null
  }
  return (
        <Descriptions size="middle">
          <Descriptions.Item label='' key={props.id} >
            <h3 style={{color: "#0e6dfb"}}>{'基础信息'}</h3>
          </Descriptions.Item>
          {(meta || []).map(render)}
          <Descriptions.Item label='' key={22} >
            {/* <h3 style={{color: "#0e6dfb"}}>{props.value}</h3> */}
          </Descriptions.Item>
        </Descriptions>
  )
}

export default OrderBuilder