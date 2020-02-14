import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
import { Tabs, Input, Icon, Drawer, Tag, List, message } from 'antd'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller';
import { queryOrderList } from '../../common/request'
import { formatDate } from '../../utils'

import './Order.less'
const { TabPane } = Tabs;
const { Search } = Input;
const { CheckableTag } = Tag;
const tagsFromOrderType = ['工单类型1', '工单类型2', '工单类型3', '工单类型4', '我的待办', '我的参与', '已完成', '逾期',]
const tabs = [
  { title: '全部', sub: 0 },
  { title: '待办', sub: 1 },
  { title: '参与', sub: 2 },
  { title: '完成', sub: 3 },
  { title: '逾期', sub: 4 },
];
const tabsConfig = userId => [
  [],
  [{ key: "executor", value: userId, operator: "IN" }, { key: "status", value: "1,2", operator: "IN" }],
  [{ key: "participation", value: userId, operator: "IN" }],
  [{ key: "status", value: "3", operator: "IN" }],
  [{ key: "overdue", value: userId, operator: "IN" }]
]
const Order = (props) => {
  const { userAccountInfo } = props.user
  const history = useHistory()
  const [orderList, setOrderList] = useState([]) // 工单列表

  const [orderType, setOrderType] = useState(0)
  const [model, setModel] = useState({}) // 工单查询参数
  const [count, setCount] = useState(0) // 列表总数
  const [pageNum, setPageNum] = useState(1) // 列表分页下标
  const [loading, setLoading] = useState(false) // 列表加载中状态
  const [hasMore, setHasMore] = useState(true) // 列表加载中状态

  const [drawerOpen, setDrawerOpen] = useState(false) // 侧边抽屉开关
  const [selectedTags, setSelectedTags] = useState([]) // 侧边抽屉选中项


  const callback = (key, a) => {
    console.log(key, a)
    setOrderType(key)
  }
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags)
  }
  const handleClose = (tag) => {
    setSelectedTags(selectedTags.filter(t => t !== tag))
  }
  const handleInfiniteOnLoad = () => {
    setLoading(true)
    if (orderList.length < 10) {
      setHasMore(false)
      setLoading(false)
      return
    }
    setPageNum(current => current + 1)
  }

  useEffect(() => {
    setPageNum(1)
    setOrderList([])
    setLoading(true)
    setHasMore(true)
    setModel(oldModel => {
      return {
        ...oldModel,
        attrs: [
          ...tabsConfig(userAccountInfo.userId)[orderType]
        ]
      }
    })
  }, [orderType, userAccountInfo])

  useEffect(() => {
    if (count > 0) {
      message.success(`共有${count}条记录`)
    }
  }, [count])
  useEffect(() => {
    queryOrderList({
      'model': model,
      "pageNum": pageNum,
      "pageSize": 10
    }).then((d) => {
      console.log(d)
      setCount(d.count)
      if (d.hasOwnProperty('list')) {
        if (d.list.length !== 10) setHasMore(false)
        setOrderList((oldList) => [...oldList, ...d.list])
        setLoading(false)
      }
    })
      .catch((e) => { })
  }, [pageNum, model])

  return (
    <div className='order-page-index'>
      <HeaderBar title="工单列表" />
      <Tabs defaultActiveKey="0" onChange={callback} >
        {tabs.map((tab) => (<TabPane tab={tab.title} key={tab.sub} />))}
      </Tabs>
      <div className='search-bar'>
        <Search className='search-input' placeholder={'请输入工单名称'} onSearch={value => console.log(value)} />
        <div className='search-bar-right' onClick={() => { setDrawerOpen(true) }}><Icon type="menu" /></div>
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
        <h4>工单类型条件</h4>
        <div className='drawer_open'>
          {tagsFromOrderType.map((tag => (
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
      <div className='order-list'>
        <InfiniteScroll
          initialLoad={false}
          pageStart={1}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <List dataSource={orderList} renderItem={item => (
            <div className='item' onClick={() => { history.push(`order/${item.ticketId}?actId=${item.activityId}&modelId=${item.modelId}`) }}>
              <h2 className='title'>{item.title + ' - ' + item.flowNo}</h2>
              <p className='description'>工单描述：{item.formData.ticketDesc || '无工单描述信息'}</p>
              <p className='date'>报修时间： <span>{item.formData.bxsj ? formatDate(new Date(item.formData.bxsj), 'YYYY-MM-DD hh:mm:ss') : ''}</span></p>
              <p className='orderstate'>{item.activityName}</p>
            </div>
          )} />
        </InfiniteScroll>
      </div>
      <FooterBar pathname={props.location.pathname} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Order)