import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
import { Tabs, Input, Icon , List, message } from 'antd'
import { connect } from 'react-redux'
import _ from 'lodash'
import InfiniteScroll from 'react-infinite-scroller';
import { getAssetList,queryDevice } from '../../common/request'

import './Device.less'

const { TabPane } = Tabs
const { Search } = Input
const deviceState = [{name: '全部', code: 'all'},{ name: '在用', code: 'using' }, { name: '维修', code: 'maintenanceInfo' }, { name: '拆除', code: 'demolish' }]

const tabs = [
  { title: '全部', sub: 0 },
  { title: '在用', sub: 1 },
  { title: '维修', sub: 2 },
  { title: '废弃', sub: 3 }
];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Device = (props) => {
  const deviceListRef = document.getElementsByClassName('device-list')[0]
  const { history, userAccountInfo, location: { search }} = props
  const [deviceList, setDeviceList] = useState([]) // 工单列表
  const [deviceSearch, setDeviceSearch] = useState('')
  const [count, setCount] = useState(0) // 列表总数
  const [pageNum, setPageNum] = useState(0) // 列表分页下标
  const [loading, setLoading] = useState(false) // 列表加载中状态
  const [hasMore, setHasMore] = useState(true) // 列表加载中状态

  const deviceType = new URLSearchParams(search).get('type')
  const [orderState, setOrderState] = useState( new URLSearchParams(search).get('state') || "all")
  const callback = (key) => {
    deviceListRef.scrollTo(0,0)
    setOrderState(deviceState[key].code)
  }

  useEffect(() => {
    setPageNum(0)
    setHasMore(true)
  }, [deviceSearch, orderState, userAccountInfo])


  useEffect(() => {
    if(deviceSearch) {
      queryDevice(deviceType,deviceSearch).then(d => {
        setDeviceList(d.dataList)
      })
      return
    }
    getAssetList(deviceType,pageNum,10,orderState).then(d => {
      setCount(d.count)
      if (d.hasOwnProperty('data') && userAccountInfo.roleName) {
        if (d.data.length !== 10) setHasMore(false)
        if (pageNum > 0) {
          setDeviceList(devlist => [...devlist, ...d.data])
        }else {
          setDeviceList([...d.data])
        }
        setLoading(false)
      }
    })
  }, [pageNum, orderState,userAccountInfo,deviceSearch])
  useEffect(() => {
    if (count > 0) {
      message.success(`共有${count}条相关资产`)
    }
  }, [count])

  const handleInfiniteOnLoad = () => {
    setLoading(true)
    if (deviceList.length < 10) {
      setHasMore(false)
      setLoading(false)
      return
    }
    setPageNum(current => current + 1)
  }
  return (
    <div className='device-page-index'>
      <HeaderBar title='资产列表' />
      { deviceType === 'Camera' ?
      <Tabs defaultActiveKey={orderState} onChange={callback} >
        {tabs.map((tab) => (<TabPane tab={tab.title} key={tab.sub} />))}
      </Tabs> : null}
      <div className='search-bar'>
        <Search className='search-input' placeholder={'请输入关键字（设备名称、键盘编号）'} onSearch={value => { setDeviceSearch(value) }} />
      </div>
      <div className='device-list'>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <List
            itemLayout="vertical"
            dataSource={deviceList}
            renderItem={item => (
              <List.Item
              className="device-item"
              onClick={() => { history.push('/device/' + item.id + '?type=' +  deviceType) }}
              key={item.id}
            >
              <List.Item.Meta
              title={<><span>{item.name}</span><span style={{verticalAlign: 'inherit',color: 'rgba(0, 0, 0, 0.45)',fontSize: '14px'}}>{item.managementUnit}</span></>}
              description={<><span>{item.jpbh || item.ip}</span>
              {deviceType === 'Camera' ? <IconText type="api" text={_.find(deviceState, (v) => v.code === item.cameraState).name} /> : null}
              </>
               } /></List.Item>
              )} />
        </InfiniteScroll>
      </div>
      <FooterBar pathname={props.location.pathname} userInfo={userAccountInfo} />
    </div>
  )
}
function mapStateToProps(state) {
  return {
    userAccountInfo: state.user.userAccountInfo,
  }
}
export default connect(mapStateToProps)(Device)