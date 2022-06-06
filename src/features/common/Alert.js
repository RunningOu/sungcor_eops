import React, {
    useState,
    useEffect
} from 'react'
import { Badge, Icon } from 'antd'
import { queryAlertList,queryMobileAlertCount } from '../../common/request'

// const paramsData = [
//   { name: '网络资源监控', params: {name: 'host.connected/unreachable'}},
//   { name: '基础资源监控', params: {name: 'host.up/down'}}
// ]
// const [data, setData] = useState([])

const paramsMap = {
  newAlert: [1, 2, 3],
  recovered: [0]
}
const Alert = () => {
  const [menuKey, setMenuKey] = useState('newAlert')
  const [newAlertTotal, setNewAlertTotal] = useState(0)
  const handleChangeMenu = ({ key }) => {
    setMenuKey(key)
  }
  // const [badge,setBadge] = useState(0)
  useEffect(() => {
    queryMobileAlertCount(paramsMap[menuKey]).then(res => {
      const { result, code, success } = res.data
      if (code === 200 && success) {
        // setData(result)
        let tot = 0
        result.forEach(val=>{
          tot += val.count
        })
        setNewAlertTotal(tot)
      }
    }).finally(() => {
      // setLoading(false)
    })
    // let requestParams = {
    //   'apikey': 'e10adc3949ba59abbe56e057f2gg88dd',
    //   'groupBy': 'source',
    //   'severity': 3,
    //   status: 0,
    //   'end': parseInt(new Date().getTime()),
    //   'begin': parseInt(new Date().getTime()-7*24*60*60*1000)
    // }
    // const promiseList = paramsData.map(item => queryAlertList({...requestParams,...item.params}))
    
    // Promise.all(promiseList).then(res => {
    //   console.log(res,'resssss');
    //   if(res.length) {
      
    //     let total = res.reduce((prev,current) => prev.data.total + current.data.total)
    //     setBadge(total)
    //   }
    // }).catch(e => {
    //   setBadge(0)
    // })
  },[menuKey])
  return (
    <Badge count={newAlertTotal} offset={[10,2]}>
      <Icon type="alert" style={{fontSize:'22px'}} />
    </Badge>
  )
}

export default Alert