import React from 'react'
import { Table, Button} from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
const columns = [
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },{
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },{
    title: '状态',
    dataIndex: 'state',
    key: 'state',
  },
]
export default function(props) {
  const history = useHistory()
  const location = useLocation()
  return (
    <>
    <Button type="primary" style={{backgroundColor:'#005da3'}} onClick={() => { history.push(`${location.pathname}/selectdevice`) }}>选择设备</Button>
    <Table columns={columns} size="small"/> 
    </>
  )
}