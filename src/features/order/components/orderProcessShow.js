import React,{useState,useEffect} from 'react'
import {Button,Modal,Timeline} from 'antd'
import {getOrderProcess} from '../mock/orderProcess'
// import {getOrderProcess} from '../../../common/request'

import './orderProcessShow.less'


const ButtonStyle = {
    background: '#FFA500',
    borderColor: '#FFA500',
    color: 'black',
    fontWeight: 'bolder',
    marginLeft: '20px'
  }

export default  ({orderId}) => {
    console.log('orderProcessShow', orderId)
    const [modalVisible,setModalVisible] = useState(false)
  
    const [orderProcess,setOrderProcess] = useState([])
  
    useEffect(() => {
        getOrderProcess(orderId).then(res=>{
        setOrderProcess(res.result)
      })
    },[])
    return (
      <span>
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
              //取真实数据时，把注释取消
              // key={item.id}
              >
                <h3>{item.createTime}</h3>
                <p>{item.msg}</p>
              </Timeline.Item> 
            })}
             </Timeline>
           </div>
         </Modal>
      </span>
    )
  }