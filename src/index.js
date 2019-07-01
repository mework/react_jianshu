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
import './pluginsConfig';

const APP = (
  <div>
    <Iconfont/>
    <GlobalStyle />
    <App />
  </div>
);

ReactDOM.render(
  APP,
  document.getElementById('root')
);
