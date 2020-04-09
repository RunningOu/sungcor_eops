import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import {
  queryOrderModel,
  queryLastOrderModel,
  queryOrderInfo,
  handleOrder,
  updateOrder
} from '../../common/request'
import {
  singleRowTextShow,
  singleSelShow,
  listSelShow,
  multiRowTextShow,
  resourceShow,
  dateTimeShow,
  multiSelShow,
  OrderBuilder,
  FileShow
} from './components'
import { HeaderBar } from '../common'
import _ from 'lodash'
import orderBefore from './mock/orderBefore'

import './Details.less'

const cr = {
  "singleRowText": singleRowTextShow,
  "singleSel": singleSelShow,
  "listSel": listSelShow,
  "multiRowText": multiRowTextShow,
  "resource": resourceShow,
  "attachfile": singleRowTextShow,
  "department": singleRowTextShow,
  "dateTime": dateTimeShow,
  "multiSel": multiSelShow,
  "cascader": singleRowTextShow,
  "treeSel": singleRowTextShow,
  "double": singleRowTextShow
}


const Details = (props) => {
  const { location: { search }, match: { params: { modal } }, history } = props
  const [orderModel, setOrderModel] = useState([])
  const [orderInfo, setOrderInfo] = useState([])
  const [order, setOrder] = useState([])
  const query = new URLSearchParams(search)
  function orderReceiving(fn) {
    handleOrder({
      ticket_id: modal,//工单id
      model_id: query.get('modelId'),//模型id
      activity_id: query.get('actId'),//当前环节id
      handle_type: "0", // 接单
    }).then(d => {
      if(orderBefore[orderInfo.model_id] && orderBefore[orderInfo.model_id][orderInfo.activity_name]) {
        updateOrder({
          ticket_id: modal,
          form: {
            ...orderBefore[orderInfo.model_id][orderInfo.activity_name].update
          }
        })
        fn(d)
      }else {
        fn(d)
      }
    })
  }

  useEffect(() => {
    const query = new URLSearchParams(search)
    queryOrderInfo(modal)
      .then(d => {
        setOrderInfo(d)
        setOrder(d.form)
        queryOrderModel({
          modelId: query.get('modelId'),
          actId: query.get('actId')
        }).then(d => {
          if (d.activiti_type === 'EndNoneEvent') {
            queryLastOrderModel({
              id: modal
            }).then((ld) => {
              setOrderModel(ld.field_list)
            })
          } else {
            console.log(d)
            setOrderModel(d.field_list)
          }
        })
      })
  }, [modal, search])
  useEffect(() => {
    if (orderModel.length) {
      setOrder(oldOrder => {
        oldOrder = oldOrder.map(data => {
          let selfModal = _.find(orderModel, m => data.code === m.code)
          if (selfModal.type !== 'singleRowText' && selfModal.params) {
            data.params = selfModal.params
          }
          data.widget = cr[data.type]
          if (!data.default_value) {
            data = null
          }
          return data
        });
        return [..._.compact(oldOrder)]
      })
    }
  }, [orderModel])
  return (
    <div className='order-page-details'>
      <HeaderBar title="工单详情" />
      <div className='order'>
        <OrderBuilder meta={order} />
        { orderInfo.attach_files?.length ? <FileShow file={orderInfo.attach_files}/> : null }
        <div className="handle">
          {
            orderInfo.executors?.indexOf(props.userAccountInfo.userId) !== -1 && orderInfo.status !== 3 && Object.keys(orderInfo).length ?
              orderInfo.isreceived === 1 ?
                <>
                  <Button type="primary" block onClick={() => {
                    orderReceiving(() => {
                      history.go(-1)
                    })
                  }}>接单</Button>
                  <Button type="primary" block onClick={() => {
                    orderReceiving(() => {
                      history.push(`${props.location.pathname}/handle${search}`)
                    })
                  }}>接单并处理</Button>
                </> :
                <>
                  <Button type="primary" block onClick={() => {
                    history.push(`${props.location.pathname}/handle${search}`)
                  }}>处理</Button>
                </> :
              null
          }
        </div>
      </div>

    </div>
  )
}

function mapStateToProps(state) {
  return {
    userAccountInfo: state.user.userAccountInfo
  }
}

export default connect(mapStateToProps)(Details)