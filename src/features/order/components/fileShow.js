import React from 'react'
import Zmage from 'react-zmage'
import './fileShow.less'
          //{ <Zmage src={'https://fxtyyw.gaj.sh.gov.cn/wxPic?apikey=e10adc3949ba59abbe56e057f2gg88dd&file_id=' + f.id} /> }
export default (props) => { 
  const {file} = props
  return (
    <div className="order-component-file">
      { file.map( f => 
        <div className="file-box" key={f.name}>
          <Zmage src={'http://192.168.0.28/itsm/openapi/v2/tickets/downloadAttachFile?apikey=e10adc3949ba59abbe56e057f2gg88dd&file_id=' + f.id} />
        </div>) }
    </div>
  )
}