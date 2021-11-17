import React, { useState, useEffect } from 'react'
// import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap'
import { Button, message } from 'antd'
import './gisShow.css'
import { useHistory } from 'react-router-dom'
import { queryDeviceById } from '../../../common/request'

export default function (props) {
    var BMap = window.BMap
    let PI = 3.1415926535897932384626;
    const history = useHistory()
    const { resourceId, visible } = props
    const [deviseInfo, setDeviseInfo] = useState({}) // 设备信息
    const [mapr, setMap] = useState()
    function handleClick() {
        mapr.setZoom(mapr.getZoom() + 2)
    }
    function handleClickSmoll() {
        mapr.setZoom(mapr.getZoom() - 2)
    }
    function handleClickQp() {
        history.push('/order/gisqp?resourceId=' + resourceId)
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

    function bd2gcj(lat, lon) {
        var x = lon - 0.0065, y = lat - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
        var gg_lon = z * Math.cos(theta);
        var gg_lat = z * Math.sin(theta);
        return [gg_lat, gg_lon]
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
        var loc = [mgLat, mgLon];
        return loc;
    }

    function transformLat(lat, lon) {
        var ret = -100.0 + 2.0 * lat + 3.0 * lon + 0.2 * lon * lon + 0.1 * lat * lon + 0.2 * Math.sqrt(Math.abs(lat));
        ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lon * pi) + 40.0 * Math.sin(lon / 3.0 * pi)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(lon / 12.0 * pi) + 320 * Math.sin(lon * pi / 30.0)) * 2.0 / 3.0;
        return ret;
    }

    function transformLon(lat, lon) {
        var ret = 300.0 + lat + 2.0 * lon + 0.1 * lat * lat + 0.1 * lat * lon + 0.1 * Math.sqrt(Math.abs(lat));
        ret += (20.0 * Math.sin(6.0 * lat * pi) + 20.0 * Math.sin(2.0 * lat * pi)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lat * pi) + 40.0 * Math.sin(lat / 3.0 * pi)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(lat / 12.0 * pi) + 300.0 * Math.sin(lat / 30.0 * pi)) * 2.0 / 3.0;
        return ret;
    }

    //定义常量
    // let x_PI = 3.14159265358979324 * 3000.0 / 180.0;
    // let a = 6378245.0;
    // let ee = 0.00669342162296594323;

    /**
     * WGS84转GCj02
     * @param lng
     * @param lat
     * @returns {*[]}
     */

    function wgs84togcj02(lng, lat) {
        if (out_of_china(lng, lat)) {
            return [lng, lat]
        }
        else {
            let dlat = transformlat(lng - 105.0, lat - 35.0);
            let dlng = transformlng(lng - 105.0, lat - 35.0);
            let radlat = lat / 180.0 * PI;
            let magic = Math.sin(radlat);
            magic = 1 - ee * magic * magic;
            let sqrtmagic = Math.sqrt(magic);
            dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
            dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
            let mglat = lat + dlat;
            let mglng = lng + dlng;
            return [mglng, mglat]
        }
    }

    /**
     * 判断是否在国内，不在国内则不做偏移
     * @param lng
     * @param lat
     * @returns {boolean}
     */
    function out_of_china(lng, lat) {
        return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false);
    }

    function transformlat(lng, lat) {
        let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
        return ret
    }

    function transformlng(lng, lat) {
        let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
        return ret
    }

    //将 GCJ-02 坐标转换成 BD-09 坐标
    function bd_encrypt(gg_lat, gg_lon) {
        var x = gg_lon, y = gg_lat;
        var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
        var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
        var bd_lon = z * Math.cos(theta) + 0.0065;
        var bd_lat = z * Math.sin(theta) + 0.006;
        console.log(bd_lon, bd_lat)
    }

    function ComplexCustomOverlay(point, marker) {
        this._point = point;
        this._marker = marker;
    }

    function Overlay() {
        // console.log(BMap,"================")
        ComplexCustomOverlay.prototype = new window.BMap.Overlay();
        ComplexCustomOverlay.prototype.initialize = function (map) {
            this._map = map;
            var div = this._div = document.createElement("div");
            div.style.position = "absolute";
            var arrow = this._arrow = document.createElement("div");

            arrow.style.position = "absolute";
            arrow.style.overflow = "hidden";
            div.appendChild(arrow);
            arrow.className = "css_animation";

            if (this._marker) {
                map.addOverlay(this._marker);
            }

            map.getPanes().labelPane.appendChild(div);

            return div;
        };
        ComplexCustomOverlay.prototype.draw = function () {
            var map = this._map;
            var pixel = map.pointToOverlayPixel(this._point);
            this._div.style.left = pixel.x - 30 + "px";
            this._div.style.top = pixel.y - 30 + "px";


        };

        ComplexCustomOverlay.prototype.setPosition = function (point) {
            this._point = point;
            this.draw();
            if (this._marker)
                this._marker.setPosition(this._point);

        };

        ComplexCustomOverlay.prototype.getPosition = function () {
            return this._point;

        };
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

    useEffect(() => {
        if (resourceId !== '') {
            queryDeviceById(resourceId).then((d) => {
                console.log(d);
                setDeviseInfo(d)
            })
        }
    }, [resourceId])
    useEffect(() => {
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
        var tileMapType = new BMap.MapType('tileMapType', tileLayer, { minZoom: window.minZoom, maxZoom: window.maxZoom });
        var map = new BMap.Map('allmap', { mapType: tileMapType });

        // 百度地图API功能
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

        map.addEventListener("zoomend", function () {
            // alert("地图缩放至：" + this.getZoom() + "级");
            console.log(this.getZoom())
            var DBD091 = wgs2bd(parseFloat(deviseInfo.latitude), parseFloat(deviseInfo.longitude)) // 转换为百度加密之后的经纬度
            map.centerAndZoom(new BMap.Point(DBD091[1], DBD091[0]), this.getZoom());
        })

    }, [deviseInfo])

    return (
        <div style={{ display: visible }}>
            {/* <div style={{textAlign: 'left'}}>

        </div> */}
            <div style={{ padding: '2px', height: '25px' }}>
                <Button size='small' style={{ float: 'left' }} onClick={handleClickQp}>全屏</Button>
                <Button size='small' style={{ float: 'right' }} onClick={handleClickSmoll}>缩小</Button>
                <Button size='small' style={{ float: 'right' }} onClick={handleClick}>放大</Button>
            </div>
            <div id="allmap" style={{ height: "200px", marginTop: '5px', width: '100%' }}>
                {/* <Map></Map> */}
            </div>
        </div>
    )
}