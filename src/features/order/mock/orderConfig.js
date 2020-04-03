import moment from 'moment'
export default {
  'e2fa1a08e5b54847b00fc614378703d8':{
  // '7ebd1cae5f4a46d6bee4e00464ccae90':{
    '开始': {
      required: ['telephone', "bxfs", "fxGzlx"],
      readOnly: ['fxpcs', 'wxdwmc', 'sbmc', 'deviceKey', 'deviceIP', 'title', 'xmmc'],
      hidden: ['title',
      'resource', 
      'fxpcs', 'wxdwmc', 'sbmc',
      'urgentLevel', "deviceKey" ,
      "deviceIP",'bxfs', 'bxsj', 
      'jdsj'],
      defaultValue: {
        fxBxr: 'realname',
        telephone: 'mobile',
        urgentLevel: 2,
        bxfs: "1",
        bxsj:() => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      },
      userInfo: {fxpcs: 'realname'}
    },
    '内场接单': {
      hidden: ['title', 'fxBxr', 'telephone',
      'resource', 'fxGzlx', 'ticketDesc', 
      'fxpcs', 'wxdwmc', 'sbmc',
      'urgentLevel', "deviceKey" ,
      "deviceIP",'bxfs', 'bxsj', 
      'jdsj', 'file', 'xmmc'],
      defaultValue: {
        receivedman: 'realname',
        jdphone: 'mobile',
      },
      readOnly: ['receivedman']
    },
    '外场返单': {
      hidden: ['title', 'fxBxr', 'telephone',
      'resource', 'fxGzlx', 'ticketDesc', 
      'fxpcs', 'wxdwmc', 'sbmc',
      'urgentLevel', "deviceKey" ,
      "deviceIP",'bxfs', 'bxsj', 
      'jdsj', 'receivedman', 'jdphone', 'jdsj', 'pdms', 'solvingTime','gpsm', 'xmmc'],
      defaultValue: {
        solver: 'realname',
        solvingTime: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      },
      readOnly: ['solver'],
    },
    '用户确认': {
      hidden: ['title', 'fxBxr', 'telephone',
      'resource', 'fxGzlx', 'ticketDesc', 
      'fxpcs', 'wxdwmc', 'sbmc',
      'urgentLevel', "deviceKey" ,
      "deviceIP",'bxfs', 'bxsj', 
      'jdsj', 'receivedman', 'jdphone', 'jdsj',
      'pdms', 'solvingTime',
      'gpsm', 'solver', 'solveResult',
      'problemReason', 'solvent',
      'file', 'acknowledgetime', 'xmmc'
      ],
      defaultValue: {
        acknowledgetime: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }
}