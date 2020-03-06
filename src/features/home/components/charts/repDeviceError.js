import React from 'react'
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts'

const data = [
  { name: '监控设备', error: 25 },
  { name: '视频设备', error: 15 },
  { name: '办公设备', error: 17 },
]

const cols = {
  error: { alias: '故障数量' },
  name: { alias: '设备种类'}
}

export default () => {
  return (
    <Chart height={250} data={data} scale={cols} forceFit padding="auto">
      <Axis name="genre" title />
      <Axis name="sold" title />
      <Tooltip />
      <Geom type="interval" position="name*error" color="name" />
    </Chart>
  )
}