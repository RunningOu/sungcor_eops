import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
import { Tabs, Input, Icon, Drawer, Tag, List, message, Select } from 'antd'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller';
import { queryOrderList } from '../../common/request'
import { formatDate } from '../../utils'
import orderSearch from './mock/orderSearch'
import './Order.less'
const { TabPane } = Tabs;
const { Search } = Input;
const { CheckableTag } = Tag;
const { Option } = Select;
const MESSAGE_KEY = 'messageKey'
const ORDER_TYPE_ALL = ['视频报修']
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
  const { user: { userAccountInfo }, location: { search } } = props
  const history = useHistory()
  const [orderList, setOrderList] = useState([]) // 工单列表

  const [orderState, setOrderState] = useState( new URLSearchParams(search).get('state') ||"0")
  const [model, setModel] = useState({}) // 工单查询参数
  const [searchTitle, setSearchTitle] = useState('') // 搜索工单标题
  const [count, setCount] = useState(0) // 列表总数
  const [pageNum, setPageNum] = useState(1) // 列表分页下标
  const [loading, setLoading] = useState(false) // 列表加载中状态
  const [hasMore, setHasMore] = useState(true) // 列表加载中状态

  const [drawerOpen, setDrawerOpen] = useState(false) // 侧边抽屉开关
  const [orderSearchType, setOrderSearchType] = useState('')
  const [drawerConfig, setDrawerConfig] = useState({})
  const [orderSearchFlow, setOrderSearchFlow] = useState([])
  const [orderSearchInfoKey, setOrderSearchInfoKey] = useState('')
  const [orderSearchInfo, setOrderSearchInfo] = useState({})

  const callback = (key) => {
    setOrderState(key)
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
    if (orderSearch !== '' && orderSearch[orderSearchType]) {
      setDrawerConfig(orderSearch[orderSearchType])
    } else {
      setDrawerConfig({})
      setOrderSearchFlow([])
      setOrderSearchInfo({})
    }
  }, [orderSearchType])
  useEffect(() => {
    if (drawerConfig.form) setOrderSearchInfoKey(drawerConfig.form[0].code)
  }, [drawerConfig])

  useEffect(() => {
    setPageNum(1)
    setHasMore(true)
  }, [orderState, userAccountInfo, searchTitle, orderSearchInfo, orderSearchFlow, drawerConfig])
  useEffect(() => {
    let attrs = [...tabsConfig(userAccountInfo.userId)[orderState]]
    if (Object.keys(drawerConfig).length) attrs.push({key: "modelId", value: drawerConfig.modelId, operator: "EQ"})
    if (searchTitle !== "") attrs.push({ key: "title", value: searchTitle, operator: "LIKE" })
    if (Object.keys(orderSearchInfo).length) attrs.push({ key: orderSearchInfo.key, value: orderSearchInfo.value, operator: "LIKE" })
    if (orderSearchFlow.length) attrs.push({ key: 'activityName', value: orderSearchFlow.join(','), operator: 'IN' })
    setLoading(true)
    setModel(oldModel => {
      return {
        ...oldModel,
        attrs: attrs
      }
    })
  }, [orderState, userAccountInfo, searchTitle, orderSearchInfo, orderSearchFlow, drawerConfig])

  useEffect(() => {
    if (count > 0) {
      message.success({ content: `共有${count}条记录`, key: MESSAGE_KEY})
    }
  }, [count])
  useEffect(() => {
    if(Object.keys(model).length) {
      queryOrderList({
        'model': model,
        "pageNum": pageNum,
        "pageSize": 10
      }).then((d) => {
        setCount(d.count)
        if (d.hasOwnProperty('list')) {
          if (d.list.length !== 10) setHasMore(false)
          if(pageNum === 1) {
            setOrderList([...d.list])
          }else {
            setOrderList((oldList) => [...oldList, ...d.list])
          } 
          setLoading(false)
        }
      })
        .catch((e) => { })
    }
  }, [model, pageNum])

  return (
    <div className='order-page-index'>
      <HeaderBar title="工单列表" />
      <Tabs defaultActiveKey={orderState} onChange={callback} >
        {tabs.map((tab) => (<TabPane tab={tab.title} key={tab.sub} />))}
      </Tabs>
      <div className='search-bar'>
        <Search className='search-input' placeholder={'请输入工单名称'} onSearch={value => { setSearchTitle(value) }} />
        <div className='search-bar-right' onClick={() => { setDrawerOpen(true) }}><Icon type="menu" /></div>
      </div>
      <Drawer
        className='drawer'
        placement="right"
        closable={false}
        onClose={() => { setDrawerOpen(false) }}
        visible={drawerOpen}
      >
        <h4>按工单类型</h4>
        {ORDER_TYPE_ALL.map(e =>
          <CheckableTag
            key={e}
            checked={orderSearchType === e}
            onChange={checked => {
              if (checked) {
                setOrderSearchType(e)
              } else {
                setOrderSearchType('')
              }
            }}>{e}</CheckableTag>)}
        {drawerConfig.flow ?
          <>
            <h4>按工单流程</h4>
            {drawerConfig.flow.map(e => <CheckableTag
              key={e}
              checked={orderSearchFlow.includes(e)}
              onChange={checked => {
                if (checked) {
                  setOrderSearchFlow(old => [...old, e])
                } else {
                  setOrderSearchFlow(old => old.filter(el => el !== e))
                }
              }}>{e}</CheckableTag>)}
          </> : null}
        {drawerConfig.form ?
          <>
            <h4>按工单内容</h4>
            <Search addonBefore={
              <Select value={orderSearchInfoKey} onChange={v => { setOrderSearchInfoKey(v) }}>
                {drawerConfig.form.map(e => <Option value={e.code}>{e.name}</Option>)}
              </Select>
            }
              onSearch={text => {
                if (text !== '') {
                  setOrderSearchInfo({ key: orderSearchInfoKey, value: text })
                } else {
                  setOrderSearchInfo({})
                }
              }} />
          </> : null}

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
              <h2 className='title'>{item.title}</h2>
              <p className='description'>当前处理人：{item.executor.join('，')}</p>
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