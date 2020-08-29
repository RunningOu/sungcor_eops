export default {
    '7ebd1cae5f4a46d6bee4e00464ccae90':{ // 公司 视频监控报修
        modelName: '视频监控报修',
        tabs: [
            { title: '挂起', sub: 5 },
            { title: '待办', sub: 1 },
            { title: '逾期', sub: 4 },
            { title: '完成', sub: 3 },
            { title: '参与', sub: 2 },
            { title: '全部', sub: 0 },
        ],
        tabsConfig: userId => [
            [{ key: "modelId", value: "7ebd1cae5f4a46d6bee4e00464ccae90", operator: "EQ" }],
            [
                { key: "executor", value: userId, operator: "IN" },
                // { key: "status", value: "1,2", operator: "IN" },
                // { key: "formData.sfbx", value: "wgq", operator: "EQ" },
                // { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }
            ],
            [
                { key: "participation", value: userId, operator: "IN" },
                { key: "status", value: "1,2", operator: "IN" },
                { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [
                { key: "status", value: "3", operator: "IN" },
                { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [
                { key: "overdue", value: "1", operator: "IN" },
                { key: "formData.sfbx", value: "wgq", operator: "EQ" },
                { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [
                { key: "formData.sfbx", value: "ygq", operator: "EQ" }
            ] // 挂起 只显示 执行人 有 他的，图像组管理员特殊处理
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
            { title: '完成', sub: 3 },
            { title: '参与', sub: 2 , sum: 0},
            { title: '全部', sub: 0 },
        ],
        tabsConfig: userId => [
            [{ key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [
                { key: "executor", value: userId, operator: "IN" },
                { key: "status", value: "1,2", operator: "IN" },
                { key: "formData.sfbx", value: "wgq", operator: "EQ" },
                { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [
                { key: "participation", value: userId, operator: "IN" },
                { key: "status", value: "1,2", operator: "IN" },
                { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [
                { key: "status", value: "3", operator: "IN" },
                { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [
                { key: "overdue", value: "1", operator: "IN" },
                { key: "formData.sfbx", value: "wgq", operator: "EQ" },
                { key: "modelId", value: "a50f0654c8a7465291f17769d4b61fae", operator: "EQ" }],
            [
                { key: "formData.sfbx", value: "ygq", operator: "EQ" }
            ] // 挂起 只显示 执行人 有 他的，图像组管理员特殊处理
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
            { title: '待办', sub: 1 },
            { title: '逾期', sub: 4 },
            { title: '完成', sub: 3 },
            { title: '参与', sub: 2 },
            { title: '全部', sub: 0 },
        ],
        tabsConfig: userId => [
            [{ key: "modelId", value: "7df0049df1b6493189430e20cc8877a4", operator: "EQ" }],
            [{ key: "executor", value: userId, operator: "IN" }, { key: "status", value: "1,2", operator: "IN" }, { key: "modelId", value: "7df0049df1b6493189430e20cc8877a4", operator: "EQ" }],
            [{ key: "participation", value: userId, operator: "IN" }, { key: "status", value: "1,2", operator: "IN" }, { key: "modelId", value: "7df0049df1b6493189430e20cc8877a4", operator: "EQ" }],
            [{ key: "status", value: "3", operator: "IN" }, { key: "modelId", value: "7df0049df1b6493189430e20cc8877a4", operator: "EQ" }],
            [{ key: "overdue", value: "1", operator: "IN" }, { key: "modelId", value: "7df0049df1b6493189430e20cc8877a4", operator: "EQ" }],
            [{ key: "formData.sfbx", value: "ygq", operator: "EQ" }] // 挂起 只显示 执行人 有 他的，图像组管理员特殊处理
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
            [{ key: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }],
            [{ key: "executor", value: userId, operator: "IN" }, { key: "status", value: "1,2", operator: "IN" }, { key: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }],
            [{ key: "participation", value: userId, operator: "IN" }, { key: "status", value: "1,2", operator: "IN" }, { key: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }],
            [{ key: "status", value: "3", operator: "IN" }, { key: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }],
            [{ key: "overdue", value: "1", operator: "IN" }, { key: "modelId", value: "8e046f46a81b4988bf6de158d847059f", operator: "EQ" }],
            [{ key: "formData.sfbx", value: "ygq", operator: "EQ" }] // 挂起 只显示 执行人 有 他的，图像组管理员特殊处理
        ],
        searchList: [
            {code: 'title', name: '工单标题'}
        ]
    }
}