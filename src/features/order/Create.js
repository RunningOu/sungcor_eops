import React, { useState, useEffect } from 'react'
import { HeaderBar } from '../common'
import { queryOrderTicketModel } from '../../common/request'
import { Popover, Button, Icon, message } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './redux/actions'
import { useHistory } from 'react-router-dom'
import './Create.less'
import orderSearch from './mock/orderSearch'
import { local_get2JSON , local_set} from '../../utils'


const Create = (props) => {
  const history = useHistory()
  const [orderModal, setOrderModal] = useState([])
  const [selectedModal, setSelectedModal] = useState("a50f0654c8a7465291f17769d4b61fae")

  useEffect(() => {
    const orderModalCache = local_get2JSON('orderModal')

    if(orderModalCache) {
      setOrderModal(orderModalCache)
    } else {
      queryOrderTicketModel().then(d => {
        if (d && d.length){
          setOrderModal(d)
          local_set('orderModal',d)}
      })
    }
  }, [])
  return (
    <div className='order-page-create'>
      <HeaderBar title="创建工单 - 选择类型" />
      <h4 className='title'>选择需要创建的工单模板</h4>
      <p className='subtitle'>没有合适的模板？
        <Popover placement="bottom" title={'联系方式'} content={'钟隆威:1388888888'} trigger="click">
          <span>请联系维护人员</span>
        </Popover>
      </p>
      <div className="select-main">
        {orderModal.map(modal => (
          orderSearch['奉贤基础资源报修'].modelId === modal.id ? '' :
          <div className={`order-modal${selectedModal === modal.id ? ' selected' : ''}`} key={modal.id} onClick={() => { setSelectedModal(modal.id) }}>
            <div className="order-modal-icon">
              <img className="img" src={require('../../assets/imgs/modal.png')} alt='工单模型' />
            </div>
            <p className="modal-name">{modal.name}</p>
          </div>
        ))}
      </div>
      <div className="handle-group">
        <Button
          className="handle-button"
          type="primary"
          onClick={() => {
            if(selectedModal === '') {
              message.warning('请选择一个工单模板')
            } else {
              props.actions.createOrder({
                model_id: selectedModal,
                ticket_source: 'wchart',
                title: '',
                urgent_level: 2
              })
              props.actions.clearForm()
              if(selectedModal === orderSearch['视频报修'].modelId) {
                history.push(`create/form/${selectedModal}/selectdevice`)
              }

              if(selectedModal === orderSearch['综合设备报修'].modelId)  history.push(`create/form/${selectedModal}`)

              if(selectedModal === orderSearch['综合运维服务流程'].modelId) history.push(`create/form/${selectedModal}`)
            }
          }}>
            下一步<Icon type="right" />
          </Button>
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  }
}

export default connect(undefined, mapDispatchToProps)(Create)