import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style.js';
import Iconfont from './static/iconfont/iconfont';

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
