import React from 'react';
import { useHistory } from 'react-router-dom'
import { Icon } from 'antd';
import './FooterBar.less'

export default (props) => {
  let history = useHistory();
  const footerBar = [
    {name: '首页', route: '/', icon: (<Icon style={{ fontSize: '22px' }} type="home" />)},
    {name: '工单', route: '/order', icon: (<Icon style={{ fontSize: '22px' }} type="snippets" />)},
    {name: '资产', route: '/device', icon: (<Icon style={{ fontSize: '22px' }} type="codepen" />)},
    {name: '监控', route: '/rmon', icon: (<Icon style={{ fontSize: '22px' }} type="monitor" />)},
    {name: '个人', route: '/user', icon: (<Icon style={{ fontSize: '22px' }} type="user" />)},    
  ]
  return (
    <footer className='common-footer-bar'>
      {footerBar.map((val, i) => (
        <div 
          key={val.name}
          className={`footer-btn${props.pathname === val.route ? ' action' : ''}`}
          onClick={() => {history.push(val.route)}}>
          {val.icon}<br/>{val.name}
        </div>
      ))}
    </footer>
  )
}