import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Form, message } from 'antd'
import { 
  FormBuilder, 
  singleRowText, 
  multiRowText,
  multiSel,
  singleSel,
  dateTime,
  resource,
  listSel } from './components'
import { queryOrderModel } from '../../common/request'
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
const objToFields = (obj)=>{
	let target = {}
	for(let [key,value] of Object.entries(obj)){
	    target[key] = Form.createFormField({value})
	}
	return target
}
const fieldsToObj = (fields)=>{
	let target = {}
	for(let [key,field] of Object.entries(fields)){
    if(field.value !== void 0) {
	    target[key] = field.value
    } 
	}
	return target
}
const cr = {
  "singleRowText" : singleRowText,
  "singleSel": singleSel,
  "listSel": listSel,
  "multiRowText": multiRowText,
  "resource": resource,
  "attachfile":singleRowText,
  "department":singleRowText,
  "dateTime": dateTime,
  "multiSel": multiSel,
  "cascader": singleRowText,
  "treeSel": singleRowText,
  "double": singleRowText
}
const CreateOrder = Form.create({
  onFieldsChange: (props, changeFields, allFields) => {
    props.actions.changeForm(fieldsToObj(allFields))
  },
  mapPropsToFields(props) {
    return objToFields(props.order.orderForm)
  }
})((props) => {
  console.log(props)
  const { modal } = useParams()
  const [ orderModal, setOrderModal ] = useState({})
  const [ meta, setMeta ] = useState([])
  
  useEffect(() => {
    // 加载工单模板
    queryOrderModel(modal).then(d => { 
      console.log(d)
      setOrderModal(d)
    }).catch(e => {
      message.error('从远程加载模板失败' + e)
    })
  }, [modal])

  useEffect(() => {
    // 给formBuilder提供meta
    let newMeta = []
    if (orderModal.hasOwnProperty('field_list')) {
      orderModal.field_list.forEach(field => {
        const element = pickProps(field, [
          'code', 'name', 'id', 'type', 'params', 'cascader', 'type_desc'
        ])
        element.widget = cr[element.type]
        newMeta.push(element)
      })
      setMeta(newMeta)
    }
  }, [orderModal])

  return (
    <div className='order-page-form'>
      <HeaderBar title='工单创建'/>
      <div className='form'>
        <Form>
          <FormBuilder meta={meta} form={props.form}/>
        </Form>
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