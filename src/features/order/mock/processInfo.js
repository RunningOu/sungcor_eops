export const getProcessInfo = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                "success": true,
                "message": "操作成功！",
                "code": 200,
                "result": [
                    {
                        "msg": "",
                        "exectorName": "赵学明",
                        "exectorTime": "2020-10-26 10:39:57",
                        "activityName": "外场实施办理",
                        "remark": "赵学明提交了工单给左宏波,admin,上海宝山电信"
                    },
                    {
                        "msg": "",
                        "exectorName": "赵学明",
                        "exectorTime": "2020-10-26 10:39:49",
                        "activityName": "外场实施办理",
                        "remark": "赵学明更新了工单"
                    },
                    {
                        "msg": "",
                        "exectorName": "赵学明",
                        "exectorTime": "2020-10-26 10:38:31",
                        "activityName": "外场实施办理",
                        "remark": "赵学明更新了工单"
                    },
                    {
                        "msg": "",
                        "exectorName": "admin",
                        "exectorTime": "2020-10-25 08:20:03",
                        "activityName": "开始",
                        "remark": "admin创建了工单"
                    }
                ],
                "timestamp": 1603687826543
            })
        },1000)
    })
}