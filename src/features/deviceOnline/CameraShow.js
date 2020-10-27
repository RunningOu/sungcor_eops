import React, { useState, useEffect } from 'react'
import { HeaderBar } from '../common'
import { useHistory } from 'react-router-dom'
import {Input,Tabs,Layout,Card,Col,Row} from 'antd'
import CameraRep from './components/cameraRep'
import { countOnlineGroupByType } from '../../common/request'

import './CameraShow.less'
const { Content } = Layout;
const { TabPane } = Tabs;
const tabs = [
    {title: "摄像机", key: "camera"}
    // {title: "公安分局",key:"公安分局"},
    // {title: "社会面",key:"shehuimian"},
]
// {title: "摄像机", key: "camera"}
const CameraShow = (props) => {
const { location: { search } } = props
const style = { padding: '0px 4px', boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.2)' };
const history = useHistory()
const [onlineState, setOnlineState] = useState(new URLSearchParams(search).get('state') || "camera")//默认选中摄像机
const [cardList, setCardList] = useState([])

  function callback(key) {
    setOnlineState(key)
  }
  useEffect(() => {
    countOnlineGroupByType(onlineState).then((data) => {
        if(data) {
          const { result } = data
          console.log('camera',result)
          setCardList(result)
        }
    })
  }, [onlineState])
  return (
    <div className="CameraShow-details">
     <HeaderBar title="摄像机在线率" />
     <Content className="CameraShow-headtab">
            <Tabs defaultActiveKey={onlineState} onChange={callback} type="card">
                {tabs.map((tab) => (<TabPane tab={tab.title} key={tab.key} />))}
            </Tabs>
            <div className="CameraShow-content">
                {
                    cardList.map((item, i) => (
                    <Col span={12} key={i}  onClick={() => {
                        history.push('/deviceOnline/ServerIP?code='+item.code+'&name='+item.name+'&type='+ onlineState)
                    }}>
                        <Card style={style}  bordered={true} >
                            <div>{item.name}</div>
                            <div>总数：{item.total}</div>
                            <div><span className="online-text">在线：{item.online}</span>/<span className="outline-text">离线：{item.fail}</span></div>
                        </Card>
                    </Col>
                    ))
                }
                {/* <CameraRep /> */}
            </div>
      </Content>

    </div>
  )
}


export default CameraShow