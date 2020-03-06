import React from 'react'
// import { useHistory } from 'react-router-dom'
import { Statistic, Card } from 'antd';

import './Statistic.less'
export default (props) => {
  const { role } = props
  const render = () => {
    const cp = {
      "overdue_myToDo": <Card onClick={() => {
      }}
        className='statistic-card' key="overdue_myToDo">
        <Statistic
          title="逾期/待办"
          value={6}
          valueStyle={{ color: '#ffa125' }}
          suffix="/ 19"
        />
        <img src={require('../../../assets/home/statistic01.png')} alt="图标"/>
      </Card>,
      "alert_processed": <Card onClick={() => {
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
      "DeviceOnline": <Card onClick={() => {
      }}
        className="statistic-card" key="DeviceOnline">
        <Statistic
          title="设备在线率"
          value={99.3}
          precision={2}
          valueStyle={{ color: '#3fdaa0' }}
          suffix="%"
        />
        <img src={require('../../../assets/home/statistic03.png')} alt="图标"/>
      </Card>,
      "DeviceError": <Card onClick={() => {
      }}
        className="statistic-card" key="DeviceError">
        <Statistic
          title="设备异常数"
          value={20}
          valueStyle={{ color: '#ffa125' }}
          suffix="/ 180"
        />
        <img src={require('../../../assets/home/statistic04.png')} alt="图标"/>
      </Card>
    }
    return role ? role.map(c => cp[c.code]) : null
  }
  // const history = useHistory()
  return (
    <div className="home-components-statistic">
      {render()}
    </div>
  )
}
