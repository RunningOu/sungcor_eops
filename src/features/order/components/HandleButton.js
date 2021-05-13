import React, { useState, useEffect, useRef } from 'react'
import { Button, Modal, Tag, message, Input } from 'antd'
import moment from 'moment'
// import { updateOrder } from '../../../common/request'
import _ from 'lodash'

const { CheckableTag } = Tag

export default (props) => {
  // const { handle, children, handleForm, modal } = props
  const { handle, children, handleForm, orderInfo } = props

  const [visible, setVisible] = useState(false)
  const [groups, setGroups] = useState(null)
  const [selectGroups, setSelectGroups] = useState({ user: [], group: [] })
  const [showPutUp, setShowPutUp] = useState(false)
  const [putUpRemark, setPutUpRemark] = useState('')
  const [solventViseble, setSolventViseble] = useState(false)
  const [solvent, setSolvent] = useState('')
  const extraForm = useRef({})

  function handleClick() {
    if (children === '挂起') {
      setShowPutUp(true)
      return
    }
    // if (children === '维修完成') {
    //   setSolventViseble(true)
    //   return
    // }
    if (handle.name === '内场审核') {
      if (children === '同意') {
        extraForm.current = {
          sfbx: 'ygq'
        }
      }
      if (children === '不同意') {
        extraForm.current = {
          sfbx: 'wgq',
          gqyy: ''
        }
      }
    } else {
      extraForm.current = {
        sfbx: 'wgq',
        gqyy: ''
      }
    }
    if (groups && groups.key) {
      setVisible(true)
    } else {
      handleForm({ route_id: _.find(handle.handle_rules, r => r.name === children).route_id }, children, extraForm.current )
    }
  }

  useEffect(() => {
    let next = _.find(handle.handle_rules, r => r.name === children)
    if (handle && handle.policy === 3) {
      if(next === undefined) return
      setGroups({
        key: Object.keys(next.executors_groups)[0],
        groups: {
          ...next.executors_groups[Object.keys(next.executors_groups)[0]]
        }
      })
    }
  }, [handle, children])
  useEffect(() => { console.log(selectGroups) }, [selectGroups])
  return (
    <>
      <Button type="primary" onClick={handleClick} size="large">{props.children}</Button>
      <Modal
        visible={visible}
        title="选择下一节点处理人"
        onOk={() => {
          if (selectGroups.user.length || selectGroups.group.length) {
            setVisible(false)
            handleForm({
              route_id: _.find(handle.handle_rules, r => r.name === children).route_id,
              executors_groups: {
                [groups.key]: {
                  ...selectGroups
                }
              }
            }, children, extraForm.current)
          } else {
            message.info('必须指定一个处理人或组')
          }
        }}
        onCancel={() => { setVisible(false) }}>
        {
          groups && groups.key && groups.groups.user.length ?
            <>
              <h4>处理人</h4>
              <div>{groups.groups.user.map(e =>
                (<CheckableTag
                  key={e.id}
                  checked={_.findIndex(selectGroups.user, s => s === e.id) !== -1}
                  onChange={checked => {
                    if (checked) {
                      setSelectGroups({ ...selectGroups, user: [...selectGroups.user, e.id] })
                    } else {
                      setSelectGroups({ ...selectGroups, user: [..._.filter(selectGroups.user, s => s !== e.id)] })
                    }
                  }}>{e.name}</CheckableTag>))}</div>
            </> : null
        }
        {
          groups && groups.key && groups.groups.group.length ?
            <>
              <h4>处理组</h4>
              <div>{groups.groups.group.map(e =>
                (<CheckableTag
                  key={e.id}
                  checked={_.findIndex(selectGroups.group, s => s === e.id) !== -1}
                  onChange={checked => {
                    if (checked) {
                      setSelectGroups({ ...selectGroups, group: [...selectGroups.group, e.id] })
                    } else {
                      setSelectGroups({ ...selectGroups, group: [..._.filter(selectGroups.group, s => s !== e.id)] })
                    }
                  }}>{e.name}</CheckableTag>))}</div>
            </> : null
        }
      </Modal>
      <Modal
        visible={showPutUp}
        title="填写挂起原因"
        onOk={() => {
          if (putUpRemark !== '') {
            handleForm({ route_id: _.find(handle.handle_rules, r => r.name === children).route_id }, children, {
              gqyy: putUpRemark
            })
          } else {
            message.warning('请填写挂起原因')
          }
        }}
        onCancel={() => { setShowPutUp(false) }}
      >
        <Input.TextArea rows="3" placeholder="挂起原因" value={putUpRemark} onChange={e => { setPutUpRemark(e.target.value) }} />
      </Modal>
      <Modal
        visible={solventViseble}
        title="填写解决方案"
        onOk={() => {
          if (solvent !== '') {
            var gqy = ''
            var gqjlArr = []
            orderInfo.form.forEach(orderattrs => {
              if(orderattrs.code === "gqyy"){
                gqy = orderattrs.default_value
              }
            })
            if (typeof(gqy) !== 'string' && gqy) {
              gqjlArr = gqy
              gqjlArr.push({'title': '解决方案','reason': solvent, 'time': moment(new Date()).format("YYYY-MM-DD HH:mm:ss")})
            } else {
              gqjlArr.push({'title': '解决方案','reason': solvent, 'time': moment(new Date()).format("YYYY-MM-DD HH:mm:ss")})
            }
            handleForm({ route_id: _.find(handle.handle_rules, r => r.name === children).route_id }, children, {
              solvent: gqjlArr
            })
          } else {
            message.warning('请填写解决方案')
          }
        }}
        onCancel={() => { setSolventViseble(false) }}
      >
        <Input.TextArea rows="3" placeholder="解决方案" value={solvent} onChange={e => { setSolvent(e.target.value) }} />
      </Modal>
    </>
  )
}