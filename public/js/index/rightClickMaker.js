// var ip = "192.168.3.225";
/*var ip = "10.232.75.186";*/
//右键单击Maker出现右键菜单事件
function RightClickMaker(marker, devInfo) {
    let state, url;
    var watchMarker = function (marker, devInfo) {
        console.log(marker);
        //先清空元素
        $(".sbbm").empty();
        $(".sbname").empty();
        $(".sbip").empty();
        $(".sbcs").empty();
        $(".sbzt").empty();
        $(".lat").empty();
        $(".lng").empty();
        $(".camera-title").empty();
        if (marker.classCode != null && marker.classCode != "") {
            switch (marker.classCode) {
                case 'Camera':
                    url = "images/camera-info.png";
                    break;
                case 'Router':
                    url = "images/Router.png";
                    break;
                case 'Switch':
                    url = "images/Switch.png";
                    break;
                case 'OLT':
                    url = "images/OLT.png";
                    break;
                case 'ONU':
                    url = "images/ONU.png";
                    break;
                case 'FiberSwitch':
                    url = "images/FiberSwitch.png";
                    break;
                default:
                    url = "images/camera-info.png";
                    break;
            }
        } else {
            console.log("classCode为空");
            url = "images/camera-info.png";
        }
        $(".camera-icon").attr("src", url);
        $(".camera-title").append(marker.className);
        $(".sbbm").append(marker.serialNumber);
        $(".sbname").append(marker.name);
        $(".sbip").append(marker.ip);
        $(".sbcs").append(marker.fxwhcs);
        $(".lat").append(marker.latitude);
        $(".lng").append(marker.longitude);
        if (marker.cameraState != null) {
            switch (marker.cameraState) {
                case 'using':
                    state = "在用";
                    break;
                case 'maintenance':
                    state = "维修";
                    break;
                case 'demolish':
                    state = "拆除";
                    break;
                default:
                    state = "暂无状态信息";
                    break;
            }
        } else {
            state = "暂无状态信息";
        }
        let states = $(".sbzt").append(state);

        var that = this;
        //多窗口模式，层叠置顶
        layer.open({
            type: 1
            , title: '设备详细信息'
            , area: ['375px', '425px']
            , shade: 0.3
            , maxmin: true
            , offset:
                'auto'
            , content: $("#cameraDom")
            , btn: ['关闭']
            , yes: function () {
                layer.closeAll();
            }
            , zIndex: layer.zIndex //重点1
            , success: function (layero) {
                layer.setTop(layero); //重点2
            }
        });
    };

    var alertMarker = function (marker, devInfo) {
        let id = marker.id;
        $.ajax({
            url: 'http://' + ip + ':8021/gis/get',
            type: "get",
            data: { "id": id },
            success: function (data) {
                $(".alertDevName").empty();
                $(".alertName").empty();
                $(".severity").empty();
                $(".description").empty();
                $(".status").empty();
                $(".lastOccurTime").empty();
                $(".camera-title").empty();
                if (data.records.length > 0) {
                    $("#alertDom").html('')
                    $.each(data.records, function (index, item) {
                        var tableContent = "";
                        if (item.classCode != null && item.classCode != "") {
                            switch (item.classCode) {
                                case 'Camera':
                                    url = "images/camera-info.png";
                                    break;
                                case 'Router':
                                    url = "images/Router.png";
                                    break;
                                case 'Switch':
                                    url = "images/Switch.png";
                                    break;
                                case 'OLT':
                                    url = "images/OLT.png";
                                    break;
                                case 'ONU':
                                    url = "images/ONU.png";
                                    break;
                                case 'FiberSwitch':
                                    url = "images/FiberSwitch.png";
                                    break;
                                default:
                                    url = "images/camera-info.png";
                                    break;
                            }
                        } else {
                            console.log("classCode为空");
                            url = "images/camera-info.png";
                        }
                        var date = new Date(item.lastOccurTime);
                        let dateTime = date.toLocaleString();
                        // tableContent += '<img class="camera-icon" src=' + url + ' /><span class="camera-title">' + marker.className + '</span>';
                        tableContent += '<div><span>设备名称:</span><span class="alertDevName">' + marker.name + '</span></div>';
                        tableContent += '<div><span>告警名称:</span><span class="alertName">' + item.name + '</span></div>';
                        tableContent += '<div><span>告警等级:</span><span class="severity">' + item.severityCN + '</span></div>';
                        tableContent += '<div><span>告警描述:</span><span class="description">' + item.description + '</span></div>';
                        tableContent += '<div><span>告警状态:</span><span class="status">' + item.statusCN + '</span></div>';
                        tableContent += '<div><span>告警时间:</span><span class="lastOccurTime">' + dateTime + '</span></div>';
                        $("#alertDom").append(`<div class="alert_dombox">${tableContent}</div>`);
                    });
                } else {
                    var erro = '<div>设备正常，暂无故障告警信息。</div>';
                    $("#alertDom").html(erro);
                }
            }
        });
        //多窗口模式，层叠置顶
        layer.open({
            type: 1
            , title: '故障告警信息'
            , area: ['375px', '425px']
            , shade: 0.3
            , maxmin: true
            , offset:
                'auto'
            , content: $("#alertDom")
            , btn: ['关闭']
            , yes: function () {
                layer.closeAll();
            }
            , zIndex: layer.zIndex //重点1
            , success: function (layero) {
                layer.setTop(layero); //重点2
            }
        });

    };

    var ticketMarker = function (marker, devInfo) {
        let id = marker.id;
        $.ajax({
            url: 'http://' + ip + ':8021/gis/getTicketList',
            type: "get",
            data: { "id": id },
            success: function (data) {
                if (data.list.length > 0) {
                    $("#ticketDom").html('')
                    $.each(data.list, function (index, info) {
                        console.log(info);
                        var tableContent = "";
                        if (marker.classCode != null && marker.classCode != "") {
                            switch (marker.classCode) {
                                case 'Camera':
                                    url = "images/camera-info.png";
                                    break;
                                case 'Router':
                                    url = "images/Router.png";
                                    break;
                                case 'Switch':
                                    url = "images/Switch.png";
                                    break;
                                case 'OLT':
                                    url = "images/OLT.png";
                                    break;
                                case 'ONU':
                                    url = "images/ONU.png";
                                    break;
                                case 'FiberSwitch':
                                    url = "images/FiberSwitch.png";
                                    break;
                                default:
                                    url = "images/camera-info.png";
                                    break;
                            }
                        } else {
                            console.log("classCode为空");
                            url = "images/camera-info.png";
                        }
                        let status;
                        /*工单状态1-待处理 2-处理中 3-已完成 8-已关闭*/
                        switch (info.status) {
                            case 1:
                                status = "待处理";
                                break;
                            case 2:
                                status = "处理中";
                                break;
                            case 3:
                                status = "已完成";
                                break;
                            case 4:
                                status = "已关闭"
                                break;
                            default:
                                status = "占无状态信息";
                                break;
                        }
                        // tableContent += '<img class="camera-icon" src=' + url + ' /><span class="camera-title">' + marker.className + '</span>';
                        tableContent += '<div><span>工单标题:</span><span class="title">' + info.title + '</span></div>';
                        tableContent += '<div><span>工单描述:</span><span class="ticketDesc">' + info.ticketDesc + '</span></div>';
                        tableContent += '<div><span>当前流程节点:</span><span class="activityName">' + info.activityName + '</span></div>';
                        tableContent += '<div><span>工单状态:</span><span class="status">' + status + '</span></div>';
                        tableContent += '<div><span>创建时间:</span><span class="createTime">' + formatData(info.createTime) + '</span></div>';
                        $("#ticketDom").append(`<div class="alert_dombox">${tableContent}</div>`);
                    })
                } else {
                    var erro = '<div>暂无维修记录。</div>';
                    $("#ticketDom").html(erro);
                }
            }
        });
        //多窗口模式，层叠置顶
        layer.open({
            type: 1
            , title: '维修工单记录'
            , area: ['375px', '425px']
            , shade: 0.3
            , maxmin: true
            , offset:
                'auto'
            , content: $("#ticketDom")
            , btn: ['关闭']
            , yes: function () {
                layer.closeAll();
            }
            , zIndex: layer.zIndex //重点1
            , success: function (layero) {
                layer.setTop(layero); //重点2
            }
        });
    };
    var markerMenu = new BMap.ContextMenu();
    markerMenu.addItem(new BMap.MenuItem('<span class="menu-item">位置信息</span>', watchMarker.bind(marker, devInfo)));
    markerMenu.addItem(new BMap.MenuItem('<span class="menu-item">设备信息</span>', watchMarker.bind(marker, devInfo)));
    markerMenu.addItem(new BMap.MenuItem('<span class="menu-item">故障信息</span>', alertMarker.bind(marker, devInfo)));
    markerMenu.addItem(new BMap.MenuItem('<span class="menu-item">维修记录</span>', ticketMarker.bind(marker, devInfo)));
    marker.addContextMenu(markerMenu);//给标记添加右键菜单
}

// 重写方法，自定义格式化日期
Date.prototype.toLocaleString = function () {
    // 补0   例如 2018/7/10 14:7:2  补完后为 2018/07/10 14:07:02
    function addZero(num) {
        if (num < 10)
            return "0" + num;
        return num;
    }
    // 按自定义拼接格式返回
    return this.getFullYear() + "年" + addZero(this.getMonth() + 1) + "月" + addZero(this.getDate()) + "日 " +
        addZero(this.getHours()) + ":" + addZero(this.getMinutes()) + ":" + addZero(this.getSeconds());
};

function formatData(dates) {
    var date = new Date(dates);
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + "日" +
        date.getHours() + ":" + date.getMinutes();
}
