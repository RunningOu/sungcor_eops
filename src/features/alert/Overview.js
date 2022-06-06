import React, { useState, useEffect } from 'react'
import { HeaderBar, FooterBar } from '../common'
import { Badge, Icon } from 'antd'
import { Router, useHistory } from 'react-router-dom'
import { Card, Statistic, Col, Radio, Tabs, message, Spin, Menu } from 'antd'
import { connect } from 'react-redux'
import { queryMobileAlertCount } from '../../common/request'
import { useQueryData } from './utils/useQueryData'


import './Overview.less'

const { TabPane } = Tabs;

const Overview = (props) => {
  const [menuKey, setMenuKey] = useState('newAlert')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  // const [newAlertTotal, setNewAlertTotal] = useState(0)
  // const [newRecoveryTotal, setNewRecoveryTotal] = useState(0)
  const history = useHistory()

  const paramsMap = {
    newAlert: [1, 2, 3],
    recovered: [0]
  }

  useEffect(() => {
    setLoading(true)
    queryMobileAlertCount(paramsMap[menuKey]).then(res => {
      const { result, code, success } = res.data
      if (code === 200 && success) {
        setData(result)
        // let tot = 0
        // result.forEach(val=>{
        //   tot += val.count
        // })
        // setNewAlertTotal(tot)
      }
    }).finally(() => {
      setLoading(false)
    })
  }, [menuKey])

  const handleChangeMenu = ({ key }) => {
    setMenuKey(key)
  }

  const handleClickItem = (i) => {
    history.push(`/alert/Details?name=${i.value}&tileId=${i.tileId}&status=${menuKey}`)
  }

  return (
    <div className="alert-overview">
      <HeaderBar title="集中告警总览(近7天)" />
      <Menu mode="horizontal" defaultSelectedKeys={menuKey} onClick={handleChangeMenu} className="menu-wrapper">
        <Menu.Item key="newAlert">新告警</Menu.Item> 
        {/* <Badge count={newAlertTotal} offset={[-4,10]}></Badge> */}
        <Menu.Item key="recovered">已恢复</Menu.Item>
      </Menu>
      <div >
        {loading ? <div><Spin /></div> : <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: 'calc(100vh - 120.5px)', overflow: 'scroll' }}>
          {data.map(i => <div style={{ padding: '12px', borderRadius: '10px', display: 'flex', flex: '0 0 50%', height: '120px' }} key={i.value}>
            <div onClick={() => handleClickItem(i)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', width: '100%', background: '#b8d8ea', borderRadius: '10px', boxShadow: '0 2px 12px 0 rgb(0 0 0 / 20%)', textAlign: 'center' }} >
              <div style={{ fontSize: '16px', fontWeight: '800', padding: '0 12px', color: 'grey' }}>{i.value}</div>
              <div style={{ lineHeight: '32px', fontSize: '22px', fontWeight: '800', padding: '8px 0', color: i.count && menuKey === 'newAlert' ? 'red' : 'green' }}>{i.count}</div>
            </div>
          </div>)}
        </div>}
      </div>
    </div>

  )
}



function mapStateToProps(state) {
  return {
    userAccountInfo: state.user.userAccountInfo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview)