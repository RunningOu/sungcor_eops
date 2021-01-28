import React, { useState, useEffect } from 'react'
import { HeaderBar } from '../common'
import { useHistory } from 'react-router-dom'
import {Input,Tabs,Layout,Card,Col,Row} from 'antd'
import { countOnlineGroupByType } from '../../common/request'

import './DeviceShow.less'

const { Content } = Layout;
const { TabPane } = Tabs;
const tabs = [
    {title: "服务器", key: "serve"},
    {title: "网络设备", key: "network"},
    {title: "存储设备", key: "storage"},
    // {title: "摄像机", key: "camera"}

]
// {title: "摄像机", key: "camera"}
const DeviceShow = (props) => {
const { location: { search } } = props
const style = { padding: '0px 4px', boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.2)' };
const history = useHistory()
const [onlineState, setOnlineState] = useState(new URLSearchParams(search).get('state') || "serve")//默认选中代办
const [cardList, setCardList] = useState([])
  function callback(key) {
    setOnlineState(key)
  }
  useEffect(() => {
    countOnlineGroupByType(onlineState).then((data) => {
        if(data) {
          const { result } = data
          setCardList(result)
        }
    })
  }, [onlineState])
  return (
    <div className="DeviceShow-details">
     <HeaderBar title="设备在线率" />
     <Content className="device-headtab">
            <Tabs defaultActiveKey={onlineState} onChange={callback} type="card">
                {tabs.map((tab) => (<TabPane tab={tab.title} key={tab.key} />))}
            </Tabs>
            <div className="device-content">
                {
                    cardList.map((item, i) => (
                    <Col span={12} key={i}  onClick={() => {
                        history.push('/deviceOnline/ServerIP?code='+item.code+'&name='+item.name+'&type='+onlineState)
                        }}>
                        <Card style={style}  bordered={true} >
                            <div>{item.name}</div>
                            <div>总数：{item.total}</div>
                            <div><span className="online-text">在线：{item.online}</span>/<span className="outline-text">离线：{item.fail}</span></div>
                        </Card>
                    </Col>
                    ))
                }
            </div>
      </Content>

    </div>
  )
}


export default DeviceShow