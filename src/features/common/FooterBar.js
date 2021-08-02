import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Icon, Card, Col, Modal } from 'antd';
import Alert from './Alert'
import OrderAlert from './OrderAlert'

import { queryOrderTicketModel, queryOrderList } from '../../common/request'
import orderSearch from '../order/mock/orderSearch'
import { USER_INFO_ID, MANAGE_ID } from '../../config'
import { local_get } from '../../utils'


import './FooterBar.less'

const footerBar = [
  {name: '首页', route: '/', icon: (<Icon style={{ fontSize: '22px' }} type="home" />)},
  {name: '工单', route: '/order', icon: (<OrderAlert style={{fontSize: '22px'}} />)},
  // {name: '资产', route: '/device', icon: (<Icon style={{ fontSize: '22px' }} type="codepen" />)},
  {name: '告警', route: '/alert/overview', icon: (<Alert style={{fontSize: '22px'}} />)},
  // {name: '监控', route: '/rmon', icon: (<Icon style={{ fontSize: '22px' }} type="monitor" />)},
  {name: '个人', route: '/user', icon: (<Icon style={{ fontSize: '22px' }} type="user" />)},
]

const localCache = local_get(USER_INFO_ID) || ''

export default (props) => {
  const { userInfo, pathname } = props
  const userInfoL = useState(local_get(USER_INFO_ID) || '')
  let history = useHistory()
  const style = { padding: '5px 8px' };
  const [orderModal, setOrderModal] = useState([{todo:0},{todo:0},{todo:0}])
  const [visible, setVisible] = useState(false)
  // const modelList= [{id:"7ebd1cae5f4a46d6bee4e00464ccae90",name:"视频设备报修"},{id:"23e70ac88cc64189bb8129a9bd1ada10",name:"综合设备报修"}] // 公司

  const selectList = {
    'todo': (modelId) => [
      // { key: "executor", value: userInfo ? userInfo.userId : userInfoL.userId, operator: "IN" },
      { key: "executor", value: userInfoL[0].userId, operator: "IN" },
      { key: "status", value: "1,2", operator: "IN" },
      { key: "modelId", value: modelId, operator: "EQ" }
    ],
    'overdue': (modelId) => [
      { key: "overdue", value: "1", operator: "IN" },
      { key: "modelId", value: modelId, operator: "EQ" }
    ]
  } // 查询条件

  function handleCancel(e) {
    setVisible(false)
  }

  useEffect(() => {
    // if (visible) {
      var mo = []
      queryOrderTicketModel().then(d => {
        if (d.length) {
          // setOrderModal(d)
          mo = d
          d.forEach((item,index) => {
            let todoo = selectList.todo(item.id)
            let overdue = selectList.overdue(item.id)
            if (orderSearch['视频报修'].modelId === item.id) {
              if(MANAGE_ID === userInfoL[0].userId) {
                todoo.push({key: "formData.sfbx", value: "gqsh", operator: "EQ"}) // 视频报修 图像组管理员特殊处理
              } else {
                todoo.push({key: "formData.sfbx", value: "wgq", operator: "EQ"})
              }
              overdue.push({key: "formData.sfbx", value: "wgq", operator: "EQ"})
            }
            if (userInfoL[0].userId !== MANAGE_ID) {
              overdue.push({ key: "executor", value: userInfoL[0].userId, operator: "IN" }) // 挂起 & 逾期 / 不是图像组管理员 添加参数
            }
            // 待办个数
            queryOrderList({
              'model': {'attrs': todoo},
              "pageNum": 1,
              "pageSize": 1
            }).then((d) => {
              mo[index].todo = d.count
              // setOrderModal(mo)
            })
            // 逾期个数
            queryOrderList({
              'model': {'attrs': overdue},
              "pageNum": 1,
              "pageSize": 1
            }).then((d) => {
              mo[index].overdue = d.count
              // setOrderModal(mo)
            })

          })
          setTimeout(() => {
            setOrderModal(mo)
          },400)
        }
      })
    // }
  }, [visible,pathname])
  return (
    <div className='foot-bar'>
    <Modal
    title={'选择工单类型'}
    className="foot-model"
    centered
    footer={null}
    bodyStyle={{height: 'calc(100vh - 127.5px - 76px)', padding: '0px'}}
    visible={visible}
    onCancel={handleCancel}
    >
      <div>
                {orderModal.map((modal,index) => (
                  <Col span={12} style={style} key={index}>
                  <Card key={modal.id} bodyStyle={{background: '#fff', border: '1px solid rgb(119, 174, 254, 0.3)', boxShadow: '3px 3px 4px 0px rgba(119, 174, 254,.1)', 'borderRadius': '10px', 'padding': '15px 2px 15px 20px' }} onClick={() => {
                    setVisible(false)
                    history.push(`order?modelId=${modal.id}&modelName=${modal.name}`)
                    }}>
                    <p>
                      <span className="modal-name">{modal.name}</span>
                    </p>
                    <p>待办工单：
                      <span className="modal-todo">
                        {modal.todo}
                      </span>
                    </p>
                    <p>逾期工单：<span className="modal-overdo">{modal.overdue}</span></p>
                  </Card>
                  </Col>
                ))}
              {/* </div> */}
       </div>
    </Modal>
      <footer className='common-footer-bar'>
        {footerBar.map((val, i) => (
          <div
            key={val.name}
            className={`footer-btn${props.pathname === val.route ? ' action' : ''}`}
            onClick={() => {
              val.name == '工单' ? setVisible(true) : history.push(val.route)
            }}>
            {val.icon}<br/>{val.name}
          </div>
        ))}
      </footer>
    </div>
  )
}