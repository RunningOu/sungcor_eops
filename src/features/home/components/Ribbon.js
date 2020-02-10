import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Carousel } from 'antd';
import { IconFont } from '../../common';
import './Ribbon.less';

const base = {
  "MyToDo": { name: '待办工单', icon: (<IconFont type="iconweixiujilu" />), path: { pathname: './order', query: { state: 1, number: 8 } } },
  "MyFlow": { name: '参与工单', icon: (<IconFont type="iconcanyu" />), path: { pathname: './order', query: { state: 2, number: 11 } } },
  "Overdue": { name: '逾期工单', icon: (<IconFont type="iconyiyuqi" />), path: { pathname: './order', query: { state: 4, number: 3 } } },
  "Finish": { name: '完成工单', icon: (<IconFont type="iconwancheng" />), path: { pathname: './order', query: { state: 3, number: 15 } } },
  "FaultyEquipment": { name: '故障设备', icon: (<IconFont type="iconguzhang" />), path: { pathname: './device', query: { state: 3, number: 8, title: '故障设备' } } },
  "Overview": { name: '总览报表', icon: (<IconFont type="iconbaobiaobiaoweiguanli" />), path: './tables' },
  "Alert": { name: '告警列表', icon: (<IconFont type="iconweichuligaojing" />), path: './rmon' }
}

export default function (props) {
  const { role } = props
  const [fButton, setFButton] = useState([[1, 2, 3, 4, 5, 6]])
  const history = useHistory()
  useEffect(() => {
    if (role && role.length) {
      let orders = []
      role.forEach((item, index) => {
        const page = Math.floor(index / 6)
        if (!orders[page]) orders[page] = []
        orders[page].push(item)
      })
      setFButton(orders)
    }
  }, [role])

  return (
    <div className='home-components-ribbon'>
      <Carousel
        dotStyle={{ backgroundColor: "#eeeeee" }}
        dotActiveStyle={{ backgroundColor: "#002157" }}
      >
        {fButton.map((o, i) => (
          <div key={i}>
            <div className='ribbon_page' >
              {o.map((list,i) => {
                const itemKey = base[list.code] || {}
                return (
                  <div className='ribbon_fb' key={itemKey.name || i}>
                    <button onClick={() => { history.push(itemKey.path) }}>{itemKey.icon || '/'}</button>
                    <p>{itemKey.name || ''}</p>
                  </div>
                )
              }
              )}
            </div>
          </div>))
        }
      </Carousel>
    </div>
  )
}