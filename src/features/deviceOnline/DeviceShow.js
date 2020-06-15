import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
import { useHistory } from 'react-router-dom'
import {Input,Tabs,Layout,Card,Col,Row} from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import { formatDate, TimeToHours } from '../../utils'
import { queryAlertList } from '../../common/request'

import './DeviceShow.less'
const { Header, Footer, Sider, Content } = Layout;
const { TabPane } = Tabs;
const { Search } = Input;
const DeviceShow = (props) => {
const { location: { search } } = props
const history = useHistory()
function callback(key) {
    console.log(key);
  }
  return (
    <div className="DeviceShow-details">
     <HeaderBar title="设备在线率" />
     <Content class="device-headtab">
            <Tabs onChange={callback} type="card">
                <TabPane tab="服务器" key="1">
                        <div class="device-content">
                          <div class="device-content-body">
                            <div className="site-card-wrapper">
                                <Row gutter={6}>
                                <Col span={12}  onClick={() => {history.push('/deviceOnline/ServerIP')}}>
                                    <Card  bordered={true} >
                                <div class="device-item-title">PVG</div>   <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                    </Card>
                                </Col>
                                <Col span={12} onClick={() => {history.push('/deviceOnline/ServerIP')}}>
                                    <Card  bordered={true}>
                                    <div>M60</div>   <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                    </Card>
                                </Col>
                                <Col span={12} onClick={() => {history.push('/deviceOnline/ServerIP')}}>
                                    <Card  bordered={true}>
                                    <div>宝康服务器</div>  <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                    </Card>
                                </Col>
                                <Col span={12} onClick={() => {history.push('/deviceOnline/ServerIP')}}>
                                    <Card  bordered={true}>
                                    <div>东方网力服务器</div>  <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                    </Card>
                                </Col>
                                </Row>
                            </div>
                          </div>
                        </div>
                </TabPane>
                <TabPane tab="网络设备" key="2">
                            <div class="device-content">
                                    <div className="site-card-wrapper">
                                        <Row gutter={6}>
                                        <Col span={12}  onClick={() => {history.push('/deviceOnline/ServerIP')}}>
                                            <Card  bordered={true} >
                                        <div>Network</div>   <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card  bordered={true}>
                                            <div>Bridge</div>   <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card  bordered={true}>
                                            <div>Router</div>  <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                            </Card>
                                        </Col>
                                        <Col span={12}>
                                            <Card  bordered={true}>
                                            <div>Gateway</div>  <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                            </Card>
                                        </Col>
                                        </Row>
                                    </div>
                            </div>
                </TabPane>
                <TabPane tab="存储设备" key="3">
                                <div class="device-content">
                                    <div className="site-card-wrapper">
                                            <Row gutter={6}>
                                            <Col span={12}  onClick={() => {history.push('/deviceOnline/ServerIP')}}>
                                                <Card  bordered={true} >
                                            <div>DAS</div>   <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                                </Card>
                                            </Col>
                                            <Col span={12}>
                                                <Card  bordered={true}>
                                                <div>SAN</div>   <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                                </Card>
                                            </Col>
                                            <Col span={12}>
                                                <Card  bordered={true}>
                                                <div>NAS</div>  <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                                </Card>
                                            </Col>
                                            </Row>
                                        </div>
                                </div>
                </TabPane>
                <TabPane tab="摄像机" key="4">
                <div class="device-content">
                         <div className="site-card-wrapper">
                                            <Row gutter={6}>
                                            <Col span={12}  onClick={() => {history.push('/deviceOnline/ServerIP')}}>
                                                <Card  bordered={true} >
                                            <div>CCD</div>   <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                                </Card>
                                            </Col>
                                            <Col span={12}>
                                                <Card  bordered={true}>
                                                <div>CMOS</div>   <div><span class="online-text">在线:30</span>/<span class="outline-text">离线:2</span></div>
                                                </Card>
                                            </Col>
                                            </Row>
                                        </div>
                                </div>
                </TabPane>
            </Tabs>
      </Content>

    </div>
  )
}


export default DeviceShow