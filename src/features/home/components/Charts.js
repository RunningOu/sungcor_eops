import React from 'react'
import { Tabs } from 'antd'
import { RepDeviceError, RepDeviceOnline, RepTkType, RepTkRepair, RepTkXmmc } from './charts/index'
import './Charts.less'

const chart = {
  "rep_device_error": <RepDeviceError />, // 故障分布
  // "rep_device_online": <RepDeviceOnline />,
  // "rep_tk_overdue": <RepTkOverdue />,
  // "rep_tk_repair": <RepTkRepair />
  "rep_tk_type": <RepTkType />,
  "rep_tk_repair": <RepTkXmmc /> // 项目名称统计
}
const { TabPane } = Tabs
export default (props) => {
  console.log(props)
  return (
    <div className="home-component-charts">
      {props.role ? <Tabs >
        {props.role.map((tab) =>
        tab.name === '监控在线' ? '' : 
          (<TabPane tab={tab.name} key={tab.code}> 
            {chart[tab.code] || null}
          </TabPane>))}
      </Tabs> : null}

    </div>
  )
}