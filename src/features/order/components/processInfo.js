import React, { useState,useEffect } from 'react'
import { Spin ,Timeline,Descriptions } from 'antd'
// import { getProcessInfo } from '../mock/processInfo'
import { getOrderProcessInfo,getOrderHangDifference } from '../../../common/request'
import orderSearch from '../mock/orderSearch'


import './processInfo.less'

export default function  (props) {
  const {order} = props
  const modelId = order.model_id
  const [processInfo, setProcessInfo] = useState([])
  const [orderTimestamp, setOrderTimestamp] = useState('')
  const [loading, setLoading] = useState(true)
  const [orderStatus,setOrderStatus] = useState(order.status)
  const [hangTime,setHangTime] = useState(0)

  const showProcessInfo = orderSearch['综合设备报修'].modelId !== modelId && orderSearch['奉贤基础资源报修'].modelId !== modelId


  //获取当前工单耗费的时间 单位为小时
  const getOrderCostTime = () => {
    let currentTime = new Date().valueOf()
    //完成的状态
    if(orderStatus === 3 || orderStatus === 7) {
      if(typeof orderTimestamp === 'number' && processInfo.length) {
        let hours =((new Date(replaceDate(processInfo[0].exectorTime)).valueOf())  - orderTimestamp - hangTime) / 1000 / 3600
        return Math.floor(hours)
      }
    } else {
      let hours = ( currentTime  - orderTimestamp - hangTime) / 1000 / 3600
      return Math.floor(hours)
    }
    return null
  }

  //获取流程进度条样式
  const getProcessStyle = () => {
    let width = getOrderCostTime()
    let color = ''
    if(!width) return null
    if(width >= 72) {
      width = 100
      color = 'rgb(245, 34, 25)'
    }
    if(width < 72) {
      width = (width / 72) * 100
      color = 'rgb(0, 255, 127)'
    }
    return {
      width: `${width}%`,
      backgroundColor:color,
      height: '15px',
      borderRadius: '10px',
      margin: '10px 0'
    }
  }

  //获取逾期流程进度条样式
  const getOverdueProcessStyle = () => {
    let costTime = getOrderCostTime()
    let color = 'rgb(7, 193, 96)'

    return {
      position: 'absolute',
      top: '-10px',
      zIndex: '888',
      left: 0,
      width: `${Math.round((72 / costTime) * 100)}%`,
      backgroundColor: color,
      height: '15px',
      borderRadius: '10px',
      margin: '10px 0',
      display: getOrderCostTime() >= 72 ? 'block':'none'
    }
  }

  useEffect(() => {
    getOrderHangDifference(order.id).then((res) => {
      if(res.code === 200) {
        setHangTime(res.result)
      }
    })
  },[])

  useEffect(() => {
    console.log(order)
    setLoading(true)
    getOrderProcessInfo(order.id).then(res => {
      console.log(res)
      if(res.code === 200 && res.result.length) {
        setLoading(false)
        let result = res.result.map((item,index) => {
          if(res.result[index + 1]) {
            item['difference'] = (new Date(replaceDate(item.exectorTime))).valueOf() - (new Date(replaceDate(res.result[index+1].exectorTime))).valueOf()
          }
          return item
        })
        setProcessInfo(result)
        setOrderTimestamp(((new Date(replaceDate(res.result[res.result.length-1].exectorTime))).valueOf()))
      }
    })
  },[])

  return (
    <>
      <div className="wrapper">
        <Spin spinning={loading}>
          {
            showProcessInfo ?
              order.status === 10 || (order.form.filter(i => i.code === 'sfbx'))[0] && order.form.filter(i => i.code === 'sfbx')[0]['default_value'] === 'ygq' ? null :
              <>
              <h3 className="title">实际耗时</h3>
              <div data-text={getOrderCostTime() >= 72 ? getOrderCostTime() + 'h' : '72h' } className="processWrapper">
                <div style={getProcessStyle()}></div>
                <div data-text={'72h'} style={getOverdueProcessStyle()} className="OverdueProcess"></div>
                <p style={{fontWeight: 'bolder'}}>{'耗时：' + getOrderCostTime() + '小时'}</p>
              </div>
              </>
            : <><h3 className="title">实际耗时</h3>
              <div data-text={getOrderCostTime() >= 72 ? getOrderCostTime() + 'h' : '72h' } className="processWrapper">
                <div style={getProcessStyle()}></div>
                <div data-text={'72h'} style={getOverdueProcessStyle()} className="OverdueProcess"></div>
                <p style={{fontWeight: 'bolder'}}>{'耗时：' + getOrderCostTime() + '小时'}</p>
              </div></>
          }

          <h3 className="title">操作记录</h3>
          <Timeline>
            {
              processInfo.map((item,index) => {
                return(<Timeline.Item
                  data-text={item.difference ? getProcessCostTime(item.difference)  :null}
                  key={item.id ? item.id : item.exectorTime}
                  className={`${item.difference ? 'TimeLineItemActive' : null } TimeLineItem`}
                  color={ index === 0 ? 'green': 'grey'}
                  >
                    <div>
                      <div style={{color: index === 0 ? '#07c160' : '#969799'}}>
                      <p>{item.exectorTime}【{item.activityName}】</p>
                      <p>处理人： {item.exectorName}</p>
                      <p>详情：{item.remark}</p>
                      {item.msg ? <p>备注：{item.msg}</p> : null}
                      </div>
                    </div>
                </Timeline.Item>)
              })
            }
          </Timeline>
        </Spin>
      </div>
    </>
  );
}


function getProcessCostTime (date)  {
  // 天数
  let day = Math.floor(date /1000/ 3600 / 24);
  // 小时
  let hr = Math.floor(date /1000/ 3600 % 24);
  // 分钟
  let min = Math.floor(date /1000/ 60 % 60);
  if(day) {
    return day + "天" + hr + "小时" + min + "分钟"
  }
  if(hr) {
    return hr + '小时' + min+'分钟'
  }
  if(min) {
    return min + '分钟'
  }
  return '1分钟'
}

//处理日期格式 ios系统下需要 yy/mm/格式
function replaceDate (string) {
  let newString = string.replace(/-/g, '/')
  return newString
}