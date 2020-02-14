import React, { useState, useEffect } from 'react'
import { Form, message, Upload, Button } from 'antd'
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
  HandleButton
} from './components'
import { queryOrderModel, queryOrderInfo, handleOrder, updateImage } from '../../common/request'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions'
import { HeaderBar } from '../common'
import orderConfig from './mock/orderConfig'

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
  "double": singleRowText
}
const MESSAGE_KEY = 'messageKey'

const HandleOrder = Form.create({
  onFieldsChange: (props, changeFields, allFields) => {
    props.actions.setForm(fieldsToObj(allFields))
  },
  mapPropsToFields(props) {
    return objToFields(props.order.form)
  }
})((props) => {
  const { location: { search }, match: { params: { modal } }, history } = props
  const [orderModal, setOrderModal] = useState({})
  const [meta, setMeta] = useState([])
  const [needFile, setNeedFile] = useState(false)
  const [orderInfo, setOrderInfo] = useState([])
  const [files, setFiles] = useState([]) //图片
  const [moreHandle, setMoreHandle] = useState(false)

  function handleForm(handle_rules) {
    let pass = true
    const query = new URLSearchParams(search)
    props.form.validateFieldsAndScroll((err, value) => {
      if (err) {
        pass = false
      }
    })
    if (!pass) {
      message.warning('请填写完全工单信息！')
      return
    }
    handleOrder({
      ticket_id: modal,//工单id
      model_id: query.get('modelId'),//模型id
      activity_id: query.get('actId'),//当前环节id
      handle_type: "1",
      form: {
        ...props.order.form
      },
      handle_rules: {
        ...handle_rules
      }
    }).then(d => {
      message.success({content:'创建成功', key:MESSAGE_KEY})
      if(files.length) {
        message.loading({content:'开始上传图片……', key:MESSAGE_KEY})
        files.map((i) => {
          let reader = new FileReader();
          reader.readAsDataURL(i)
          reader.onload = e => {
            let imgBase64 = e.target.result
            updateImage({
              ticketId: modal,
              filesBase64: [imgBase64.split(',')[1]]
            }).then(() => {
              message.success({content:'上传成功', key:MESSAGE_KEY})
            })
          }
        })  
      
        history.push('/order')
      }else {
        history.push('/order')
      }
    })
  }

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
      queryOrderModel({
        modelId: query.get('modelId'),
        actId: query.get('actId')
      }).then(d => {
        setOrderModal(d)
      })
    })
  }, [modal, props.actions, search])
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
    if (orderRule && orderRule.hasOwnProperty('defaultValue')) {
      let defaultForm = {}
      for (const [key, value] of Object.entries(orderRule.defaultValue)) {
        if (props.user.userAccountInfo.hasOwnProperty(value)) {
          defaultForm[key] = props.user.userAccountInfo[value]
        } else {
          defaultForm[key] = value
        }
      }
      props.actions.setForm(defaultForm)
    }
  }, [props.actions, props.user, orderModal, modal, search])



  return (
    <div className='order-page-formhandle'>
      <HeaderBar title='工单处理' />
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
                setFiles(oldFiles => [...oldFiles.splice(index, 1)])
              }}
              beforeUpload={file => {
                setFiles(oldFiles => [...oldFiles, file])
                return false
              }}>
              上传图片
            </Upload>
          </div> : null}
        <div className="handle-button-group">
          {
            moreHandle ?
              orderInfo.handle_rules.map(d => (<HandleButton key={d.route_id} handle={orderModal} handleForm={handleForm}>{d.name}</HandleButton>)) :
              <>
                <HandleButton handle={orderModal} handleForm={handleForm}>{orderInfo.handle_rules ? orderInfo.handle_rules[0].name : ''}</HandleButton>
                <Button block onClick={() => { setMoreHandle(true) }}>更多操作</Button>
              </>
          }
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandleOrder)