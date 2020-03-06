import React from 'react'
import { Tabs } from 'antd'
import { RepDeviceError, RepDeviceOnline, RepTkOverdue, RepTkRepair } from './charts/index'
import './Charts.less'

const chart = {
  "rep_device_error": <RepDeviceError />,
  "rep_device_online": <RepDeviceOnline />,
  "rep_tk_overdue": <RepTkOverdue />,
  "rep_tk_repair": <RepTkRepair />
}
const { TabPane } = Tabs
export default (props) => {
  console.log(props)
  return (
    <div className="home-component-charts">
      {props.role ? <Tabs >
        {props.role.map((tab) =>
          (<TabPane tab={tab.name} key={tab.code}> 
            {chart[tab.code] || null}
          </TabPane>))}
      </Tabs> : null}

    </div>
  )
}