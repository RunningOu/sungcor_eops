import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import { Statistic, Card } from 'antd';
import { useHistory } from 'react-router-dom'
import { USER_INFO_ID, MANAGE_ID } from '../../../config'
import { queryDeviceList, queryOrderList, countOnlienRate, countCameraOnlineRate ,getCountTodayTicket ,getCountOverdueTicket} from '../../../common/request'
import {local_get} from '../../../utils'
import './Statistic.less'

export default (props) => {
  const { role, userInfo } = props
  const history = useHistory()
  const [overdueFinished, setOverdueFinished] = useState(0)
  const [overdueUnfinished, setOverdueUnFinished] = useState(0)
  const [todayCount,setTodayCount] = useState(0)
  const [todayResult,setTodayResult] = useState(0)
  // const [deviceError, setDeviceError] = useState(0)
  const [onlineRate, setOnlineRate] = useState(0)
  const [cameraOnlineRate, setCameraOnlineRate] = useState(0)

  const OrderConfig = userId => [
    [{ key: "executor", value: userId, operator: "IN" }, { key: "status", value: "1,2", operator: "IN" }, { key: "formData.sfbx", value: "wgq", operator: "EQ" }],
    [{ key: "overdue", value: "1", operator: "IN" }, { key: "formData.sfbx", value: "wgq", operator: "EQ" }, { key: "executor", value: userId, operator: "IN" }], // 执行人有他的逾期
    [{ key: "status", value: "1,2", operator: "IN" }, { key: "formData.sfbx", value: "wgq", operator: "EQ" }], // 超级管理员 统计 待办总数
    [{ key: "overdue", value: "1", operator: "IN" }, { key: "formData.sfbx", value: "wgq", operator: "EQ" }] // 超级管理员 统计 所有逾期
  ]
  const tabsConfig = [
    [{field: 'cameraState', value: 'using', operator: 'EQ'}],
    [{fieldName: 'cameraState', value: 'maintenanceInfo', operator: 'EQ'}],
    [{field: 'cameraState', value: 'demolish', operator: 'EQ'}],
  ]
  useEffect(() => {
    var tattrs=[]
    var oAttrs=[]
    // 超级管理员 或者 pcs
    if(!userInfo.roleName) return
    if(userInfo.roleName === '超级管理员' || local_get(USER_INFO_ID).userId === MANAGE_ID){
      tattrs = [...OrderConfig(userInfo.userId)[2]]
      oAttrs = [...OrderConfig(userInfo.userId)[3],{key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ"}]
    }else{
      tattrs = [...OrderConfig(userInfo.userId)[0]]
      oAttrs = [...OrderConfig(userInfo.userId)[1],{key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ"}]
    }
    let conditions = [ ...tabsConfig[1]]
    if(['派出所人员', '设备厂商'].includes(userInfo.roleName)) {
      if(userInfo.depts.length) {
        if(userInfo.roleName === '派出所人员') conditions.push({ field: 'pcs', value: userInfo.depts.map(dep => dep.id), operator: 'IN' })
        if(userInfo.roleName === '设备厂商') conditions.push({ field: 'whcs', value: userInfo.depts.map(dep => dep.id), operator: 'IN' })
      }
    }
    if(userInfo.userId){
      // 待办个数
      // queryOrderList({
      //   'model': {'attrs':tattrs},
      //   "pageNum": 1,
      //   "pageSize": 1
      // }).then((d) => {
      //   setTodo(d.count)
      // })
        // .catch((e) => { })
      // 逾期
      // queryOrderList({
      //   'model': {'attrs': oAttrs},
      //   "pageNum": 1,
      //   "pageSize": 1
      // }).then((d) => {
      //   setOverdue(d.count)
      // })
      //   .catch((e) => { })
      // 总设备在线率
      countOnlienRate().then((data) => {
        if(data.result){
          setOnlineRate(data.result.rate)
        }
      })
      // 摄像机在线率
      countCameraOnlineRate().then((data) => {
        if(data.result){
          setCameraOnlineRate(data.result.rate)
        }
      })
      //今日新增和处理
      getCountTodayTicket().then(res => {
        if(res.code === 200 && res.result) {
          setTodayCount(res.result.count)
          setTodayResult(res.result.complete)
        }
      })
      //逾期未完成和已完成
      getCountOverdueTicket().then(res=>{
        console.log('逾期未完成',res)
        if(res.code === 200 && res.result) {
          setOverdueFinished(res.result.wcOverdue)
          setOverdueUnFinished(res.result.wwcOverdue)
        }
      })
    }
  }, [userInfo])

  const render = () => {
    if(role) {
      let newRole = [...role]
      newRole.splice(1,0,{name:"逾期公告",icon: '/',path: '/',code:'overdue_total'})
      const cp = {
        "overdue_myToDo":
        <Card
        key='今日新增/处理'
        onClick={() => {
            history.push('/order/ProjectSpread/todayAdd')
        }}
          className='statistic-card' key="overdue_myToDo">
          <Statistic
            title="今日新增/处理"
            value={todayCount}
            valueStyle={{ color: '#ffa125' }}
            suffix={'/ '+todayResult}
          />
          <img src={require('../../../assets/home/statistic01.png')} alt="图标"/>
        </Card>,
        "overdue_total":
        <Card
        key='逾期公告'
        onClick={() => {
          history.push('/order/ProjectSpread/overdue')
        }}
        className="statistic-card"
        >
          <Statistic
          title="逾期公告"
          value={overdueUnfinished}
          valueStyle={{color:'#ffa125'}}
          suffix={'/ '+overdueFinished}
          />
          <img src={require('../../../assets/home/statistic06.png')} alt="图标" />
        </Card>,
        "alert_processed":
        <Card
        key='告警/已处理'
        onClick={() => {
        }}
          className="statistic-card" key="alert_processed">
          <Statistic
            title="告警/已处理"
            value={18}
            valueStyle={{ color: '#f00' }}
            suffix="/ 20"
          />
          <img src={require('../../../assets/home/statistic02.png')} alt="图标"/>
        </Card>,
        "DeviceOnline":
        <Card
        key='总设备在线率'
        onClick={() => {
         //history.push('../../../features/deviceOnline/DeviceShow')
         history.push('/deviceOnline/DeviceShow')
        }}
          className="statistic-card" key="DeviceOnline">
          <Statistic
            title="总设备在线率"
            value={onlineRate}
            precision={2}
            valueStyle={{ color: '#3fdaa0' }}
            suffix="%"
          />
          <img src={require('../../../assets/home/statistic03.png')} alt="图标"/>
        </Card>,
        // "DeviceError": <Card onClick={() => {
        //   history.push('/device?state=2')
        // }}
        //   className="statistic-card" key="DeviceError">
        //   <Statistic
        //     title="摄像机异常数"
        //     value={deviceError}
        //     valueStyle={{ color: '#ffa125' }}
        //     // suffix="/ 180"
        //   />
        //   <img src={require('../../../assets/home/statistic04.png')} alt="图标"/>
        // </Card>,
        "DeviceError": 
        <Card
        key='摄像机在线率'
        onClick={() => {
          // history.push('/deviceOnline/DeviceShow?state=camera')
          history.push('./deviceOnline/CameraShow')
        }}
          className="statistic-card" key="DeviceError">
          <Statistic
            title="摄像机在线率"
            value={cameraOnlineRate}
            valueStyle={{ color: '#3fdaa0' }}
            suffix="%"
          />
          <img src={require('../../../assets/home/statistic05.png')} alt="图标"/>
        </Card>
      }
      return newRole ? newRole.map(c => cp[c.code]) : null
    }
  }


  return (
    <div className="home-components-statistic">
      {render()}
    </div>
  )
}
