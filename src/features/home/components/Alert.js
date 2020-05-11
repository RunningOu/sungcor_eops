import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Badge } from 'antd';
import { IconFontl } from '../../common';
import { countAlert } from '../../../common/request'
import './Alert.less';

const Alert = function (props) {
  const { role } = props
  console.log(role)
  const [badge, setBadge] = useState(2)
  const history = useHistory()
  useEffect(() => {
    countAlert({apikey: 'e10adc3949ba59abbe56e057f2gg88dd', groupBy: 'source', status: 0}).then(d => {
      var num=0
      d.forEach(element => {
        num += element.count
      });
      setBadge(num) 
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