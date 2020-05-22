import React,{ useState, useEffect } from 'react'
// import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap'
import './gisShow.css'
import { queryDeviceById } from '../../../common/request'

// var BMap = window.BMap || {}

export default function(props) {
    console.log(props)
    const {resourceId} = props
    const [deviseInfo, setDeviseInfo] = useState({}) // 设备信息
    useEffect(()=>{
        if (resourceId !== '') {
            queryDeviceById(resourceId).then((d) => {
                console.log(d)
                setDeviseInfo(d)
            })
        }
    },[resourceId])
    useEffect(()=>{
        var BMap = window.BMap
        function ComplexCustomOverlay(point , marker){
            this._point = point;
            this._marker = marker;
        }
        console.log(BMap,"================")
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
        // var map = new BMap.Map("allmap");    // 创建Map实例
        if (deviseInfo.longitude) {
            console.log(deviseInfo.longitude, deviseInfo.latitude)
            map.centerAndZoom(new BMap.Point(deviseInfo.longitude, deviseInfo.latitude), 15);  // 初始化地图,设置中心点坐标和地图级别
            var m1 = addMarker(deviseInfo.longitude, deviseInfo.latitude);
            map.addOverlay(m1);
        }
        //添加地图类型控件
        // map.addControl(new BMap.MapTypeControl({
        //     mapTypes:[
        //         window.BMAP_NORMAL_MAP,
        //         window.BMAP_HYBRID_MAP
        //     ]}));
        // map.setMapType(window.BMAP_HYBRID_MAP);// 设置默认混合地图
        map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        // var m1 = addMarker(121.47412, 30.9179);
        // map.addOverlay(m1);
    
        // var m2 = addMarker(116.434,39.915);
        // map.addOverlay(m2);
    
        // var m3 = addMarker(116.404,39.955);
        // map.addOverlay(m3);
    
        // var m4 = addMarker(116.474,39.911);
        // map.addOverlay(m4);
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
            createMarker(point, marker, opts,"111");
            var plex = new ComplexCustomOverlay(point, marker); // 创建标
            return plex;
        }
    
        function createMarker(point, maker, opts, info_html) {
            maker.addEventListener("click", function (e) {
                this.openInfoWindow(new BMap.InfoWindow(info_html,opts));
            });
            return maker;
        }
        
    },[deviseInfo])
    
  return (
      <div id="allmap" style={{height:"200px",marginTop: '5px'}}>
          {/* <Map></Map> */}
      </div>
  )
}