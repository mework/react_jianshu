/**
 * @file 入口文件
 * @author 残梦
 * @createDate 2019-06-30
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Iconfont from './static/iconfont/iconfont';
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import store from './store';
import './pluginsConfig';

const APP = (
  <Provider store={store}>
    <Iconfont/>
    <GlobalStyle />
    <App />
  </Provider>
);

ReactDOM.render(
  APP,
  document.getElementById('root')
);
