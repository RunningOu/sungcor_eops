import React from 'react'
import { Table, Button} from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
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

export default (props) => {
  const history = useHistory()
  const location = useLocation()
  return (
    <>
    <Button type="primary" style={{backgroundColor:'#005da3'}} onClick={() => { history.push(`${location.pathname}/selectdevice`) }}>选择设备</Button>
    <Table columns={columns} dataSource={props.form.resource} size="small" rowKey="id"/>
    </>
  )
}