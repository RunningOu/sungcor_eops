import React,{ useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { Menu,List,Spin } from 'antd'


import { HeaderBar} from '../common'
import { getTodayTicketByProjectName , getOverdueTicketByProjectName } from '../../common/request'


import InfiniteScroll from 'react-infinite-scroller'

import './ProjectDetail.less'


const ErrorMap = {
'1': "无图像",
'2': "图像模糊",
'3': "控制坏",
'4': "绿化遮挡",
'5': "补光灯故障",
'6': "无字幕或字幕错",
'7': "镜头异物",
'8': "相机照偏",
'9': "摄像机网络不通",
'10': "上云无数据",
'11': "ONU设备网络不通",
'12': "OLT设备网络不通",
'13': "交换机网络不通",
'14': "背包箱异常",
'15': "信号缺失",
'99': "其他故障"
}


const typeMap = {
  todayAdd: '新增/处理',
  overdue: '逾期'
}
const requestMap = {
  todayAdd: getTodayTicketByProjectName,
  overdue: getOverdueTicketByProjectName
}

const ProjectDetail = ({location,match}) => {
  const history = useHistory()
  const xmmc = new URLSearchParams(location.search).get('name')
  const currentType = match.params.type
  const [orderList,setOrderList] = useState({processing: [],completed: []})
  const [processingCount,setProcessingCount] = useState(0)
  const [completedCount,setCompletedCount] = useState(0)
  // const [allCount,setAllCount] = useState(0)
  const [menuKey,setMenuKey] = useState('processing')
  const [pageNum,setPageNum] = useState(1)
  const [hasMore,setHasMore] = useState(true)
  const [loading,setLoading] = useState(false)

  const handleChangeMenu = ({key}) =>{
    setMenuKey(key)
    setPageNum(1)
    document.getElementsByClassName('order-list')[0].scrollTo(0,0)
  }

  const handleInfiniteOnLoad = () => {
    setLoading(true)
    if (orderList[menuKey].length < 10) {
      setLoading(false)
      setHasMore(false)
      return
    }
    setPageNum(current => current + 1)
  }

  useEffect(() => {
      Promise.all([requestMap[currentType](xmmc,0,pageNum),requestMap[currentType](xmmc,1,pageNum)]).then(res=>{
        setProcessingCount(res[0].result.totalRecords)
        setCompletedCount(res[1].result.totalRecords)
        setOrderList((old) => {
          if(pageNum === 1) {
            return {
              processing: [...res[0].result.dataList],
              completed: [...res[1].result.dataList]
            }
          } else {
            return {
              processing: [...old['processing'],...res[0].result.dataList],
              completed: [...old['completed'],...res[1].result.dataList]
            }
          }
        })
        setLoading(false)
     })
  },[pageNum])



  return (
    <>
      <HeaderBar title={`${xmmc}-${typeMap[currentType]}工单`}></HeaderBar>
      <div className="project-detail">
        <Menu onClick={handleChangeMenu} className="menu-wrapper" defaultSelectedKeys={menuKey} mode="horizontal">
          <Menu.Item key="processing">{`处理中(${processingCount})`}</Menu.Item>
          <Menu.Item key="completed">{`已完成(${completedCount})`}</Menu.Item>
          {/* <Menu.Item key="all">{`全部(${allCount})`}</Menu.Item> */}
        </Menu>
      </div>
      <div className="order-list" style={{top: '120.5px'}}>
          <InfiniteScroll
            initialLoad={false}
            pageStart={1}
            loadMore={handleInfiniteOnLoad}
            hasMore={!loading && hasMore}
            useWindow={false}
            >
              <List dataSource={orderList[menuKey]} renderItem={(item) => {
                if(currentType === 'todayAdd') {
                  return (
                    <div className='item' onClick={() => {
                      history.push(`/order/${item.ticketId}?actId=${item.activityId}&modelId=${item.modelId}&search&searchTitle`)
                      }}>
                        {
                          <>
                          <h2 className='title'>{item.title}</h2>
                          <p className='description'>当前处理人：{item.executor.join('，')}</p>
                          <p className='description'>故障类型：{ErrorMap[(item.formData.fxGzlx)]}</p>
                          <p className='description'>键盘编号：{item.formData.deviceKey ==='null' ? '未知' : item.formData.deviceKey}</p>
                          <p className='date'>报修时间： <span>{item.formData.bxsj}</span></p>
                          <p className='orderstate'>{item.activityName}</p>
                          </>
                        }
                    </div>)
                }
                return (
                  <div className="item" onClick={() => {
                    history.push(`/order/${item.id}?actId=${item.ticketActId}&modelId=${item.ticketModelId}&search&searchTitle`)
                  }}>
                    {
                      <>
                       <h2 className='title'>{item.deviceName}</h2>
                       <p className='description'>处理人：{item.ticketExecutor}</p>
                       <p className='description'>故障类型：{ErrorMap[item.ticketType]}</p>
                       <p className='description'>键盘编号: {item.deviceNumber}</p>
                       <p className='description'>报修时间： {item.ticketCreateTime}</p>
                       <p className='orderstate' style={{color: 'rgb(255,0,0)'}}>{`${item.ticketDrainTime}小时`}</p>
                      </>
                    }
                  </div>
                )
              }} />
            </InfiniteScroll>
      </div>
    </>
  )
}

export default ProjectDetail