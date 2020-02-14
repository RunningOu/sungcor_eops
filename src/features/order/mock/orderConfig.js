import moment from 'moment'
export default {
  '7ebd1cae5f4a46d6bee4e00464ccae90':{
    '开始': {
      required: ['fxBxr', 'telephone', "bxfs", "fxGzlx"],
      readOnly: ['fxpcs', 'wxdwmc', 'sbmc', 'deviceKey', 'deviceIP', 'title'],
      hidden: ['urgentLevel', 'bxfs', 'bxsj'],
      defaultValue: {
        fxBxr: 'username',
        urgentLevel: 2,
        bxfs: "1",
        bxsj: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      },
      userInfo: {fxpcs: 'roleName'}
    },
    '内场接单': {
      hidden: ['title', 'fxBxr', 'telephone',
      'resource', 'fxGzlx', 'ticketDesc', 
      'fxpcs', 'wxdwmc', 'sbmc',
      'urgentLevel', "deviceKey" ,
      "deviceIP",'bxfs', 'bxsj', 
      'jdsj', 'file'],
      defaultValue: {
        receivedman: 'username',
      },
      readOnly: ['receivedman']
    },
    '外场返单': {
      hidden: ['title', 'fxBxr', 'telephone',
      'resource', 'fxGzlx', 'ticketDesc', 
      'fxpcs', 'wxdwmc', 'sbmc',
      'urgentLevel', "deviceKey" ,
      "deviceIP",'bxfs', 'bxsj', 
      'jdsj', 'receivedman', 'jdphone', 'jdsj', 'pdms', 'solvingTime'],
      defaultValue: {
        solver: 'username',
        solvingTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
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
      'gpsm', 'solver', 'solverphone', 'solveResult',
      'problemReason', 'solvent',
      'file', 'acknowledgetime'
      ],
      defaultValue: {
        acknowledgetime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }
}