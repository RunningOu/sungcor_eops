import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './common/configStore'
import routeConfig from './common/routeConfig'
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import { message, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import './styles/normalize.css'
import './styles/common.less'

const store = configStore()

message.config({ top: '30%'})

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Root store={store} routeConfig={routeConfig}/>
  </ConfigProvider> 
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
