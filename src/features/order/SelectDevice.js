import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Input, Icon, List, Drawer, Tag, } from 'antd'
import InfiniteScroll from 'react-infinite-scroller';
import * as actions from './redux/actions'
import { HeaderBar } from '../common'
import { queryDeviceByClassCode, queryDeviceList } from '../../common/request'

import './SelectDevice.less'
const { Search } = Input;
const { CheckableTag } = Tag;
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  }
}
export default connect( undefined ,mapDispatchToProps)((props) => {
  const history = useHistory()
  const [deviceList, setDeviceList] = useState([]) // 设备列表

  const [ drawerOpen, setDrawerOpen] = useState(false)
  const [count, setCount] = useState(0) // 列表总数
  const [pageNum, setPageNum] = useState(1) // 列表分页下标
  const [loading, setLoading] = useState(false) // 列表加载中状态
  const [hasMore, setHasMore] = useState(true) // 列表加载中状态

  const handleInfiniteOnLoad = () => {
    setLoading(true)
    if (deviceList.length < 10) {
      setHasMore(false)
      setLoading(false)
      return
    }
    setPageNum( current => current+1 )
  }

  useEffect(() => {

  }, [])
  return (
    <div className='order-page-select-device'>
      <HeaderBar title="选择设备" rightContent={<Button type='link' style={{color:'#fff', position: 'relative', left: '14px'}} onClick={() => { history.go(-1) }}>确定</Button>}/>
      <div className='search-bar'>
        <Search className='search-input' placeholder={'请输入设备名称'} onSearch={value => console.log(value)} />
        <div className='search-bar-right' onClick={() => { setDrawerOpen(true) }}><Icon type="menu" /></div>
      </div>
      <div className='device-list'>
      <InfiniteScroll
          initialLoad={false}
          pageStart={1}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >

      </InfiniteScroll>
      <Drawer
        className='drawer'
        placement="right"
        closable={false}
        onClose={() => { setDrawerOpen(false) }}
        visible={drawerOpen}
      >
        <h4>已选择的筛选条件</h4>
        <h4>设备类型条件</h4>
      </Drawer>
      </div>
    </div>
  )
})