$(document).ready(function () {
    // var ip= "192.168.3.244";
    /*var ip = "10.232.75.186";*/
    var defaultCursor = null;
    var lineArray = new Array();		//线集合
    var currLine = "";					//当前画线
    var polyflag = false;				//画线开关
    var defaultCursor = null;
    var isFixedMap = false;
    var markers = [];
    let classCode=["Camera"],pcsId;
    var tileLayer = new BMap.TileLayer();
    tileLayer.getTilesUrl = function (tileCoord, zoom) {
        console.log(00000,outputPath)
        var x = tileCoord.x;
        var y = tileCoord.y;
        var url = outputPath + zoom + '/' + x + '/' + y + format;
        return url;
    };
    var tileMapType = new BMap.MapType('tileMapType', tileLayer, {minZoom: minZoom, maxZoom: maxZoom});
    var map = new BMap.Map('allmap', {mapType: tileMapType});
//初始化鼠标
    defaultCursor = map.getDefaultCursor();
    openLocalMap();
// 定位到地图中心点
    map.centerAndZoom(new BMap.Point(centX, centY), 12);
// 添加导航控件
    map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT}));
// 添加比例尺控件
    map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_RIGHT}));
// 启用滚轮放大缩小
    map.enableScrollWheelZoom();
    map.enableContinuousZoom();
//启用键盘操作
    map.enableKeyboard();

       $.ajax({
           url: 'http://'+ip+':8021/gis/queryIn',
           type: 'post',
           contentType: "application/json;charset=UTF-8",
           data: JSON.stringify({
               "classCode": classCode,
           }),
           dataType: 'json',
           success: function (data) {
               let state;
               $.each(data, function (index, info) {
                   var point = new BMap.Point(info.longitude, info.latitude);
                   var marker;
                   if (info.cameraState == "using") {
                       marker = new BMap.Marker(point, {icon: myIcon_fine});
                   } else if (info.cameraState == "maintenance") {
                       marker = new BMap.Marker(point, {icon: myIcon_alert});
                   } else if (info.cameraState == "demolish") {
                       marker = new BMap.Marker(point, {icon: myIcon_cc});
                   } else {
                       marker = new BMap.Marker(point, {icon: myIcon_fine});
                   }
                   RightClickMaker(marker,info);//右键单击marker出现右键菜单事件
                   //点击搜索框 找到匹配的maker 打开对应的 信息提示窗口
                   $("#seach").click(function () {
                       console.log($("#sole-input").val());
                       if ($("#sole-input").val() == info.name || $("#sole-input").val() == info.ip) {
                           marker.openInfoWindow(new BMap.InfoWindow(content.join("<br/>"), opts));
                       }
                   });
                   markers.push(marker);
                   var title = '<span style="font-size:14px;color:#F00;">' + info.name + '</span>',
                       content = [];
                   content.push("ip：" + info.ip);
                   content.push("设备编码：" + info.serialNumber);
                   if(info.cameraState!=null){
                       switch (info.cameraState) {
                           case 'using':
                               state="在用";
                               break;
                           case 'maintenance':
                               state="维修";
                               break;
                           case 'demolish':
                               state="拆除";
                               break;
                           default:
                               state="暂无状态信息";
                               break;
                       }
                   }
                   content.push("设备状态：" + state);
                   content.push("<input class='tempId' type='hidden' value=" + info.id + " />");
                   var opts = {
                       width: 250,     // 信息窗口宽度
                       height: 100,     // 信息窗口高度
                       title: title  // 信息窗口标题
                   }
                   createMarker(point, marker, opts, content.join("<br/>"),info)
                   map.addOverlay(marker);
               })
               /* var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
                console.log(markerClusterer);*/
           }
       });

    function createMarker(point, maker, opts, info_html,info) {
        if (info.isAlert==true) {
            maker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            maker.setIcon(myIcon_alert);
        }
        maker.addEventListener("click", function (e) {
            this.openInfoWindow(new BMap.InfoWindow(info_html, opts));
        });
        return maker;
    }


    layui.use('form', function(){
        var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
        $.ajax({
            url : 'http://'+ip+':8021/gis/dept',
            type: "get",
            success: function(data) {
                $.each(data, function (index, item) {
                    $('#police').append(new Option(item.name, item.id));
                });
                layui.form.render(); //更新全部
            }
        });
        form.on('select(elderIdentity)', function(data){
            switch (data.elem.id) {
                case 'layer':
                    classCode = data.value.split(",");
                    break;
                case 'police':
                    pcsId = data.value;
                    break;
            }
            map.clearOverlays();
            $.ajax({
                url: 'http://'+ip+':8021/gis/queryIn',
                type: 'post',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({
                    "classCode": classCode,
                    "pcsId":pcsId
                }),
                dataType: 'json',
                success: function (data) {
                    let state;
                    $.each(data, function (index, info) {
                        var point = new BMap.Point(info.longitude, info.latitude);
                        var marker;
                        if (info.cameraState == "using") {
                            marker = new BMap.Marker(point, {icon: myIcon_fine});
                        } else if (info.cameraState == "maintenance") {
                            marker = new BMap.Marker(point, {icon: myIcon_alert});
                            marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                        } else if (info.cameraState == "demolish") {
                            marker = new BMap.Marker(point, {icon: myIcon_cc});
                        } else {
                            marker = new BMap.Marker(point, {icon: myIcon_fine});
                        }
                        //点击搜索框 找到匹配的maker 打开对应的 信息提示窗口
                        $("#seach").click(function () {
                            console.log($("#sole-input").val());
                            if ($("#sole-input").val() == info.name || $("#sole-input").val() == info.ip) {
                                marker.openInfoWindow(new BMap.InfoWindow(content.join("<br/>"), opts));
                            }
                        });
                        RightClickMaker(marker,info);//创建右键菜单
                        markers.push(marker);
                        var title = '<span style="font-size:14px;color:#F00;">' + info.name + '</span>',
                            content = [];
                        content.push("ip：" + info.ip);
                        content.push("设备编码：" + info.serialNumber);
                        if(info.cameraState!=null){
                            switch (info.cameraState) {
                                case 'using':
                                    state="在用";
                                    break;
                                case 'maintenance':
                                    state="维修";
                                    break;
                                case 'demolish':
                                    state="拆除";
                                    break;
                                default:
                                    state="暂无状态信息";
                                    break;
                            }
                        }
                        content.push("设备状态：" + state);
                        content.push("<input class='tempId' type='hidden' value=" + info.id + " />");
                        var opts = {
                            width: 250,     // 信息窗口宽度
                            height: 100,     // 信息窗口高度
                            title: title  // 信息窗口标题
                        }
                        createMarker(point, marker, opts, content.join("<br/>"),info)
                        map.addOverlay(marker);
                    })
                }
            });
        });
    });
    var seachInput = document.querySelector('#sole-input');
    var toastWarpper = document.querySelector('#toast-wrapper');
//监听键盘事件 模糊查询后台 动态渲染下拉列表数据
    $('#sole-input').on("keyup", debounce(function (event) {
        if (event.keyCode == 38 || event.keyCode == 40) { //每按一次上下键都会发送一次请求，所以要先
            return; //清除一边请求
        };
        var dat;
        if (!isNaN($('#sole-input').val())) {
            dat = {
                ip: $('#sole-input').val(),
                "classCode": classCode,
                "operator": "LIKE",
                "pcsId":pcsId
            };
        } else if (isNaN($('#sole-input').val())) {
            dat = {
                name: $('#sole-input').val(),
                "classCode": classCode,
                "operator": "LIKE",
                "pcsId":pcsId
            };
        }
        console.log(dat);
        if (dat != "") {
            $.ajax({
                url: 'http://'+ip+':8021/gis/queryIn',
                type: 'post',
                data: JSON.stringify(dat),
                contentType: "application/json;charset=UTF-8",
                dataType: 'json',
                success: function (data) {
                    toastWarpper.classList.add('active')
                    //每次请求之前清空之前的ul
                    $('.toast-wrapper ul').html('')
                    $.each(data, function (index, info) {
                        oli_i = $('<li>' + info.name + '</li>');
                        //动态追加li
                        $('.toast-wrapper ul').append(oli_i);
                        //选中li后清除ul和赋到input
                        $('.toast-wrapper ul li').eq(index).click(function () {
                            $('#sole-input').val($(this).text());
                            $('.toast-wrapper ul').html('')
                        })
                    });
                }
            });
        }
    }, 500));

    /**
     * 防抖封装
     * @param {} fn
     * @param {time} delay
     */
    function debounce(fn, delay) {
        var timer = null;
        return function () {
            var context = this;
            var args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    }

//点击搜索按钮 通过id精确查询一次后台 来定位到具体设备
    $("#seach").click(function () {
        var data = $("#sole-input").val();
        if (data != '') {
            $.ajax({
                url: 'http://'+ip+':8021/gis/queryIn',
                data: JSON.stringify({
                    "classCode": classCode,
                    "pcsId":pcsId,
                    'name': data
                }),
                type: 'POST',
                contentType: "application/json;charset=UTF-8",
                success: function (data) {
                    $.each(data, function (index, info) {
                        var new_point = new BMap.Point(info.longitude, info.latitude);
                        //map.openInfoWindow(new_point);
                        map.setZoom(18);
                        map.panTo(new_point);
                    });
                }
            });
        }
    })

    $('#box').click(function () {
        toastWarpper.classList.remove('active')
    });

    function ComplexCustomOverlay(point , marker){
        this._point = point;
        this._marker = marker;
    }

    ComplexCustomOverlay.prototype = new BMap.Overlay();
    ComplexCustomOverlay.prototype.initialize = function(map){
        this._map = map;
        var div = this._div = document.createElement("div");
        div.style.position = "absolute";
        var arrow = this._arrow = document.createElement("div");

        arrow.style.position = "absolute";
        arrow.style.overflow = "hidden";
        div.appendChild(arrow);
        arrow.className="css_animation";

        if(this._marker ){
            map.addOverlay(this._marker );
        }

        map.getPanes().labelPane.appendChild(div);

        return div;
    };
    ComplexCustomOverlay.prototype.draw = function(){
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this._point);
        this._div.style.left = pixel.x - 30 + "px";
        this._div.style.top  = pixel.y - 30 + "px";


    };

    ComplexCustomOverlay.prototype.setPosition = function(point) {
        this._point = point ;
        this.draw();
        if(this._marker)
            this._marker.setPosition(this._point);

    };

    ComplexCustomOverlay.prototype.getPosition = function() {
        return this._point ;

    };

    /*    // 随机向地图添加25个标注
        var bounds = map.getBounds();
        var sw = bounds.getSouthWest();
        var ne = bounds.getNorthEast();
        var lngSpan = Math.abs(sw.lng - ne.lng);
        var latSpan = Math.abs(ne.lat - sw.lat);
        for (var i = 0; i < 25; i++) {
            var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
            addMarker(point);
        }*/

    /*//跳转到对应的point
    function panTo(lng, lat) {
        if (x==null || x == "") {
            alert("x坐标为空");
        } else if (y==null || y == "") {
            alert("y坐标为空");
        } else {
            map.panTo(new BMap.Point(lng, lat));
        }
    }
    // 全图显示
    function initCenterAndZoom() {
        map.centerAndZoom(new BMap.Point(centX, centY), minZoom);
    }
    // 平移
    function panning(){
        closeDis();
        closePolyLine();
    }
    // 开启测距
    var myDis = new BMapLib.DistanceTool(map);
    function openDis(){
        myDis.open();
    }
    // 关闭测距
    function closeDis(){
        myDis.close();
    }

    // 添加点击事件
    map.addEventListener('click', function(e) {
        //画线
        document.getElementById("info_div").innerHTML = e.point.lng+","+e.point.lat;
        if(polyflag){
            if(currLine!=""){
                currLine+= ";";
                map.removeOverlay(lineArray.pop());
            }
            currLine+=e.point.lng+","+e.point.lat;
            lineArray.push(addPolyline(currLine,"#ff0000",0.8,3));
        }
    });
    //添加线
    function addPolyline(points,lineColor,lineOpacity,strokeWeight){
        return mapAddPolyline(map,points,lineColor,lineOpacity,strokeWeight);
    }
    //添加面
    function addPolygon(points,lineOpacity,lineColor,fillOpacity,fillColor,strokeWeight){
        return mapAddPolygon(map,points,lineOpacity,lineColor,fillOpacity,fillColor,strokeWeight);
    }
    // 开启画线
    function openPolyLine(){
        polyflag = true;
        currLine = "";
        map.setDefaultCursor("default");
    }
    // 关闭画线
    function closePolyLine(){
        polyflag = false;
        map.setDefaultCursor(defaultCursor);
    }
    // 清除画线
    function clearPolyLine(){
        while(lineArray.length>0){
            var l = lineArray.shift();
            map.removeOverlay(l);
        }
        closePolyLine();
    }
    // 固定地图
    function disableDragging(){
        isFixedMap=!isFixedMap;
        if(isFixedMap){
            map.disableDragging();
        }else{
            map.enableDragging();
        }
    }
    // 取消固定地图
    function enableDragging(){
        map.enableDragging();
    }*/

// 打开本地地图
    function openLocalMap() {
        map.setMapType(tileMapType);
    }


    /*// 创建用户自定义地标
    if(pointsStr!=""){
        var points = pointsStr.split("##");
        for(var i=0;i<points.length;i++)
        {
            var point = points[i];
            var info = point.split('$');
            addMarker(parseFloat(info[1]), parseFloat(info[0]), info[2], "images/marker_red_sprite.png", 23, 25);
        }
    }*/

    /*
        //添加自定义Marker标注
        function addMarker(lng, lat, markerInfo, iconCursor, cursorWidth, cursorHeight) {
            if (cursorWidth == null) {
                cursorWidth = 23;
            }
            if (cursorHeight == null) {
                cursorHeight = 25;
            }
            var marker;
            if (iconCursor != null) {
                var myIcon = new BMap.Icon(iconCursor, new BMap.Size(cursorWidth, cursorHeight));
                marker = new BMap.Marker(new BMap.Point(lng,lat), {
                    icon: myIcon
                }); // 创建标注
            } else {
                marker = new BMap.Marker(new BMap.Point(lng,lat)); // 创建标注
            }
            map.addOverlay(marker); // 将标注添加到地图中
            if(markerInfo!=null){
                marker.addEventListener("click", function(){
                    alert(markerInfo);
                });
            }
        }
    */

//添加覆盖物块,并返回覆盖物
    function mapAddPolygon(map, points, lineOpacity, lineColor, fillOpacity, fillColor, strokeWeight) {
        if (strokeWeight == null) {
            strokeWeight = 1;
        }
        var ply = new BMap.Polygon(points, {
            strokeWeight: strokeWeight,
            strokeColor: fillColor
        });
        ply.setFillOpacity(fillOpacity);
        ply.setFillColor(fillColor);
        ply.setStrokeOpacity(lineOpacity);
        map.addOverlay(ply);
        return ply;
    }

//添加多个覆盖物快
    function mapAddPolygons(map, points, lineOpacity, lineColor, fillOpacity, fillColor, strokeWeight) {
        if (strokeWeight == null) {
            strokeWeight = 1;
        }
        for (var i = 0; i < points.length; i++) {
            mapAddPolygon(map, points[i], lineOpacity, lineColor, fillOpacity, fillColor, strokeWeight);
        }
    }

//添加覆盖物线,并返回覆盖物
    function mapAddPolyline(map, points, lineColor, lineOpacity, strokeWeight) {
        if (strokeWeight == null) {
            strokeWeight = 1;
        }
        var pl = new BMap.Polyline(points, {
            strokeColor: lineColor,
            strokeOpacity: lineOpacity,
            strokeWeight: strokeWeight
        });
        map.addOverlay(pl);
        return pl;
    }

//添加多个覆盖物线
    function mapAddPolylines(map, points, lineColor, lineOpacity, strokeWeight) {
        if (strokeWeight == null) {
            strokeWeight = 1;
        }
        for (var i = 0; i < points.length; i++) {
            mapAddPolyline(map, points[i], lineColor, lineOpacity, strokeWeight);
        }
    }

//得到视野并覆盖其他区域
    function getBoundary(map, linecolor, fillcolor, fillopacity, callback, strokeWeight) {
        if (strokeWeight == null) {
            strokeWeight = 1;
        }
        var boundary = new BMap.Boundary();
        var fx = 0;
        var fy = 0;
        //boundary.get(address,
        //function(rs) { //获取行政区域
        //var count = rs.boundaries.length; //行政区域的点集合有多少个
        //for (var i = 0; i < count; i++) {
        //document.getElementById("info_div").innerHTML += "<br/>"+i+"个:"+rs.boundaries[i];
        var boundariesArray = getBoundaries();//rs.boundaries[i]
        var ply = new BMap.Polyline(boundariesArray, {
            strokeWeight: strokeWeight,
            strokeColor: linecolor,
            strokeStyle: "dashed"
        }); //建立多边形覆盖物
        map.addOverlay(ply); //添加覆盖物
        //if (i == 0) {
        map.setViewport(ply.getPath()); //调整视野
        map.setZoom(map.getZoom() - 2);
        //计算东南西北四个顶点经纬度
        var bs = map.getBounds(); //获取可视区域
        var north = bs.getNorthEast().lat; //北
        var south = bs.getSouthWest().lat; //南
        var west = bs.getSouthWest().lng; //西
        var east = bs.getNorthEast().lng; //东
        var mapMaxX = east > west ? east : west;
        var mapMinX = east > west ? west : east;
        //计算最大边界
        var boundaries = boundariesArray.split(";");
        var maxX;
        var maxXIndex = 0;
        var minX;
        var minXIndex = 0;
        var maxY;
        var minY;
        for (var k = 0; k < boundaries.length; k++) {
            var point = boundaries[k].split(",");
            if (!maxX) {
                maxX = point[0];
                minX = point[0];
                maxY = point[1];
                minY = point[1];
            } else {
                if (maxX * 1 < point[0] * 1) {
                    maxX = point[0];
                    maxXIndex = k;
                } else if (minX * 1 > point[0] * 1) {
                    minX = point[0];
                    minXIndex = k;
                }
                maxY = maxY * 1 > point[1] * 1 ? maxY : point[1];
                minY = minY * 1 < point[1] * 1 ? minY : point[1];
            }
        }
        var start = maxXIndex > minXIndex ? minXIndex : maxXIndex;
        var end = maxXIndex > minXIndex ? maxXIndex : minXIndex;
        var polygonA = [180 + "," + 180, 0 + "," + 180, 0 + "," + 0];
        var polygonB = [0 + "," + 0, 180 + "," + 0, 180 + "," + 180];
        var polygonA = polygonA.concat(boundaries.slice(start, end + 1));
        var polygonB = polygonB.concat(boundaries.slice(end, boundaries.length).concat(boundaries.slice(0, start + 1)));
        mapAddPolygon(map, polygonA.join(";"), 0.01, fillcolor, fillopacity, fillcolor);
        mapAddPolygon(map, polygonB.join(";"), 0.01, fillcolor, fillopacity, fillcolor);
        //}
        map.setViewport(ply.getPath()); //调整视野
        //限制拖动区域
        if (isAreaRestriction()) {
            BMapLib.AreaRestriction.setBounds(map, map.getBounds());
        }
        if (callback) {
            callback();
        }
        //}
        //});
    }
});
