import React, { useState, useEffect }  from 'react'
import { Radio, Tag, Table } from 'antd'
import { countTicketByDevType } from '../../../../common/request'
import OrderModel from '../model/orderModel'
export default () => {
    const [cdata, setCdata] = useState([])
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('today')
    const statusR = ['today', 'all']
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      countTicketByDevType(status).then(data => {
          let sumTotal = 0
          let sumUndone = 0
          let sumOverdue = 0
          console.log('内场工单总览',data)
          // data.result.forEach(element => {
          //   sumTotal += element.total
          //   sumUndone += element.undone
          //   sumOverdue += element.overdue
          // })
          // setCdata([{'name': '总计', 'total': sumTotal, 'undone': sumUndone, 'overdue': sumOverdue}, ...data.result])
          setCdata(data.result)
          console.log('cdata',cdata)
        })
    },[status])
    var columns = [
        {
            title: '设备名称',
            dataIndex: 'name',
            key: 'name',
          },{
            title: '工单总数',
            dataIndex: 'total',
            key: 'total',
            width: 72,
            render: (overdue) => (
                <Tag color='blue' key={overdue}>
                    {overdue}
                </Tag>
            )
          },{
            title: '未完成',
            dataIndex: 'undone',
            key: 'undone',
            render: (overdue, record, index) => (
                <Tag color='green' key={overdue} onClick = {() => {
                  console.log(record, index)
                  setTitle(record.name)
                  setType('未完成')
                  setVisible(true)
                }}>
                    {overdue}
                </Tag>
            )
          },{
            title: '逾期',
            dataIndex: 'overdue',
            key: 'overdue',
            render: (overdue, record, index) => (
                <Tag color='red' key={overdue} onClick = {() => {
                  console.log(record, index)
                  setTitle(record.name)
                  setType('逾期')
                  setVisible(true)
                }}>
                  <div >
                    {overdue}
                  </div>
                </Tag>
            )
          }
    ]
  return (
    <div style={{padding: '0px 0px 50px 0px'}}>
      <Radio.Group style={{padding: '4px'}} value={status} onChange={
        (e) => {
          setStatus(e.target.value)
        }
      }>
        <Radio.Button value={statusR[0]}>今日</Radio.Button>
        <Radio.Button value={statusR[1]}>全部</Radio.Button>
      </Radio.Group>
      <Table columns={columns} dataSource={cdata} pagination={false} size="small" rowKey="name"/>
      <OrderModel title={title} type={type} tabs="nc" status={status} visible={visible} pnum={1} onVisible={(val) =>{setVisible(val)}}/>
    </div>
  )
}