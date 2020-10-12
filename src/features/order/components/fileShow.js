import React from 'react'
import Zmage from 'react-zmage'
import './fileShow.less'
export default (props) => { 
  const {file} = props
  console.log(file);
  return (
    <div className="order-component-file">
      { file.map( f => 
        <div className="file-box" key={f.name}>
          <Zmage src={ 'https://fxtyyw.gaj.sh.gov.cn/wxPic?apikey=e10adc3949ba59abbe56e057f2gg88dd&file_id=' + f.id} />
        </div>) }
    </div>
  )
}