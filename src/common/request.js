import axios from './httpConfig'

// 登录
export const login = async ({ userName, passWord }) => {
  const { data } = await axios({
    method: 'post',
    url: '/user/login',
    data: {
      "uyunUserName": userName,
      "uyunPassWord": passWord
    }
  })
  return data
}
// 查询用户信息 
export const queryUserInfo = async ({ userId }) => {
  const { data } = await axios({
    method: 'get',
    url: '/user/view',
    params: {
      userId: userId
    }
  })
  return data
}

// 创建工单
export const createOrder = async (d) => {
  const data = await axios({
    method: 'post',
    url: '/ticket/createTicket',
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
      modelId
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