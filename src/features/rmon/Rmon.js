import React from 'react'
import { Tabs, /* Input, Icon, Drawer, Tag, List, message */} from 'antd'
import { HeaderBar, FooterBar } from '../common'

const { TabPane } = Tabs
const tabs = [
  {title: '综合可视化', sub: 0},
  {title: '告警信息', sub: 1},
  {title: '设备状态', sub: 2},
  {title: '人员状态', sub: 3},
]

const Rmon = (props) => {
  return (
    <div>
      <HeaderBar title='运维数据监控'/>
      <Tabs defaultActiveKey="0">
        {tabs.map((tab) => (<TabPane tab={tab.title} key={tab.sub} />))}
      </Tabs>
      <FooterBar pathname={props.location.pathname}/>
    </div>
  )
}

export default Rmon