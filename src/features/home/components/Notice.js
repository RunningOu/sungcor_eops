import React, { useState, useEffect } from 'react'
import { IconFont } from '../../common';

import './Notice.less'

export default (props) => {
  const news = [
    { title: '庆祝新中国成立70周年', date: '2019-10-01' },
    { title: '新中国成立70周年 多国政要送祝福', date: '2019-10-01' },
    { title: '《祖国在召唤》第一集《使命》 宣传片', date: '2019-10-01' },
    { title: '探访国庆群众游行彩排', date: '2019-10-01' },
  ]
  const [showIndex, setShowIndex] = useState(0)

  useEffect(() => {
    const anime = setInterval(() => {
      if (showIndex + 1 === news.length) {
        setShowIndex(0)
      } else {
        setShowIndex(showIndex + 1)
      }
    }, 5000);
    return () => {
      clearInterval(anime)
    }
  })

  return (
    <div className='home-components-notice'>
      <div className='notice_news'>
        {news.map((n, i) => (
          <p className='news' style={{ opacity: i === showIndex ? 1 : 0 }} key={n.title}>
            <IconFont className='notice_icon' type="icongonggao" />
            {n.title}
            <span className='date'>{n.date}</span>
          </p>
        ))}
      </div>
    </div>
  )
}