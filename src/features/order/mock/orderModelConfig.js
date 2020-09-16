export default {
    // 奉贤视频设备报修
    'a50f0654c8a7465291f17769d4b61fae': [
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "StartNoneEvent",
            "handle_rules": [
                {
                    "route_id": "9be9b52c521d4b3a9d7a47acd4243373",
                    "name": "提交",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 0,
            "name": "开始",
            "id": "f71fa580fbd74857904dbb4b5bc623df",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 0
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "a7542648988243edb8b6909ce46a4d34",
                    "name": "维修完成",
                    "executors_groups": {}
                },
                {
                    "route_id": "03db575860ec437c9fcd5408c469c629",
                    "name": "指派外场",
                    "executors_groups": {
                        "13ab9b92844f435c99021d7013aabc17": {
                            "user": [
                                {
                                    "name": "李卫新",
                                    "id": "6681ac876d624673ab627a6495b129f2"
                                },
                                {
                                    "name": "潘慧斌",
                                    "id": "893487681844413db5422dc0b55b94d5"
                                }
                            ],
                            "group": []
                        }
                    }
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 1,
            "name": "内场接单",
            "id": "5e858086fbe14d34aadc5ee630895146",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "f4a7370d41b3417ba401d63198d1468a",
                    "name": "指派外场",
                    "executors_groups": {
                        "6edc174f276c49eaae35d953a21e0970": {
                            "user": [
                                {
                                    "name": "赵敬廷",
                                    "id": "00e63d89599e425b840cb50bb78b85ff"
                                },
                                {
                                    "name": "李卫新",
                                    "id": "6681ac876d624673ab627a6495b129f2"
                                },
                                {
                                    "name": "顾杰",
                                    "id": "7c2b298c3ba644829335dfc87f676180"
                                },
                                {
                                    "name": "王卓越",
                                    "id": "c6b0a1173d7b47b4bb8865231432a036"
                                },
                                {
                                    "name": "戴梦",
                                    "id": "e58ca9b4c2234194b855882b3af2216a"
                                },
                                {
                                    "name": "韩忠惠",
                                    "id": "e691c43ee8ef44549aa7a522fe1d2daf"
                                },
                                {
                                    "name": "石玉冬",
                                    "id": "f33a4c22727c42e79cdc4ba64517f1f4"
                                },
                                {
                                    "name": "李明",
                                    "id": "faaea1f9dd7645939e6fb7b04eec8f64"
                                }
                            ],
                            "group": []
                        }
                    }
                },
                {
                    "route_id": "c853da8aedf740eb943824db871a5900",
                    "name": "维修完成",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 2,
            "name": "内场接单",
            "id": "60d42110af3e4ba18e828147aa12f3c3",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "f8a95cd3748044d08b1a4e1c3ee0d487",
                    "name": "维修完成",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 3,
            "name": "外场返单",
            "id": "6edc174f276c49eaae35d953a21e0970",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 1
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "dc891b066c744dec96e9f52281e09977",
                    "name": "未修好回退",
                    "executors_groups": {
                        "6edc174f276c49eaae35d953a21e0970": {
                            "user": [
                                {
                                    "name": "赵敬廷",
                                    "id": "00e63d89599e425b840cb50bb78b85ff"
                                },
                                {
                                    "name": "李卫新",
                                    "id": "6681ac876d624673ab627a6495b129f2"
                                },
                                {
                                    "name": "顾杰",
                                    "id": "7c2b298c3ba644829335dfc87f676180"
                                },
                                {
                                    "name": "王卓越",
                                    "id": "c6b0a1173d7b47b4bb8865231432a036"
                                },
                                {
                                    "name": "戴梦",
                                    "id": "e58ca9b4c2234194b855882b3af2216a"
                                },
                                {
                                    "name": "韩忠惠",
                                    "id": "e691c43ee8ef44549aa7a522fe1d2daf"
                                },
                                {
                                    "name": "石玉冬",
                                    "id": "f33a4c22727c42e79cdc4ba64517f1f4"
                                },
                                {
                                    "name": "李明",
                                    "id": "faaea1f9dd7645939e6fb7b04eec8f64"
                                }
                            ],
                            "group": []
                        }
                    }
                },
                {
                    "route_id": "a82e0040082e41fabae6cfc9a4c63d38",
                    "name": "维修完成关单",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 4,
            "name": "用户确认",
            "id": "551c1ec7ed3c46078a0dc52b59e8007e",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "score",
                    "editable": 1,
                    "builtin": 1,
                    "name": "满意度",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e1b03f77279641a49e6da2314e3bfd06",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "非常满意",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#66bb6a",
                            "label": "满意",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "一般",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "不满意",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "非常不满意",
                            "value": "5",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "acknowledgetime",
                    "editable": 1,
                    "builtin": 0,
                    "name": "确认时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "666ba9e06f4643c7b5f644f13087e2fe",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "00dfe09a619f49ffb9873c3ccb1d8472",
                    "name": "指派外场",
                    "executors_groups": {
                        "cc63de87c5754bc1b95267ec614f50c5": {
                            "user": [
                                {
                                    "name": "俞凌峰",
                                    "id": "52aa412aa53a413492d3b2a80ae41ed7"
                                },
                                {
                                    "name": "李卫新",
                                    "id": "6681ac876d624673ab627a6495b129f2"
                                },
                                {
                                    "name": "张辰磊",
                                    "id": "7e8ad09a133646c18c56954c382fc8cf"
                                },
                                {
                                    "name": "刘康",
                                    "id": "95f4a7ccd4f64cd9b5af7e146bc0cf9d"
                                },
                                {
                                    "name": "岺仁",
                                    "id": "b79e4bc493074329847a3b31c9ed2022"
                                },
                                {
                                    "name": "白宇亮",
                                    "id": "d25ebb1d6c124737aa8dd1b2f3740eea"
                                },
                                {
                                    "name": "顾佳",
                                    "id": "e1cbe2b99d8643b587f534d63a63bd7b"
                                }
                            ],
                            "group": []
                        }
                    }
                },
                {
                    "route_id": "ef8d542d233b4c4d8fec6c89e2700a97",
                    "name": "维修完成",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 5,
            "name": "内场接单",
            "id": "1ee0efec4f9248e9b3691da31766e1a6",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "009711e6f3ed4b2f87d47517aa71e153",
                    "name": "维修完成",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 6,
            "name": "外场返单",
            "id": "cc63de87c5754bc1b95267ec614f50c5",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 1
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "805bfb5cece14ff79345fe22083e2101",
                    "name": "维修完成关单",
                    "executors_groups": {}
                },
                {
                    "route_id": "6ceeb89bd5d346ada1f545cc07446c6d",
                    "name": "未修好回退",
                    "executors_groups": {
                        "cc63de87c5754bc1b95267ec614f50c5": {
                            "user": [
                                {
                                    "name": "俞凌峰",
                                    "id": "52aa412aa53a413492d3b2a80ae41ed7"
                                },
                                {
                                    "name": "李卫新",
                                    "id": "6681ac876d624673ab627a6495b129f2"
                                },
                                {
                                    "name": "张辰磊",
                                    "id": "7e8ad09a133646c18c56954c382fc8cf"
                                },
                                {
                                    "name": "刘康",
                                    "id": "95f4a7ccd4f64cd9b5af7e146bc0cf9d"
                                },
                                {
                                    "name": "岺仁",
                                    "id": "b79e4bc493074329847a3b31c9ed2022"
                                },
                                {
                                    "name": "白宇亮",
                                    "id": "d25ebb1d6c124737aa8dd1b2f3740eea"
                                },
                                {
                                    "name": "顾佳",
                                    "id": "e1cbe2b99d8643b587f534d63a63bd7b"
                                }
                            ],
                            "group": []
                        }
                    }
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 7,
            "name": "用户确认",
            "id": "ef770b56d63242b18bf14d3170f5fd73",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "score",
                    "editable": 1,
                    "builtin": 1,
                    "name": "满意度",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e1b03f77279641a49e6da2314e3bfd06",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "非常满意",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#66bb6a",
                            "label": "满意",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "一般",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "不满意",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "非常不满意",
                            "value": "5",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "acknowledgetime",
                    "editable": 1,
                    "builtin": 0,
                    "name": "确认时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "666ba9e06f4643c7b5f644f13087e2fe",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "46f262c57801404296c11c23ae2f8bfd",
                    "name": "维修完成",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 8,
            "name": "外场返单",
            "id": "13ab9b92844f435c99021d7013aabc17",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 1
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "713b4deeeff6411a9ef0df0966d25358",
                    "name": "未修好回退",
                    "executors_groups": {
                        "13ab9b92844f435c99021d7013aabc17": {
                            "user": [
                                {
                                    "name": "李卫新",
                                    "id": "6681ac876d624673ab627a6495b129f2"
                                },
                                {
                                    "name": "潘慧斌",
                                    "id": "893487681844413db5422dc0b55b94d5"
                                }
                            ],
                            "group": []
                        }
                    }
                },
                {
                    "route_id": "111d1394f8dc4e74b44210526a53adb3",
                    "name": "维修完成关单",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 9,
            "name": "用户确认",
            "id": "181b4e83f4f04f6295fcda09a918ac39",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "score",
                    "editable": 1,
                    "builtin": 1,
                    "name": "满意度",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e1b03f77279641a49e6da2314e3bfd06",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "非常满意",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#66bb6a",
                            "label": "满意",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "一般",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "不满意",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "非常不满意",
                            "value": "5",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "acknowledgetime",
                    "editable": 1,
                    "builtin": 0,
                    "name": "确认时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "666ba9e06f4643c7b5f644f13087e2fe",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "EndNoneEvent",
            "handle_rules": [],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 10,
            "name": "结束",
            "id": "89869a6345ee4fb4b0553e73b6894274",
            "field_list": [],
            "policy": 0
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "ExclusiveGateway",
            "handle_rules": [
                {
                    "route_id": "9ca99a9cea3b4e77a5befdb2cb5da025",
                    "name": "提交",
                    "executors_groups": {}
                },
                {
                    "route_id": "7ec47a8809e840ee95bf8615628c84a1",
                    "name": "提交",
                    "executors_groups": {}
                },
                {
                    "route_id": "8fd0e94dfa064785a4ffa8360faf6cbb",
                    "name": "提交",
                    "executors_groups": {}
                },
                {
                    "route_id": "1f7e1029bccd4fb99d8777a7f739f008",
                    "name": "提交",
                    "executors_groups": {}
                },
                {
                    "route_id": "898700abfbca4d61a3a16f4da32b95c0",
                    "name": "提交",
                    "executors_groups": {}
                },
                {
                    "route_id": "c5f059c639344bcab9e8bc9313e162ec",
                    "name": "提交",
                    "executors_groups": {}
                },
                {
                    "route_id": "09250d9040014d79a37363338dc18e9b",
                    "name": "提交",
                    "executors_groups": {}
                },
                {
                    "route_id": "6fe544fdfe6b4d2c9a3e5cc68b070a89",
                    "name": "提交",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 11,
            "name": "判断节点",
            "id": "ef61dedcca4743b687d7f899c7c88b38",
            "field_list": [],
            "policy": 0
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "dc10301b817f4e3080467ec6b4ded8be",
                    "name": "维修完成",
                    "executors_groups": {}
                },
                {
                    "route_id": "2e7704329d66473db36ecf6b53ac2aa9",
                    "name": "误报回退",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 12,
            "name": "内场接单",
            "id": "90fae3eb5d554c849ae785ff5486870e",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "3019e1758dbc4bac90f6c00feb4eb7e5",
                    "name": "维修完成关单",
                    "executors_groups": {}
                },
                {
                    "route_id": "41b396ee08e54e0fb59be51acf6e947a",
                    "name": "未修好回退",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 13,
            "name": "用户确认",
            "id": "424644120e9b42ab8943bc42f11a654a",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "score",
                    "editable": 1,
                    "builtin": 1,
                    "name": "满意度",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e1b03f77279641a49e6da2314e3bfd06",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "非常满意",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#66bb6a",
                            "label": "满意",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "一般",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "不满意",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "非常不满意",
                            "value": "5",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "acknowledgetime",
                    "editable": 1,
                    "builtin": 0,
                    "name": "确认时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "666ba9e06f4643c7b5f644f13087e2fe",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "6cafc8619e8b423dbba83bb9ebcd1b3c",
                    "name": "误报回退",
                    "executors_groups": {}
                },
                {
                    "route_id": "cdd2486a3aed45e2973b9098aa5ce6ee",
                    "name": "维修完成",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 14,
            "name": "内场接单",
            "id": "756640423be445238a265a8d81d8a141",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "9a31035ede8f4ef3882a667119c1054a",
                    "name": "未修好回退",
                    "executors_groups": {}
                },
                {
                    "route_id": "c04ad5c5436e40d683ee701a1637201d",
                    "name": "维修完成关单",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 15,
            "name": "用户确认",
            "id": "e26976dbddcd4f86830b8c679a4c6f36",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "score",
                    "editable": 1,
                    "builtin": 1,
                    "name": "满意度",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e1b03f77279641a49e6da2314e3bfd06",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "非常满意",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#66bb6a",
                            "label": "满意",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "一般",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "不满意",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "非常不满意",
                            "value": "5",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "acknowledgetime",
                    "editable": 1,
                    "builtin": 0,
                    "name": "确认时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "666ba9e06f4643c7b5f644f13087e2fe",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "821c58d621c24543b64382a19b3dbe28",
                    "name": "误报回退",
                    "executors_groups": {}
                },
                {
                    "route_id": "e52bd17bc2914308b444383cbb25b687",
                    "name": "维修完成",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 16,
            "name": "内场接单",
            "id": "104567cb0ebc4ac0a2a181270e2c9634",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "f387318ca1fc4d979633c5329d3bb7ae",
                    "name": "未修好回退",
                    "executors_groups": {}
                },
                {
                    "route_id": "4bd44345e7994a358880990756027b7f",
                    "name": "维修完成关单",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 17,
            "name": "用户确认",
            "id": "fe4a6e6d5d374ed3851767ee1985f1b3",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "score",
                    "editable": 1,
                    "builtin": 1,
                    "name": "满意度",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e1b03f77279641a49e6da2314e3bfd06",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "非常满意",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#66bb6a",
                            "label": "满意",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "一般",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "不满意",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "非常不满意",
                            "value": "5",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "acknowledgetime",
                    "editable": 1,
                    "builtin": 0,
                    "name": "确认时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "666ba9e06f4643c7b5f644f13087e2fe",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "23dcb2023029414786dcb3be6dce9040",
                    "name": "误报回退",
                    "executors_groups": {}
                },
                {
                    "route_id": "8dcc9b9b02dc44af8260d15b9f33b76f",
                    "name": "维修完成",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 18,
            "name": "内场接单",
            "id": "840177de32af4e03bc64e6c1ff5a6018",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "b94873a4b4d44063b2f485e90534ffd5",
                    "name": "未修好回退",
                    "executors_groups": {}
                },
                {
                    "route_id": "00dfe9bcc00545f08ba1a3748a597588",
                    "name": "维修完成关单",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 19,
            "name": "用户确认",
            "id": "661f394417a8449c857a972187d92c96",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "score",
                    "editable": 1,
                    "builtin": 1,
                    "name": "满意度",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e1b03f77279641a49e6da2314e3bfd06",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "非常满意",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#66bb6a",
                            "label": "满意",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "一般",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "不满意",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "非常不满意",
                            "value": "5",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "acknowledgetime",
                    "editable": 1,
                    "builtin": 0,
                    "name": "确认时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "666ba9e06f4643c7b5f644f13087e2fe",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "7c79d4c44ed541e7bd0ba0a7e9c2afd5",
                    "name": "维修完成",
                    "executors_groups": {}
                },
                {
                    "route_id": "3ae8658cc43048148f7b76792d9994f6",
                    "name": "指派外场",
                    "executors_groups": {
                        "20ab4686d7a84c41bdba8e7c52f3dffb": {
                            "user": [
                                {
                                    "name": "齐金国",
                                    "id": "0747a5e0a0f541ac86dad6fa84e87576"
                                },
                                {
                                    "name": "程子键",
                                    "id": "4ece7833b0e5443681382a2001185097"
                                },
                                {
                                    "name": "张林海",
                                    "id": "5762994298ad4122aba2475d4876906a"
                                },
                                {
                                    "name": "涂波",
                                    "id": "68b9e0cd75b548a7b1b128acd3d1020c"
                                },
                                {
                                    "name": "梁栋",
                                    "id": "6ebe9bfe346d4011b8ecd9a090c7227c"
                                },
                                {
                                    "name": "许光尚",
                                    "id": "70df6d2a034d4d838343003a2f1b5cfb"
                                },
                                {
                                    "name": "罗攀",
                                    "id": "726e0ff5ccfd4d6cb28be623b37fc11a"
                                },
                                {
                                    "name": "尹中裕",
                                    "id": "7801999d06f04ede89d0e53ceadfcf24"
                                },
                                {
                                    "name": "李振强",
                                    "id": "a9756c4733114e149bf125f80773640b"
                                },
                                {
                                    "name": "滕波",
                                    "id": "c09bec1899564ad699e16914c275be78"
                                },
                                {
                                    "name": "吉泓彪",
                                    "id": "c9c2ceb06e5e4249affd70196f59ce64"
                                },
                                {
                                    "name": "孙梦尧",
                                    "id": "eeab5c085e0141f5ae9d0d20464d6bbb"
                                },
                                {
                                    "name": "周强",
                                    "id": "f5a0543f4fc842c280b963431bbbc6d3"
                                }
                            ],
                            "group": []
                        }
                    }
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 20,
            "name": "内场接单",
            "id": "1d40becf13ce41a786ce2ea3c232550e",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "a01fd8836a2244fe8e3d4640d2a55fcf",
                    "name": "维修完成",
                    "executors_groups": {}
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 21,
            "name": "外场返单",
            "id": "20ab4686d7a84c41bdba8e7c52f3dffb",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 1
        },
        {
            "user_and_groups": [],
            "description": "",
            "parallelism_activities": [],
            "activiti_type": "UserTask",
            "handle_rules": [
                {
                    "route_id": "c84f4c02248a4ea48792bf3100773574",
                    "name": "维修完成关单",
                    "executors_groups": {}
                },
                {
                    "route_id": "5fa811ccc4d04411876956fe1c6b6377",
                    "name": "未修好回退",
                    "executors_groups": {
                        "20ab4686d7a84c41bdba8e7c52f3dffb": {
                            "user": [
                                {
                                    "name": "齐金国",
                                    "id": "0747a5e0a0f541ac86dad6fa84e87576"
                                },
                                {
                                    "name": "程子键",
                                    "id": "4ece7833b0e5443681382a2001185097"
                                },
                                {
                                    "name": "张林海",
                                    "id": "5762994298ad4122aba2475d4876906a"
                                },
                                {
                                    "name": "涂波",
                                    "id": "68b9e0cd75b548a7b1b128acd3d1020c"
                                },
                                {
                                    "name": "梁栋",
                                    "id": "6ebe9bfe346d4011b8ecd9a090c7227c"
                                },
                                {
                                    "name": "许光尚",
                                    "id": "70df6d2a034d4d838343003a2f1b5cfb"
                                },
                                {
                                    "name": "罗攀",
                                    "id": "726e0ff5ccfd4d6cb28be623b37fc11a"
                                },
                                {
                                    "name": "尹中裕",
                                    "id": "7801999d06f04ede89d0e53ceadfcf24"
                                },
                                {
                                    "name": "李振强",
                                    "id": "a9756c4733114e149bf125f80773640b"
                                },
                                {
                                    "name": "滕波",
                                    "id": "c09bec1899564ad699e16914c275be78"
                                },
                                {
                                    "name": "吉泓彪",
                                    "id": "c9c2ceb06e5e4249affd70196f59ce64"
                                },
                                {
                                    "name": "孙梦尧",
                                    "id": "eeab5c085e0141f5ae9d0d20464d6bbb"
                                },
                                {
                                    "name": "周强",
                                    "id": "f5a0543f4fc842c280b963431bbbc6d3"
                                }
                            ],
                            "group": []
                        }
                    }
                }
            ],
            "counter_sign": 0,
            "type": 0,
            "mode": 1,
            "sequence": 22,
            "name": "用户确认",
            "id": "4cfbd86011ff49ec80bcfdd23ed5bd51",
            "field_list": [
                {
                    "code": "title",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单标题",
                    "tab_status": "0",
                    "id": "92e430a6c44546c9a245d1295cc58b85",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "urgentLevel",
                    "editable": 0,
                    "builtin": 1,
                    "name": "优先级",
                    "tab_status": "0",
                    "id": "709117c0be68454fa358f98ae2950cbd",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "极低",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "低",
                            "value": 2,
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#ef5350",
                            "label": "中",
                            "value": 3,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "高",
                            "value": 4,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "极高",
                            "value": 5,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxBxr",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5d7982bb207a41bcb560110c23160dd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "field_desc": "报修人默认中海",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "telephone",
                    "editable": 1,
                    "builtin": 1,
                    "name": "联系电话",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "b201e893daff4f89ad2e78d3cce04612",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "bxsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "a3b88ba1f56c477fb9da73a50edbfb04",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "bxfs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "报修方式",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d046f783672e465ab70a28051c8f3b87",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "人工报修",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "自动报修已拒收",
                            "value": "3",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "resource",
                    "editable": 0,
                    "builtin": 1,
                    "name": "关联配置",
                    "tab_status": "0",
                    "id": "72e1e05f9f5d4c68961dd8b8f6ba1077",
                    "type_desc": "配置项",
                    "type": "resource",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "text",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "fxGzlx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 0,
                            "label": "无图像",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "图像模糊",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "控制坏",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "绿化遮挡",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "补光灯故障",
                            "value": "5",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "无字幕或字幕错",
                            "value": "6",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "镜头异物",
                            "value": "7",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "相机照偏",
                            "value": "8",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "其他故障",
                            "value": "99",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "故障类型",
                    "tab_status": "0",
                    "id": "61c1d7be9f914acea254fc15c92d97e6",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "ticketDesc",
                    "editable": 0,
                    "builtin": 1,
                    "name": "工单描述",
                    "tab_status": "0",
                    "id": "564caa84bc7a488f9e703a97dd3ee418",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "fxpcs",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派出所名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "3af865ca10024b19abf2351ee26a88b4",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "wxdwmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "维修单位名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "5bfa87b982dd47f69ed777a0d0a6e29f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "xmmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "项目名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e6d8447ce56845af91b8e7ac0757a779",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "sbmc",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备名称",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f90845afb35a4f1b9cfb22106407c8d2",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceKey",
                    "editable": 1,
                    "builtin": 0,
                    "name": "键盘编码",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e5c21782e39840e0807538b42490ce10",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "deviceIP",
                    "editable": 1,
                    "builtin": 0,
                    "name": "设备IP",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "54327eb5b654434a88f9d84ea1f8a746",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "receivedman",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "62dc9cc4792b46029e9eb63370f89fd0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "76a4eb5756a74322a8c18fa2a8e6888f",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "jdsj",
                    "editable": 1,
                    "builtin": 0,
                    "name": "接单时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "1394ea23eba7468d883cdd3d9242db8d",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "pdms",
                    "editable": 1,
                    "builtin": 0,
                    "name": "派单描述",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "48613b4bb3694651b8ee0192ea9947a6",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "gpsm",
                    "editable": 1,
                    "builtin": 0,
                    "name": "改派说明",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "c654c12be94540b787ba92b24a8490e5",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solver",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决人",
                    "tab_status": "0",
                    "id": "a26e40835289424cbb30cc7abb8ae8f0",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solverphone",
                    "editable": 1,
                    "builtin": 0,
                    "name": "解决人手机号",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "42dc0468b7c44732b61d2fb27c37600a",
                    "type_desc": "单行文本",
                    "type": "singleRowText",
                    "validation": "none",
                    "time_scope": 0
                },
                {
                    "code": "solvingTime",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决时间",
                    "tab_status": "0",
                    "id": "571aa418d06c49f8b3750fbac9c88d09",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "solveResult",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决结果",
                    "tab_status": "0",
                    "id": "fe1c35dcc1364fb3af04409914e2b3a7",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 1,
                            "color": "#008ed2",
                            "label": "彻底解决",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "部分解决",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "未解决",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "problemReason",
                    "editable": 1,
                    "builtin": 1,
                    "name": "问题原因",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "d21a7aa629ea4c5097d9b13d72a9140b",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "code": "solvent",
                    "editable": 1,
                    "builtin": 1,
                    "name": "解决方案",
                    "tab_status": "0",
                    "id": "7ebbc2cb39cb40b8834d8473553c4068",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "score",
                    "editable": 1,
                    "builtin": 1,
                    "name": "满意度",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "e1b03f77279641a49e6da2314e3bfd06",
                    "type_desc": "单选",
                    "type": "singleSel",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "非常满意",
                            "value": "1",
                            "descEnable": 0
                        },
                        {
                            "select": 1,
                            "color": "#66bb6a",
                            "label": "满意",
                            "value": "2",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "一般",
                            "value": "3",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#9ccc65",
                            "label": "不满意",
                            "value": "4",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ffa726",
                            "label": "非常不满意",
                            "value": "5",
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                },
                {
                    "code": "gqyy",
                    "editable": 1,
                    "builtin": 0,
                    "name": "挂起备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "f8e1b365ad524744b4d8bd1a307d4287",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "field_desc": "用于保存挂起原因",
                    "time_scope": 0
                },
                {
                    "code": "bz",
                    "editable": 1,
                    "builtin": 0,
                    "name": "未修好备注",
                    "default_value": "",
                    "tab_status": "0",
                    "id": "af5d5d8bba694b5094c2974a82ad78aa",
                    "type_desc": "多行文本",
                    "type": "multiRowText",
                    "time_scope": 0
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "overdueNotify",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "正常",
                            "value": "normal",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "等待通知",
                            "value": "wait",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "通知完成",
                            "value": "done",
                            "descEnable": 0
                        }
                    ],
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "逾期通知",
                    "tab_status": "0",
                    "id": "7edbfb3f248048888585e46f12831166",
                    "type_desc": "下拉菜单"
                },
                {
                    "headers": [
                        {
                            "isRequired": 0,
                            "isSelect": 0,
                            "paramName": "",
                            "paramValue": ""
                        }
                    ],
                    "code": "sfbx",
                    "request_type": "get",
                    "editable": 1,
                    "builtin": 0,
                    "outside_url": "",
                    "raw": {
                        "data": "",
                        "isSelect": 0
                    },
                    "default_value": "",
                    "type": "listSel",
                    "params": [
                        {
                            "select": 1,
                            "label": "未挂起",
                            "value": "wgq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "已挂起",
                            "value": "ygq",
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "label": "挂起审核",
                            "value": "gqsh",
                            "descEnable": 0
                        }
                    ],
                    "field_desc": "标识工单是否被挂起了",
                    "value_sel": "",
                    "time_scope": 0,
                    "key_sel": "",
                    "form_data": {
                        "data": [
                            {
                                "paramDesc": "",
                                "isRequired": 0,
                                "isSelect": 0,
                                "paramName": "",
                                "paramValue": ""
                            }
                        ],
                        "isSelect": 1
                    },
                    "name": "是否挂起",
                    "tab_status": "0",
                    "id": "03fef3a1dade4fc6a79dc8b85c235e9b",
                    "type_desc": "下拉菜单"
                },
                {
                    "code": "acknowledgetime",
                    "editable": 1,
                    "builtin": 0,
                    "name": "确认时间",
                    "default_value": "1",
                    "tab_status": "0",
                    "id": "666ba9e06f4643c7b5f644f13087e2fe",
                    "type_desc": "日期时间",
                    "type": "dateTime",
                    "time_scope": 0
                },
                {
                    "code": "file",
                    "editable": 0,
                    "builtin": 1,
                    "name": "附件",
                    "tab_status": "0",
                    "id": "16bc62db26854d10b7b3b5996314d755",
                    "type_desc": "附件",
                    "type": "attachfile",
                    "params": [
                        {
                            "select": 0,
                            "color": "#008ed2",
                            "label": "",
                            "value": 0,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#66bb6a",
                            "label": "",
                            "value": 1,
                            "descEnable": 0
                        },
                        {
                            "select": 0,
                            "color": "#ef5350",
                            "label": "",
                            "value": 2,
                            "descEnable": 0
                        }
                    ],
                    "time_scope": 0
                }
            ],
            "policy": 3
        }
    ]
}