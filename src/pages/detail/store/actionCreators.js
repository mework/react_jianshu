/**
 * @file 文章详情页 action 构造器
 * @author 残梦
 * @createDate 2019-06-30
 */
import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const initDetailData = (data) => ({
	type: actionTypes.INIT_DETAIL_DATA,
	data: fromJS(data),
})

export const getArticleDetail = (id) => (dispatch) => {
	axios.get(`/api/article_detail.json?id=${id}`).then(res => {
		const { dataList: { article_list } } = res;
		const [filterData] = article_list.filter(item => (item.id === +id));
		dispatch(initDetailData(filterData));
	})
}