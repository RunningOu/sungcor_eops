import React, { useState, useEffect } from 'react'
import { Button, Modal, Tag, message } from 'antd'
import _ from 'lodash'

const { CheckableTag } = Tag
export default (props) => {
  const { handle, children, handleForm } = props
  const [visible, setVisible] = useState(false)
  const [groups, setGroups] = useState(null)
  const [selectGroups, setSelectGroups] = useState({ user: [], group: [] })

  function handleClick() {
    if(groups && groups.key) {
      setVisible(true)
    }else {
      handleForm({route_id:_.find(handle.handle_rules, r => r.name === children).route_id}, children)
    }
  }

  useEffect(() => {
    let next = _.find(handle.handle_rules, r => r.name === children)
    if (handle && handle.policy === 3) {
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
      <Button block type="primary" onClick={handleClick}>{props.children}</Button>
      <Modal
        visible={visible}
        title="选择下一节点处理人"
        onOk={() => {
          if(selectGroups.user.length || selectGroups.group.length) {
            handleForm({
              route_id:_.find(handle.handle_rules, r => r.name === children).route_id,
              executors_groups: {
                [groups.key] : {
                  ...selectGroups
                }
              }
            }, children)
          }else {
            message.info('必须指定一个处理人或组')
          }
        }}
        onCancel={() => {setVisible(false)}}>
        {
          groups && groups.key && groups.groups.user.length ?
            <>
              <h4>处理人</h4>
              <div>{groups.groups.user.map(e => 
                (<CheckableTag 
                  key={e.id}
                  checked={_.findIndex(selectGroups.user,s => s === e.id) !== -1}
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
                  checked={_.findIndex(selectGroups.group,s => s === e.id) !== -1}
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
    </>
  )
}