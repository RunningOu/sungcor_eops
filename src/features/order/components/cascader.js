import React, { useEffect, useState } from 'react'
import { Cascader } from 'antd'
export default function (props) {
  return (
    <Cascader options={props.cascade || props.params} defaultValue={props.form && props.form.fxbxgzlx && props.form.fxbxgzlx.length ? props.form.fxbxgzlx : []} placeholder={`请选择${props.name}`} />
  )
}