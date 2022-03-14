import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../../common'
import InfiniteScroll from 'react-infinite-scroller'
import { USER_INFO_ID } from '../../../config'
import { local_get,local_set } from '../../../utils/index'
import { Table, Button, message } from 'antd'
import { useHistory } from 'react-router-dom'
import { getFieldByCode, queryOrderList } from '../../../common/request'
import orderTab from '../mock/orderTab'

import './SelectView.less'

const SelectView = (props) => {
  const { location: { search } } = props
  const searchValue = new URLSearchParams(search).get('search') || '' // 搜索内容
  // console.log(searchValue)
  const searchKey = new URLSearchParams(search).get('searchType') || '' // 搜索内容
  const userInfo = local_get(USER_INFO_ID)
  const history = useHistory()
  const tabsConfig = orderTab['a50f0654c8a7465291f17769d4b61fae'].tabsConfig // tab项配置
  const [state, setState] = useState({selectedRowKeys: [],selectedRows: []}) // Check here to configure the default column
  const [selectedRows, setSelectedRows] = useState([])
  const [orderList, setOrderList] = useState([]) // 工单列表
  const [fxGzlxs, setFxGzlxs] = useState({})
  const [pageNum, setPageNum] = useState(1)
  const [pageSize, setPageSize] = useState(15)
  const [total, setTotal] = useState(0)
  const [plVisible, setPlVisible] = useState('none')
  const [loading, setLoading] = useState(false) // 列表加载中状态
  const [hasMore, setHasMore] = useState(true) // 列表加载中状态
  const handleInfiniteOnLoad = () => {
    setLoading(true)
    if (orderList.length < 10) {
      setHasMore(false)
      setLoading(false)
      return
    }
    setPageNum(current => current + 1)
  }
  const columns = [
    {
      title: '工单标题',
      dataIndex: 'title',
      key: 'title',
      align: 'center'
    },
    {
      title: '故障类型',
      dataIndex: 'formData.fxGzlx',
      key: 'formData.fxGzlx',
      width: 100,
      align: 'center',
      render: fxGzlx => {
        return fxGzlxs[fxGzlx]
      }
    },
    {
      title: '键盘编号',
      dataIndex: 'formData.deviceKey',
      key: 'formData.deviceKey',
      align: 'center'
    }
  ];

  const onSelectChange = selectedRowKeys => {
    // return
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setState({ selectedRowKeys });
    state.selectedRows = []
    selectedRowKeys.forEach((item) => {
      state.selectedRows.push(orderList[item])
    })
    if (selectedRowKeys.length > 0 && selectedRowKeys.length <= 15) {
      message.info('已选'+selectedRowKeys.length+'个工单'+',预计处理时间:'+selectedRowKeys.length*2+'s')
      setPlVisible('unset')
    } else if(selectedRowKeys.length > 15){
      message.error('已选'+selectedRowKeys.length+'个工单'+'最多只能选15个，请重新选择')
      // return selectedRowKeys.splice(0,14)
      setPlVisible('none')
    } else {
      setPlVisible('none')
    }
    setSelectedRows(state.selectedRows)
    console.log(state.selectedRows)
  };
  const { selectedRowKeys } = state;
  const rederSeell = (checked, record, index, originNode) => {
    console.log(originNode)
    // originNode.type=''
    // index.remove(1)
    index.splice(0,0)
    if(index.length>10){
      return false
    }
    return false;
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    renderCell: rederSeell
  };
  const selection = {
    onSelect: (changeableRowKeys) => {
      console.log(changeableRowKeys)
    }
  }

  useEffect(() => {
    getFieldByCode('fxGzlx').then(data => {
      var fxGzlxs = {}
      data.data.params.forEach(element => {
        fxGzlxs[element.value] = element.label
      })
      // console.log(fxGzlxs)
      setFxGzlxs(fxGzlxs)
    })
  },[])
  useEffect(() => {
    var attrs = [...tabsConfig(userInfo.userId)[1]]
    if (searchValue !== '') attrs.push({ field: searchKey, value: searchValue, operator: "LIKE" })
    console.log(attrs)
    queryOrderList({
      'conditions': attrs,
      "pageNum": pageNum,
      "pageSize": pageSize
    }).then((d) => {
      setTotal(d.count)
      console.log(1)
      if (d.hasOwnProperty('list')) {
        if (d.list.length !== 15) setHasMore(false)
        if(pageNum === 1) {
          setOrderList([...d.list])
        }else {
          setOrderList((oldList) => [...oldList, ...d.list])
        }
        setLoading(false)
      }
    })
  },[pageNum])

  return (
    <div className="selectView">
      <HeaderBar title="工单批量处理(选择工单)" />
      {/* <Button type="primary" onClick={() => {
        // history.push(`${props.location.pathname}/handle${search}`)
      }}>处理</Button> */}
      <div className='order-list'>
        <InfiniteScroll
          initialLoad={false}
          pageStart={1}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <Table rowSelection={rowSelection} selection={selection} pagination={false} dataSource={orderList} columns={columns} />
        </InfiniteScroll>
      </div>
      <div className='pl-handle' style={{display: plVisible}} onClick={() => {
        local_set('selected', selectedRows)
        history.push('/order/formHandleBa?modelId=a50f0654c8a7465291f17769d4b61fae&actId='+selectedRows[0].activityId) }}>
        <button style={{fontSize: '16px'}}>处理</button>
        {/* {<IconFontl type="iconjurassic_batch-work" /> || '/'} */}
      </div>
      <FooterBar pathname={props.location.pathname} />
    </div>
  )
}


export default SelectView