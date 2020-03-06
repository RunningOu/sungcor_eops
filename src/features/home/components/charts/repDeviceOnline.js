import React from 'react'
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label } from 'bizcharts'
import DataSet from '@antv/data-set'
const data = [
  {
    item: "在线",
    count: 1240
  },
  {
    item: "离线",
    count: 21
  },
];
export default () => {
  const { DataView } = DataSet
  const dv = new DataView();
  dv.source(data).transform({
    type: "percent",
    field: "count",
    dimension: "item",
    as: "percent"
  });
  const cols = {
    percent: {
      formatter: val => {
        val = Math.floor(val * 1000) / 10 + "%";
        return val;
      }
    }
  };
  return (
      <Chart
          height={250}
          data={dv}
          scale={cols}
          padding={'auto'}
          forceFit
        >
          <Coord type="theta" radius={0.75} />
          <Axis name="percent" />
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => {
                return item.point.item + ": " + val;
              }}
            />
          </Geom>
    </Chart>
  )
}