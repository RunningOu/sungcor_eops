import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
import { useHistory } from 'react-router-dom'
import { Card, Statistic, Col, Radio } from 'antd'
import { connect } from 'react-redux'
import { countAlert } from '../../common/request'

import './Overview.less'

const Overview = (props) => {
  var baseData = [
    // { name: '网络监控报警', alertNum: 0},
    // { name: '基础资源监控', alertNum: 0},
    // { name: '视频监控报警', alertNum: 0},
    // { name: '3D动环设备', alertNum: 0},
  ]
  const [status, setStatus] = useState(0)
  const statusR = [0, 255]
  const style = { padding: '5px 8px' };
  const { userAccountInfo } = props
  const history = useHistory()
  const [alertNums, setAlertNums] = useState(baseData)
  useEffect(() => { // 近24小时
    countAlert({apikey: 'e10adc3949ba59abbe56e057f2gg88dd', groupBy: 'source', 'status': status, 'end': parseInt(new Date().getTime()), 'start': parseInt(new Date().getTime()-24*60*60*1000) }).then(d => { 
      var ss = []
      d.forEach(element => {
        if (element.value === '网络资源监控' || element.value === '基础资源监控' || element.value === 'NVR存储告警') {
          ss.push(element)
        }
      });
      setAlertNums(ss) 
    })
  },[userAccountInfo, status])

  function handleSizeChange(){

  }
  return (
    <div className="alert-overview">
      <HeaderBar title="集中告警总览" />
      <div className="group">
        <Radio.Group value={status} onChange={
          (e) => {
            setStatus(e.target.value)
          }
        }>
          <Radio.Button value={statusR[0]}>新告警</Radio.Button>
          <Radio.Button value={statusR[1]}>已关闭</Radio.Button>
          {/* <Radio.Button value="small">新告警</Radio.Button> */}
        </Radio.Group>
      </div>
      <div style = {style}>
        {
            alertNums.map((o, i) => (
                <Col span={12} style={style} key={i}>
                  <Card onClick={() => {
                      history.push('/alert/details?name='+o.value+'&status=' + status)
                  }}
                      className="statistic-card" key="alert_processed" bodyStyle={{ background: 'rgba(67, 236, 64, 0.37)','borderRadius': '10px', 'padding': '15px 2px 15px 20px' }}>
                      <Statistic
                      title={alertNums[i].value}
                      value={alertNums[i].count}
                      valueStyle= {{ color: alertNums[i].count > 0 ? 'rgb(255, 0, 0, 0.75)' : 'rgba(14, 218, 30, 0.55)', 'marginTop': '10px', 'fontWeight': 'bold','fontSize': '30px'}}
                      />
                  </Card>
                </Col>
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