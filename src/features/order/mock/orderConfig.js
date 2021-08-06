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
  },
  //综合运维服务流程
  'd948b00b8e1f4a81b36e2203dcd1b78f': {
    "开始": {
      hidden: ['urgentLevel','bxlx'],
      readOnly: ['repairman'],
      defaultValue: {
        urgentLevel:2,
        repairman: 'realname',
        telephone: 'mobile',
        bxlx: 'rgxj'
      }
    },
    "服务台审核": {
      hidden: ['shr','shsj','bxlx','resource'],
      readOnly: ['repairman','IP','dd','deviceid'],
      defaultValue: {
        shr: 'realname',
        shsj: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    "问题受理":{
      hidden: ['qsr','qssj','qsrlxdh','shsj','shr','bxlx','resource','urgentLevel','repairman','bxbm'],
      readOnly: ['repairman','bxbm','dd','IP','deviceid','fxxmmc','fxwxdw'],
      defaultValue: {
        qsr: 'realname',
        qssj: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        qsrlxdh: 'mobile'
      }
    },
    "实施办理": {
      hidden: ['urgentLevel','repairman','bxbm','resource','bxlx','shr','shsj','qsr','qssj','qsrlxdh','qsgs','solvingTime'],
      readOnly: ['dd','IP','deviceid','fxxmmc','fxwxdw','fpr','fprlxdh'],
      defaultValue: {
        fpr: 'realname',
        fprlxdh: 'mobile',
        solvingTime: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    "结果确认": {
      hidden: ['urgentLevel','repairman','bxbm','resource','bxlx','shr','shsj','qsr','qssj','qsrlxdh','qsgs','solvingTime','fxqrr','acknowledgetime'],
      readOnly: [],
      defaultValue: {
        fxqrr: 'realname',
        acknowledgetime: () => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }
}