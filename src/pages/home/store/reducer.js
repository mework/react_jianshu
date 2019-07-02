/**
 * @file 分发出来的主页 reducer
 * @author 残梦
 * @createDate 2019-06-30
 */

import { fromJS, merge } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	article_list: [],		// 文章列表
	article_page: 1,		// 文章页数

	recommend_list: [],		// 推荐列表

	writer_list: [],		// 作者列表

	show_back_top: false,	// 是否显示回到顶部
});

export default (state = defaultState, action) => {
	switch (action.type) {
		
		case actionTypes.SET_INIT_HOME_DATA:
			return merge(state, {
				article_list: action.article_list,
				recommend_list: action.recommend_list,
				writer_list: action.writer_list,
			});

		case actionTypes.SET_MORE_ARTICLE:
			return merge(state, {
				article_list: state.get('article_list').concat(action.article_list),
				article_page: action.article_page,
			});

		case actionTypes.CHANGE_WRITER:
			const firstItem = state.get('writer_list').get(0);
			const writer_list = state.get('writer_list').shift().concat([firstItem]);
			return state.set('writer_list', writer_list);
		
		case actionTypes.SHOW_BACK_TOP:
			return state.set('show_back_top', action.isShow);

		default:
			return state;
	}
}