import React, { useState, useEffect }  from 'react'
import { Modal, List } from 'antd'
import { useHistory } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import { queryOrderList, getFieldByCode } from '../../../../common/request'
import './orderModel.less'
export default (props) => {
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
    let { visible, title, pnum, onVisible } = props
    var oAttrs= [{ key: "overdue", value: "1", operator: "IN" }, { key: "formData.sfbx", value: "wgq", operator: "EQ" }]
    useEffect(() => {
        if(visible === true){   
          console.log(pageNum)
          if (title !== '总计') {
            oAttrs.push({ key: 'formData.xmmc', value: title, operator: "EQ" })
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
  return (
    <div className='order-modal'>
      <Modal title={title+'__逾期'} centered footer={null} bodyStyle={{height: 'calc(100vh - 127.5px - 76px)', padding: '0px'}}  visible={visible} onCancel={handleCancel}>
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
                    <h2 className='title'>{item.title}</h2>
                    <p className='description'>当前处理人：{item.executor.join('，')}</p>
                    <p className='description'>故障类型：{fxGzlxs[item.formData.fxGzlx]}</p>
                    <p className='description'>键盘编号：{item.formData.deviceKey}</p>
                    <p className='date'>报修时间： <span>{item.formData.bxsj}</span></p>
                    <p className='orderstate'>{item.activityName}</p>
                  </div>
                )} />
              </InfiniteScroll>
            </div>
      </Modal>
    </div>
  )
}