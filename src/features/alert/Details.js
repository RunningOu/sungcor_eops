import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
// import { useHistory } from 'react-router-dom'
import { Card, Tag, Row } from 'antd'
// import { connect } from 'react-redux'
import { formatDate } from '../../utils'
import { queryAlertList } from '../../common/request'

import './Details.less'

const Details = (props) => {
  const { location: { search } } = props
  console.log(search)
  // const { userAccountInfo } = props
  // const history = useHistory()
  const [alertNums, setAlertNums] = useState([])
  const [title, setTitle] = useState('')
  useEffect(() => {
    setTitle(new URLSearchParams(search).get('name')+"告警列表")
    const source = new URLSearchParams(search).get('name')
    queryAlertList({ "source": source,'status':0 }).then(d => { setAlertNums(d.data.records) })
  }, [search])
  return (
    <div className="alert-details">
      <HeaderBar title={title} />
      <div className="alert-scoll">
        {
            alertNums.map((o, i) => (
                <Row  className="alert-row" key={i}>
                    <Card onClick={() => {
                        console.log(o)
                    }} title={<span>{o.source} 
                    {/* <div className="arrow-left"></div> */}
                    <Tag className={o.severityCN === '警告' ? 'alert-warning' : o.severityCN === '错误' ? 'alert-error' : 'alert-critical'}>{o.severityCN}</Tag ></span>} 
                        extra={formatDate(new Date(o.lastOccurTime),'yyyy-MM-dd HH:mm')}
                        headStyle={{'padding': '0px 0px 0px 5px', 'background': '#40a9ff', 'borderRadius': '10px', 'minHeight': '44px'}}
                        className="alert-card" key="alert_processed" bodyStyle={{ 'borderRadius': '10px', 'padding': '8px 2px 5px 14px' }}>
                            <p>设备名称：<span>{o.entityName}</span></p>
                            <p>设备IP：<span>{o.entityAddr}</span></p>
                            <p>告警描述：<span>{o.description}</span></p>
                            {/* <Col span={12}> */}
                                {/* <p>首次发生时间：<span>{formatDate(new Date(o.firstOccurTime),'yyyy-MM-dd HH:mm:ss')}</span></p> */}
                                {/* </Col> */}
                            {/* <Col span={12}> */}
                                {/* <p>最后发生时间：<span>{formatDate(new Date(o.lastOccurTime),'yyyy-MM-dd HH:mm:ss')}</span></p> */}
                                {/* </Col> */}
                    </Card>
                </Row>
            ))
        }
      </div>
      <FooterBar pathname={props.location.pathname} />
    </div>
  )
}


export default Details