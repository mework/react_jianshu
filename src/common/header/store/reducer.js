/**
 * @file 分发出来的头部 reducer
 * @author 残梦
 * @createDate 2019-06-30
 */

import { fromJS, set } from 'immutable'; 
import * as actionTypes from './actionTypes';

const defaultStatus = fromJS({
	search_input_focused: false,		// 搜索框是否聚焦
	search_key_list: [],				// 热门搜索词列表
	search_info_mouse_in: false,		// 鼠标是否停留在搜索详细 
	search_info_current_page: 1,		// 搜索详细当前页数
	search_info_total_page: 1,			// 搜索详细总页数
	
	login_status: false,				// 判断是否登录; true: 登录、false: 未登录
});

export default (status = defaultStatus, action) => {
	switch (action.type) {
		case actionTypes.SEARCH_INPUT_FOCUS:
			return set(status, 'search_input_focused', true);

		case actionTypes.SEARCH_INPUT_BLUR:
			return set(status, 'search_input_focused', false);

		case actionTypes.INIT_SEARCH_KEY_LIST:
			return set(status, 'search_key_list', action.data);

		case actionTypes.SEARCH_INFO_MOUSE_ENTER:
			return set(status, 'search_info_mouse_in', true);

		case actionTypes.SEARCH_INFO_MOUSE_LEAVE:
			return set(status, 'search_info_mouse_in', false);

		case actionTypes.INIT_SEARCH_TOTAL_PAGE:
			return set(status, 'search_info_total_page', action.total_page);
		
		case actionTypes.CHANGE_SEARCH_INFO_PAGE:
			return set(status, 'search_info_current_page', action.current_page);

		case actionTypes.TOGGLE_LOGIN_STATUS:
			return set(status, 'login_status', action.login_status);

		default:
			return status;
	}
}