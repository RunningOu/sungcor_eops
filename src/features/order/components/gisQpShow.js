import React,{ useState, useEffect } from 'react'
// import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap'
import { Button, message, Spin, Modal } from 'antd'
import { queryDeviceById,　updateDevice } from '../../../common/request'
import { HeaderBar } from '../../common'
import './gisShow.css'

// var BMap = window.BMap || {}

export default function(props) {
    const { location: { search } } = props
    var BMap = window.BMap
    // console.log(new URLSearchParams(search).get('resourceId'))
    const [resourceId, setResourceId] = useState(new URLSearchParams(search).get('resourceId'))
    const [deviseInfo, setDeviseInfo] = useState({}) // 设备信息
    const [sfzb, setZb] = useState(false)
    const [mapr, setMap] = useState()
    const [loading, setLoading] = useState(false) // 列表加载中状态
    const [visible, setVisible] = useState(false) // 弹框
    const [jwd, setJwd] = useState({}) 
    function handleClick() {
        mapr.setZoom(mapr.getZoom() + 2);
    }
    function handleClickSmoll () {
        mapr.setZoom(mapr.getZoom() - 2)
    }
    function handleCancel () {
        setVisible(false)
    }
    function handleOk () {
        console.log(deviseInfo,'deviseInfo1')
        var updatee = deviseInfo
        updatee.longitude = jwd.lng
        updatee.latitude = jwd.lat
        updateDevice(updatee).then((data) => {
            if (data.id) {
                message.info("位置纠偏成功", 1)
                queryDeviceById(resourceId).then((d) => {
                    console.log(d,'ddddd1');
                    setDeviseInfo(d)
                })
            }
        })
        setVisible(false)
    }
    function handleClickJp() {
        setLoading(true)
        // 获取经纬度
        var geolocation = new BMap.Geolocation();
        var BMAP_STATUS_SUCCESS = 0
        geolocation.getCurrentPosition(function(position){
        　　if(this.getStatus() == BMAP_STATUS_SUCCESS){
                const lat = position.point.lat;
                const lng = position.point.lng;
                
                // let lat = 30.93427500000000000000;
                // let lng = 121.40519444444445000000;
                var BD09 = wgs2bd(lat, lng)
                console.log('BD09',BD09)
                var latBD = BD09[0]
                var lngBD = BD09[1]
                setJwd({
                    'lng': lng,
                    'lat': lat
                })
                var point = new BMap.Point(lngBD,latBD);
                Overlay()
                var tileLayer = new BMap.TileLayer();
                tileLayer.getTilesUrl = function (tileCoord, zoom) {
                    console.log('00000', window.outputPath)
                    var x = tileCoord.x;
                    var y = tileCoord.y;
                    var url = window.outputPath + zoom + '/' + x + '/' + y + window.format;
                    return url;
                };
                var tileMapType = new BMap.MapType('tileMapType', tileLayer, {minZoom: window.minZoom, maxZoom: window.maxZoom});
                var map = new BMap.Map('allmap', {mapType: tileMapType});
                map.centerAndZoom(new BMap.Point(lngBD, latBD), 15);
                var mk = addMarker(lngBD,latBD)
                map.addOverlay(mk);
        　　　　 message.info("当前位置经度为:"+point.lng+"纬度为:"+point.lat, 1)
                map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
                map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
                map.enableContinuousZoom();

                map.enablePinchToZoom(true) // 启用双指操作缩放，默认启用
                setMap(map)
                setLoading(false)
                setVisible(true)
        　　} else {
        　　　　console.log('无法定位到您的当前位置，导航失败，请手动输入您的当前位置！'+this.getStatus());
        　　}
        },{enableHighAccuracy: true});
        setZb(true)
    }

    function addMarker(_lon, _lat) {
        var point = new BMap.Point(_lon, _lat);
        var size = new BMap.Size(48, 48);
        var marker = new BMap.Marker(point, {
            icon: new BMap.Symbol(window.BMap_Symbol_SHAPE_CIRCLE, {
                scale: 6,
                rotation: 0,
                fillColor: "#f8081d",
                fillOpacity: 1,
                strokeColor: "#ff0016",
                strokeOpacity: 0.1,
                strokeWeight: 15
            })
        });
        var opts = {
            width: 50,     // 信息窗口宽度
            height: 10,     // 信息窗口高度
            title: "title"  // 信息窗口标题
        }
        var content = [];
        content.push("<input class='tempId' type='hidden' value=" + deviseInfo.longitude + " />");
        createMarker(point, marker, opts, content.join("<br/>"));
        var plex = new ComplexCustomOverlay(point, marker); // 创建标
        return plex;
    }

    function createMarker(point, maker, opts, info_html) {
        maker.addEventListener("click", function (e) {
            // this.openInfoWindow(new BMap.InfoWindow(info_html,opts));
        });
        return maker;
    }

    function ComplexCustomOverlay(point , marker){
        this._point = point;
        this._marker = marker;
    }

    function Overlay(){
        ComplexCustomOverlay.prototype = new window.BMap.Overlay();
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
    }

    var pi = 3.14159265358979324;
    var a = 6378245.0;
    var ee = 0.00669342162296594323;
    var x_pi = 3.14159265358979324 * 3000.0 / 180.0;

    function wgs2bd(lat, lon) {
       var wgs2gcj1 = wgs2gcj(lat, lon);
       var gcj2bd1 = gcj2bd(wgs2gcj1[0], wgs2gcj1[1]);
       return gcj2bd1;
    }

    function gcj2bd(lat, lon) {
       var x = lon, y = lat;
       var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
       var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
       var bd_lon = z * Math.cos(theta) + 0.0065;
       var bd_lat = z * Math.sin(theta) + 0.006;
       return [bd_lat, bd_lon];
    }

    function wgs2gcj(lat, lon) {
       var dLat = transformLat(lon - 105.0, lat - 35.0);
       var dLon = transformLon(lon - 105.0, lat - 35.0);
       var radLat = lat / 180.0 * pi;
       var magic = Math.sin(radLat);
       magic = 1 - ee * magic * magic;
       var sqrtMagic = Math.sqrt(magic);
       dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
       dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
       var mgLat = lat + dLat;
       var mgLon = lon + dLon;
       var loc = [ mgLat, mgLon ];
       return loc;
    }

    function transformLat(lat, lon) {
       var ret = -100.0 + 2.0 * lat + 3.0 * lon + 0.2 * lon * lon + 0.1 * lat * lon + 0.2 * Math.sqrt(Math.abs(lat));
       ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
       ret += (20.0 * Math.sin(lon * pi) + 40.0 * Math.sin(lon / 3.0 * pi)) * 2.0 / 3.0;
       ret += (160.0 * Math.sin(lon / 12.0 * pi) + 320 * Math.sin(lon * pi  / 30.0)) * 2.0 / 3.0;
       return ret;
    }

    function transformLon( lat,  lon) {
       var ret = 300.0 + lat + 2.0 * lon + 0.1 * lat * lat + 0.1 * lat * lon + 0.1 * Math.sqrt(Math.abs(lat));
       ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
       ret += (20.0 * Math.sin(lat * pi) + 40.0 * Math.sin(lat / 3.0 * pi)) * 2.0 / 3.0;
       ret += (150.0 * Math.sin(lat / 12.0 * pi) + 300.0 * Math.sin(lat / 30.0 * pi)) * 2.0 / 3.0;
       return ret;
    }

    useEffect(()=>{
        if (resourceId !== '') {
            queryDeviceById(resourceId).then((d) => {
                console.log(d,'ddd');
                setDeviseInfo(d.result)
            })
        }
    },[resourceId])
    useEffect(()=>{
        // console.log(BMap,"================")
        Overlay()
        var tileLayer = new BMap.TileLayer();
        tileLayer.getTilesUrl = function (tileCoord, zoom) {
            console.log('00000', window.outputPath)
            var x = tileCoord.x;
            var y = tileCoord.y;
            var url = window.outputPath + zoom + '/' + x + '/' + y + window.format;
            return url;
        };
        var tileMapType = new BMap.MapType('tileMapType', tileLayer, {minZoom: window.minZoom, maxZoom: window.maxZoom});
        var map = new BMap.Map('allmap', {mapType: tileMapType});
    
        // 百度地图API功能
        console.log(deviseInfo,'deviseInfo234');
        if (deviseInfo.longitude) {
            var DBD09 = wgs2bd(parseFloat(deviseInfo.latitude), parseFloat(deviseInfo.longitude))
            console.log(DBD09)
            var latitude = DBD09[0]
            var longitude = DBD09[1]
            map.centerAndZoom(new BMap.Point(longitude, latitude), 15);  // 初始化地图,设置中心点坐标和地图级别
            var m1 = addMarker(longitude, latitude);
            map.addOverlay(m1);
        }
        

        map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.enableContinuousZoom();

        map.enablePinchToZoom(true) // 启用双指操作缩放，默认启用
        setMap(map)  

        map.addEventListener("zoomend", function(){    
            // alert("地图缩放至：" + this.getZoom() + "级");
            console.log(this.getZoom())
            if(jwd.lng){
                var DBD092 = wgs2bd(parseFloat(jwd.lat), parseFloat(jwd.lng)) // 转换为百度加密之后的经纬度
                map.centerAndZoom(new BMap.Point(DBD092[1], DBD092[0]), this.getZoom());
            } else{
                var DBD091 = wgs2bd(parseFloat(deviseInfo.latitude), parseFloat(deviseInfo.longitude)) // 转换为百度加密之后的经纬度
                map.centerAndZoom(new BMap.Point(DBD091[1], DBD091[0]), this.getZoom());
            }
            
        })

        // 定义一个控件类,即function
        // function ZoomControl(){
        //     // 默认停靠位置和偏移量
        //     this.defaultAnchor = window.BMAP_ANCHOR_TOP_LEFT;
        //     this.defaultOffset = new BMap.Size(10, 10);
        // }
    
        // // 通过JavaScript的prototype属性继承于BMap.Control
        // ZoomControl.prototype = new BMap.Control();
    
        // // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
        // // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
        // ZoomControl.prototype.initialize = function(map){
        //     // 创建一个DOM元素
        //     var div = document.createElement("div");
        //     // 添加文字说明
        //     div.appendChild(document.createTextNode("还原"));
        //     // 设置样式
        //     div.style.cursor = "pointer";
        //     div.style.border = "1px solid gray";
        //     div.style.backgroundColor = "white";
        //     div.style.padding = "3px";
        //     div.style.borderRadius =  "4px";
        //     // 绑定事件,点击一次还原
        //     div.onclick = function(e){
        //         // map.setZoom(14);
        //         map.centerAndZoom(new BMap.Point(deviseInfo.longitude, deviseInfo.latitude), 14);  // 初始化地图,设置中心点坐标和地图级别
        //     }
        //     // 添加DOM元素到地图中
        //     map.getContainer().appendChild(div);
        //     // 将DOM元素返回
        //     return div;
        // }
        // 创建控件
        // var myZoomCtrl = new ZoomControl();
        // 添加到地图当中
        // map.addControl(myZoomCtrl);
        
    },[deviseInfo])
    return (
        <div>
            <HeaderBar title="地图" />
            <Spin spinning={loading}>
                <div style={{padding: '2px',height: '32px'}}>
                    <Button style={{float: 'left', fontSize: 16}} onClick={handleClickJp}>位置纠偏</Button>
                    <Button style={{float: 'right', fontSize: 16}} onClick={handleClickSmoll}>缩小</Button>
                    <Button style={{float: 'right', fontSize: 16}} onClick={handleClick}>放大</Button>
                </div>
                <div id="allmap" style={{height: 'calc(100vh - 45px - 27.5px - 32px)', marginTop: '5px', width: '100%'}}>
                </div>
                <Modal title={'是否按当前定位信息进行纠偏'} centered bodyStyle={{ padding: '8px'}} visible={visible} onCancel={handleCancel} onOk={handleOk}>
                    <div style={{textAlign: 'center', fontSize: 16}}>
                        <span>经度为:{jwd.lng}</span>
                    </div>
                    <div style={{textAlign: 'center', fontSize: 16}}>
                        <span>纬度为:{jwd.lat}</span>
                    </div>
                </Modal>
            </Spin>
        </div>
    )
}