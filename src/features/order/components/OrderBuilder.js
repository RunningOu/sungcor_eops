import React, { useEffect } from 'react'
import { Descriptions , Collapse } from 'antd'

const { Panel } = Collapse

const shrinkageMap = {
  deviceIP: 'deviceIP',
  bxfs: 'bxfs',
  title: 'title',
  bxsj: 'bxsj',
  fxGzlx: 'fxGzlx',
  deviceKey: 'deviceKey',
  ticketDesc: 'ticketDesc'
}

const OrderBuilder = (props) => {
  const { meta, shrinkage , order } = props

  useEffect(() =>{
    console.log(props)
  }, [] )

  function render(item) {
    if (item.code === 'overdueNotify' || item.code === 'resource') {
      return null
    }

    //如果当前状态为折叠的话，过滤对应的标题
    if(shrinkage) {
     if(shrinkageMap[item.code]) {
       return item.widget ? item.widget(item) : null
     } else {
       return null
     }
    }
    return item.widget ? item.widget(item) : null
  }
  return (
        <Descriptions  size="middle">
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