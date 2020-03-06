import React from 'react'
import { Chart, Geom, Axis, Tooltip } from 'bizcharts'

const data = [
  {y: "一月", yq: 1.2},
  {y: "二月", yq: 1.6},
  {y: "三月", yq: 2.1},
  {y: "四月", yq: 3.4},
  {y: "五月", yq: 1},
  {y: "六月", yq: 0.8},
  {y: "七月", yq: 1.2},
  {y: "八月", yq: 1.4},
  {y: "九月", yq: 1.2},
  {y: "十月", yq: 1.2},
  {y: "十一月", yq: 1.3},
]

const cols = {
  y: { alias: '月度' },
  yq: { alias: '逾期指数'}
}

export default () => {
  return (
    <Chart height={250} data={data} scale={cols} forceFit padding="auto">
      <Axis name="y" />
      <Axis name="yq" />
      <Tooltip />
      <Geom type="line" position="y*yq" size={2} />
      <Geom type="area" position="y*yq" />
    </Chart>
  )
}