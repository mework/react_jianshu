/**
 * @file redux的Store数据存储库
 * @author 残梦
 * @createDate 2019-06-30
 */

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import ReduxThunk from 'redux-thunk';
import logger  from 'redux-logger'

// 合并中间件和调用 redux 控制台调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
	applyMiddleware(ReduxThunk, logger)
));

export default store;