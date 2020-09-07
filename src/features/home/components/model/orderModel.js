import React, { useState, useEffect }  from 'react'
import { Modal, List, message } from 'antd'
import { useHistory } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import moment from 'moment'
import { queryOrderList, getFieldByCode } from '../../../../common/request'
import './orderModel.less'
import { formatDate } from '../../../../utils'
export default (props) => {
  let { visible, title, type, tabs, onVisible, status } = props
    const [orderList, setOrderList] = useState([])
    const [fxGzlxs, setFxGzlxs] = useState([])
    const [count, setCount] = useState(0) // 列表总数
    const [pageNum, setPageNum] = useState(1) // 列表分页下标
    const [loading, setLoading] = useState(false) // 列表加载中状态
    const [hasMore, setHasMore] = useState(true) // 列表加载中状态
    const history = useHistory()
    const handleInfiniteOnLoad = () => {
      setLoading(true)
      if (orderList.length < 10) {
        setHasMore(false)
        setLoading(false)
        return
      }
      setPageNum(current => current + 1)
    }
    // var oAttrs= [{ key: "overdue", value: "1", operator: "IN" }, { key: "formData.sfbx", value: "wgq", operator: "EQ" }]
    var AllAttrs= {
      'xmmc': {
        '逾期已完成': [
          { key: "overdue", value: "1", operator: "IN" },
          { key: "formData.sfbx", value: "wgq", operator: "EQ" },
          { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ"},
          { key: "status", value: "3", operator: "IN" }
        ],
        '逾期未完成': [
          { key: "overdue", value: "1", operator: "IN" },
          { key: "formData.sfbx", value: "wgq", operator: "EQ" },
          { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae",operator: "EQ"},
          { key: "status", value: "1,2", operator: "IN" }
        ],
        // 未完成不包括已挂起
        '未完成': [{ key: "status", value: "1,2", operator: "IN" }, { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }, { key: "formData.sfbx", value: "wgq", operator: "EQ" }],
        // 已挂起
        '挂起': [{ key: "status", value: "1,2", operator: "IN" }, { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }, { key: "formData.sfbx", value: "ygq", operator: "EQ" }]
      },
      'nc': {
        '逾期': [{ key: "overdue", value: "1", operator: "IN" }, { key: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }],
        '未完成': [{ key: "status", value: "1,2", operator: "IN" }, { key: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }]
      }
    }
    
    useEffect(() => {
        if(visible === true){
          var oAttrs = AllAttrs[tabs][type]
          console.log(pageNum)
          if (tabs === 'xmmc') {
            oAttrs.push({ key: 'formData.xmmc', value: title, operator: "EQ" })
          }
          if (tabs === 'nc') {
            oAttrs.push({ key: 'title', value: title, operator: "LIKE" })
          }
          if ( status === 'today' ) {
            console.log(formatDate(new Date(), 'yyyy-MM-dd') + ' 00:00:00')
            oAttrs.push({ key: 'createTime', value: formatDate(new Date(), 'yyyy-MM-dd') + ' 00:00:00' , operator: "GT" })
          }
          getFieldByCode('fxGzlx').then(data => {
            var fxGzlxs = {}
            data.data.params.forEach(element => {
              fxGzlxs[element.value] = element.label
            })
            setFxGzlxs(fxGzlxs)
          })
          // 逾期
          queryOrderList({
            'model': {'attrs':oAttrs},
            "pageNum": pageNum,
            "pageSize": 10
          }).then((d) => {
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
        } else {
          setPageNum(1)
          setHasMore(true)
        }
    }, [visible, pageNum])
    function handleCancel(e) {
      onVisible(false)
    }
    useEffect(() => {
      if (count > 0) {
        message.success({ content: `共有${count}条记录`})
      }
    }, [count])
  return (
    <div className='order-modal'>
      <Modal title={title+'_'+type} centered footer={null} bodyStyle={{height: 'calc(100vh - 127.5px - 76px)', padding: '0px'}}  visible={visible} onCancel={handleCancel}>
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
                    history.push(`order/${item.ticketId}?actId=${item.activityId}&modelId=${item.modelId}`) 
                    }}>
                    {
                       tabs === 'xmmc' ? 
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
                        <p className='date'>报修时间： <span>{item.formData.bxsj === undefined ? moment(item.createTime).format("YYYY-MM-DD HH:mm:ss") : item.formData.bxsj}</span></p>
                        <p className='orderstate'>{item.activityName}</p>
                       </>
                    }
                  </div>
                )} />
              </InfiniteScroll>
            </div>
      </Modal>
    </div>
  )
}