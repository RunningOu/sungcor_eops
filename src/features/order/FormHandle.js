import React, { useState, useEffect } from 'react'
import { Form, message, Upload, Button, Modal, Tag, Input, Spin ,Progress} from 'antd'
import { MANAGE_ID } from '../../config'
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
} from './components'
import { queryOrderModel, queryOrderInfo, handleOrder, updateImage, changeOrderExecutor, updateOrder, getUserbyName ,getSelfDetection} from '../../common/request'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions'
import { HeaderBar } from '../common'
import orderConfig from './mock/orderConfig'
import orderBefore from './mock/orderBefore'
import orderSearch from './mock/orderSearch'
import orderModelConfig from './mock/orderModelConfig'

import './Form.less'

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

const outfieldWXWCId = 'a01fd8836a2244fe8e3d4640d2a55fcf'

const infieldWXWCId = '7c79d4c44ed541e7bd0ba0a7e9c2afd5'

//需要自检的错误编号
const ErrorNumMap = ['9','10','11','12','13','14','99',9,10,11,12,13,14,99]

  

const HandleOrder = Form.create({
  onFieldsChange: (props, changeFields, allFields) => {
    props.actions.setForm(fieldsToObj(allFields))
  },
  mapPropsToFields(props) {
    return objToFields(props.order.form)
  }
})((props) => {
  const { location: { search }, match: { params: { modal } }, history, user: { userAccountInfo } } = props
  const [orderModal, setOrderModal] = useState({})
  const [meta, setMeta] = useState([])
  const [needFile, setNeedFile] = useState(false)
  const [orderInfo, setOrderInfo] = useState([])
  const [files, setFiles] = useState([]) //图片
  const [handle, setHandle] = useState({}) //setHandle
  const [visible, setVisible] = useState('none') // gis显示隐藏
  const [loading, setPlVisible] = useState(true)
  const query = new URLSearchParams(search)

  const [changeExecutor, setChangeExecutor] = useState(false)
  const [changeRemark, setChangeRemark] = useState('')
  const [changeTarget, setChangeTarget] = useState(null)

  const [showPutUp, setShowPutUp] = useState(false)
  const [putUpRemark, setPutUpRemark] = useState('')
  const [sfgq, setSfgq] = useState(false)
  const [pcsInfo, setPcsInfo] = useState({})
  const [resourceId, setResourceId] = useState('') // 资产id

  function handleForm(handle_rules, name, extraForm = {}) {
    const {route_id } = handle_rules
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
    if(form.overdueNotify){
      delete form.overdueNotify
      console.log(form)
    }
    var submitData = {
      ticket_id: modal,//工单id
      model_id: query.get('modelId'),//模型id
      activity_id: query.get('actId'),//当前环节id
      handle_type: "1",
      form: {
        ...form
      },
      handle_rules: {
        ...handle_rules
      }
    }
    if(pcsInfo.apiKeys && orderInfo.executors[0] !== MANAGE_ID){
      submitData.apikey = pcsInfo.apiKeys[0].key
    }

    console.log('submitData',submitData)
    const {form: { deviceIP ,fxGzlx }} = submitData
    //分别为内场和外场的维修完成ID  如果点击维修完成 进到这个逻辑

    if(name === '维修完成' && ErrorNumMap.includes(fxGzlx)) {
      //如果是人工报修,则不需要检测
        let result
        //如果result的值为true 代表摄像机能ping通，自检通过
        // handleOrder(submitData).then(d => {
        //   // if (name !== '维修完成关单') wxMessage({ id: orderInfo.id })
        //   //判断是否有图片，有的话就上传
        //   if (files.length) {
        //     message.loading({ content: '开始上传图片……', key: MESSAGE_KEY })
        //     files.forEach((i) => {
        //       let reader = new FileReader();
        //       reader.readAsDataURL(i)
        //       reader.onload = e => {
        //         let imgBase64 = e.target.result
        //         updateImage({
        //           ticketId: modal,
        //           filesBase64: [imgBase64.split(',')[1]]
        //         }).then(() => {
        //           message.success({ content: '上传成功', key: MESSAGE_KEY })
        //         })
        //       }
        //     })
        //     history.push('/order?modelId='+query.get('modelId')+'&search='+query.get('search')+'&searchType='+query.get('searchType'))
        //   } else {
        //     history.push('/order?modelId='+query.get('modelId')+'&search='+query.get('search')+'&searchType='+query.get('searchType'))
        //   }
        // })
        getSelfDetection(deviceIP).then(res => {
          console.log('getSelfDetection',res)
          if(res.result) {
            result = res.result
          }
        })
        message
        .loading('实时自检中.....', 5)
        .then(() => {
          if(result) {
            message.success('自检成功！', 2.5)
            handleOrder(submitData).then(d => {
              // if (name !== '维修完成关单') wxMessage({ id: orderInfo.id })
              //判断是否有图片，有的话就上传
              if (files.length) {
                message.loading({ content: '开始上传图片……', key: MESSAGE_KEY })
                files.forEach((i) => {
                  let reader = new FileReader();
                  reader.readAsDataURL(i)
                  reader.onload = e => {
                    let imgBase64 = e.target.result
                    updateImage({
                      ticketId: modal,
                      filesBase64: [imgBase64.split(',')[1]]
                    }).then(() => {
                      message.success({ content: '上传成功', key: MESSAGE_KEY })
                    })
                  }
                })
                history.push('/order?modelId='+query.get('modelId')+'&search='+query.get('search')+'&searchType='+query.get('searchType'))
              } else {
                history.push('/order?modelId='+query.get('modelId')+'&search='+query.get('search')+'&searchType='+query.get('searchType'))
              }
            })
          } else {
            message.error('检测到摄像机网络不通！')
            return
          }
        })
    } else {
    handleOrder(submitData).then(d => {
        // if (name !== '维修完成关单') wxMessage({ id: orderInfo.id })
        //判断是否有图片，有的话就上传
        if (files.length) {
          message.loading({ content: '开始上传图片……', key: MESSAGE_KEY })
          files.forEach((i) => {
            let reader = new FileReader();
            reader.readAsDataURL(i)
            reader.onload = e => {
              let imgBase64 = e.target.result
              updateImage({
                ticketId: modal,
                filesBase64: [imgBase64.split(',')[1]]
              }).then(() => {
                message.success({ content: '上传成功', key: MESSAGE_KEY })
              })
            }
          })
  
          history.push('/order?modelId='+query.get('modelId')+'&search='+query.get('search')+'&searchType='+query.get('searchType'))
        } else {
          history.push('/order?modelId='+query.get('modelId')+'&search='+query.get('search')+'&searchType='+query.get('searchType'))
        }
      })
    }
  }

  useEffect(() => {
    queryOrderInfo(modal).then(d => {
      let formData = {}
      props.actions.clearForm()
      if (d.hasOwnProperty('form')) {
        d.form.forEach(f => {
          if (f.hasOwnProperty('default_value')) {
            formData[f.code] = f.default_value
          }
          if(userAccountInfo.userId === MANAGE_ID && f.code === "fxpcs"){
            // console.log(orderattrs.default_value)
            getUserbyName(f.default_value).then(data => {
              setPcsInfo(data)
            })
          }
        })
        console.log('orderInfo',d)
        setOrderInfo(d)
        props.actions.setForm(formData)
      }
      // 判断如果是视频报修
      if(orderSearch['视频报修'].modelId === query.get('modelId')){
        orderModelConfig[query.get('modelId')].forEach((item) => {
          if (item.id === query.get('actId')) {
            console.log(item)
            setOrderModal(item)
            setPlVisible(false)
            return
          }
        })
      }else{
        queryOrderModel({
          modelId: query.get('modelId'),
          actId: query.get('actId')
        }).then(d => {
          setOrderModal(d)
          setPlVisible(false)
        })
      }
    })
  }, [modal, search, userAccountInfo])
  useEffect(() => {
    // 给formBuilder提供meta
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
      console.log(orderModal.field_list)
    }
    // 判断是否显示gis
    if(orderSearch['视频报修'].modelId === query.get('modelId')){
      setVisible('unset');
    }
    
  }, [orderModal, search])
  useEffect(() => {
    let orderRule = _.get(orderConfig, `${query.get('modelId')}.${orderModal.name}`, {})
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
  }, [orderModal, search])
  useEffect(() => {
    if(!orderInfo){
      orderInfo.form.forEach(orderFindGq => {
        if(orderFindGq.code === 'sfbx'){
          if(orderFindGq.default_value === 'ygq' || orderFindGq.default_value === 'gqsh'){
            setSfgq(true)
            message.info("工单已被挂起锁定，无法操作")
          }
        }
      })

      orderInfo.form.forEach(orderFindGq => {
        if(orderFindGq.code === "resource"){
          setResourceId(orderFindGq.default_value[0].id)
        }
      })
    }
  }, [orderInfo])
  useEffect(() => {
    setHandle({handle_rules: orderInfo.handle_rules,name: orderModal.name,policy: orderModal.policy})
  }, [orderInfo,orderModal])

  useEffect(() => {
    console.log('handlerules',orderInfo.handle_rules)
  },[orderInfo])
  return (
    <div className='order-page-formhandle'>
    <HeaderBar title='工单处理' />
      <Spin spinning={loading}>
        <Form>
          <FormBuilder meta={meta} form={props.form} />
        </Form>
        <>
        {needFile ?
          <div>
            <h4>上传图片附件</h4>
            <Upload
              listType="picture-card"
              fileList={files}
              onRemove={file => {
                const index = files.indexOf(file);
                setFiles(oldFiles => {
                  oldFiles.splice(index, 1)
                  return [...oldFiles]
                })
              }}
              beforeUpload={file => {
                setFiles(oldFiles => [...oldFiles, file])
                return false
              }}>
              上传图片
            </Upload>
          </div> : null}
          </>
        <div className="handle-button-group">
          { sfgq ? null : orderInfo.handle_rules?.map(d => (<HandleButton
            route={d.route_id}
            handle={handle}
            orderInfo={orderInfo}
            handleForm={handleForm}
            modal={modal}
            >{d.name}</HandleButton>))}
          {/* {[3,6,8].includes(orderModal.sequence) ? */}
          {[3, 6, 8, 21].includes(orderModal.sequence) && orderSearch['视频报修'].modelId === orderInfo.model_id ?
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
          {(orderInfo.activity_name === '内场接单'||orderInfo.activity_name === '外场返单') && !sfgq?
            <>
              <Button onClick={() => { setShowPutUp(true) }} size="large">挂起</Button>
              <Modal
                visible={showPutUp}
                title="填写挂起原因"
                onOk={
                  () => {
                  if(putUpRemark !== '') {
                    var gqy = ''
                    var gqjlArr = []
                    orderInfo.form.forEach(orderattrs => {
                      if(orderattrs.code === "gqyy"){
                        gqy = orderattrs.default_value
                      }
                    })
                    if (typeof(gqy) !== 'string' && gqy) {
                      gqjlArr = gqy
                      gqjlArr.push({'title': '挂起原因','reason': putUpRemark, 'time': moment(new Date()).format("YYYY-MM-DD HH:mm:ss")})
                    } else {
                      gqjlArr.push({'title': '挂起原因','reason': putUpRemark, 'time': moment(new Date()).format("YYYY-MM-DD HH:mm:ss")})
                    }
                    // var gqqq = []
                    updateOrder({
                      ticket_id: modal,
                      form: {
                        sfbx: 'gqsh',
                        gqyy: gqjlArr
                      }
                    }).then((res) => {
                      if(files && files.length) {
                        files.forEach((i) => {
                          if(files && files.length) {
                            let reader = new FileReader();
                            reader.readAsDataURL(i)
                            reader.onload = e => {
                              let imgBase64 = e.target.result
                              updateImage({
                                ticketId: modal,
                                filesBase64: [imgBase64.split(',')[1]]
                              }).then((res) => {
                                console.log('上传图片成功!',res)
                                message.success({ content: '上传成功', key: MESSAGE_KEY })
                              })
                            }
                          }
                        })
                      }
                      history.push('/order')
                    })
                    
                  }else {
                    message.warning('请填写挂起原因')
                  }

                }
              }
                onCancel={() => {setShowPutUp(false)}}
                >
                <Input.TextArea rows="3" placeholder="挂起原因" value={putUpRemark} onChange={e => { setPutUpRemark(e.target.value) }} />
              </Modal>
            </>
            : null}
        </div>
        <GisShow resourceId={resourceId} visible={visible} />
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