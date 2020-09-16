import moment from 'moment'
export default {
  // 奉贤视频设备报修
  'a50f0654c8a7465291f17769d4b61fae':{
  // '7ebd1cae5f4a46d6bee4e00464ccae90':{
    '开始': {
      required: ['telephone', "bxfs", "fxGzlx"],
      readOnly: ['fxpcs', 'wxdwmc', 'sbmc', 'deviceKey', 'deviceIP', 'title', 'xmmc'],
      hidden: ['title', 'overdueNotify',
      'resource', 
      'fxpcs', 'wxdwmc', 'sbmc',
      'urgentLevel', "deviceKey" ,
      "deviceIP",'bxfs', 'bxsj', 
      'jdsj','sfbx','gqyy'],
      defaultValue: {
        fxBxr: 'realname',
        telephone: 'mobile',
        urgentLevel: 2,
        bxfs: "1",
        sfbx: "wgq",
        bxsj: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      },
      userInfo: {fxpcs: 'realname'}
    },
    '内场接单': {
      hidden: ['title', 'fxBxr', 'telephone', 'overdueNotify',
      'resource', 'fxGzlx', 'ticketDesc', 
      'fxpcs', 'wxdwmc', 'sbmc',
      'urgentLevel', "deviceKey" ,
      "deviceIP",'bxfs', 'bxsj', 
      'jdsj', 'xmmc', 'sfbx', 'gqyy'],
      defaultValue: {
        receivedman: 'realname',
        jdphone: 'mobile',
      },
      readOnly: ['receivedman']
    },
    '外场返单': {
      required: ['solvent'],
      hidden: ['title', 'fxBxr', 'telephone', 'overdueNotify',
      'resource', 'fxGzlx', 'ticketDesc', 
      'fxpcs', 'wxdwmc', 'sbmc',
      'urgentLevel', "deviceKey" ,
      "deviceIP",'bxfs', 'bxsj', 
      'jdsj', 'receivedman', 'jdphone', 'jdsj'
      , 'pdms', 'solvingTime','gpsm', 'xmmc'
      , 'sfbx', 'gqyy'],
      defaultValue: {
        solver: 'realname',
        solverphone: 'mobile',
        solvingTime: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      },
      readOnly: ['solver'],
    },
    '内场审核': {
      hidden: ['title', 'fxBxr', 'telephone', 'overdueNotify',
      'resource', 'fxGzlx', 'ticketDesc', 
      'fxpcs', 'wxdwmc', 'sbmc',
      'urgentLevel', "deviceKey" ,
      "deviceIP",'bxfs', 'bxsj', 
      'jdsj', 'receivedman', 'jdphone', 'jdsj',
      'pdms', 'solvingTime',
      'gpsm', 'solver', 'solveResult',
      'problemReason', 'solvent',
      'file', 'acknowledgetime', 'xmmc', 'sfbx', "solverphone"],
    },
    '用户确认': {
      hidden: ['title', 'fxBxr', 'telephone', 'overdueNotify',
      'resource', 'fxGzlx', 'ticketDesc', 
      'fxpcs', 'wxdwmc', 'sbmc',
      'urgentLevel', "deviceKey" ,
      "deviceIP",'bxfs', 'bxsj', 
      'jdsj', 'receivedman', 'jdphone', 'jdsj',
      'pdms', 'solvingTime',
      'gpsm', 'solver', 'solveResult',
      'problemReason', 'solvent',
      'file', 'solverphone','xmmc', 'sfbx', 'gqyy'
      ],
      defaultValue: {
        score: '2',
        acknowledgetime: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  },
  // 综合设备报修
  '7df0049df1b6493189430e20cc8877a4':{
    // '23e70ac88cc64189bb8129a9bd1ada10':{
      '开始': {
        required: ['fxBxr', 'telephone', 'wllx', 'pcsgg', 'bxsblx', 'scbgs'],
        readOnly: [],
        hidden: ['overdueNotify', 'title',
        'fxpcs', 'wxdwmc',
        'urgentLevel', 'bxsj', 
        'jdsj'],
        defaultValue: {
          fxBxr: 'realname',
          telephone: 'mobile',
          urgentLevel: 2,
          bxsj: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        },
        userInfo: {fxpcs: 'realname'}
      },
      '服务接单': {
        hidden: ['title', 'fxBxr', 'telephone', 'overdueNotify',
        'bxsblx', 'xingh', 'bxsj', 'pingp', 'scbgs', 'wllx', 'pcsgg', 'ticketDesc', 'file'],
        defaultValue: {
          receivedman: 'realname',
          jdphone: 'mobile',
          jdsj: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        },
        readOnly: ['receivedman']
      },
      '设备处理': {
        required: ['solvent'],
        hidden: ['title', 'fxBxr', 'telephone', 'overdueNotify',
        'bxsblx', 'xingh', 'bxsj', 'pingp', 'scbgs', 'wllx', 'pcsgg', 'ticketDesc', 'file', 'receivedman', 'jdphone', 'jdsj', 'bz'
        ],
        defaultValue: {
          solver: 'realname',
          solverphone: 'mobile',
          solvingTime: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        },
        readOnly: ['solver'],
      },
      '用户确认': {
        hidden: ['title', 'fxBxr', 'telephone', 'overdueNotify',
        'bxsblx', 'xingh', 'bxsj', 'pingp', 'scbgs', 'wllx', 'pcsgg', 'ticketDesc',
        'jdsj', 'bz', 'receivedman', 'jdphone',
        'pdms', 'solvingTime',
        'solverphone', 'solver', 'solveResult',
        'problemReason', 'solvent',
        'file', 'sfbx'
        ],
        defaultValue: {
          acknowledgetime: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        }
      }
  },
  // 奉贤基础资源报修
  '8e046f46a81b4988bf6de158d847059f': {
    '厂商处理': {
      required: ['solveResult', 'solvent'],
      readOnly: [],
      hidden: [],
      defaultValue: {
        receivedman: 'realname',
        jdphone: 'mobile',
        solvingTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      },
      userInfo: {fxpcs: 'realname'}
    }
  }
}