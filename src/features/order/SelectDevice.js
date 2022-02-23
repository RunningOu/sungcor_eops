import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Input, Icon, List, Drawer, message, } from 'antd'
import InfiniteScroll from 'react-infinite-scroller';
import * as actions from './redux/actions'
import { HeaderBar } from '../common'
import _ from 'lodash'
import { queryDeviceList, queryDeviceByManager } from '../../common/request'
import {cgAccountList,cgAccountMap} from './mock/cgAccountList'

import './SelectDevice.less'

const classCodeArr = ['fjsxj','NVR','DVR','PCServer','Router','Switch','fxonu','fxolt','PCTerminal','Firewall','fxbbx','NBJK','other']

const { Search } = Input;
function mapStateToProps(state) {
  return {
    userAccountInfo: state.user.userAccountInfo,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  }
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
export default connect(mapStateToProps, mapDispatchToProps)((props) => {
  console.log('props',props.userAccountInfo)
  const { history, userAccountInfo, match:{params: {modal}} } = props
  const [deviceList, setDeviceList] = useState([]) // 设备列表
  const [devcieSearch, setDeviceSearch] = useState('')
  const [selectedClass] = useState([{ code: "fjsxj", name: "摄像机" }])
  const [selectedState] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [count, setCount] = useState(0) // 列表总数
  const [pageNum, setPageNum] = useState(0) // 列表分页下标
  const [loading, setLoading] = useState(false) // 列表加载中状态
  const [hasMore, setHasMore] = useState(true) // 列表加载中状态

  const handleInfiniteOnLoad = (current) => {
    setLoading(true)
    if (deviceList.length < 10) {
      setHasMore(false)
      setLoading(false)
      return
    }
    setPageNum(current)
  }
  useEffect(() => {
    setPageNum(0)
    setHasMore(true)
  }, [devcieSearch, userAccountInfo])
  useEffect(() => {
    let conditions = []
    let { realname } = userAccountInfo
    if(modal === 'a50f0654c8a7465291f17769d4b61fae') {
      conditions.push({
       field: 'classCode',
       value: 'fjsxj',
       operator: 'IN'
      })
    } else {
      conditions.push({
        field: 'classCode',
        value:[...classCodeArr],
        operator: 'IN'})
    }
    //如果当前账号是城管下的账号，则进入流程
    if(cgAccountList.includes(realname)) {
      conditions.push({
        field: 'tags',
        value: [cgAccountMap[realname]],
        operator: "IN"
      })
    }

    if (devcieSearch !== '') {
      conditions.push({
        "cjt": "OR",
        "items": [
          {
            field: 'name',
            value: devcieSearch,
            operator: 'LIKE'
          }, {
            field: 'JPBH',
            value: devcieSearch,
            operator: 'LIKE'
          }
        ]
      })
    }
    if (['派出所人员', '设备厂商'].includes(userAccountInfo.roleName)) {
      if (userAccountInfo.depts.length) {
        if (userAccountInfo.roleName === '派出所人员') conditions.push({ field: 'SSDW', value: userAccountInfo.depts.map(dep => dep.name), operator: 'IN' })
        if (userAccountInfo.roleName === '设备厂商') conditions.push({ field: 'whcs', value: userAccountInfo.depts.map(dep => dep.id), operator: 'IN' })
      }
    }
    queryDeviceList({
      needCount: true,
      pageNum,
      pageSize: 10,
      conditions
    }).then(d => {
      console.log('queryDeviceList',d)
      setLoading(false)
      if (d.hasOwnProperty('dataList') && userAccountInfo.roleName) {
        if (d.dataList.length !== 10) setHasMore(false)
        setCount(d.totalRecords)
        if (pageNum > 0) {
          setDeviceList(devlist => [...devlist, ...d.dataList])
        } else {
          setDeviceList([...d.dataList])
        }
      }
    })
  }, [selectedClass, selectedState, pageNum, devcieSearch, userAccountInfo])
  useEffect(() => {
    if (count > 0) message.info(`一共检索到${count}条记录`)
  }, [count])

  return (
    <div className='order-page-select-device'>
      <HeaderBar title="选择设备"/>
      <div className='search-bar'>
        <Search className='search-input' placeholder={'请输入关键字（设备名称、键盘编号）'} onSearch={value => { setDeviceSearch(value) }} />
        {/* <div className='search-bar-right' onClick={() => { setDrawerOpen(true) }}><Icon type="menu" /></div> */}
      </div>
      <div className='device-list'>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <List
            itemLayout="vertical"
            dataSource={deviceList}
            renderItem={item => (
              <List.Item
                className="device-item"
                key={item.id}
                actions={[
                  // <IconText type="api" text={_.find(deviceState, (v) => v.code === item.cameraState).name} />,
                  <IconText type="api" text={item.wxzt}/>,
                  <IconText type="tool" text={item.ywdw} />
                ]}
              >
                <List.Item.Meta title={item.name} description={item.managementUnit} />
                <span>{item.code}</span>
                <Button className="btn" type="link" onClick={() => {
                  console.log(item);
                  fetch('https://fxtyyw.gaj.sh.gov.cn/mobile/oss/api/ciSnapshot/query',{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjg4MzQ5MTIsInVzZXJuYW1lIjoiYWRtaW4ifQ.3PYVn4Ag_Tqh9FofS6GD0FpISqnK6O-tdjBQ89J5XMo',
                    },
                    body: JSON.stringify({
                        "conditions": [{
                            "field": "name",
                            "operator": "in",
                            "value": `${item.name}`
                        }],
                        "pageNum": 1,
                        "pageSize": 10
                    })
                  }).then(res => res.json()).then(res => {
                    if(res.code === 200 && res.result.list) {
                      let { list } = res.result
                      if(list[0].repairStatus === null || list[0].repairStatus === 1) {
                        handleCreateForm()
                      } else if(list[0].repairStatus === 0) {
                        message.error('工单已存在，请勿重复报修')
                      }
                    } else {
                      message.error('请查询资产是否录入！')
                    }
                  })
                  return

                  function handleCreateForm() {
                    if (item.classCode === 'fxsxj' && item.wxzt !== "在用") {
                      if (item.wxzt === "维修中") {
                        message.error(`设备正在维修，无需重复报修`)
                      }
                      if (item.wxzt === "拆除") {
                        message.error(`设备已拆除`)
                      }
                      return
                    }
                    if (item.ywdw) {
                      //综合运维流程id
                      if(modal === 'd948b00b8e1f4a81b36e2203dcd1b78f') {
                        props.actions.setForm({
                          title: item.SSDW ? `${item.SSDW} - ${item.name}` : item.name,
                          fxxmmc: item.projectName,
                          fxwxdw: item.managementUnit,
                          IP:item.ip,
                          dd:item.name,
                          deviceid: item.code,
                          bxlx: 'rgxj' ,
                          resource: [{
                            classCode: item.classCode,
                            className: item.className,
                            id: item.id,
                            name: item.name,
                            status: 0
                          }]
                        })
                        history.push({
                          pathname: history.location.pathname.replace('/selectdevice', '')
                        })
                        return
                      }

                      if (['超级管理员'].includes(userAccountInfo.roleName)) {
                        // props.staticContext({longitude: item.longitude})
                        // queryDeviceByManager(item.pcs[0].uid).then(({data:d}) => {
                          props.actions.setForm({
                            resource: [{
                              name: item.name,
                              className: item.className,
                              status: 0,
                              taskId: null,
                              id: item.id
                            }],
                            apikey: userAccountInfo.apikey,
                            fxBxr: userAccountInfo.realname,
                            telephone: userAccountInfo.mobile,
                            fxpcs: item.SSDW,
                            wxdwmc: item.ywdw,
                            sbmc: item.name,
                            deviceKey: item.JPBH,
                            deviceIP: item.ip,
                            title:  item.SSDW ?  `${item.SSDW} - ${item.name}` : item.name,
                            xmmc: item.projectName
                          })
                          history.push({
                            pathname: history.location.pathname.replace('/selectdevice', '')
                          })
                        // })
                        return
                      } else {
                        props.actions.setForm({
                          resource: [{
                            name: item.name,
                            className: item.className,
                            status: 0,
                            taskId: null,
                            id: item.id
                          }],
                          fxpcs: item.SSDW,
                          wxdwmc: item.ywdw,
                          sbmc: item.name,
                          deviceKey: item.JPBH,
                          deviceIP: item.ip,
                          title: item.SSDW ? `${item.SSDW} - ${item.name}` : item.name,
                          xmmc: item.projectName
                        })
                        history.push({
                          pathname: history.location.pathname.replace('/selectdevice', '')
                        })
                      }
                    } else {
                      message.error("设备信息不完善，报修失败。", () => { history.push("/") })
                    }
                  }
                }}>点击选择</Button>
              </List.Item>)}
          />
        </InfiniteScroll>
        <Drawer
          className='drawer'
          placement="right"
          closable={false}
          onClose={() => { setDrawerOpen(false) }}
          visible={drawerOpen}
        >
          <h4>设备类型条件</h4>
          <h4>设备状态</h4>
        </Drawer>
      </div>
    </div>
  )
})