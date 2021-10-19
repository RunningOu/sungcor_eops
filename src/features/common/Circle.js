import React from 'react'
import "./Circle.less"

/*
Circle组件对状态小球进行了封装，实现了从内向外波动的动画效果
Circle组件接受两个参数
  status: 组件显示的状态，默认是success
  text: 组件的文本,如果不传就是不显示
*/

function getClassName (status) {
  let className = 'circle-dot circle-dot-processing-'
  return status ? `${className}${status}` : className
}

const Circle = ({status,text}) => {
  let circleClassName = getClassName(status)
  return (
    <div>
      <div className={circleClassName}></div>
      { text ?
      <span className="circle-text">{text}</span>
      : null }
    </div>
  )
}

export default Circle