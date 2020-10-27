import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar} from '../common'
import {Input, List, message, Col, IconText } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import { queryNetworkList } from '../../common/request'
import './ServerIP.less'
const { Search } = Input
const ServerIP = (props) => {
  const { location: { search } } = props
  const [code, setCode] = useState( new URLSearchParams(search).get('code') || "")
  const [title, setTitle] = useState( new URLSearchParams(search).get('name') || "")
  const [type, setType] = useState( new URLSearchParams(search).get('type') || "")
  const [dataList, setDataList] = useState([])
  const [count, setCount] = useState(0) // 列表总数
  const [status, setStatus] = useState('')
  const [pageNum, setPageNum] = useState(0) // 列表分页下标
  const [loading, setLoading] = useState(false) // 列表加载中状态
  const [hasMore, setHasMore] = useState(true) // 列表加载中状态
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
  
  const handleInfiniteOnLoad = () => {
    setLoading(true)
    if (dataList.length < 10) {
      setHasMore(false)
      setLoading(false)
      return
    }
    setPageNum(current => current + 1)
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
      console.log('serverIp', data)
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
                <div className='item' onClick={() => { }}>
                  {/* <Col span={8}><h2 className='title'>{item.title}</h2></Col> */}
                  <Col span={12}>
                    <p className=''>{item.name}</p>
                  </Col>
                  <Col span={8}>
                    <p className=''>{item.ip}</p>
                  </Col>
                  <Col span={4}>
                    <p className=''>{item[status] === 'online' || item[status] === true || item[status] === "1" || item[status] === "using" ? <span className="isno_online_text_green">在线</span> : <span class="isno_online_text_red">离线</span>}</p>
                  </Col>
                  {/* <p className='orderstate'>{item.activityName}</p> */}
                </div>
                )} />
          </InfiniteScroll>
        </div>
    </div>
  )
}


export default ServerIP