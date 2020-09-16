import Axios from 'axios';
import { local_get } from '../utils/index'
import { BASEURL, USER_INFO_ID, MANAGE_ID } from '../config';
Axios.defaults.baseURL = `${BASEURL}`; 
Axios.defaults.timeout = 18000;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// Axios.defaults.withCredentials = true;
Axios.interceptors.request.use(config => {
  // const apikey = localStorage[USER_INFO_STORAGE_KEY] ? JSON.parse(localStorage[USER_INFO_STORAGE_KEY]).apikey : ''
  // if (apikey) {
  //   config.params = config.params? config.params : {}
  //   config.params['apikey'] =  config.params['apikey'] || apikey
  // }else if(localStorage.getItem(USER_INFO_STORAGE_KEY)){
  //   Store.commit(SET_USERINFO, JSON.parse(localStorage.getItem(USER_INFO_STORAGE_KEY)))
  //   config.params = config.params? config.params : {}
  //   config.params['apikey'] = config.params['apikey'] || apikey
  // }
  config.params = config.params? config.params : {}
  if(local_get(USER_INFO_ID) && local_get(USER_INFO_ID).apiKey) {
    if(!config.params['apikey']) config.params['apikey'] = local_get(USER_INFO_ID).apiKey
    // p
    // console.log(config,local_get(USER_INFO_ID))
    // 判断工单提交接口 data里面是否有 apikey ，有就替换
    if(config.url === '/ticket/commitTicket' && MANAGE_ID === local_get(USER_INFO_ID).userId && config.data.apikey) {
      config.params['apikey'] = config.data.apikey
      delete config.data.apikey
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default Axios