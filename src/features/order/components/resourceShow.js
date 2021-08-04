import React from 'react'
import { Table, Descriptions } from 'antd'
import "./resourceShow.less"



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
  console.log(props)
  return (
    <Descriptions.Item label={props.name} key={props.id} span={3}>
      <div className="resourceShow">
        <Table columns={columns} dataSource={props.default_value || (props['form'] && props['form'][props.code]) || []} size="small" rowKey="id" pagination={false}/>
      </div>
    </Descriptions.Item>
  )
}