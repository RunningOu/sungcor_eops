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

export default  ({orderId}) => {
    const [modalVisible,setModalVisible] = useState(false)
  
    const [orderProcess,setOrderProcess] = useState([])
  
    useEffect(() => {
       getOrderProcess(orderId).then(res=>{
          if(res) {
            console.log('获取自检信息:',res)
            setOrderProcess(res)
          }
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
              color={StatusStyleMap[item.status]}
              key={item.msg}
              //取真实数据时，把注释取消
              >
                <div style={{color: StatusStyleMap[item.status] }}>
                  <p>{index === 0 || index === (orderProcess.length -1) ?  item.createTime : null}</p>
                  <p>{item.name}({item.ip})</p>
                  <p>{item.msg}</p>
                </div>
              </Timeline.Item> 
            })}
             </Timeline>
             {orderProcess && orderProcess.length !== 0 ? null : <Empty />}
           </div>
         </Modal>
      </span>
    )
  }