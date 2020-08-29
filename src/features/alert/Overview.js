import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
import { useHistory } from 'react-router-dom'
import { Card, Statistic, Col, Radio, Tabs, message } from 'antd'
import { connect } from 'react-redux'
import { countAlert } from '../../common/request'

import './Overview.less'
const { TabPane } = Tabs;

const Overview = (props) => {
  // var baseData = [
  //   { name: '网络监控报警', alertNum: 0},
  //   { name: '基础资源监控', alertNum: 0},
  //   { name: 'NVR存储告警', alertNum: 0}
  // ]
  function callback(key) {
    setType(key)
  }
  var baseData = {
    '网络资源监控' : {title: '网络资源监控', value: '网络资源监控', count: 0, type: 'fpt'},
    '基础资源监控': {title: '基础资源监控', value: '基础资源监控', count: 0, type: 'fpt'},
    // 'NVR存储告警': {title: 'NVR存储告警', value: 'NVR存储告警', count: 0, type: 'fpt'},
    '政务网内场告警': {title: '内场告警', value: '政务网内场告警', count: 0, type: 'zpt'}
  }
  // const [status, setStatus] = useState(0)
  const [type, setType] = useState('fpt')
  // const statusR = [0, 255]
  const severityR = [3, 0]
  const [severity, setSeverity] = useState(3)
  const style = { padding: '5px 8px' }
  const { userAccountInfo } = props
  const history = useHistory()
  const [alertNums, setAlertNums] = useState([])
  useEffect(() => { // 近24小时 7tian
    console.log(severity)
    var params = {
      'apikey': 'e10adc3949ba59abbe56e057f2gg88dd',
      'groupBy': 'source',
      // 'status': 0,
      'severity': severity,
      'end': parseInt(new Date().getTime()),
      'begin': parseInt(new Date().getTime()-7*24*60*60*1000)
    }
    if(severity == 3){
      params.status =0 
    }
    if(severity == 0 && type !='zpt'){
      // params.alias = '主机上下线'
      params.name = 'host.up/down' 
    }
    countAlert(params).then(d => { 
      var ss = []
      d.forEach(element => {
        if (baseData[element.value]) {
          baseData[element.value].count = element.count
        }
      });
      for(var item in baseData){
        ss.push(baseData[item])
      }
      setAlertNums(ss) 
    })
  },[userAccountInfo, severity])

  return (
    <div className="alert-overview">
      <HeaderBar title="集中告警总览(近7天)" />
      <Tabs defaultActiveKey={type} style={{textAlign: "center"}} onChange={callback} centered="true" type="card">
        <TabPane tab="感知网" key="fpt" />
        <TabPane tab="政务网" key="zpt" />
      </Tabs>
      <div className="group">
        <Radio.Group value={severity} onChange={
          (e) => {
            setSeverity(e.target.value)
          }
        }>
          <Radio.Button value={severityR[0]}>新告警</Radio.Button>
          <Radio.Button value={severityR[1]}>已恢复</Radio.Button>
          {/* <Radio.Button value="small">新告警</Radio.Button> */}
        </Radio.Group>
      </div>
      <div style = {style}>
        {
            alertNums.map((o, i) => (
              o.type === type ? 
              <>
              <Col span={12} style={style} key={i}>
                <Card onClick={() => {
                    history.push('/alert/details?name='+o.value+'&status=' + severity)
                }}
                    className="statistic-card" key="alert_processed" bodyStyle={{ background: 'rgba(67, 236, 64, 0.37)','borderRadius': '10px', 'padding': '15px 2px 15px 20px' }}>
                    <Statistic
                    title={alertNums[i].title}
                    value={alertNums[i].count}
                    valueStyle= {{ color: alertNums[i].count > 0 ? 'rgb(255, 0, 0, 0.75)' : 'rgba(14, 218, 30, 0.55)', 'marginTop': '10px', 'fontWeight': 'bold','fontSize': '30px'}}
                    />
                </Card>
              </Col>
              </>
              :
              <>
              </>
            ))
        }
      </div>
      <FooterBar pathname={props.location.pathname} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userAccountInfo: state.user.userAccountInfo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators({ ...actions }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)