import axios from './httpConfig'
import dayjs from 'dayjs'

// WX code => openId 接口
export const wxGetAccessToken = async ({ code }) => {
  const { data } = await axios({
    method: 'get',
    url: '/wx/api/getAccessToken',
    params: {
      code
    }
  })
  return data
}
// wx 快速登录
export const wxQuickLogin = async ({ openId }) => {
  const { data } = await axios({
    method: 'get',
    url: '/user/getUserInfoByOpenId',
    params: {
      openId
    }
  })
  return data
}
// 登录
export const login = async (d) => {
  const { data } = await axios({
    method: 'post',
    url: '/user/login',
    data: {
      ...d
    }
  })
  return data
}
// 修改密码
export const passwordChange = async (d) => {
  const { data } = await axios({
    method: 'post',
    url: '/user/updatePwd',
    data: {
      ...d
    }
  })
  return data
}
// 查询用户信息
export const queryUserInfo = async (d) => {
  const { data } = await axios({
    method: 'get',
    url: '/user/view',
    params: {
      userId: d.userId,
      openId: d.openId
    }
  })
  return data
}

// 创建工单
export const createOrder = async (d, p = {}) => {
  const data = await axios({
    method: 'post',
    url: '/ticket/createTicket',
    params: {
      ...p
    },
    data: {
      ...d
    }
  })
  return data
}

// 提交工单
export const handleOrder = async (d) => {
  const { data } = await axios({
    method: 'post',
    url: '/ticket/commitTicket',
    data: {
      ...d
    }
  })
  return data
}

// 批量提交工单
export const handleOrderlist = async (d) => {
  const { data } = await axios({
    method: 'post',
    url: '/ticket/commitTicketList',
    data: d
  })
  return data
}

// 微信通知接口
// export const wxMessage = async (d) => {
//   const {data} = await axios({
//     method: 'post',
//     url: '/ticket/sendMessageByTicketCreate',
//     data: {
//       ...d
//     }
//   })
//   return data
// }
// 更新工单form
export const updateOrder = async (d) => {
  const { data } = await axios({
    method: 'post',
    url: '/ticket/updateTicket',
    data: {
      ...d
    }
  })
  return data
}
// 上传图片
export const updateImage = async (d) => {
  const { data } = await axios({
    method: 'post',
    url: '/ticket/uploadFileByTicketId',
    data: {
      ...d
    }
  })
  return data
}
// 获取工单模型列表
export const queryOrderTicketModel = async (params) => {
  const { data } = await axios({
    method: 'get',
    url: '/ticket/getModelByApikey',
    params: {
      apikey: 'e10adc3949ba59abbe56e057f2gg88dd',
      ...params
    }
  })
  return data
}

// 获取工单模型
export const queryOrderModel = async (modelId) => {
  const { data } = await axios({
    method: 'get',
    url: '/ticket/getItsmTicketModel',
    params: {
      apikey: 'e10adc3949ba59abbe56e057f2gg88dd',
      ...modelId
    }
  })
  return data
}

// 获取结束工单模型
export const queryLastOrderModel = async (params) => {
  const { data } = await axios({
    method: 'get',
    url: '/ticket/getTicketModelInfoById',
    params: {
      ...params
    }
  })
  return data
}

// 查询当前工单可用执行人
export const queryOrderExecutor = async (params) => {
  const { data } = await axios({
    method: 'get',
    url: '/ticket/getUserAndGroupsForTicket',
    params: {
      ...params
    }
  })
  return data
}

// 改派
export const changeOrderExecutor = async (params) => {
  const { data } = await axios({
    method: 'get',
    url: '/ticket/reassignTicket',
    params: {
      ...params
    }
  })
  return data
}

// 获取工单列表
export const queryOrderList = async (d) => {
  const { data } = await axios({
    method: 'post',
    url: '/ticket/queryByMongoDB',
    data: {
      ...d
    }
  })
  return data
}

// 获取工单列表
export const queryOrderInfo = async (ticketId) => {
  const { data } = await axios({
    method: 'get',
    url: '/ticket/getTicketById',
    params: {
      id: ticketId
    }
  })
  return data
}


// 设备列表
export const queryDeviceList = async (q) => {
  const { data } = await axios({
    method: 'post',
    url: '/cmdb/queryAll',
    data: {
      ...q
    }
  })
  return data
}

// 修改单个设备
export const updateDevice = async (q) => {
  const { data } = await axios({
    method: 'post',
    url: '/cmdb/update',
    data: q
  })
  return data
}

// 查询单个设备
export const queryDeviceById = async (id) => {
  const { data } = await axios({
    method: 'get',
    url: '/cmdb/get',
    params: {
      id: id
    }
  })
  return data
}

// 查询单个设备的归属人 （用于超级账户权限
export const queryDeviceByManager = async (id) => {
  const { data } = await axios({
    method: 'get',
    url: '/cmdb/getDeptInfo',
    params: {
      id: id
    }
  })
  return data
}

// 查询全部设备classcode
export const queryDeviceByClassCode = async (codes) => {
  const { data } = await axios({
    method: 'get',
    url: '/cmdb/get_cmdb_classType',
    params: {
      codes: codes
    }
  })
  return data
}
// 查询指定工单数量
export const queryOrderCount = async (queryArr) => {
  const { data } = await axios({
    method: 'post',
    url: '/ticket/countByDB',
    data: queryArr
  })
  return data
}

// 查询告警列表
export const queryAlertList = async (queryArr) => {
  const { data } = await axios({
    method: 'post',
    url: '/alert/selectAlarmList',
    data: queryArr
  })
  return data
}

//告警统计
export const countAlert = async (queryArr) => {
  const { data } = await axios({
    method: 'get',
    url: '/alert/cuntAlert',
    params: queryArr
  })
  return data
}

// 通过用户名获取用户信息
export const getUserbyName = async (userName) => {
  const { data } = await axios({
    method: 'get',
    url: '/user/getUserByName',
    params: {
      userName: userName
    }
  })
  return data
}

// 通过字段编码获取字段详细信息
export const getFieldByCode = async (code) => {
  const { data } = await axios({
    method: 'get',
    url: '/ticket/field',
    params: {
      code: code
    }
  })
  return data
}

// 通过故障类型统计
export const countByCode = async (code, type) => {
  const { data } = await axios({
    method: 'get',
    url: '/ticket/countbygzlx',
    params: {
      code: code,
      type: type
    }
  })
  return data
}

// 总在线率
export const countOnlienRate = async () => {
  const { data } = await axios({
    method: 'get',
    url: '/oss/app/portal/countOnlineRate'
  })
  return data
}

// 摄像机在线率
export const countCameraOnlineRate = async () => {
  const { data } = await axios({
    method: 'get',
    url: '/oss/app/portal/countCameraOnlineRate'
  })
  return data
}

// 通过类型统计数量
export const countOnlineGroupByType = async (type) => {
  const { data } = await axios({
    method: 'get',
    url: '/oss/app/portal/countOnlineGroupByType',
    params: {
      type: type
    }
  })
  return data
}

// 在线列表
export const queryNetworkList = async (d, url) => {
  const { data } = await axios({
    method: 'post',
    url: '/oss' + url,
    data: {
      ...d
    }
  })
  return data
}

// 项目工单总览
export const countTicketByStatus = async (para) => {
  const { data } = await axios({
    method: 'get',
    url: '/oss/app/portal/countTicketByStatus?interval=' + para
  })
  return data
}

// 内场工单总览
export const countTicketByDevType = async (para) => {
  const { data } = await axios({
    method: 'get',
    url: '/oss/app/portal/countTicketByDevType?interval=' + para
  })
  return data
}

//获取工单自检信息
export const getOrderProcess = async (ticket) => {
  const { data } = await axios({
    method: 'get',
    url: '/oss/api/link/check/queryByTicket?ticketId=' + ticket
  })
  return data.result
}

//获取工单流程信息
export const getOrderProcessInfo = async (ticket) => {
  const { data } = await axios({
    method: 'get',
    url: 'oss/api/itsm/getProcessRecord?ticketId=' + ticket
  })
  return data
}

//改变工单挂起状态, 0挂起,1取回
export const executeOrderHangStatus = async (ticketId, isSuspend) => {
  const result = await axios({
    method: 'get',
    url: `oss/api/itsm/suspendOrResumeSelf?ticketId=${ticketId}&isSuspend=${isSuspend}`
  })
  return result
}

//获取当前工单挂起的差值 如果有过挂起,则返回挂起的间隔
export const getOrderHangDifference = async (ticketId) => {
  const { data } = await axios({
    method: 'get',
    url: `oss/api/ticket/ticketHornetInfo/getSlaSuspendById?ticketId=${ticketId}`
  })

  return data
}

//通过设备IP查找对应的工单
export const getOrderInfoByIp = async (deviceIp) => {
  const { data } = await axios({
    method: 'get',
    url: `oss/app/portal/getTickertByIp?ip=${deviceIp}&pageSize=10&pageNum=1`
  })
  return data
}

//通过键盘编码来查找对应的工单
export const getOrderInfoByJPBH = async (deviceJPBH) => {
  const { data } = await axios({
    method: 'get',
    url: `oss/app/portal/getTickertByIp?JPBH=${deviceJPBH}&pageSize=10&pageNum=1`
  })
  return data
}
//今日新增与今日完成工单统计
export const getCountTodayTicket = async () => {
  const { data } = await axios({
    method: 'get',
    url: `oss/app/portal/countTodayTicket`
  })
  return data
}

//逾期未完成和逾期已完成工单统计
export const getCountOverdueTicket = async () => {
  const { data } = await axios({
    method: 'get',
    url: `oss/app/portal/countOverdueTicket`
  })
  return data
}

//今日新增/今日处理工单按项目名称分布
export const getTodayTicketByProject = async () => {
  const { data } = await axios({
    method: 'get',
    url: `oss/app/portal/countTodayTicketByProject`
  })
  return data
}

//逾期未完成和逾期已完成工单按项目名称分布
export const getOverdueTicketByProject = async () => {
  const { data } = await axios({
    method: 'get',
    url: `oss/app/portal/countOverdueTicketByProject`
  })
  return data
}

//今日新增/今日处理工单详情
export const getTodayTicketByProjectName = async (projectName, status, pageNum) => {
  const { data } = await axios({
    method: 'get',
    url: `oss/app/portal/queryTodayTicketByProjectName?projectName=${projectName}&status=${status}&pageSize=10&pageNum=${pageNum}`
  })

  return data
}

//逾期未完成和逾期已完成工单详情按项目名称分布
export const getOverdueTicketByProjectName = async (projectName, status, pageNum) => {
  const { data } = await axios({
    method: 'get',
    url: `oss/app/portal/queryOverdueTicketByProjectName?projectName=${projectName}&status=${status}&pageSize=10&pageNum=${pageNum}`
  })
  return data
}

//维修自我检测 ：如果是人工报修就不用检测
export const getSelfDetection = async (ip) => {
  const { data } = await axios({
    method: 'get',
    url: `/oss/api/link/check/linkChecking?ip=${ip}`
  })
  return data
}

//获取资产信息的资产统计数据
export const getAssetCountView = async () => {
  const { data } = await axios({
    method: "get",
    url: `/oss/app/asset/getAssetCountView`
  })
  return data
}

export const getAssetList = async (type, pageNum, pageSize, state) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `/oss/app/asset/getAssetList?type=${type}&pageNum=${pageNum}&pageSize=${pageSize}&state=${state}`
    })
    return data.result
  } catch (e) {
    throw new Error(e)
  }
}

export const getAssetDetail = async (apikey, id) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `/oss/app/asset/getAssetDetail?id=${id}`
    })
    return data.result
  } catch (e) {
    throw new Error(e)
  }
}

export const queryDevice = async (type, key) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `/oss/app/asset/queryDeviceByNameOrDeviceKey?classCode=${type}&key=${key}`
    })
    return data.result
  } catch (e) {
    throw new Error(e)
  }
}


/**
 * 处理工单
 * @param data 工单数据
 * @param apiKey 参数
 */
export function handleOssTicket(data, apiKey) {
  return axios({
    url: '/oss/api/itsm/handle',
    method: 'POST',
    params: { apikey: apiKey },
    data
  })
}

/**
 * 获取告警统计
 */

export function queryMobileAlertCount(severity) {
  let data = {
    "conditions": [
      {
        "field": "lastOccurTime",
        "operator": "rangeTime",
        "value": [
          dayjs().subtract(7, 'day').format('YYYY-MM-DD HH:mm:ss'),
          dayjs().format('YYYY-MM-DD HH:mm:ss'),
        ]
      },
      {
        "field": "severity",
        "value": severity,
        "operator": "IN"
      }
    ]
  }
  if (severity.length > 1) {
    data.conditions.push({
      "field": "status",
      "value": 255,
      "operator": "NOTEQ",
    })
  }
  return axios({
    url: '/oss2/api/alert/mobileAlertCount',
    method: 'POST',
    data
  })
}


/**
 * 获取告警列表
 */
export function queryMobileAlertList(data) {
  const { severity, tileId, pageNum, pageSize, search } = data
  let params = {
    "conditions": [
      {
        "field": "severity",
        "value": severity,
        "operator": "IN"
      },
      {
        "field": "tileIds",
        "value": tileId,
        "operator": "IN"
      },
      {
        "field": "lastOccurTime",
        "operator": "rangeTime",
        "value": [
          dayjs().subtract(7, 'day').format('YYYY-MM-DD HH:mm:ss'),
          dayjs().format('YYYY-MM-DD HH:mm:ss'),
        ]
      },

    ],
    "pageNum": pageNum,
    "pageSize": pageSize
  }
  if (severity.length > 1) {
    params.conditions.push({
      "field": "status",
      "value": 255,
      "operator": "NOTEQ"
    })
  }

  if (search) {
    params.ass = [
      {
        cjt: 'OR',
        conditions: [
          {
            field: 'name',
            value: search,
            operator: 'LIKE'
          },
          {
            field: 'description',
            value: search,
            operator: 'LIKE'
          },
          {
            field: 'entityName',
            value: search,
            operator: 'LIKE'
          }, {
            field: 'entityAddr',
            value: search,
            operator: 'LIKE'
          }
        ]
      }
    ]
  }

  return axios({
    url: '/oss2/api/alert/mobileAlertList',
    method: 'POST',
    data: params
  })
}


/**
 * 查找告警
 */