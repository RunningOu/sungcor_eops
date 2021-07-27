import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './common/configStore'
import routeConfig from './common/routeConfig'
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import { message, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import storageEnhance from '@/utils/storageEnhance'

import './styles/normalize.css'
import './styles/common.less'

const store = configStore()
storageEnhance()
message.config({ top: '30%', duration: 1, maxCount: 1})

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Root store={store} routeConfig={routeConfig}/>
  </ConfigProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) {
  module.hot.accept(() => {
    ReactDOM.render(
      <ConfigProvider locale={zhCN}>
        <Root store={store} routeConfig={routeConfig}/>
      </ConfigProvider>
      , document.getElementById('root'));
  });
}