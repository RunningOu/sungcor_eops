import React,{useState,useEffect} from 'react'
import { Button,Modal,Timeline,Empty } from 'antd'
// import { getOrderProcess } from '../mock/orderProcess'
import { getOrderProcess } from '../../../common/request'

import './orderProcessShow.less'

const StatusStyleMap = {
  "0": 'rgb(0,128,0)',
  "1": 'rgb(255,0,0)',
  "2": 'rgb(169,169,169)'
}

const ButtonStyle = {
    background: '#FFA500',
    borderColor: '#FFA500',
    color: 'black',
    fontWeight: 'bolder',
    marginLeft: '20px'
}

//判断是否为联通的设备
const isUnicomDevice = (order) => {
  let projectNameField = order.form.filter(item => item.code === 'xmmc')
  return projectNameField[0] && projectNameField[0]['default_value'].includes('联通')
}

export default  ({orderId,order}) => {
    const [modalVisible,setModalVisible] = useState(false)

    const [orderProcess,setOrderProcess] = useState([])

    useEffect(() => {
       getOrderProcess(orderId).then(res=>{
          if(res) {
            setOrderProcess(res)
          }
      })
    },[])

    return (
      <>
        {isUnicomDevice(order) ? <span>
          <Button
          onClick={() => {
            setModalVisible(true)
          }}
          type='primary'
          style={ButtonStyle}>自检信息</Button>
          <Modal
          title="自检信息"
          visible={modalVisible}
          footer={null}
          maskClosable={true}
          onCancel={
            () => {setModalVisible(false)}
          }
          >
            <div className="orderProcess-list">
              <Timeline>
              {orderProcess.map((item,index) => {
               return <Timeline.Item
               style={{top: '6px',padding: "0"}}
               color={StatusStyleMap[item.status]}
               key={item.msg}
               //取真实数据时，把注释取消
               >
                 <div style={{color: StatusStyleMap[item.status] }}>
                   {/* <p>{index === 0 || index === (orderProcess.length -1) ?  item.createTime : null}</p> */}
                   <div style={{display: "flex"}}>
                     <p style={{flex:1}}>{item.name}({item.ip})</p>
                     <p style={{flex:1,float:'right'}}>{item.createTime}</p>
                   </div>
                   <p>{item.msg}</p>
                   {/* <p>{item.name}({item.ip}){item.msg}</p> */}
                 </div>
               </Timeline.Item>
             })}
              </Timeline>
              {orderProcess && orderProcess.length !== 0 ? null : <Empty />}
            </div>
          </Modal>
       </span> : null }
      </>
    )
  }