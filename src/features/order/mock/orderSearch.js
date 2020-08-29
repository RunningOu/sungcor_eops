export default {
  '视频报修': {
    modelId: 'a50f0654c8a7465291f17769d4b61fae',
    // modelId: '7ebd1cae5f4a46d6bee4e00464ccae90',
    // flow: ['开始', '内场接单', '外场接单', '厂商返单', '结束'],
    flow: ['内场接单', '外场返单', '用户确认', '结束'],
    // form: [{code: 'formData.deviceKey', name: '键盘编号'}, {code: 'formData.deviceIp', name: '设备ip'}]
  },
  '综合设备报修': {
    modelId: '7df0049df1b6493189430e20cc8877a4',
    // modelId: '7ebd1cae5f4a46d6bee4e00464ccae90',
    // flow: ['开始', '内场接单', '外场接单', '厂商返单', '结束'],
    // flow: ['内场接单', '外场返单', '用户确认', '结束'],
    // form: [{code: 'formData.deviceKey', name: '键盘编号'}, {code: 'formData.deviceIp', name: '设备ip'}]
  },
  '奉贤基础资源报修': {
    modelId: '8e046f46a81b4988bf6de158d847059f',
  }
}