/**
 * @file 主页 action 构造器
 * @author 残梦
 * @createDate 2019-06-30
 */

import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const setInitHomeData = ({article_list, recommend_list, writer_list}) => ({
	type: actionTypes.SET_INIT_HOME_DATA,
	article_list: fromJS(article_list),
	recommend_list: fromJS(recommend_list),
	writer_list: fromJS(writer_list),
})

const setMoreArticle = ({article_list}, article_page) => ({
	type: actionTypes.SET_MORE_ARTICLE,
	article_list: fromJS(article_list),
	article_page,
});

export const getHomeData = () => (dispatch) => {
	axios.get('/api/home.json').then(res => {
		dispatch(setInitHomeData(res.dataList));
	})
};

export const getMoreArticle = (article_page) => (dispatch) => {
	axios.get('/api/article_list.json').then(res => {
		console.log(`当前显示文章页数为：第 ${article_page} 页`)
		dispatch(setMoreArticle(res.dataList, article_page));
	})
};

export const changeWriter = () => ({
	type: actionTypes.CHANGE_WRITER,
});

export const showBackTop = (isShow) => ({
	type: actionTypes.SHOW_BACK_TOP,
	isShow,
})