import React,{useState,useEffect} from 'react'
import { Badge, Icon } from 'antd'
import { connect } from 'react-redux'
import {queryOrderCount } from '../../common/request'


const params = (userAccountInfo) => {
    return {
      getMyTodo: [
        { key: "executor", value: userAccountInfo.userId,operator: "IN"},
        { key:"status", value: "1,2", operator: "IN" },
        { key: "formData.sfbx", value: "wgq", operator: "EQ" },
      ],
      getMyparticipation: 
        [{"key":"participation","value":userAccountInfo.userId,"operator":"IN"},{"key":"status","value":"1,2","operator":"IN"},{"key":"modelId","value":"a50f0654c8a7465291f17769d4b61fae","operator":"EQ"}]
    }
  }

const OrderAlert = ({userAccountInfo}) => {
    const [orderCount,setorderCount] = useState(0)
    useEffect(() => {
        let requestTodoList = []
        if(typeof userAccountInfo.realname === 'string' && userAccountInfo.realname.includes('图像组管理员')) {
          requestTodoList.push(queryOrderCount([{key:'status',value:'1,2',operator: 'IN'},{key:'formData.sfbx',value:'gqsh',operator:'EQ'}]))
        }
        requestTodoList.push(queryOrderCount(params(userAccountInfo)['getMyTodo']))
        Promise.all(requestTodoList).then(res => {
          const orderCount = res.reduce((p,c) => p + c.count,0)
          if(orderCount) {
            setorderCount(orderCount)
          }
        })
      },[userAccountInfo])
    
    return (
        <>
         <Badge count={orderCount} offset={[10,2]}>
          <Icon style={{ fontSize: '22px' }} type="snippets" />
         </Badge>
        </>
    )
}



function mapStateToProps(state) {
    return {
      userAccountInfo: state.user.userAccountInfo,
    }
}

export default connect(mapStateToProps, null)(OrderAlert)
