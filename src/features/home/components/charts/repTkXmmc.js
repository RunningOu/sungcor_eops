import React, { useState, useEffect }  from 'react'
import { Radio, Tag, Table } from 'antd'
import { countTicketByStatus } from '../../../../common/request'
import OrderModel from '../model/orderModel'
export default () => {
    const [cdata, setCdata] = useState([])
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [status, setStatus] = useState('all')
    const statusR = ['today', 'all']
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        countTicketByStatus(status).then(data => {
          let sumTotal = 0
          let sumUndone = 0
          let sumGq = 0
          let sumOverdue = 0
          let sumWwcOverdue = 0

          const showItemName = ['联通雪亮','治安卡口','电信雪亮','电信一期','电信二期','电信三期','联通社会面','移动租赁']
          const result = data.result.filter(item => {
            return showItemName.includes(item.name)
          })
          console.log(data)
          result.forEach(element => {
            sumTotal += element.total
            sumUndone += element.undone
            sumOverdue += element.wcOverdue
            sumWwcOverdue += element.wwcOverdue
            sumGq += element.gq
          })

          setCdata([{'name': '总计', 'total': sumTotal, 'undone': sumUndone, 'gq': sumGq, 'wwcOverdue': sumWwcOverdue, 'wcOverdue': sumOverdue}, ...result])
        })
    },[status])
    var columns = [
        {
            title: '项目名称',
            dataIndex: 'name',
            key: 'name',
            width: 100,
            fixed: 'left'
        },
        {
            title: '工单总数',
            dataIndex: 'total',
            key: 'total',
            width: 80,
            render: (overdue) => (
                <Tag color='blue' key={overdue}>
                    {overdue}
                </Tag>
            )
          },
        {
            title: '未完成',
            dataIndex: 'undone',
            key: 'undone',
            width: 70,
            render: (overdue, record, index) => (
                <Tag color='green' key={overdue}
                onClick={() => {
                  if(record.name === '总计') return
                  setTitle(record.xmmc)
                  setType('未完成')
                  setVisible(true)
                }}
                >
                {overdue}
                </Tag>
            )
          },
          {
            title: '挂起',
            dataIndex: 'gq',
            key: 'gq',
            width: 70,
            render: (overdue, record, index) => (
                <Tag color='green' key={overdue}
                onClick={() => {
                  if(record.name === '总计') return
                  setTitle(record.xmmc)
                  setType('挂起')
                  setVisible(true)
                }}
                >
                    {overdue}
                </Tag>
            )
          }
    ]
  return (
    <div style={{padding: '0px 0px 50px 0px'}}>
      {/* <Radio.Group style={{padding: '4px'}} value={status} onChange={
        (e) => {
          setStatus(e.target.value)
        }
      }>
        <Radio.Button value={statusR[0]}>今日</Radio.Button>
        <Radio.Button value={statusR[1]}>全部</Radio.Button>
      </Radio.Group> */}
      <div>
        <Table columns={columns} scroll={{ x: 300}} fixed={true} dataSource={cdata} pagination={false} size="small" rowKey="name"/>
      </div>
      <OrderModel title={title} type={type} tabs="xmmc" status={status} visible={visible} pnum={1} onVisible={(val) =>{setVisible(val)}}/>
    </div>
  )
}