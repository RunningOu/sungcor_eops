import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Input, Icon, List, Drawer, message, } from 'antd'
import InfiniteScroll from 'react-infinite-scroller';
import * as actions from './redux/actions'
import { HeaderBar } from '../common'
import _ from 'lodash'
import { queryDeviceList, queryDeviceByManager } from '../../common/request'

import './SelectDevice.less'
const { Search } = Input;
// const { CheckableTag } = Tag;
const deviceState = [{ name: '在用', code: 'using' }, { name: '维修', code: 'maintenanceInfo' }, { name: '拆除', code: 'demolish' }]
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
  const { history, userAccountInfo } = props
  const [deviceList, setDeviceList] = useState([]) // 设备列表
  // const [classType, setClassType] = useState([])
  // const [selectedClass, setSelectedClass] = useState([{ code: "Camera", name: "摄像机" }])
  // const [selectedState, setSelectedState] = useState([])
  const [devcieSearch, setDeviceSearch] = useState('')
  const [selectedClass] = useState([{ code: "Camera", name: "摄像机" }])
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
    if (selectedClass.length) {
      conditions.push({
        field: 'classCode',
        value: selectedClass.map(classcode => classcode.code),
        operator: 'IN'
      })
    }
    if (devcieSearch !== '') {
      conditions.push({
        field: 'name',
        value: devcieSearch,
        operator: 'LIKE'
      })
    }
    if (['派出所人员', '设备厂商'].includes(userAccountInfo.roleName)) {
      if (userAccountInfo.depts.length) {
        if (userAccountInfo.roleName === '派出所人员') conditions.push({ field: 'pcs', value: userAccountInfo.depts.map(dep => dep.id), operator: 'IN' })
        if (userAccountInfo.roleName === '设备厂商') conditions.push({ field: 'whcs', value: userAccountInfo.depts.map(dep => dep.id), operator: 'IN' })
      }
    }
    queryDeviceList({
      needCount: true,
      pageNum,
      pageSize: 10,
      conditions
    }).then(d => {
      setLoading(false)
      if (d.hasOwnProperty('dataList') && userAccountInfo.roleName) {
        if (d.dataList.length !== 10) setHasMore(false)
        setCount(d.totalRecords)
        if (pageNum > 0) {
          setDeviceList(devlist => [...devlist, ...d.dataList])
        } else {
          setDeviceList([...d.dataList])
        }
        console.log(d)
      }
    })
  }, [selectedClass, selectedState, pageNum, devcieSearch, userAccountInfo])
  useEffect(() => {
    if (count > 0) message.info(`一共检索到${count}条记录`)
  }, [count])

  return (
    <div className='order-page-select-device'>
      <HeaderBar title="选择设备" rightContent={<Button type='link' style={{ color: '#fff', position: 'relative', left: '14px' }} onClick={() => { history.go(-1) }}>确定</Button>} />
      <div className='search-bar'>
        <Search className='search-input' placeholder={'请输入设备名称'} onSearch={value => { setDeviceSearch(value) }} />
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
                  <IconText type="api" text={_.find(deviceState, (v) => v.code === item.cameraState).name} />,
                  <IconText type="tool" text={item.whcs[0].name} />
                ]}
              >
                <List.Item.Meta title={item.name} description={item.managementUnit} />
                <Button className="btn" type="link" onClick={() => {
                  if (item.cameraState !== "using") {
                    if (item.cameraState === "maintenanceInfo") {
                      message.error(`设备正在维修，无需重复报修`)
                    }
                    if (item.cameraState === "demolish") {
                      message.error(`设备已拆除`)
                    }
                    return
                  }
                  if (item.whcs) {
                    console.log(userAccountInfo.roleName)
                    if (['超级管理员'].includes(userAccountInfo.roleName)) {
                      queryDeviceByManager(item.pcs[0].uid).then(({data:d}) => {
                        props.actions.setForm({
                          resource: [{
                            name: item.name,
                            className: item.className,
                            status: 0,
                            taskId: null,
                            id: item.id
                          }],
                          apikey: d.apikey,
                          fxBxr: d.realname,
                          telephone: d.mobile,
                          fxpcs: item.managementUnit,
                          wxdwmc: item.whcs[0].name,
                          sbmc: item.name,
                          deviceKey: item.serialNumber,
                          deviceIP: item.ip,
                          title: `${item.managementUnit} - ${item.name}`,
                          xmmc: item.projectName
                        })
                        history.go(-1);
                      })
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
                        fxpcs: item.managementUnit,
                        wxdwmc: item.whcs[0].name,
                        sbmc: item.name,
                        deviceKey: item.serialNumber,
                        deviceIP: item.ip,
                        title: `${item.managementUnit} - ${item.name}`,
                        xmmc: item.projectName
                      })
                      history.go(-1);
                    }
                  } else {
                    message.error("设备信息不完善，报修失败。", () => { history.push("/") })
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