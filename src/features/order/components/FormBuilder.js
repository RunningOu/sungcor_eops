import React from 'react'
import { Form} from 'antd'

const { Item } = Form
const FormBuilder = (props) => {
  const { meta, form } = props
  // console.log(meta, form)
  const { getFieldDecorator } = form
  function render(item) {
    return (
      <Item label={item.name} key={item.id}>
        {getFieldDecorator(item.code, {
          rules: item.rules
        })(item.widget(item))}
       
      </Item>
    )
  }
  return (
    <>
      {meta.map(render)}
    </>
  )
}

export default FormBuilder