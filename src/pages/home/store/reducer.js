/**
 * @file 分发出来的主页 reducer
 * @author 残梦
 * @createDate 2019-06-30
 */

import { fromJS, set } from 'immutable'; 
// import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	article_list: [],			// 首页文章列表
});

export default (state = defaultState, action) => {
	switch (action.type) {
		
		default:
			return state;
	}
}