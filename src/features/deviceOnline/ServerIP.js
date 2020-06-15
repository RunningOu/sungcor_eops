import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar} from '../common'
import {Input,Table } from 'antd'
import { Link } from 'react-router-dom'
import './ServerIP.less'
const { Search } = Input
const ServerIP = (props) => {
  const { role } = props
  
  const { location: { search } } = props
  const dataSource = [
    {
      key: '1',
      name: '1',
      ip: '15.234.40.11',
      state: '在线',
     
    },
    {
      key: '2',
      name: '2',
      ip: '15.234.40.12',
      state: '离线'
    
    },
    {
      key: '3',
      name: '3',
      ip: '15.234.40.14',
      state: '离线'
    
    },
    {
      key: '4',
      name: '4',
      ip: '15.234.40.15',
      state: '在线'
   
    },{
      key: '5',
      name: '5',
     ip: '15.234.40.11',
     state: '在线',
     
    },
    {
      key: '6',
      name: '6',
      ip: '15.234.40.12',
      state: '离线'
    
    },
    {
      key: '7',
      name: '7',
      ip: '15.234.40.14',
      state: '离线'
    
    }
   
  ];
  
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      
    },
    {
      title: 'ip地址',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
       render: (state) => (
        <div class="state-content">
              {state=="离线"
              ?<div class="isno_online_text_red">离线</div>
              :<div className="isno_online_text_green">在线</div>
              }
        </div>
       ),
    }
  ];
  return (
    <div className="DeviceShow-details">
       <HeaderBar title="宝康服务器"/>
       <Table dataSource={dataSource} columns={columns}/>
    </div>
  )
}


export default ServerIP