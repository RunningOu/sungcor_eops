import React, { useState } from 'react'
import {Timeline,Radio } from 'antd'

const ProcessInfo = () => {
  const [mode, setMode] = useState('left');

  const onChange = e => {
    setMode(e.target.value);
  };

  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline mode={mode}>
        <Timeline.Item>内场分派</Timeline.Item>
        <Timeline.Item>外场返单</Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item>Network problems being solved</Timeline.Item>
      </Timeline>
    </>
  );
}

export default ProcessInfo