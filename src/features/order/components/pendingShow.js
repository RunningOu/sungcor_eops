import React from 'react'
import { List,Table, Badge, Descriptions } from 'antd'
import { render } from 'react-dom'
import moment from 'moment'
import './pendingShow.less'
// const test = [
//   {
//     title: '挂起原因:',
//     time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
//     reason: '121212',
//   },{
//     title: '不同意挂起原因:',
//     time: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
//     reason: '211211219999999999999999999999999999999999999999999999999999999999999999999999',
//   }
// ]
export default function(props) {
  // console.log(props)
  // if(props.default_value.indexOf('[') > -1){

  // }
  return (
    <Descriptions.Item label={props.name} key={props.id} span={3}>
      {/* <br /> */}
      {
        typeof(props.default_value) !== 'string' ?
        <>
        <Table className='pendingShow-table' pagination={false}/>
        <List dataSource={props.default_value} renderItem={item => (
                <div className='pendingShow-item'>
                    <Badge status="processing" text={item.time} />
                    <p>{item.title}</p>
                    <p style={{wordWrap: 'anywhere', textAlign: 'left'}}>{item.reason}</p>
                </div>
            )} />
        </>
        :
        <>
        {props.default_value}
        </>
      }
    </Descriptions.Item>
  )
}
