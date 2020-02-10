import React from 'react';
import { Carousel } from 'antd';
import './Carousel.less'

export default function () {
  const imgs = [
    require('../../../assets/home/carousel01.jpg'),
    require('../../../assets/home/carousel02.jpg'),
    require('../../../assets/home/carousel03.jpg'),
  ]
  return (
    <Carousel autoplay className='home-carousel'>
      <div className='block'><img src={imgs[0]} alt='轮播图片1' /></div>
      <div className='block'><img src={imgs[1]} alt='轮播图片2' /></div>
      <div className='block'><img src={imgs[2]} alt='轮播图片3' /></div>
    </Carousel>
  )
}