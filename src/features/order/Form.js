import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Form, message, Upload, Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { MANAGE_ID } from '../../config'
import _ from 'lodash'
import {
  FormBuilder,
  singleRowText,
  multiRowText,
  multiSel,
  singleSel,
  dateTime,
  resource,
  GisShow,
  listSel,
  cascader
} from './components'
import { queryOrderModel, createOrder, updateImage, getUserbyName } from '../../common/request'
import * as actions from './redux/actions'
import { HeaderBar } from '../common'

import orderConfig from './mock/orderConfig'
import orderSearch from './mock/orderSearch'
import orderModelConfig from './mock/orderModelConfig'

import './Form.less'

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
  "double": singleRowText,
  'cascader': cascader
}

const MESSAGE_KEY = 'messageKey'
const CreateOrder = Form.create({
  onFieldsChange: (props, changeFields, allFields) => {
    props.actions.setForm(fieldsToObj(allFields))
  },
  mapPropsToFields(props) {
    return objToFields(props.order.form)
  }
})((props) => {
  // const { user: { userAccountInfo } } = props
  const { modal } = useParams()
  const [visible, setVisible] = useState('none')
  const history = useHistory()
  const [orderModal, setOrderModal] = useState({})
  const [meta, setMeta] = useState([])
  const [needFile, setNeedFile] = useState(false)
  const [pcsInfo, setPcsInfo] = useState({})
  const [files, setFiles] = useState([]) //图片
  const [bxpcs, setBxpcs] = useState('') // pcs
  const [resourceId, setResourceId] = useState('') // 资产id
  const [buttonDisable,setButtonDisable] = useState(false)

  useEffect(() => {
    // if(_.findIndex(orderModal.field_list, e => e.code === 'resource') !== -1 && !_.has(props.order.form, 'resource')) {
    //   history.push(`${props.location.pathname}/selectdevice`)
    // }
    if(props.order.form.fxpcs !== undefined) {
      setBxpcs(props.order.form.fxpcs)
    }
    if (props.order.form.resource && props.order.form.resource[0].id) {
      setResourceId(props.order.form.resource[0].id)
    }
  }, [orderModal,  history, props.order.form, props.location.pathname])
  useEffect(() => {
    if(files.length) {
      let file = files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
    }
  }, [files])
  useEffect(() => {
     // 判断如果是视频报修
     if(orderSearch['视频报修'].modelId === modal){
      orderModelConfig[modal].forEach((item) => {
        if (item.name === '开始') {
          setOrderModal(item)
        }
      })
    }else{
      // 加载工单模板
      queryOrderModel({ modelId: modal }).then(d => {
        console.log('加载工单模板',d)
        setOrderModal(d)
      }).catch(e => {
        message.error('从远程加载模板失败' + e)
      })
    }
    // 判断是否显示gis
    if(orderSearch['视频报修'].modelId === modal){
      setVisible('unset');
    }
  }, [modal])

  useEffect(() => {
    // 给formBuilder提供meta
    let newMeta = []
    if (orderModal.hasOwnProperty('field_list')) {
      let orderRule = _.get(orderConfig, `${modal}.${orderModal.name}`, {})
      orderModal.field_list.forEach(field => {
        if (field.code === 'file') {
          setNeedFile(true)
          return
        }
        if (orderRule.hidden && orderRule.hidden.includes(field.code)) {
          return
        }
        const element = pickProps(field, [
          'code', 'name', 'id', 'type', 'params', 'cascade', 'cascader', 'type_desc'
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
        if(element.code === 'fxGzlx') {
          console.log(element)
          element.params = [...element.params,{
            select: 0,
            label: "传输设备异常",
            value: '11',
            descEnable: 0
          },{
            select: 0,
            label: "上云无数据",
            value: '10',
            descEnable: 0
          },{
            select: 0,
            label: "网络不通",
            value: "9",
            descEnable: 0
          }]
        }
        newMeta.push(element)
      })
      setMeta(newMeta)
    }
  }, [orderModal, props.order, modal])
  useEffect(() => {
    let orderRule = _.get(orderConfig, `${modal}.${orderModal.name}`, {})
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
      if (['超级管理员'].includes(props.user.userAccountInfo.roleName) && orderSearch['视频报修'].modelId === modal) {
        if(defaultForm.hasOwnProperty('fxBxr')) delete defaultForm.fxBxr
        if(defaultForm.hasOwnProperty('telephone')) delete defaultForm.telephone
      }
      if(props.user.userAccountInfo.userId === MANAGE_ID && bxpcs !== '') {
        getUserbyName(bxpcs).then(data => {
          console.log("data>>>",data)
          setPcsInfo(data)
          defaultForm.fxBxr = data.realname
          defaultForm.telephone = data.mobile
          props.actions.setForm(defaultForm)
        })
      }
      console.log("defaultForm>>>",defaultForm)
      props.actions.setForm(defaultForm)
    }
  }, [props.actions, props.user, orderModal, modal, bxpcs])

  return (
    <div className='order-page-form'>
      <HeaderBar title='工单创建' />
      <div className='form'>
        <Form>
          <FormBuilder meta={meta} form={props.form} />
        </Form>
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
        <Button
          type="primary"
          style={{ backgroundColor: '#005da3' }}
          block
          disabled={buttonDisable}
          onClick={() => {
            setButtonDisable(true)
            let pass = true
            let params = {}
            let createform = {
              ...props.order.form
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
            if (props.order.form.hasOwnProperty('apikey')) {
              params.apikey = props.order.form.apikey
            }
            if(orderSearch['综合设备报修'].modelId === modal){
              var bxsblx = document.getElementsByClassName('ant-cascader-picker-label')
              var pcsgg = document.getElementsByClassName('ant-select-selection-selected-value')
              var checked = document.getElementsByClassName('ant-radio-wrapper-checked')
              var bxcc = bxsblx[0].textContent.replace(' ','')
              bxcc = bxcc.replace(' ','')
              createform.title = pcsgg[0].textContent + '-' + checked[0].children[1].textContent + '-' + bxcc
            }
            message.loading({content:'创建工单中……', key:MESSAGE_KEY})
            createOrder({
              model_id: modal,
              ticket_source: "wchart",
              urgent_level: 2,
              title: createform.title,
              user_id: pcsInfo.userId ? pcsInfo.userId : props.user.userAccountInfo.userId,
              description: props.order.form.ticketDesc || '',
              form: createform,
              handle_rules: {
                route_id: orderModal.handle_rules[0].route_id
              }
            }, params).then(da => {
              message.success({content:'创建成功', key:MESSAGE_KEY})
              // wxMessage({id: da.data.id})
              if(files.length) {
                message.loading({content:'开始上传图片……', key:MESSAGE_KEY})
                files.forEach((i) => {
                  let reader = new FileReader();
                  reader.readAsDataURL(i)
                  reader.onload = e => {
                    let imgBase64 = e.target.result
                    updateImage({
                      ticketId: da.data.id,
                      filesBase64: [imgBase64.split(',')[1]]
                    }).then(() => {
                      message.success({content:'上传成功', key:MESSAGE_KEY})
                    })
                  }
                })
                setButtonDisable(false)
                history.push('/order?modelId='+modal)
              }else {
                setButtonDisable(false)
                history.push('/order?modelId='+modal)
              }
            })
          }}>提交</Button>
          <GisShow resourceId={resourceId} visible={visible} />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder)