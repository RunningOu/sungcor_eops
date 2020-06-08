import React, { useState, useEffect } from 'react'
// import { Button , message , Modal} from 'antd'
import { Button , Modal, Input, message} from 'antd'
import moment from 'moment'
import { connect } from 'react-redux'
import {
  queryOrderModel,
  queryLastOrderModel,
  queryOrderInfo,
  handleOrder,
  updateOrder,
  getUserbyName
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
  GisShow,
  pendingShow,
  FileShow
} from './components'
import { HeaderBar } from '../common'
import _ from 'lodash'
import orderBefore from './mock/orderBefore'
import { USER_INFO_ID, MANAGE_ID } from '../../config'



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
  "double": singleRowTextShow,
  "pendingShow": pendingShow
}

const Details = (props) => {
  // const state = {
  //   ModalText: '沙发斯蒂芬',
  //   visible: false,
  //   confirmLoading: false,
  // }
  const { location: { search }, match: { params: { modal } }, history, userAccountInfo } = props
  const [orderModel, setOrderModel] = useState([])
  const [orderInfo, setOrderInfo] = useState([])
  const [order, setOrder] = useState([])
  const query = new URLSearchParams(search)
  const [visible, setVisible] = useState(false);
  const [disVisible, setDisVisible] = useState(false);
  const [title, setTitle] = useState();
  const [code, setCode] = useState(0);
  const [pcsInfo, setPcsInfo] = useState({})
  const [resourceId, setResourceId] = useState('') // 资产id
  // const [gqyy, setGqyy] = useState('') // 挂起原因
  const [disagreeRemark, setDisagreeRemark] = useState('')
  //挂起标识 isgq
  let isgq = 'wgq'
  try{
    orderInfo.form.forEach(orderattrs => {
        if(orderattrs.code === "sfbx"){
          isgq = orderattrs.default_value
        }
    })
    orderInfo.form.forEach(orderattrs => {
      if(orderattrs.code === "resource"){
        setResourceId(orderattrs.default_value[0].id)
      }
    })
    // orderInfo.form.forEach(orderattrs => {
    //   if(orderattrs.code === "gqyy"){
    //     setGqyy(orderattrs.default_value)
    //   }
    // })
  }catch(e){
  }
  function orderReceiving(fn) { 
    var Commitdatas = {
      ticket_id: modal,//工单id
      model_id: query.get('modelId'),//模型id
      activity_id: query.get('actId'),//当前环节id
      handle_type: "0", // 接单 
    }
    if(pcsInfo.apiKeys && (orderInfo.executors[0] !== MANAGE_ID || orderInfo.executors?.indexOf(pcsInfo.userId))){
      Commitdatas.apikey = pcsInfo.apiKeys[0].key
    }
    handleOrder(Commitdatas).then(d => {
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
  function orderHang(isHang, gqyy){
    if(isHang){
      if(code===0){
        updateOrder({
          ticket_id: modal,
          form: {
            'sfbx':'ygq'
          }
        })
      }
    if(code===1||code===2){
      updateOrder({
        ticket_id: modal,
        form: {
          'sfbx':'wgq'
        }
      })
     }
     history.go(-1);
    }
    setVisible(false)
  }

  function orderHangD(isHang){
    var gqyyy = ''
    var gqyArr = []
    orderInfo.form.forEach(orderattrs => {
      if(orderattrs.code === "gqyy"){
        gqyyy = orderattrs.default_value
      }
    })
    if (typeof(gqyyy) != 'string') {
      gqyArr = gqyyy
      gqyArr.push({'title': '不同意挂起原因：','reason': disagreeRemark, 'time': moment(new Date()).format("YYYY-MM-DD HH:mm:ss")})
    } else {
      gqyArr.push({'title': '挂起原因：','reason': gqyyy, 'time': ''})
      gqyArr.push({'title': '不同意挂起原因：','reason': disagreeRemark, 'time': moment(new Date()).format("YYYY-MM-DD HH:mm:ss")})
    }
    if(disagreeRemark){
      console.log(disagreeRemark)
      console.log(orderInfo.form)
      if(isHang){
        if(code===0){
          updateOrder({
            ticket_id: modal,
            form: {
              'sfbx':'ygq'
            }
          })
        }
      if(code===1||code===2){

        updateOrder({
          ticket_id: modal,
          form: {
            'sfbx':'wgq',
            'gqyy': gqyArr
          }
        })
      }
      history.go(-1);
      }
      setDisVisible(false)
    } else {
      message.warning('请填写不同意挂起原因')
    }
  }

  function orderHangOnklin(isHang,code){
    if(isHang==="ture"){
      setTitle("是否确认同意挂起")
      setVisible(true)
    }else{
      setTitle("是否确认不同意挂起")
      setDisVisible(true)
    }
    setCode(code)
  }
  function orderHangOnqh(code){
    setTitle("取回后工单将正常流转")
    setCode(code)
    setVisible(true)
  }
  useEffect(() => {
    const query = new URLSearchParams(search)
    queryOrderInfo(modal)
      .then(d => {
        setOrderInfo(d)
        setOrder(d.form)
        if(userAccountInfo.userId === MANAGE_ID) {
          console.log(d)
          d.form.forEach(orderattrs => {
            if(orderattrs.code === "fxpcs"){
              // console.log(orderattrs.default_value)
              getUserbyName(orderattrs.default_value).then(data => {
                // console.log("data>>>",data)
                setPcsInfo(data)
              })
            }
          })
        }
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
            setOrderModel(d.field_list)
          }
        })
      })
  }, [modal, search, userAccountInfo])
  useEffect(() => {
    if (orderModel.length) {
      setOrder(oldOrder => {
        oldOrder = oldOrder.map(data => {
          let selfModal = _.find(orderModel, m => data.code === m.code)
          if (selfModal.type !== 'singleRowText' && selfModal.params) {
            data.params = selfModal.params
          }
          if (selfModal.code === 'gqyy') {
            data.type = 'pendingShow'
          }
          // multiRowText
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
        { orderInfo.attach_files?.length ? <FileShow file={orderInfo.attach_files} className="12312312"/> : null }
        <div className="handle">
          {
            // 图像组管理员
            (orderInfo.executors?.indexOf(props.userAccountInfo.userId) !== -1 || (props.userAccountInfo.userId === MANAGE_ID && orderInfo.activity_name === '用户确认')) && orderInfo.status !== 3 && Object.keys(orderInfo).length ?
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
          {
            isgq === "gqsh" && (local_get(USER_INFO_ID).userId===MANAGE_ID)?
              <>
                <Button type="primary" block onClick={() => {
                  orderHangOnklin('ture',0)
                }}>同意挂起</Button>
                <Button type="primary" block onClick={() => {
                  orderHangOnklin('false',1)
                }}>不同意挂起</Button>
              </> :
              null
          }
          {
            orderInfo.executors?.indexOf(props.userAccountInfo.userId) !== -1 && orderInfo.status !== 3 && Object.keys(orderInfo).length ?
              isgq === "ygq"?
                <>
                  <Button type="primary" block onClick={() => {
                    orderHangOnqh(2)
                  }}>挂起工单取回</Button>
                </> :
                  null
            :null
            }
          {/* <GisShow resourceId={resourceId} /> */}
         <Modal visible={disVisible} title="系统提示" onOk={()=>orderHangD(true)} onCancel={()=>orderHangD(false)}>
            <Input.TextArea rows="3" placeholder="请填写不同意挂起原因" value={disagreeRemark} onChange={e => { setDisagreeRemark(e.target.value) }} />
         </Modal>
         <Modal visible={visible} title="系统提示" onOk={()=>orderHang(true)} onCancel={()=>orderHang(false)}>
            {title}
         </Modal>
        </div>
        <GisShow resourceId={resourceId} />
      </div>

    </div>
  )
}
export const local_get = (key) => {
  let value = localStorage.getItem(key)
  if(/^\{|\[*\}\b|\]\b/.test(value)) {
    value = JSON.parse(value)
  }
  return value
}
function mapStateToProps(state) {
  return {
    userAccountInfo: state.user.userAccountInfo
  }
}

export default connect(mapStateToProps)(Details)