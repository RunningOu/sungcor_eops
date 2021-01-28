import React, { useState, useEffect } from 'react'
import { Descriptions } from 'antd'
import { getAssetDetail } from '../../common/request'
import { connect } from 'react-redux'
import { HeaderBar } from '../common'
import Circle from '../../features/common/Circle'
import './Details.less'


const { Item }  = Descriptions


const StatusMap = {
  "using": <Circle status="success" text="在用" />,
  "maintenanceInfo": <Circle status="warning" text="维修" />,
  "demolish": <Circle status="default" text="拆除" />
}


const DeviceDetail = (props) => {
  const { params: { id } } = props.match
  const [device, setDevice] = useState({})
  const {userAccountInfo , location : {search} } = props
  const deviceType = new URLSearchParams(search).get('type')

  useEffect(() => {
    getAssetDetail(userAccountInfo.apikey,id).then(d => {
      setDevice(d)
    })
  }, [id])

  const getDeviceInfoTemplate = () => {
    switch(deviceType) {
      case 'Camera': {
        return  ( <Descriptions title={device.name} bordered size="small">
        <Item label="状态">
          {
            StatusMap[device.cameraState]
          }
        </Item>
        {/* <Item label="编号">{device.code}</Item> */}
        <Item label="管理单位">{device.vendorInfo || device.managementUnit}</Item>
        <Item label="所在位置">{device.address}</Item>
        <Item label="键盘编号">{device.serialNumber}</Item>
        <Item label="对应储存设备IP">{device.ip}</Item>
        <Item label="设备类型">{device.className}</Item>
        {/* <Item label="设备功能">卡口枪机</Item> */}
        <Item label="设备型号">{device.cameraModel}</Item>
        {/* <Item label="项目名称">雪亮工程</Item> */}
        <Item label="建设应用类别">{device.JSYYLB}</Item>
        {/* <Item label="项目经理">钟隆威</Item>
        <Item label="项目经理联系方式">16787364873</Item> */}
      </Descriptions>)
      };
      case 'PCServer': {
        return (
          <Descriptions title={device.name} bordered size="small">
            <Item label="设备名称">{device.name}</Item>
            <Item label="设备类型">{device.className}</Item>
            <Item label="设备品牌">{device.sgPp}</Item>
            <Item label="设备IP">{device.ip}</Item>
            <Item label="设备管理单位">{device.managementUnit}</Item>
          </Descriptions>
        )
      };
      case 'Switch,Firewall': {
        return (
          <Descriptions title={device.name} bordered size="small">
            <Item label="设备名称">{device.name}</Item>
            <Item label="设备类型">{device.className}</Item>
            <Item label="设备品牌">{device.sgPp}</Item>
            <Item label="设备IP">{device.ip}</Item>
          </Descriptions>
        )
      }
    }
  }


  return (
    <div className="device-page-details">
      {/* <HeaderBar title="设备详情" rightContent={<span><Icon type="tool"/> 一键报修</span>}/> */}
      <HeaderBar title="设备详情" />
      <div className="device-details" >
        {
          getDeviceInfoTemplate()
        }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userAccountInfo: state.user.userAccountInfo,
  }
}
export default connect(mapStateToProps,null)(DeviceDetail)