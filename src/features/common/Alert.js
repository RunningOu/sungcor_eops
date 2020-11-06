import React, {
    useState,
    useEffect
} from 'react'
import { Badge, Icon } from 'antd'
import { queryAlertList } from '../../common/request'

const paramsData = [
  { name: '网络资源监控', params: {name: 'host.connected/unreachable'}},
  { name: '基础资源监控', params: {name: 'host.up/down'}}
]


const Alert = () => {
  const [badge,setBadge] = useState(0)
  useEffect(() => {
    let requestParams = {
      'apikey': 'e10adc3949ba59abbe56e057f2gg88dd',
      'groupBy': 'source',
      'severity': 3,
      status: 0,
      'end': parseInt(new Date().getTime()),
      'begin': parseInt(new Date().getTime()-7*24*60*60*1000)
    }
    const promiseList = paramsData.map(item => queryAlertList({...requestParams,...item.params}))
    
    Promise.all(promiseList).then(res => {
      if(res.length) {
        let total = res.reduce((prev,current) => prev.data.total + current.data.total)
        setBadge(total)
      }
    }).catch(e => {
      setBadge(0)
    })
  },[])
  return (
    <Badge count={badge} offset={[10,2]}>
      <Icon type="alert" style={{fontSize:'22px'}} />
    </Badge>
  )
}

export default Alert