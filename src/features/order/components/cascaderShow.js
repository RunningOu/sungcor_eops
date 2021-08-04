import React, { useState, useEffect } from 'react'
import { Descriptions,Cascader } from 'antd'
import _ from 'lodash'
export default function(props) {
//   console.log(props)
  const [N, setN] = useState([])
  function For (arr, key) {
    arr.forEach(item => {
        if (item.value == props.default_value[key]) {
            N.push(item.label)
            if (item.children) {
                For(item.children, key + 1)
            } else {
                // setN(N1)
            }
        }
    })
  }
  useEffect(() => {
    if (props.default_value) {
        props.default_value.forEach((item, index) => {
            props.cascade.forEach(val => {
                if (val.value == item) {
                    N.push(val.label)
                    For(val.children, index + 1)
                }
            })
            // show = _.find(props.cascade, o => o.value === element)
        });
      }
  },[props])

//   const show = _.find(props.cascade, o => o.value === props.default_value)
  return (
    <Descriptions.Item label={props.name} key={props.id} span={3}>
        {/* <Cascader options={props.cascade} defaultValue={props.default_value} /> */}
      <span >{N ? N.join('/') : ''}</span>
    </Descriptions.Item>
  )
}