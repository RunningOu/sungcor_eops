import React,{useState,useEffect} from 'react'
import { HeaderBar,FooterBar} from '../common'

import './ProjectSpread.less'

const typeMap = {
  todayAdd: '新增/处理',
  overdue: '逾期'
}

const SpreadData = [
  {
    name: "联通雪亮",
    add: 102,
    resolve: 25
  },
  {
    name: "电信二期",
    add: 23,
    resolve: 10
  },
  {
    name: "电信雪亮",
    add: 102,
    resolve: 25
  },
  {
    name: "电信一期",
    add: 23,
    resolve: 10
  },
  {
    name: "电信三期",
    add: 102,
    resolve: 25
  },
  {
    name: "治安卡口",
    add: 23,
    resolve: 10
  },
  {
    name: "移动租凭",
    add: 102,
    resolve: 25
  },
  {
    name: "违停项目",
    add: 23,
    resolve: 10
  }
]
const getTodayOrder = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code:200,
        message: '操作成功！',
        result: SpreadData
      })
    })
  },1000)
}



const ProjectSpread = ({match}) => {
    const currentType = match.params.type
    const [SpreadData,setSpreadData] = useState([])

    useEffect(() => {
      getTodayOrder().then(res => {
        if(res.code === 200 && res.result.length) {
          setSpreadData(res.result)
        }
      })
    },[currentType])
    return (
        <>
        <HeaderBar title={`今日${typeMap[currentType]}工单`} />
        <div className="projectSpread-wrapper">
          {SpreadData.map(item => {
           return (<div className="projectCard">
                     <div className="projectCard-detail">
                       <p>{item.name}</p>
                       <p>{'新增:'+item.add+'/'+'处理:'+item.resolve}</p>
                     </div>
              </div>)
          })}
        </div>
        </>
    )
}

export default ProjectSpread