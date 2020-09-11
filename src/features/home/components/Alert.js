import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Badge } from 'antd';
import { IconFontl } from '../../common';
import { countAlert, queryAlertList } from '../../../common/request'
import './Alert.less';

var paramData = [
  { name: '网络资源监控', params: {name: 'host.connected/unreachable'}},
  { name: '基础资源监控', params: {name: 'host.up/down'}}
]

const Alert = function (props) {
  const [badge, setBadge] = useState(2)
  const history = useHistory()
  useEffect(() => {
    var num=0
    paramData.forEach((item, index) => {
      var params = {
        'apikey': 'e10adc3949ba59abbe56e057f2gg88dd',
        'groupBy': 'source',
        'severity': 3,
        status: 0,
        'end': parseInt(new Date().getTime()),
        'begin': parseInt(new Date().getTime()-7*24*60*60*1000)
      }
      params = {...params,...item.params}
      queryAlertList(params).then(d => { 
        num += d.data.total
        if(index == paramData.length-1){
          setBadge(num) 
        }
      })
    })
  })
  return (
    <div className='home-components-alert' onClick={() => { history.push('/alert/overview') }}>
        <Badge count={badge} corner>
            <button >{<IconFontl type="iconalert-copy" /> || '/'}</button>
        </Badge>
      {/* <button >{<IconFontl type="iconalert-copy" /> || '/'}<span>4</span></button> */}
    </div>
  )
}
export default Alert