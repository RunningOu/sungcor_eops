import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderBar, FooterBar } from '../common'
import { getTodayTicketByProject, getOverdueTicketByProject } from '../../common/request'


import './ProjectSpread.less'

const typeMap = {
  todayAdd: '今日新增/处理',
  overdue: '逾期'
}




const ProjectSpread = ({ match }) => {
  const currentType = match.params.type
  const history = useHistory()
  const [SpreadData, setSpreadData] = useState([])

  const handleClickProjectCard = (project) => {
    const { name, xmmc } = project
    history.push(`/order/ProjectSpread/${currentType}/ProjectDetail?name=${name}`)
  }
  useEffect(() => {
    if (currentType === 'todayAdd') {
      getTodayTicketByProject().then(res => {
        console.log('今日新增', res)
        //过滤掉没有name字段的数据
        // setSpreadData(res.result.filter(item => item.name))
        const result = res.result.filter((item) => {
          return ((item.total - item.complete) + item.complete) > 0
        })
        setSpreadData(result)
      })
    }
    if (currentType === 'overdue') {
      getOverdueTicketByProject().then(res => {
        console.log('逾期', res)

        const result = res.result.filter((item) => {
          return (item.wwcOverdue + item.wcOverdue) > 0
        })
        //过滤掉没有name字段的数据
        // setSpreadData(res.result.filter(item => item.name))
        setSpreadData(result)
      })
    }

  }, [])

  return (
    <>
      <HeaderBar title={`${typeMap[currentType]}工单`} />
      <div className="projectSpread-wrapper">
        {SpreadData.map(item => {
          if (currentType === 'todayAdd') {
            return (<div
              onClick={() => handleClickProjectCard(item)}
              key={item.xmmc} className="projectCard">
              <div className="projectCard-detail">
                <div style={{ margin: 'auto' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{item.name}</div>
                  <div style={{ margin: '10px 0' }}>{`今日新增:${item.total}`}</div>
                  <div style={{ margin: '10px 0' }}>{`处理中:${item.total - item.complete} / ${`已处理:${item.complete}`}`}</div>
                </div>
              </div>
            </div>)
          }
          return (
            <div
              onClick={() => handleClickProjectCard(item)}
              key={item.xmmc} className="projectCard">
              <div className="projectCard-detail">
                <div style={{ margin: 'auto' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{item.name}</div>
                  <div style={{ margin: '10px 0' }}>{`逾期工单:${item.wcOverdue + item.wwcOverdue}`}</div>
                  <div style={{ margin: '10px 0' }}>{`${`处理中:${item.wwcOverdue}`} / 已完成:${item.wcOverdue}`}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProjectSpread