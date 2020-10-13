import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar, IconFontl } from '../common'
import { Tabs, Input, Icon, Drawer, Tag, List, message, Select } from 'antd'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import InfiniteScroll from 'react-infinite-scroller'
import { getFieldByCode, queryOrderList } from '../../common/request'
// import { formatDate } from '../../utils';
import { USER_INFO_ID, MANAGE_ID } from '../../config'
import orderSearch from './mock/orderSearch'
import orderTab from './mock/orderTab'
import {local_get} from '../../utils'

import './Order.less'

const { TabPane } = Tabs;
const { Search } = Input;
const { CheckableTag } = Tag;
const { Option } = Select;
const MESSAGE_KEY = 'messageKey'
const ORDER_TYPE_ALL = ['视频报修']
// const tabs = [
//   { title: '挂起', sub: 5 },
//   { title: '待办', sub: 1 },
//   { title: '逾期', sub: 4 },
//   { title: '完成', sub: 3 },
//   { title: '参与', sub: 2 },
//   { title: '全部', sub: 0 },
// ];
// const tabsConfig = userId => [
//   [],
//   [{ key: "executor", value: userId, operator: "IN" }, { key:   "status", value: "1,2", operator: "IN" }, { key: "formData.sfbx", value: "wgq", operator: "EQ" }],
//   [{ key: "participation", value: userId, operator: "IN" }, { key: "status", value: "1,2", operator: "IN" }],
//   [{ key: "status", value: "3", operator: "IN" }],
//   [{ key: "overdue", value: "1", operator: "IN" }, { key: "formData.sfbx", value: "wgq", operator: "EQ" }],
//   [{ key: "formData.sfbx", value: "ygq", operator: "EQ" }] // 挂起 只显示 执行人 有 他的，图像组管理员特殊处理
// ]
const Order = (props) => {
  const { user: { userAccountInfo  }, location: { search } } = props
  const orderListRef = document.getElementsByClassName('order-list')[0]
  const history = useHistory()
  const [userId,setUserId] = useState(local_get(USER_INFO_ID).userId)
  const [tabs,setTabs] = useState(orderTab[new URLSearchParams(search).get('modelId') || 'a50f0654c8a7465291f17769d4b61fae'].tabs) // 默认取视频的
  const tabsConfig = orderTab[new URLSearchParams(search).get('modelId') || 'a50f0654c8a7465291f17769d4b61fae'].tabsConfig // tab项配置
  const searchList = orderTab[new URLSearchParams(search).get('modelId') || 'a50f0654c8a7465291f17769d4b61fae'].searchList//查询条件
  const [orderList, setOrderList] = useState([]) // 工单列表
  const [modelId, setModelId] = useState(new URLSearchParams(search).get('modelId') || 'a50f0654c8a7465291f17769d4b61fae') // 工单模型id
  const modelName = orderTab[new URLSearchParams(search).get('modelId') || 'a50f0654c8a7465291f17769d4b61fae'].modelName// 工单模型名称
  const [orderState, setOrderState] = useState( new URLSearchParams(search).get('state') || "1")//默认选中代办
  const [model, setModel] = useState({}) // 工单查询参数
  const [searchTitle, setSearchTitle] = useState(new URLSearchParams(search).get('search') || '') // 搜索工单标题
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
  const [searchInfo, setSearchInfoKey] = useState(new URLSearchParams(search).get('searchType') || searchList[0].code)
  const [fxGzlxs, setFxGzlxs] = useState({})
  const [plVisible, setPlVisible] = useState('none')

  const callback = (key) => {
    setOrderState(key)
    orderListRef.scrollTo(0,0)
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
  //
  useEffect(() => {
    if (orderSearch !== '' && orderSearch[orderSearchType]) {
      setDrawerConfig(orderSearch[orderSearchType])
    } else {
      setDrawerConfig({})
      setOrderSearchFlow([])
      setOrderSearchInfo({})
    }

    getFieldByCode('fxGzlx').then(data => {
      var fxGzlxs = {}
      data.data.params.forEach(element => {
        fxGzlxs[element.value] = element.label
      })
      // console.log(fxGzlxs)
      setFxGzlxs(fxGzlxs)
    })
  }, [orderSearchType])
  useEffect(() => {
    if (drawerConfig.form) setOrderSearchInfoKey(drawerConfig.form[0].code)
    // setOrderSearchInfo()
  }, [drawerConfig])

  useEffect(() => {
    setPageNum(1)
    setHasMore(true)
  }, [orderState, searchTitle, orderSearchInfo, orderSearchFlow, drawerConfig, search])
  useEffect(() => {
    console.log('当前状态tab',orderState);
    let attrs = [...tabsConfig(userId)[orderState]]
    if (Object.keys(drawerConfig).length) attrs.push({key: "modelId", value: drawerConfig.modelId, operator: "EQ"})
    if (searchTitle !== "") attrs.push({ key: searchInfo, value: searchTitle, operator: "LIKE" })
    if (Object.keys(orderSearchInfo).length) attrs.push({ key: orderSearchInfo.key, value: orderSearchInfo.value, operator: "LIKE" })
    if (orderSearchFlow.length) attrs.push({ key: 'activityName', value: orderSearchFlow.join(','), operator: 'IN' })
    // 视频报修 图像组管理员特殊处理
    if ((orderState === 1 || orderState === '1') && (local_get(USER_INFO_ID).userId === MANAGE_ID) && orderSearch['视频报修'].modelId === modelId) {
        attrs.splice(2,1) // 将待办中原有的 formData.sfbx 参数剪切掉
        attrs.push({ key: 'formData.sfbx', value:"gqsh", operator: 'EQ' })
    }
    // 挂起 & 逾期 图像组管理员特殊处理
    // if ((orderState === '5' || orderState === 5 || orderState === '4' || orderState === 4) && local_get(USER_INFO_ID).userId !== MANAGE_ID) {
    //   attrs.push({ key: "executor", value: userAccountInfo.userId, operator: "IN" })
    //   // 挂起 & 逾期 / 不是图像组管理员 添加参数
    // }
    if((orderState==='5' || orderState === 5) && local_get(USER_INFO_ID).userId !== MANAGE_ID) {
      attrs.push({key: "executor",value: userId, operator: "IN" })
    }
    if((orderState==='4' || orderState === 4) && local_get(USER_INFO_ID).userId !== MANAGE_ID) {
      attrs.push({key: "status", value: "1,2,3", operator: "IN"})
      attrs.push({key: "executor",value: userId, operator: "IN" })
    }
    // 完成工单 特殊处理
    if ((orderState === '3' || orderState === 3 ) && local_get(USER_INFO_ID).userId !== MANAGE_ID) {
      attrs.push({ key: "participation", value: userId, operator: "IN" }) // 挂起 & 逾期 / 不是图像组管理员 添加参数
    }
    // console.log(orderState)
    // console.log(attrs)
    setLoading(true)
    setModel(oldModel => {
      return {
        ...oldModel,
        attrs
      }
    })
  }, [orderState, userAccountInfo, searchTitle, orderSearchInfo, orderSearchFlow, drawerConfig, search])

  useEffect(() => {
    if (count > 0) {
      message.success({ content: `共有${count}条记录`},1)
    }
    if ((orderState === 1 || orderState === "1" ) && count > 0 && modelId === 'a50f0654c8a7465291f17769d4b61fae' && orderList[0].activityName !== '外场返单') {
      setPlVisible('unset')
    } else {
      setPlVisible('none')
    }
  }, [count])

  useEffect(() => {
    if(tabs && tabsConfig){
      console.log('tab页更新');
      // tabs: [
      //   { title: '挂起', sub: 5 , sum: 0},
      //   { title: '待办', sub: 1 , sum: 0},
      //   { title: '逾期', sub: 4 , sum: 0},
      //   { title: '完成', sub: 3 },
      //   { title: '参与', sub: 2 , sum: 0},
      //   { title: '全部', sub: 0 },
      // ]
      // tabsConfig: userId => [
      //   [{ key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
      //   [{ key: "executor", value: userId, operator: "IN" },{ key: "status", value: "1,2", operator: "IN" },{ key: "formData.sfbx", value: "wgq", operator: "EQ" },{ key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
      //   [{ key: "participation", value: userId, operator: "IN" },{ key: "status", value: "1,2", operator: "IN" },{ key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
      //   [{ key: "status", value: "3", operator: "IN" },{ key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
      //   [{ key: "overdue", value: "1", operator: "IN" },{ key: "formData.sfbx", value: "wgq", operator: "EQ" },{ key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
      //   [{ key: "formData.sfbx", value: "ygq", operator: "EQ" }] // 挂起 只显示 执行人 有 他的，图像组管理员特殊处理
      // ],
      tabs.forEach((item,index) => {
        console.log('用户信息之userId',userId);
        if(item.sum !== undefined){
          let attt = [...tabsConfig(userId)[item.sub]]
            // 视频报修 图像组管理员特殊处理
            // 命中代办
          if ((item.sub === 1 || item.sub === '1') && (local_get(USER_INFO_ID).userId === MANAGE_ID) && orderSearch['视频报修'].modelId === modelId) {
            attt.splice(2,1) // 将待办中原有的 formData.sfbx 参数剪切掉
            attt.push({ key: 'formData.sfbx', value:"gqsh", operator: 'EQ' })
          }
          // 挂起 & 逾期 图像组管理员特殊处理
          if ((item.sub === '5' || item.sub === 5) && local_get(USER_INFO_ID).userId !== MANAGE_ID) {
            attt.push({ key: "executor", value: userId  , operator: "IN" })
            // 挂起 & 逾期 / 不是图像组管理员 添加参数
          }
          if(( item.sub === '4' || item.sub === 4) && local_get(USER_INFO_ID).userId !== MANAGE_ID) {
            attt.push({ key: "executor", value: userId  , operator: "IN" })
            attt.push({key: "status", value: "1,2,3", operator: "IN"})
          }

          // 完成工单 特殊处理
          // 命中完成
          if ((item.sub === '3' || item.sub === 3 ) && local_get(USER_INFO_ID).userId !== MANAGE_ID) {
            attt.push({ key: "participation", value: userId, operator: "IN" }) // 挂起 & 逾期 / 不是图像组管理员 添加参数
          }
          queryOrderList({
            'model': {
              attrs: attt
            },
            "pageNum": pageNum,
            "pageSize": 10
          }).then((d) => {
            console.log('attt请求参数,',attt,'tab状态',item.title,'tab值',d)
            item.sum = d.count
          })
        }
      })
    }
  }, [tabs,tabsConfig])
  
  useEffect(() => {
    if(Object.keys(model).length) {
      queryOrderList({
        'model': model,
        "pageNum": pageNum,
        "pageSize": 10
      }).then((d) => {
        console.log('请求orderList',d)
        if (d.hasOwnProperty('list')) {
          if (d.list.length !== 10) setHasMore(false)
          if(pageNum === 1) {
            setOrderList([...d.list])
          }else {
            setOrderList((oldList) => [...oldList, ...d.list])
          } 
          setLoading(false)
        }
        setCount(d.count)
      })
        .catch((e) => { })
    }
  }, [model, pageNum])


  return (
    <div className='order-page-index'>
      <HeaderBar title={modelName+'-工单列表'} />
      <Tabs defaultActiveKey={orderState} onChange={callback} >
        {tabs.map((tab) =>
        (<TabPane tab={!tab.sum ? tab.title : tab.title + '('+tab.sum+')' }  key={tab.sub} />))
        }
      </Tabs>
      <div className='search-bar'>
        <Select value={searchInfo} onChange={v => { setSearchInfoKey(v);
        setSearchTitle('') }}>
          {searchList.map(e => <Option
          //这里增加了一个key 如有报错或者页面展示错误请删除
            key={e.name}
            value={e.code}>{e.name}</Option>)}
        </Select>
        <Search defaultValue={searchTitle} className='search-input' placeholder={'请输入'} onSearch={value => { setSearchTitle(value) }} />
        {/* <div className='search-bar-right' onClick={() => { setDrawerOpen(true) }}><Icon type="menu" /></div> */}
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
            <div className='item' onClick={() => {
              history.push(`order/${item.ticketId}?actId=${item.activityId}&modelId=${item.modelId}` + '&search=' + searchTitle + '&searchType=' + searchInfo)
              }}>
                {
                  item.modelId === orderSearch['视频报修'].modelId ? 
                  <>
                  <h2 className='title'>{item.title}</h2>
                  <p className='description'>当前处理人：{item.executor.join('，')}</p>
                  <p className='description'>故障类型：{fxGzlxs[item.formData.fxGzlx]}</p>
                  <p className='description'>键盘编号：{item.formData.deviceKey}</p>
                  <p className='date'>报修时间： <span>{item.formData.bxsj}</span></p>
                  <p className='orderstate'>{item.activityName}</p> 
                  </>
                   :
                   <>
                   <h2 className='title'>{item.title}</h2>
                  <p className='description'>当前处理人：{item.executor.join('，')}</p>
                  {/* <p className='description'>故障类型：{fxGzlxs[item.formData.fxGzlx]}</p> */}
                  <p className='date'>报修时间： <span>{item.formData.bxsj === undefined ? moment(item.createTime).format("YYYY-MM-DD HH:mm:ss") : item.formData.bxsj}</span></p>
                  <p className='orderstate'>{item.activityName}</p>
                  </>
                }
            </div>
          )} />
        </InfiniteScroll>
      </div>
      <div className='home-components-alert' style={{display: plVisible}} onClick={() => { history.push('/order/selectView'+'?search='+searchTitle+'&searchType='+searchInfo) }}>
        <button style={{fontSize: '16px'}}>批量</button>
        {/* {<IconFontl type="iconjurassic_batch-work" /> || '/'} */}
      </div>
      <FooterBar pathname={props.location.pathname} userInfo={userAccountInfo} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Order)