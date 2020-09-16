import React, { useState, useEffect } from 'react'
// import { Button , message , Modal} from 'antd'
import { Button , Modal, Input, message, Spin} from 'antd'
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
  FileShow,
  title,
  cascaderShow
} from './components'
import { HeaderBar } from '../common'
import _ from 'lodash'
import orderBefore from './mock/orderBefore'
import orderSearch from './mock/orderSearch'
import { USER_INFO_ID, MANAGE_ID } from '../../config'
import orderModelConfig from './mock/orderModelConfig'



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
  "pendingShow": pendingShow,
  'cascader': cascaderShow,
  "title": title
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
  const [modalId, setModalId] = useState( new URLSearchParams(search).get('modelId'))//模型id
  const [gisvisible, setGisVisible] = useState('none')
  // const [plVisible, setPlVisible] = useState('none')
  const [disVisible, setDisVisible] = useState(false);
  const [title, setTitle] = useState();
  const [code, setCode] = useState(0);
  const [pcsInfo, setPcsInfo] = useState({})
  const [resourceId, setResourceId] = useState('') // 资产id
  const [state, setState] = useState(false)
  const [loading, setPlVisible] = useState(true)

  // const [orderOne, setOrderOne] = useState([])
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
        // 判断如果是视频报修
      if(orderSearch['视频报修'].modelId === query.get('modelId')){
        orderModelConfig[query.get('modelId')].forEach((item) => {
          if (item.id === query.get('actId')) {
            if (item.activiti_type === 'EndNoneEvent') {
              queryLastOrderModel({
                id: modal
              }).then((ld) => {
                setOrderModel(ld.field_list)
                setPlVisible(false)
              })
            } else {
              setOrderModel(item.field_list)
              setPlVisible(false)
            }
          }
        })
      }else{
        queryOrderModel({
          modelId: query.get('modelId'),
          actId: query.get('actId')
        }).then(d => {
          if (d.activiti_type === 'EndNoneEvent') {
            queryLastOrderModel({
              id: modal
            }).then((ld) => {
              setOrderModel(ld.field_list)
              setPlVisible(false)
            })
          } else {
            setOrderModel(d.field_list)
            setPlVisible(false)
          }
        })
      }
    })
  }, [modal, search, userAccountInfo])
  useEffect(() => {
     // 判断是否显示gis
     if(orderSearch['视频报修'].modelId === modalId){
      setGisVisible('unset');
    }
  }, [modalId])
  useEffect(() => {
    if (orderModel && orderModel.length) {
      var ddd  = []
      var iii = []
      if(!state){
        setOrder(oldOrder => {
          console.log(oldOrder)
          oldOrder = oldOrder.map((data, index) => {
            let selfModal = _.find(orderModel, m => data.code === m.code)
            if(!selfModal){
              return
            }
            if (selfModal.type !== 'singleRowText' && selfModal.params) {
              data.params = selfModal.params
            }
            if (selfModal.code === 'gqyy') {
              data.type = 'pendingShow'
            }
            if(selfModal.code === 'receivedman' ){
              setState(true)
              var dataa = {
                'widget': cr['title'],
                'id': 111122,
                'code': 'ncjd',
                'color': '',
                'type': 'title',
                value: '内场接单'
              }
              if (orderSearch['综合设备报修'].modelId === modalId) {
                dataa.value = '服务接单'
              }
              ddd.push(dataa)
              iii.push(index)
            }
            if(selfModal.code === 'solver'){
              var dataa = {
                'widget': cr['title'],
                'id': 1333,
                'color': '',
                'code': 'wcfd',
                'type': 'title',
                value: '外场返单'
              }
              if (orderSearch['综合设备报修'].modelId === modalId) {
                dataa.value = '设备处理'
              }
              ddd.push(dataa)
              iii.push(index)
            }
            if(selfModal.code === 'score'){
              var dataa = {
                'widget': cr['title'],
                'id': 6666,
                'color': '',
                'code': 'yhqr',
                'type': 'title',
                value: '用户确认'
              }
              ddd.push(dataa)
              iii.push(index)
            }
            if(selfModal.code === 'sfbx'){
              var dataa = {
                'widget': cr['title'],
                'id': 6000,
                'color': '',
                'code': 'lcxx',
                'type': 'title',
                value: '流程信息'
              }
              ddd.push(dataa)
              iii.push(index)
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
      
      setTimeout(() =>{
        var dataOne1 = order
        if (orderSearch['奉贤基础资源报修'].modelId !== modalId) {
          ddd.forEach((item,index) => {
            var dataOne = dataOne1.slice(0,index)
            console.log(index)
            var dataOne = dataOne1.slice(0,iii[index]+index)
            dataOne = dataOne.concat(item)
            dataOne = dataOne.concat(dataOne1.slice(iii[index]+index,dataOne1.length))
            console.log(dataOne)
            dataOne1 = dataOne
          })
        }
        setOrder(dataOne1)
        console.log(order) 
      }, 40)
    }
  }, [orderModel])
  
  return (
    <div className='order-page-details'>
      <HeaderBar title="工单详情" />
      <Spin spinning={loading} tip="Loading...">
        <div className='order'>
          <OrderBuilder meta={order} />
          { orderInfo.attach_files?.length ? <FileShow file={orderInfo.attach_files} className="12312312"/> : null }
          <div className="handle">
            {
              // 图像组管理员
              (orderInfo.executors?.indexOf(props.userAccountInfo.userId) !== -1 || (props.userAccountInfo.userId === MANAGE_ID && orderInfo.activity_name === '用户确认')) && orderInfo.status !== 3 && Object.keys(orderInfo).length ?
                orderInfo.isreceived === 1 ?
                  <>
                    <Button type="primary" size="large" onClick={() => {
                      orderReceiving(() => {
                        history.go(-1)
                      })
                    }}>接单</Button>
                    <Button size="large" type="primary" onClick={() => {
                      orderReceiving(() => {
                        history.push(`${props.location.pathname}/handle${search}`)
                      })
                    }}>接单并处理</Button>
                  </> :
                  <>
                    <Button type="primary" size="large" onClick={() => {
                      history.push(`${props.location.pathname}/handle${search}`)
                    }}>处理</Button>
                  </> :
                null
            }
            {
              isgq === "gqsh" && (local_get(USER_INFO_ID).userId===MANAGE_ID)?
                <>
                  <Button type="primary" onClick={() => {
                    orderHangOnklin('ture',0)
                  }}>同意挂起</Button>
                  <Button type="primary" onClick={() => {
                    orderHangOnklin('false',1)
                  }}>不同意挂起</Button>
                </> :
                null
            }
            {
              orderInfo.executors?.indexOf(props.userAccountInfo.userId) !== -1 && orderInfo.status !== 3 && Object.keys(orderInfo).length ?
                isgq === "ygq"?
                  <>
                    <Button type="primary" onClick={() => {
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
          <GisShow resourceId={resourceId} visible={gisvisible} />
        </div>
      </Spin>
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