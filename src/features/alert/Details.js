import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
// import { useHistory } from 'react-router-dom'
import { Card, Tag, message, Input, List } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import { formatDate, TimeToHours } from '../../utils'
import { queryAlertList } from '../../common/request'

import './Details.less'
const { Search } = Input;
const Details = (props) => {
  const { location: { search } } = props
  console.log(search)
  // const { userAccountInfo } = props
  // const history = useHistory()
  const [alertList, setAlertList] = useState([])
  const MESSAGE_KEY = 'messageKey'
  const [title, setTitle] = useState('')
  const [count, setCount] = useState(0) // 列表总数
  const [pageNum, setPageNum] = useState(1) // 列表分页下标
  const [loading, setLoading] = useState(false) // 列表加载中状态
  const [hasMore, setHasMore] = useState(true) // 列表加载中状态
  const [searchIp, setSearchIp] = useState('') // ip

  const handleInfiniteOnLoad = () => {
    setLoading(true)
    if (alertList.length < 10) {
      setHasMore(false)
      setLoading(false)
      return
    }
    setPageNum(current => current + 1)
  }
  useEffect(() => {
    if (count > 0) {
      message.success({ content: `共有${count}条告警记录`, key: MESSAGE_KEY})
    }
  }, [count])
  useEffect(() => {
    setTitle(new URLSearchParams(search).get('name')+"告警列表")
    const source = new URLSearchParams(search).get('name')
    const status = new URLSearchParams(search).get('status')
    if(source.length) {
      console.log(status)
      var queryParam = {
        "source": source,
        'pageNo': pageNum,
        'pageSize': 10,
        'severity': status,
        'begin': parseInt(new Date().getTime()-7*24*60*60*1000), // 近24小时 | 7天
      }
      if(searchIp){
        queryParam.entityAddr = searchIp
      }
      if(status == 3){
        queryParam.status =0 
      }
      if(status == 0 && source !="政务网内场告警"){
        // queryParam.alias = '主机上下线'
        queryParam.name = 'host.up/down' 
      }
      queryAlertList(queryParam).then(d => { 
          setCount(d.data.total)
          // setAlertList(d.data.records)
          if (d.data.hasOwnProperty('records')) {
            if (d.data.records.length !== 10) setHasMore(false)
            if(pageNum === 1) {
              setAlertList([...d.data.records])
            }else {
              setAlertList((oldList) => [...oldList, ...d.data.records])
            } 
            setLoading(false)
          } 
      })
      .catch((e) => { })
    }
  }, [search, pageNum, searchIp])
  return (
    <div className="alert-details">
      <HeaderBar title={title+'(近七天)'} />
      <div className='search-bar'>
        <Search className='search-input' placeholder={'请输入设备ip'} onSearch={value => { setSearchIp(value); setPageNum(1) }} />
        {/* <div className='search-bar-right' onClick={() => { setDrawerOpen(true) }}><Icon type="menu" /></div> */}
      </div>
      <div className="alert-scoll">
      <InfiniteScroll
          initialLoad={false}
          pageStart={1}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
        <List dataSource={alertList} renderItem={item => (
                // <Row  className="alert-row" key={i}>
                    <Card onClick={() => {
                        console.log(item)
                    }} title={<span style={{'color': '#0e6dfb'}}>{item.source} 
                    {/* <div className="arrow-left"></div> */}
                    <Tag className={item.severityCN === '警告' ? 'alert-warning' : item.severityCN === '错误' ? 'alert-error' : item.severityCN === '紧急' ? 'alert-critical' : 'alert-hf'}>{item.severityCN}</Tag ></span>} 
                        extra={TimeToHours(item.lastOccurTime - item.firstOccurTime)}
                        headStyle={{'padding': '0px 0px 0px 5px', 'background': 'rgba(64, 169, 255, 0.7)', 'borderRadius': '10px', 'minHeight': '44px'}}
                        className="alert-card" key="alert_processed" bodyStyle={{ 'borderRadius': '10px', 'padding': '8px 2px 5px 14px' }}>
                            <p>设备名称：<span>{item.entityName}</span></p>
                            <p>设备IP：<span>{item.entityAddr}</span></p>
                            <p>首次发生时间：<span>{formatDate(new Date(item.firstOccurTime),'yyyy-MM-dd HH:mm')}</span></p>
                            <p>最后发生时间：<span>{formatDate(new Date(item.lastOccurTime),'yyyy-MM-dd HH:mm')}</span></p>
                            <p>告警描述：<span>{item.description}</span></p>
                    </Card>
                // </Row>
          )} />
        </InfiniteScroll>
      </div>
      <FooterBar pathname={props.location.pathname} />
    </div>
  )
}


export default Details