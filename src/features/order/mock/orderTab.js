export default {
    // 公司 视频监控报修
    '21c50bf325a34d02af826281c24aab6f':{
        modelName: '视频监控报修',
        tabs: [
            { title: '挂起', sub: 5 , sum: 0},
            { title: '待办', sub: 1 , sum: 0},
            { title: '逾期', sub: 4 , sum: 0},
            { title: '完成', sub: 3 , sum: 0},
            { title: '参与', sub: 2 , sum: 0},
            { title: '全部', sub: 0 , sum: 0},
            { title:'系统结单', sub: 6,  sum : 0},
        ],
        tabsConfig: userId => [
            [{ field: "modelId", value: "21c50bf325a34d02af826281c24aab6f", operator: "EQ" }],
            [{ field: "executor", value: userId, operator: "IN" },{ field: "status", value: [1,2], operator: "IN" },{ field: "modelId", value: "21c50bf325a34d02af826281c24aab6f", operator: "EQ" }],
            [{ field: "participation", value: userId, operator: "IN" },{ field: "status", value: [1,2], operator: "IN" },{ field: "modelId", value: "21c50bf325a34d02af826281c24aab6f", operator: "EQ" }],
            [{ field: "status", value: 3, operator: "IN" },{ field: "modelId", value: "21c50bf325a34d02af826281c24aab6f", operator: "EQ" }],
            [{ field: "overdue", value: 1, operator: "IN" },{ field: "formData.sfbx", value: "wgq", operator: "EQ" },{ field: "modelId", value: "21c50bf325a34d02af826281c24aab6f", operator: "EQ" }],
            [{ field: "formData.sfbx", value: "ygq", operator: "EQ" },{ field: "status", value: [1,2,10], operator: "IN" },], // 挂起 只显示 执行人 有 他的，图像组管理员特殊处理
            [{ field: "status", value: 7, operator: "IN" },{ field: "modelId", value: "21c50bf325a34d02af826281c24aab6f", operator: "EQ" }],
        ],
        searchList: [
            {code: 'formData.deviceKey', name: '键盘编号'},
            {code: 'title', name: '工单标题'},
            {code: 'formData.deviceIp', name: '设备IP'}
        ]
    },
    // 现场 视频监控报修
    'a50f0654c8a7465291f17769d4b61fae': {
        modelName: '视频监控报修',
        tabs: [
            { title: '挂起', sub: 5 , sum: 0},
            { title: '待办', sub: 1 , sum: 0},
            { title: '逾期', sub: 4 , sum: 0},
            { title: '完成', sub: 3 , sum: 0},
            { title: '参与', sub: 2 , sum: 0},
            { title: '全部', sub: 0 , sum: 0},
            { title:'系统结单', sub: 6,  sum : 0},
        ],
        tabsConfig: userId => [
            [{ field: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [{ field: "executor", value: userId, operator: "IN" },{ field: "status", value: [1,2], operator: "IN" },{ field: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [{ field: "participation", value: userId, operator: "IN" },{ field: "status", value: [1,2], operator: "IN" },{ field: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [{ field: "status", value: 3, operator: "IN" },{ field: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [{ field: "overdue", value: 1, operator: "IN" },{ field: "formData.sfbx", value: "wgq", operator: "EQ" },{ field: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [{ field: "formData.sfbx", value: "ygq", operator: "EQ" },{ field: "status", value: [1,2,10], operator: "IN" },], // 挂起 只显示 执行人 有 他的，图像组管理员特殊处理
            [{ field: "status", value: 7, operator: "IN" },{ field: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
        ],
        searchList: [
            {code: 'formData.deviceKey', name: '键盘编号'},
            {code: 'title', name: '工单标题'},
            {code: 'formData.deviceIp', name: '设备IP'}
        ]
    },
    // 综合设备报修
    '7df0049df1b6493189430e20cc8877a4': {
//    '23e70ac88cc64189bb8129a9bd1ada10': {
        modelName:'综合设备报修',
        tabs: [
            // { title: '挂起', sub: 5 },
            { title: '待办', sub: 1  , sum: 0},
            { title: '逾期', sub: 4  , sum: 0},
            { title: '完成', sub: 3  , sum: 0},
            { title: '参与', sub: 2  , sum: 0},
            { title: '全部', sub: 0  , sum: 0},
        ],
        tabsConfig: userId => [
            [{ field: "modelId", value: "7df0049df1b6493189430e20cc8877a4", operator: "EQ" }],
            [{ field: "executor", value: userId, operator: "IN" }, { field: "status", value: "1,2", operator: "IN" }, { field: "modelId", value: "7df0049df1b6493189430e20cc8877a4", operator: "EQ" }],
            [{ field: "participation", value: userId, operator: "IN" }, { field: "status", value: "1,2", operator: "IN" }, { field: "modelId", value: "7df0049df1b6493189430e20cc8877a4", operator: "EQ" }],
            [{ field: "status", value: "3", operator: "IN" }, { field: "modelId", value: "7df0049df1b6493189430e20cc8877a4", operator: "EQ" }],
            [{ field: "overdue", value: "1", operator: "IN" }, { field: "modelId", value: "7df0049df1b6493189430e20cc8877a4", operator: "EQ" }],
            [{ field: "formData.sfbx", value: "ygq", operator: "EQ" }] // 挂起 只显示 执行人 有 他的，图像组管理员特殊处理
        ],
        searchList: [
            {code: 'title', name: '工单标题'}
        ]
    },
    // 奉贤基础资源报修
    '8e046f46a81b4988bf6de158d847059f': {
        modelName:'奉贤基础资源报修',
        tabs: [
            // { title: '挂起', sub: 5 },
            { title: '待办', sub: 1 },
            { title: '逾期', sub: 4 },
            { title: '完成', sub: 3 },
            { title: '参与', sub: 2 },
            { title: '全部', sub: 0 },
        ],
        tabsConfig: userId => [
            [{ field: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }],
            [{ field: "executor", value: userId, operator: "IN" }, { field: "status", value: "1,2", operator: "IN" }, { field: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }],
            [{ field: "participation", value: userId, operator: "IN" }, { field: "status", value: "1,2", operator: "IN" }, { field: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }],
            [{ field: "status", value: "3", operator: "IN" }, { field: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }],
            [{ field: "overdue", value: "1", operator: "IN" }, { field: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }],
            [{ field: "formData.sfbx", value: "ygq", operator: "EQ" }] // 挂起 只显示 执行人 有 他的，图像组管理员特殊处理
        ],
        searchList: [
            {code: 'title', name: '工单标题'}
        ]
    },
    // 综合运维服务流程
    'd948b00b8e1f4a81b36e2203dcd1b78f': {
        modelName: "综合运维服务流程",
        tabs: [
            { title: '挂起', sub: 5  , sum: 0},
            { title: '待办', sub: 1  , sum: 0},
            { title: '逾期', sub: 4  , sum: 0},
            { title: '完成', sub: 3  , sum: 0},
            { title: '参与', sub: 2  , sum: 0},
            { title: '全部', sub: 0  , sum: 0},
        ],
        tabsConfig: userId => [
            [{ field: "modelId", value: "d948b00b8e1f4a81b36e2203dcd1b78f", operator: "EQ" }],
            [{ field: "executor", value: userId, operator: "IN" }, { field: "status", value: [1,2], operator: "IN" }, { field: "modelId", value: "d948b00b8e1f4a81b36e2203dcd1b78f", operator: "EQ" }],
            [{ field: "participation", value: userId, operator: "IN" }, { field: "status", value: [1,2], operator: "IN" }, { field: "modelId", value: "d948b00b8e1f4a81b36e2203dcd1b78f", operator: "EQ" }],
            [{ field: "status", value: "3", operator: "IN" }, { field: "modelId", value: "d948b00b8e1f4a81b36e2203dcd1b78f", operator: "EQ" }],
            [{ field: "overdue", value: "1", operator: "IN" }, { field: "modelId", value: "d948b00b8e1f4a81b36e2203dcd1b78f", operator: "EQ" }],
            [{ field: "formData.sfbx", value: "ygq", operator: "EQ" },{ field: "modelId", value: "d948b00b8e1f4a81b36e2203dcd1b78f", operator: "EQ" }] // 挂起 只显示 执行人 有 他的，图像组管理员特殊处理
        ],
        searchList: [
            {code: 'title', name: '工单标题'}
        ]
    }
}