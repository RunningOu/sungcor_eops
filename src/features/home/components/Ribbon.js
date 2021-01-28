import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Carousel } from 'antd';
import { IconFont } from '../../common';
import './Ribbon.less';

const base = {
  "Repairs" : {name: '设备报修', icon: (<IconFont type="iconchuangjianbiao" />), path: { pathname: '/order/create' }},
  "MyToDo": { name: '待办工单', icon: (<IconFont type="iconweixiujilu" />), path: { pathname: '/order?state=1' } },
  "MyFlow": { name: '参与工单', icon: (<IconFont type="iconcanyu" />), path: { pathname: '/order?state=2'} },
  "Overdue": { name: '逾期工单', icon: (<IconFont type="iconyiyuqi" />), path: { pathname: '/order?state=4'} },
  "Finish": { name: '完成工单', icon: (<IconFont type="iconwancheng" />), path: { pathname: '/order?state=3'} },
  // "FaultyEquipment": { name: '故障设备', icon: (<IconFont type="iconguzhang" />), path: { pathname: './device' } },
  "FaultyEquipment": { name: '设备在线率', icon: (<IconFont type="iconguzhang" />), path: { pathname: './deviceType' } },
  "Overview": { name: '总览报表', icon: (<IconFont type="iconbaobiaobiaoweiguanli" />)},
  "Alert": { name: '告警列表', icon: (<IconFont type="iconweichuligaojing" />)}
}

const Ribbon = function (props) {
  const { role } = props
  const [fButton, setFButton] = useState([[1, 2, 3, 4, 5, 6]])
  const history = useHistory()
  
  useEffect(() => {
    if (role && role.length) {
      let orders = []
      role.forEach((item, index) => {
        const page = Math.floor(index / 6)
        if (!orders[page]) orders[page] = []
        orders[page].push(item.name === '故障设备' ? {...item,name:'资产信息'} : item)
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
                    <button onClick={() => { history.push(itemKey.path.pathname)}}>{itemKey.icon || '/'}</button>
                    <p>{list.name || ''}</p>
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
export default Ribbon