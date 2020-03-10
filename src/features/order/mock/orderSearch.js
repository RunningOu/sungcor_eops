export default {
  '视频报修': {
    modelId: 'a50f0654c8a7465291f17769d4b61fae',
    // modelId: '7ebd1cae5f4a46d6bee4e00464ccae90',
    flow: ['开始', '内场接单', '外场接单', '厂商返单', '结束'],
    form: [{code: 'formData.deviceKey', name: '键盘编号'}, {code: 'formData.deviceIp', name: '设备ip'}]
  }
}