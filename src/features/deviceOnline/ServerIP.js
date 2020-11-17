import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar} from '../common'
import { useHistory } from 'react-router-dom'
import {Input, List, message, Col, IconText,Modal,Descriptions } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import { queryNetworkList, queryDeviceById,getOrderInfoByIp,getOrderInfoByJPBH } from '../../common/request'

import './ServerIP.less'

const { Search } = Input
const ServerIP = (props) => {
  const { location: { search } } = props
  const history = useHistory()
  const [code, setCode] = useState( new URLSearchParams(search).get('code') || "")
  const [title, setTitle] = useState( new URLSearchParams(search).get('name') || "")
  const [type, setType] = useState( new URLSearchParams(search).get('type') || "")
  const [dataList, setDataList] = useState([])
  const [count, setCount] = useState(0) // 列表总数
  const [status, setStatus] = useState('')
  const [pageNum, setPageNum] = useState(0) // 列表分页下标
  const [loading, setLoading] = useState(false) // 列表加载中状态
  const [hasMore, setHasMore] = useState(true) // 列表加载中状态
  const [deviceInfoVisible,setDeviceInfoVisible] = useState(false) // 设备详细信息展示
  const [currentDeviceInfo,setCurrentDeviceInfo] = useState({}) // 当前展示的设备信息

  const tabs = {
    "serve" : "online_state",
    "network": "status",
    "storage": "zxzt",
    "camera": "cameraState"
  }
  const url = {
    "serve" : "/app/portal/queryServeList",
    "network": "/app/portal/queryNetworkList",
    "storage": "/app/portal/queryDevList",
    "camera": "/app/portal/queryDevList"
  }

  //根据传入的type决定选用哪些字段渲染
  const TypeMap = {
    'camera': {
      managementUnit: '管理单位',
      address: '所在位置',
      JPBH: '键盘编号',
      ip:'设备IP',
      className: '设备类型',
      cameraModel: '设备型号',
      jsyylb: '建设应用类型'
    },
    'serve': {
      name: "设备名称",
      ip: '设备IP',
      id: '设备ID',
    },
    'storage': {
      name: '设备名称',
      ip: '设备IP',
      id: '设备ID',
    },
    'network': {
      name: '设备名称',
      ip: '设备IP',
      id: '设备ID'
    }
  }
  
  const handleInfiniteOnLoad = () => {
    setLoading(true)
    if (dataList.length < 10) {
      setHasMore(false)
      setLoading(false)
      return
    }
    setPageNum(current => current + 1)
  }

  const handleJumpOrderDetail = (item) => {
    //判断如果是摄像机
    if(type === 'camera') {
      if(item.cameraState && item.cameraState === "demolish") {
        message.error('该设备已拆除！')
        return
      }
      if(item.cameraState && item.cameraState === 'maintenanceInfo') {
        if(item.ip) {
          getOrderInfoByIp(item.ip).then(res => {
            if(res.result.dataList.length) {
              const { activityId, modelId, ticketId } = res.result.dataList[0]
              if(activityId && modelId && ticketId) {
                history.push(`/order/${ticketId}?actId=${activityId}&modelId=${modelId}&search=&searchType=`)
              }
            } else {
              message.error('该设备暂无工单上报')
            }
          })
        }else {   
          getOrderInfoByJPBH(item.JPBH).then(res=>{
            if(res.result.dataList.length) {
              const { activityId, modelId, ticketId } = res.result.dataList[0]
              if(activityId && modelId && ticketId) {
                history.push(`/order/${ticketId}?actId=${activityId}&modelId=${modelId}&search=&searchType=`)
              }
            }
          })
        }
      }else {
        message.success('该设备在线！')
      }
    }
    //如果是服务器
    if(type === 'serve') {
      if((item.type === 'PCServer') &&( item.online_state === false)) {
        getOrderInfoByIp(item.ip).then(res => {
          if(res.result.dataList.length) {
            const { activityId, modelId, ticketId } = res.result.dataList[0]
            if(activityId && modelId && ticketId) {
              history.push(`/order/${ticketId}?actId=${activityId}&modelId=${modelId}&search=&searchType=`)
            }
          } else {
            message.error('该设备暂无工单上报')
          }
        })
      } else if(item.online_state === true) {
        message.success('该设备在线！')
      }
    }
    //如果是存储设备
    if(type === 'storage') {
      if(item.zxzt === '1') {
        message.success('该设备在线！')
      } else {

      }
    }
    //如果是网络设备
    if(type === 'network') {
      if(item.status && item.status !== 'online') {
        getOrderInfoByIp(item.ip).then(res => {
          if(res.result.dataList.length) {
            const { activityId, modelId, ticketId } = res.result.dataList[0]
            if(activityId && modelId && ticketId) {
              history.push(`/order/${ticketId}?actId=${activityId}&modelId=${modelId}&search=&searchType=`)
            }
          } else {
            message.error('该设备暂无工单上报')
          }
        })
      }else {
        message.success('该设备在线！')
      }
    }
  }
  const handleCancel = () => {
    setDeviceInfoVisible(false)
  }
  const handleClickCameraName = (item) => {
    if(item.cameraState) {
      const { id } = item
      queryDeviceById(id).then(res => {
        setCurrentDeviceInfo(res)
        setDeviceInfoVisible(true)
      })
    }

  }

  useEffect(() => {
    if (count > 0) {
      message.success({ content: `共有${count}条记录`, key: ''})
    }
  }, [count])
  useEffect(() => {
    queryNetworkList({
      "pageSize": 200,
      "pageNum": pageNum,
      "code": code
    }, url[type]).then(data => {
      setCount(data.result.totalRecords)
      if (data.result.hasOwnProperty('dataList')) {
        if (data.result.dataList.length !== 200) setHasMore(false)
        if(pageNum === 1) {
          setDataList([...data.result.dataList])
        }else {
          setDataList((oldList) => [...oldList, ...data.result.dataList])
        } 
        setLoading(false)
      } 
    })
  },[code, pageNum])
  useEffect(() => {
    setStatus(tabs[type])
  },[type])
  return (
    <div className="DeviceShow-details">
       <HeaderBar title={title}/>
       <div className='header'>
          <Col span={12}>
            <p className=''>名称</p>
          </Col>
          <Col span={8}>
            <p className=''>IP</p>
          </Col>
          <Col span={4}>
            <p className=''>状态</p>
          </Col>
        </div>
       <div className='data-list'>
        <InfiniteScroll
            initialLoad={false}
            pageStart={1}
            loadMore={handleInfiniteOnLoad}
            hasMore={!loading && hasMore}
            useWindow={false}
          >
            <List 
              itemLayout="vertical"
              className='list_de'
              dataSource={dataList}
              renderItem={item => (
                <div className='item'>
                  {/* <Col span={8}><h2 className='title'>{item.title}</h2></Col> */}
                  <Col
                  span={12}>
                    <p
                    style={{color: '#005da3'}}
                    onClick={() => { handleClickCameraName(item)} }
                    className=''>{item.name}</p>
                  </Col>
                  <Col span={8}>
                    <p className=''>{item.ip ? item.ip : '未知'}</p>
                  </Col>
                  <Col span={4}>
                    <p className='' onClick={() => {handleJumpOrderDetail(item)}}>{item[status] === 'online' || item[status] === true || item[status] === "1" || item[status] === "using" ? <span className="isno_online_text_green">在线</span> : <span className="isno_online_text_red">离线</span>}</p>
                  </Col>
                  {/* <p className='orderstate'>{item.activityName}</p> */}
                </div>
                )} />
          </InfiniteScroll>
        </div>
        <Modal
          title={currentDeviceInfo.name}
          footer={null}
          visible={deviceInfoVisible}
          onCancel={handleCancel}
        >
          <Descriptions bordered size='small'>
            {
              Object.keys(TypeMap[type]).length && Object.keys(TypeMap[type]).map(item => {
                return <Descriptions.Item label={TypeMap[type][item]}>{currentDeviceInfo[item]}</Descriptions.Item>
              })
            }
          </Descriptions>
        </Modal>
    </div>
  )
}

export default ServerIP