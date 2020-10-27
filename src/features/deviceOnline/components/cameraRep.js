import React,{ useState , useEffect } from 'react'
import { Radio,Table} from 'antd'

const dataSource = [
  {
    key: '电信二期',
    name: '电信二期',
    online: '12042',
    offline: '210',
    onlineRate: '90%',
  },
  {
    key: '联通雪亮',
    name: '联通雪亮',
    online: '12042',
    offline: '210',
    onlineRate: '90%',
  },
  {
    key: '移动雪亮',
    name: '移动雪亮',
    online: '12042',
    offline: '210',
    onlineRate: '90%',
  },
  {
    key: '电信二期',
    name: '电信二期',
    online: '12042',
    offline: '210',
    onlineRate: '90%',
  },
  {
    key: '电信二期',
    name: '电信二期',
    online: '12042',
    offline: '210',
    onlineRate: '90%',
  }
];

const columns = [
  {
    title: '项目名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '在线',
    dataIndex: 'online',
    key: 'online',
  },
  {
    title: '离线',
    dataIndex: 'offline',
    key: 'offline',
  },
  {
    title: '在线率',
    dataIndex: 'onlineRate',
    key: 'onlineRate'
  }
];


const CameraRep = () => {
    const [currentTab,setCurrentTab] = useState('公安分局')
    const onChange = (e) => {
      setCurrentTab(e.target.value)
    }
    return (
      <div>
        <Radio.Group
        style={{marginBottom: '10px'}}
        onChange={onChange}
        defaultValue={currentTab}>
          <Radio.Button value="公安分局">公安分局</Radio.Button>
          <Radio.Button value="社会面接入">社会面接入</Radio.Button>
        </Radio.Group>
        <Table dataSource={dataSource} columns={columns} pagination={false} size="small">

        </Table>
      </div>
    )
}


export default CameraRep