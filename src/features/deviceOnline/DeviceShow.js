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
    {title: "摄像机", key: "camera"}
   
]
// {title: "摄像机", key: "camera"}
const DeviceShow = (props) => {
const { location: { search } } = props
const style = { padding: '0px 4px', boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.2)' };
const history = useHistory()
const [onlineState, setOnlineState] = useState( new URLSearchParams(search).get('state') || "serve")//默认选中代办
const [cardList, setCardList] = useState([])
// const camara = [
//     {pcs: '公安分局', online: '21', nonline: '1'},
//     {pcs: '教育局', online: '21', nonline: '1'},
//     {pcs: '海事局', online: '21', nonline: '1'},
//     {pcs: '社会面复接', online: '21', nonline: '1'},
//     {pcs: '南桥镇', online: '21', nonline: '1'},
//     {pcs: '奉城镇', online: '21', nonline: '1'},
//     {pcs: '庄行镇', online: '21', nonline: '1'},
//     {pcs: '金汇镇', online: '21', nonline: '1'},
//     {pcs: '四团镇', online: '21', nonline: '1'},
//     {pcs: '青村镇', online: '21', nonline: '1'},
//     {pcs: '袥林镇', online: '21', nonline: '1'},
//     {pcs: '海湾镇', online: '21', nonline: '1'},
//     {pcs: '海湾旅游区', online: '21', nonline: '1'},
//     {pcs: '金海街道', online: '21', nonline: '1'},
//     {pcs: '西渡街道', online: '21', nonline: '1'},
//     {pcs: '奉浦街道', online: '21', nonline: '1'},
//     {pcs: '奉贤交警队', online: '21', nonline: '1'}
// ]
// const cc = [
//     {pcs: 'DAS', online: '21', nonline: '1'},
//     {pcs: 'SAN', online: '21', nonline: '1'},
//     {pcs: 'NAS', online: '21', nonline: '1'}
// ]
// const network = [
//     {pcs: 'Network', online: '21', nonline: '1'},
//     {pcs: 'Bridge', online: '21', nonline: '1'},
//     {pcs: 'Router', online: '21', nonline: '1'},
//     {pcs: 'Gateway', online: '21', nonline: '1'}
// ]
// const service = [
//     {pcs: 'PVG', online: '21', nonline: '1'},
//     {pcs: 'M60', online: '21', nonline: '1'},
//     {pcs: '宝康服务器', online: '21', nonline: '1'},
//     {pcs: '东方网力服务器', online: '21', nonline: '1'}
// ]
  function callback(key) {
    setOnlineState(key)
  }
  useEffect(() => {
    countOnlineGroupByType(onlineState).then((data) => {
        console.log(data)
        setCardList(data.result)
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
                            <div><span class="online-text">在线：{item.online}</span>/<span class="outline-text">离线：{item.fail}</span></div>
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