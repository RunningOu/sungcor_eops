import React,{useState,useEffect} from 'react'
import { HeaderBar } from '../common'
import {getAssetCountView} from '../../common/request'
import { Statistic } from 'antd'
import { useHistory } from 'react-router-dom'

import "./DeviceType.less"

const DeviceType = () => {
  const [countList,setCountList] = useState([])
  const history = useHistory()

  useEffect(() => {
    getAssetCountView().then(res => {
      if(res.code === 200 && res.result.length) {
        setCountList(res.result)
      }
    })
  },[])

  function handleClickDeviceTypeItem(type) {
    history.push(`/Device?type=${type.code}&state=all`)
  }
  return (
    <>
    <HeaderBar title="资产总览" />
    <div className="device-type">
      {countList.map(i => {
        return (
          <div key={i.name} className="device-type-wrapper">
            <div className="device-type-item" onClick={() => {
              handleClickDeviceTypeItem(i)
            }}>
              {/* <h3>
                {i.name}
              </h3> */}
              <div>
                <Statistic title={i.name} value={i.count} suffix={'台'}/>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default DeviceType