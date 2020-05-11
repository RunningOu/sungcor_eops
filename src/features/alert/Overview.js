import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
import { useHistory } from 'react-router-dom'
import { Card, Statistic, Col } from 'antd'
import { connect } from 'react-redux'
import { countAlert } from '../../common/request'

import './Overview.less'

const Overview = (props) => {
  var baseData = [
    { name: '网络监控报警', alertNum: 0},
    { name: '基础资源监控', alertNum: 0},
    { name: '视频监控报警', alertNum: 0},
    { name: '3D动环设备', alertNum: 0},
  ]
  const style = { padding: '5px 8px' };
  // const { userAccountInfo } = props
  const history = useHistory()
  const [alertNums, setAlertNums] = useState(baseData)
  useEffect(() => {
    countAlert({apikey: 'e10adc3949ba59abbe56e057f2gg88dd', groupBy: 'source', status: 0}).then(d => { setAlertNums(d) })
  })
  return (
    <div className="alert-overview">
      <HeaderBar title="集中告警总览" />
      <div style = {style}>
        {
            alertNums.map((o, i) => (
                <Col span={12} style={style} key={i}>
                <Card onClick={() => {
                    console.log(o)
                    history.push('/alert/details?name='+o.value)
                }}
                    className="statistic-card" key="alert_processed" bodyStyle={{ background: 'rgba(67, 236, 64, 0.37)','borderRadius': '10px', 'padding': '15px 2px 15px 20px' }}>
                    <Statistic
                    title={alertNums[i].value}
                    value={alertNums[i].count}
                    valueStyle= {{ color: alertNums[i].count>0? 'rgb(255, 0, 0, 0.75)' :'rgba(14, 218, 30, 0.55)', 'marginTop': '10px', 'fontWeight': 'bold','fontSize': '30px'}}
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