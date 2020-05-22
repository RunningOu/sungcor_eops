import axios from './httpConfig'

// WX code => openId 接口
export const wxGetAccessToken = async ({code}) => {
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
export const wxQuickLogin = async ({openId}) => {
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
export const createOrder = async (d, p={}) => {
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
  console.log(q)
  const { data } = await axios({
    method: 'post',
    url: '/cmdb/queryAll',
    data: {
      ...q
    }
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
      id:id
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