import React, { useState, useEffect } from 'react'
import { Form, message, Spin, Button, Modal, Tag, Input } from 'antd'
import { MANAGE_ID } from '../../../config'
import { local_get } from '../../../utils/index'
import moment from 'moment'
import _ from 'lodash'
import {
  FormBuilder,
  singleRowText,
  multiRowText,
  multiSel,
  singleSel,
  dateTime,
  resource,
  listSel,
  GisShow,
  HandleButton
} from '../components'
import { queryOrderModel, queryOrderInfo, handleOrderlist, updateImage, changeOrderExecutor, updateOrder, getUserbyName } from '../../../common/request'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import { HeaderBar } from '../../common'
import orderConfig from '../mock/orderConfig'
import orderBefore from '../mock/orderBefore'
import orderSearch from '../mock/orderSearch'
import orderModelConfig from '../mock/orderModelConfig'

// import '/Form.less'

const MESSAGE_KEY = 'messageKey'
const { CheckableTag } = Tag
function pickProps(source, props) {
  const target = {};
  props.forEach(prop => {
    if (prop in source) target[prop] = source[prop];
  });
  return target;
}
const objToFields = (obj) => {
  let target = {}
  for (let [key, value] of Object.entries(obj)) {
    target[key] = Form.createFormField({ value })
  }
  return target
}
const fieldsToObj = (fields) => {
  let target = {}
  for (let [key, field] of Object.entries(fields)) {
    if (field.value !== void 0) {
      target[key] = field.value
    }
  }
  return target
}
const cr = {
  "singleRowText": singleRowText,
  "singleSel": singleSel,
  "listSel": listSel,
  "multiRowText": multiRowText,
  "resource": resource,
  "attachfile": singleRowText,
  "department": singleRowText,
  "dateTime": dateTime,
  "multiSel": multiSel,
  "cascader": singleRowText,
  "treeSel": singleRowText,
  "double": singleRowText
}


const HandleOrder = Form.create({
  onFieldsChange: (props, changeFields, allFields) => {
    props.actions.setForm(fieldsToObj(allFields))
  },
  mapPropsToFields(props) {
    return objToFields(props.order.form)
  }
})((props) => {
  const [listSelect, setListSelec] = useState(JSON.parse(local_get('selected')))
  const [listSelect1, setListSelect] =  useState(JSON.parse(local_get('selected')))
  const [modal, setModel] = useState(JSON.parse(local_get('selected'))[0].ticketId)
  const { location: { search }, history, user: { userAccountInfo } } = props
  const [orderModal, setOrderModal] = useState({})
  const [meta, setMeta] = useState([])
  const [needFile, setNeedFile] = useState(false)
  const [orderInfo, setOrderInfo] = useState([])
  const [loading, setPlVisible] = useState(false) //图片

  const [changeExecutor, setChangeExecutor] = useState(false)
  const [changeRemark, setChangeRemark] = useState('')
  const [changeTarget, setChangeTarget] = useState(null)

  const [showPutUp, setShowPutUp] = useState(false)
  const [putUpRemark, setPutUpRemark] = useState('')
  const [sfgq, setSfgq] = useState(false)
  const [pcsInfo, setPcsInfo] = useState({})

  const query = new URLSearchParams(search)

  try{
    orderInfo.form.forEach(orderFindGq => {
      if(orderFindGq.code === 'sfbx'){
        if(orderFindGq.default_value === 'ygq' || orderFindGq.default_value === 'gqsh'){
          setSfgq(true)
          message.info("工单已被挂起锁定，无法操作")
        }
      }
    })
  
  }catch{
    console.log('')
  }
  function handleForm(handle_rules, name, extraForm = {}) {
    setPlVisible(true)
    const query = new URLSearchParams(search)
    let pass = true
    let form = { ...props.order.form }
    if (query.get('modelId') === orderSearch['视频报修'].modelId) {
      form = { ...props.order.form, ...extraForm }
    }
    props.form.validateFieldsAndScroll((err, value) => {
      if (err) {
        pass = false
      }
    })
    if (!pass) {
      message.warning('请填写完全工单信息！')
      return
    }
    if (props.order.form.gqyy) {
      form.gqyy = props.order.form.gqyy
    }
    var formdata = {}
    meta.forEach((item) => {
      formdata[item.code] = form[item.code] === undefined ? '' : form[item.code]
    })
    var pldeal = []
    if(userAccountInfo.userId === MANAGE_ID){
      listSelect.forEach((item) => {
      // setPcsInfo(data)
        var submitDatat = {
          ticket_id: item.ticketId,//工单id
          model_id: query.get('modelId'),//模型id
          activity_id: query.get('actId'),//当前环节id
          handle_type: "1",
          form: {
            ...formdata,
            ...item.formData
          },
          handle_rules: {
            ...handle_rules
          }
        }
        var param = {
          data: submitDatat,
          apikey: item.apikey
        }
        console.log(param)
        pldeal.push(param)
      })
      handleOrderlist(pldeal).then(d => {
        setPlVisible(false)
        history.push('/order?modelId='+query.get('modelId'))
      })
    } else {
      listSelect.forEach((item) => {
        var param1 = {
          data: {
            ticket_id: item.ticketId,//工单id
            model_id: query.get('modelId'),//模型id
            activity_id: query.get('actId'),//当前环节id
            handle_type: "1",
            form: {
              ...formdata,
              ...item.formData
            },
            handle_rules: {
              ...handle_rules
            }
          },
          apikey: userAccountInfo.apiKey
        }
        pldeal.push(param1)
      })
      handleOrderlist(pldeal).then(d => {
        setPlVisible(false)
        history.push('/order?modelId='+query.get('modelId'))
      })
    }
  }

  useEffect(() => {
    if(userAccountInfo.userId === MANAGE_ID){
      listSelect.forEach((item,index) => {
        getUserbyName(item.formData.fxpcs).then(data => {
          item.apikey = data.apiKeys[0].key
          console.log(listSelect)
          // setListSelec()
        })
      })
    }
    
  },[listSelect1])

  useEffect(() => {
    const query = new URLSearchParams(search)
    queryOrderInfo(modal).then(d => {
      let formData = {}
      props.actions.clearForm()
      if (d.hasOwnProperty('form')) {
        d.form.forEach(f => {
          if (f.hasOwnProperty('default_value')) {
            formData[f.code] = f.default_value
          }
        })
        setOrderInfo(d)
        props.actions.setForm(formData)
      }
      orderModelConfig[query.get('modelId')].forEach((item) => {
        if (item.id === query.get('actId')) {
          setOrderModal(item)
          return
        }
      })
    })
  }, [modal, props.actions, search, userAccountInfo])
  useEffect(() => {
    // 给formBuilder提供meta
    const query = new URLSearchParams(search)
    let newMeta = []
    if (orderModal.hasOwnProperty('field_list')) {
      let orderRule = _.get(orderConfig, `${query.get('modelId')}.${orderModal.name}`, {})
      orderModal.field_list.forEach(field => {
        if (orderRule.hidden && orderRule.hidden.includes(field.code)) {
          return
        }
        if (field.code === 'file') {
          setNeedFile(true)
          return
        }
        const element = pickProps(field, [
          'code', 'name', 'id', 'type', 'params', 'cascader', 'type_desc'
        ])
        element.widget = cr[element.type]
        element.form = props.order.form
        element.rules = []
        if (orderRule.readOnly && orderRule.readOnly.indexOf(field.code) !== -1) {
          element.disabled = true
        }
        if (orderRule.required && orderRule.required.includes(field.code)) {
          element.rules.push({
            required: true,
            message: '必填项'
          })
        }
        newMeta.push(element)
      })
      setMeta(newMeta)
    }
  }, [orderModal, props.order, modal, search])
  useEffect(() => {
    const query = new URLSearchParams(search)
    let orderRule = _.get(orderConfig, `${query.get('modelId')}.${orderModal.name}`, {})
    console.log(orderRule)
    if (orderRule && orderRule.hasOwnProperty('defaultValue')) {
      let defaultForm = {}
      for (const [key, value] of Object.entries(orderRule.defaultValue)) {
        if (props.user.userAccountInfo.hasOwnProperty(value)) {
          defaultForm[key] = props.user.userAccountInfo[value]
        } else {
          if(typeof value === "function") {
            defaultForm[key] = value()
          }else {
            defaultForm[key] = value
          }
        }
      }
      props.actions.setForm(defaultForm)
    }
  }, [props.actions, props.user, orderModal, modal, search])
  useEffect(() => {
    console.log(orderInfo, orderModal)
    console.log(orderBefore.changeExecutor[orderModal.sequence])
  }, [orderInfo, orderModal])


  return (
    <div className='order-page-formhandle'>
    <HeaderBar title='工单批量处理' />
      <Spin spinning={loading}>
        <div className='form'>
          <Form>
            <FormBuilder meta={meta} form={props.form} />
          </Form>
          <div className="handle-button-group">
            { sfgq?null:orderInfo.handle_rules?.map(d => (<HandleButton key={d.route_id} handle={orderModal} handleForm={handleForm} modal={modal}>{d.name}</HandleButton>))}
            {/* {[3,6,8].includes(orderModal.sequence) ? */}
            {[3, 6, 8].includes(orderModal.sequence) && orderSearch['视频报修'].modelId === orderInfo.model_id ?
              <>
                <Button onClick={() => { setChangeExecutor(true) }}>改派工单</Button>
                <Modal
                  visible={changeExecutor}
                  title="选择改派人"
                  onOk={() => {
                    if (changeTarget) {
                      changeOrderExecutor({
                        ticketId: modal,
                        executor: changeTarget.id,
                        tacheId: query.get('actId')
                      }).then(d => {
                        updateOrder({
                          ticket_id: modal,
                          form: {
                            gpsm: `${moment(new Date()).format("YYYY-MM-DD HH:mm")} 由 <${props.user.userAccountInfo.realname}> 改派给 <${changeTarget.name}> ${changeRemark !== '' ? '说明: ' + changeRemark : ''}`
                          }
                        }).then(() => {
                          history.push('/order')
                        })
                      })
                    } else {
                      message.warning('请选择一个改派人')
                    }
                  }}
                  onCancel={() => { setChangeExecutor(false) }}>
                  <div style={{ padding: "10px 0" }}>
                    <span>选择改派人: </span>
                    {
                      orderBefore.changeExecutor[orderModal.sequence].map(e =>
                        <CheckableTag
                          key={e.id}
                          checked={e.id === changeTarget?.id}
                          onChange={checked => {
                            if (!checked) {
                              setChangeTarget(null)
                            } else {
                              setChangeTarget(e)
                            }
                          }}>{e.name}</CheckableTag>
                      )}
                  </div>
                  <Input.TextArea rows="3" placeholder="改派说明" value={changeRemark} onChange={e => { setChangeRemark(e.target.value) }} />
                </Modal>
              </>
              : null}
          </div>
        </div>
      </Spin>
    </div>
  )
})

function mapStateToProps(state) {
  return {
    user: state.user,
    order: state.order
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HandleOrder)