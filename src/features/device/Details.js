import React, { useState, useEffect } from 'react'
import { Descriptions } from 'antd'
import { queryDeviceById } from '../../common/request'
import { HeaderBar } from '../common'
import Circle from '../../features/common/Circle'

import './Details.less'
export default (props) => {
  const { params: { id } } = props.match
  const [device, setDevice] = useState({})
  useEffect(() => {
    queryDeviceById(id).then(d => {
      setDevice(d)
    })
  }, [id])

  return (
    <div className="device-page-details">
      {/* <HeaderBar title="设备详情" rightContent={<span><Icon type="tool"/> 一键报修</span>}/> */}
      <HeaderBar title="设备详情" />
      <div className="device-details" >
        <Descriptions title={device.name} bordered size="small">
          <Descriptions.Item label="状态">
            {
              {
                "using": <Circle status="success" text="在用" />,
                "maintenanceInfo": <Circle status="warning" text="维修" />,
                "demolish": <Circle status="default" text="拆除" />
              }[device.cameraState] || null
            }

          </Descriptions.Item>
          {/* <Descriptions.Item label="编号">{device.code}</Descriptions.Item> */}
          <Descriptions.Item label="管理单位">{device.managementUnit}</Descriptions.Item>
          <Descriptions.Item label="所在位置">{device.address}</Descriptions.Item>
          <Descriptions.Item label="键盘编号">{device.serialNumber}</Descriptions.Item>
          <Descriptions.Item label="对应储存设备IP">{device.ip}</Descriptions.Item>
          <Descriptions.Item label="设备类型">{device.className}</Descriptions.Item>
          {/* <Descriptions.Item label="设备功能">卡口枪机</Descriptions.Item> */}
          <Descriptions.Item label="设备型号">{device.cameraModel}</Descriptions.Item>
          {/* <Descriptions.Item label="项目名称">雪亮工程</Descriptions.Item> */}
          <Descriptions.Item label="建设应用类别">{device.JSYYLB}</Descriptions.Item>
          {/* <Descriptions.Item label="项目经理">钟隆威</Descriptions.Item>
          <Descriptions.Item label="项目经理联系方式">16787364873</Descriptions.Item> */}
        </Descriptions>
      </div>
    </div>
  )
}