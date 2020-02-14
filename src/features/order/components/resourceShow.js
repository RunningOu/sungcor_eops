import React from 'react'
import { Table, Descriptions } from 'antd'
const columns = [
  {
    title: '类型',
    dataIndex: 'className',
    key: 'className',
  },{
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  }
]
export default function(props) {
  return (
    <Descriptions.Item label={props.name} key={props.id}>
      <br/>
      <Table columns={columns} dataSource={props.default_value} size="small" rowKey="id" pagination={false}/> 
    </Descriptions.Item>
  )
}