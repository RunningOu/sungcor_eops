import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
import { Tabs, Input, Icon, Drawer, Tag, List, message } from 'antd'
import { connect } from 'react-redux'
import _ from 'lodash'
import InfiniteScroll from 'react-infinite-scroller';
import { queryDeviceList } from '../../common/request'
// import { formatDate } from '../../utils'

import './Device.less'

const { TabPane } = Tabs
const { Search } = Input
const { CheckableTag } = Tag
const deviceState = [{ name: '在用', code: 'using' }, { name: '维修', code: 'maintenanceInfo' }, { name: '拆除', code: 'demolish' }]
const tabs = [
  { title: '全部', sub: 0 },
  { title: '在用', sub: 1 },
  { title: '维修', sub: 2 },
  { title: '废弃', sub: 3 }
];
const tabsConfig = [
  [],
  [{field: 'bxstatus', value: 'using', operator: 'EQ'}],
  [{field: 'bxstatus', value: 'maintenanceInfo', operator: 'EQ'}],
  [{field: 'bxstatus', value: 'demolish', operator: 'EQ'}],
]
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const tagsFromDiviceType = ['设备种类1', '设备种类2', '设备种类3', '设备种类4']
const tagsFromDiviceForm = ['旅顺公安所', '大庆公安所', '包头公安所', '上饶派出所', '象山派出所', '五道口派出所']

const Device = (props) => {
  const { history, userAccountInfo} = props
  const [deviceList, setDeviceList] = useState([]) // 工单列表

  const [orderState, setOrderState] = useState("0")
  const [deviceSearch, setDeviceSearch] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false) // 侧边抽屉开关
  const [selectedTags, setSelectedTags] = useState([]) // 侧边抽屉选中项

  const [count, setCount] = useState(0) // 列表总数
  const [pageNum, setPageNum] = useState(0) // 列表分页下标
  const [loading, setLoading] = useState(false) // 列表加载中状态
  const [hasMore, setHasMore] = useState(true) // 列表加载中状态

  const callback = (key) => { setOrderState(key) }

  useEffect(() => {
    setPageNum(0)
    setHasMore(true)
  }, [deviceSearch, orderState, userAccountInfo])
  useEffect(() => {
    let conditions = [ ...tabsConfig[orderState]]
    if (deviceSearch !== '') {
      conditions.push({
        field: 'name',
        value: deviceSearch,
        operator: 'LIKE'
      })
    }
    if(['派出所人员', '设备厂商'].includes(userAccountInfo.roleName)) {
      if(userAccountInfo.depts.length) {
        if(userAccountInfo.roleName === '派出所人员') conditions.push({ field: 'pcs', value: userAccountInfo.depts.map(dep => dep.id), operator: 'IN' })
        if(userAccountInfo.roleName === '设备厂商') conditions.push({ field: 'whcs', value: userAccountInfo.depts.map(dep => dep.id), operator: 'IN' })
      }
    }
    queryDeviceList({
      needCount: true,
      conditions: [
        { field: 'classCode', value: 'camera', operator: 'EQ' },
        ...conditions
      ],
      pageSize: 10,
      pageNum: pageNum
    }).then(d => {
      console.log(d)
      setCount(d.totalRecords)
      if (d.hasOwnProperty('dataList') && userAccountInfo.roleName) {
        if (d.dataList.length !== 10) setHasMore(false)
        if (pageNum > 0) {
          setDeviceList(devlist => [...devlist, ...d.dataList])
        }else {
          setDeviceList([...d.dataList])
        }
        setLoading(false)
      }
    })
  }, [pageNum, deviceSearch, orderState,userAccountInfo])
  useEffect(() => {
    if (count > 0) {
      message.success(`共有${count}条相关资产`)
    }
  }, [count])
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags)
  }
  const handleClose = (tag) => {
    setSelectedTags(selectedTags.filter(t => t !== tag))
  }
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
      <Tabs defaultActiveKey="0" onChange={callback} >
        {tabs.map((tab) => (<TabPane tab={tab.title} key={tab.sub} />))}
      </Tabs>
      <div className='search-bar'>
        <Search className='search-input' placeholder={'请输入设备名称'} onSearch={value => { setDeviceSearch(value) }} />
        {/* <div className='search-bar-right' onClick={() => { setDrawerOpen(true) }}><Icon type="menu" /></div> */}
      </div>
      <Drawer
        className='drawer'
        placement="right"
        closable={false}
        onClose={() => { setDrawerOpen(false) }}
        visible={drawerOpen}
      >
        <h4>已选择的筛选条件</h4>
        <div className='drawer_open'>
          {selectedTags.map((tag => (
            <Tag key={tag} closable={true} onClose={() => handleClose(tag)}>
              {tag}
            </Tag>
          )))}
        </div>
        <h4>设备类型条件</h4>
        <div className='drawer_open'>
          {tagsFromDiviceType.map((tag => (
            <CheckableTag
              className='drawer_tag'
              key={tag}
              checked={selectedTags.indexOf(tag) > -1}
              onChange={checked => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          )))}
        </div>
        <h4>所属派出所</h4>
        <div className='drawer_open'>
          {tagsFromDiviceForm.map((tag => (
            <CheckableTag
              className='drawer_tag'
              key={tag}
              checked={selectedTags.indexOf(tag) > -1}
              onChange={checked => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          )))}
        </div>
      </Drawer>
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
              onClick={() => { history.push('/device/' + item.id) }}
              key={item.id}
              actions={[
                <IconText type="api" text={_.find(deviceState, (v) => v.code === item.bxstatus).name} />,
                // <IconText type="tool" text={item.changsce} />
              ]}
            >
              <List.Item.Meta title={item.name} description={item.managementUnit} /></List.Item>)
            } />
        </InfiniteScroll>
      </div>
      <FooterBar pathname={props.location.pathname} />
    </div>
  )
}
function mapStateToProps(state) {
  return {
    userAccountInfo: state.user.userAccountInfo,
  }
}
export default connect(mapStateToProps)(Device)