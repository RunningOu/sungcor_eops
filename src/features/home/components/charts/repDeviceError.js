import React, { useState, useEffect }  from 'react'
import { Chart, Geom, Axis, Tooltip } from 'bizcharts'
import { Card, Statistic, Col, Radio } from 'antd'
import { countByCode } from '../../../../common/request'
// const data = [
//   { name: '监控设备', error: 25 },
//   { name: '视频设备', error: 15 },
//   { name: '办公设备', error: 17 },
// ]

const cols = {
  error: { alias: '故障数量' },
  name: { alias: '设备种类'}
}
// var fxGzlxs = []
export default () => {
  const [cdata, setCdata] = useState([])
  const [status, setStatus] = useState('week')
  const statusR = ['week', 'month']
  useEffect(() => {
    // let errtype = [{ key: "status", value: "1,2", operator: "IN" }]
    countByCode('fxGzlx', status).then(data => {
      setCdata(data.data)
    })
  },[status])
  return (
    <div style={{padding: '0px 0px 50px 0px'}}>
      <Radio.Group value={status} onChange={
        (e) => {
          setStatus(e.target.value)
        }
      }>
        <Radio.Button value={statusR[0]}>近七天</Radio.Button>
        <Radio.Button value={statusR[1]}>近一个月</Radio.Button>
        {/* <Radio.Button value="small">新告警</Radio.Button> */}
      </Radio.Group>
      <Chart height={250} data={cdata} scale={cols} forceFit padding="auto">
        <Axis name="genre" title />
        <Axis name="sold" title />
        <Tooltip />
        <Geom type="interval" position="name*error" />
        {/* <Geom type="interval" position="name*error" color="name" /> */}
      </Chart>
    </div>
  )
}