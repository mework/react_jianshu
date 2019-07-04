/**
 * @file 头部 action 构造器
 * @author 残梦
 * @createDate 2019-06-30
 */

import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const initSearchKeyList = (data) => ({
	type: actionTypes.INIT_SEARCH_KEY_LIST,
	data: fromJS(data),
});

const initSearchTotalPage = (total_page) => ({
	type: actionTypes.INIT_SEARCH_TOTAL_PAGE,
	total_page,
});

const toggleLoginStatus = (login_status) => ({
	type: actionTypes.TOGGLE_LOGIN_STATUS,
	login_status,
})


export const searchInputFocus = () => ({
	type: actionTypes.SEARCH_INPUT_FOCUS
});

export const searchInputBlur = () => ({
	type: actionTypes.SEARCH_INPUT_BLUR
});

export const searchInfoMouseEnter = () => ({
	type: actionTypes.SEARCH_INFO_MOUSE_ENTER
});

export const searchInfoMouseLeave = () => ({
	type: actionTypes.SEARCH_INFO_MOUSE_LEAVE
});

export const getSearchKeyList = () => (dispatch) => {
	// 搜索详细页容量
	const pageSize = 10;
	axios.get('/api/search_list.json').then(res => {
		const list = res.dataList.list;

		dispatch(initSearchKeyList(list));

		const total_page = Math.ceil(list.length / pageSize)
		dispatch(initSearchTotalPage(total_page))
	})
};

export const changeSearchInfoPage = (current_page) => ({
	type: actionTypes.CHANGE_SEARCH_INFO_PAGE,
	current_page
});


export const login = (username, password) => (dispatch) => {
	console.log(`账号：${username}，密码：${password}`);
	alert('登录成功！');
	dispatch(toggleLoginStatus(true))
};

export const logout = () => (dispatch) => {
	alert('退出账号成功！');
	dispatch(toggleLoginStatus(false))
}