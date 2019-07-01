/**
 * @file 根reducer
 * @author 残梦
 * @createDate 2019-06-30
 */

// 使用 redux-immutable 的 combineReducers 来创建一个不可变更数据
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';

const rootReducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
})

export default rootReducer;