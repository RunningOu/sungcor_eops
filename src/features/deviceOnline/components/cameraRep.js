import React,{ useState , useEffect } from 'react'
import { Tabs,Table} from 'antd'

const { TabPane } = Tabs

const CameraRep = () => {
    const [currentTab,setCurrentTab] = useState('公安分局')

    console.log(currentTab)
    const tabsChange = (e) => {
      setCurrentTab(e)
    }

    return (
      <div>
        <Tabs size='small' defaultActiveKey={currentTab} onChange={tabsChange}>
          <TabPane tab="公安分局" key="公安分局">公安分局</TabPane>
          <TabPane tab="社会面接入" key="社会面接入">社会面接入</TabPane>
        </Tabs>
      </div>
    )
}


export default CameraRep