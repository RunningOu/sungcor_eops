import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
import { useHistory } from 'react-router-dom'
import { Card, Statistic, Col, Radio, Tabs, message } from 'antd'
import { connect } from 'react-redux'
import { countAlert, queryAlertList } from '../../common/request'

import './Overview.less'

const { TabPane } = Tabs;

const paramData = [
  { name: '网络资源监控', params: {name: 'host.connected/unreachable'}},
  { name: '基础资源监控', params: {name: 'host.up/down'}},
  { name: '机房动环告警', params: {source: '机房动环告警'}},
  { name: '政务网内场告警', params: {source: "政务网内场告警"}},
]

const baseData = {
  '网络资源监控' : {title: '网络资源监控', value: '网络资源监控', count: 0, type: 'fpt'},
  '基础资源监控': {title: '基础资源监控', value: '基础资源监控', count: 0, type: 'fpt'},
  '机房动环告警': {title: '机房动环告警',value: '机房动环告警', count: 0,type:'fpt'},
  // 'NVR存储告警': {title: 'NVR存储告警', value: 'NVR存储告警', count: 0, type: 'fpt'},
  '政务网内场告警': {title: '内场告警', value: '政务网内场告警', count: 0, type: 'zpt'}
}
const Overview = (props) => {

  function callback(key) {
    setType(key)
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

  useEffect(() => {
    let params = {
      'apikey': 'e10adc3949ba59abbe56e057f2gg88dd',
      'severity': severity,
      // 'end': parseInt(new Date().getTime()),
      'begin': parseInt(new Date().getTime() - 7*24*60*60*1000),
      'status': severity === 3 ?  0 : null
    }
    const promiseList = paramData.map(item => queryAlertList({...params,...item.params}))
    Promise.all(promiseList).then(res => {
      console.log('detail',res)
      let AlertNums = []
      res.forEach((item,index) => {
        baseData[paramData[index].name].count = item.data.total
        AlertNums.push(baseData[paramData[index].name])
      })
      if(AlertNums.length === paramData.length) {
        setAlertNums(AlertNums)
      }
    }).catch(e=>{
      setAlertNums(baseData)
    })
  },[severity])

  // useEffect(() => { // 近24小时 7tian
  //   console.log(severity)
  //   var ss =[]
  //   paramData.forEach((item) => {
  //     var params = {
  //       'apikey': 'e10adc3949ba59abbe56e057f2gg88dd',
  //       'severity': severity,
  //       'end': parseInt(new Date().getTime()),
  //       'begin': parseInt(new Date().getTime()-7*24*60*60*1000)
  //     }
  //     if(severity == 3){
  //       params.status =0
  //     }
  //     params = {...params,...item.params}
  //     queryAlertList(params).then(d => {
  //       baseData[item.name].count = d.data.total
  //       ss.push(baseData[item.name])
  //       if(ss.length == paramData.length){
  //         setAlertNums(ss)
  //       }
  //     })
  //   })
  // },[userAccountInfo, severity])

  // useEffect(() => {
  //   console.log('alertNums',alertNums)
  // },[alertNums])

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
          <Radio.Button value={severityR[0]} key={0}>新告警</Radio.Button>
          <Radio.Button value={severityR[1]} key={1}>已恢复</Radio.Button>
          {/* <Radio.Button value="small">新告警</Radio.Button> */}
        </Radio.Group>
      </div>
      <div style = {style}>
        {
            alertNums.map((o, i) => (
              o.type === type ?
              <>
              <Col span={12} style={style} key={i}>
                <Card
                    onClick={() => { history.push('/alert/details?name='+o.value +'&status=' + severity)}}
                    className="statistic-card"
                    key="alert_processed"
                    bodyStyle={{ background: 'rgba(67, 236, 64, 0.37)','borderRadius': '10px', 'padding': '15px 2px 15px 20px' }}
                    >
                    <Statistic
                    title={alertNums[i].title}
                    value={alertNums[i].count}
                    // valueStyle= {{ color: alertNums[i].count > 0 ? 'rgb(255, 0, 0, 0.75)' : 'rgba(14, 218, 30, 0.55)', 'marginTop': '10px', 'fontWeight': 'bold','fontSize': '30px'}}
                    valueStyle= {{ color: severity ===  3 && alertNums[i].count > 0  ? 'rgb(255, 0, 0, 0.75)' : 'rgba(14, 218, 30, 0.55)', 'marginTop': '10px', 'fontWeight': 'bold','fontSize': '30px'}}
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
      {/* <FooterBar pathname={props.location.pathname} /> */}
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