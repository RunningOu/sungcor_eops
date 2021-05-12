
//模拟的自检流程
export const getOrderProcess = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                // url:oss2/api/link/check/queryByTicket?ticketId=123123123
                "success": true,
                "message": "操作成功！",
                "code": 200,
                "result": [
                    {
                        "createTime": "2020-10-16 15:58:16",
                        "name": "摄像机",
                        "ip": '15.235.104.229',
                        "status": 1,
                        "msg": "检测到摄像机网络异常",
                        "ticketId": "5e02f1c255284f03a85f351c873c9870"
                    },
                    {
                        "createTime": "2020-10-16 15:59:16",
                        "name": "背包箱",
                        "ip": '15.235.104.229',
                        "status": 0,
                        "msg": "检测到相机对应的背包箱信息异常",
                        "ticketId": "5e02f1c255284f03a85f351c873c9870"
                    },
                    {
                        "createTime": "2020-10-16 15:59:16",
                        "name": "ONU",
                        "ip": '15.235.104.229',
                        "status": 1,
                        "msg": "检测到ONU信息异常",
                        "ticketId": "5e02f1c255284f03a85f351c873c9870"
                    },
                    {
                        "createTime": "2020-10-16 15:59:16",
                        "name": "OLT",
                        "ip": '未知',
                        "status": 2,
                        "msg": "检测到OLT信息异常",
                        "ticketId": "5e02f1c255284f03a85f351c873c9870"
                    },
                    {
                        "createTime": "2020-10-16 16:45:16",
                        "name": "交换机",
                        "ip": '15.235.104.229',
                        "status": 0,
                        "msg": "检测到交换机信息异常",
                        "ticketId": "5e02f1c255284f03a85f351c873c9870"
                    },
                ],
                "timestamp": 1602835156215
            }
            )
        },200)
    })
}