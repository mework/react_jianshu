/**
 * @file 分发出来的主页 reducer
 * @author 残梦
 * @createDate 2019-06-30
 */

import { fromJS } from 'immutable';
// import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	article_list: [			// 首页文章列表
		{
			id: 1,
			title: '男人害怕失去你，才会这么“折磨”你',
			img_url: 'http://upload-images.jianshu.io/upload_images/16235793-5c2c92db1b14e092.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
			spec: '爱情是很神奇的，它能让男人和女人成为最亲密的恋人，也能彻底改变一个人。 单身的时候，都认为自己是最优秀的，不比任何人差，对另一半的要求是很高的。...',
			score: 4.5,
			author: '爱情摇篮',
			comment: 4,
			loveNum: 27,
		},
		{
			id: 2,
			title: '男人害怕失去你，才会这么“折磨”你',
			img_url: 'http://upload-images.jianshu.io/upload_images/16235793-5c2c92db1b14e092.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
			spec: '爱情是很神奇的，它能让男人和女人成为最亲密的恋人，也能彻底改变一个人。 单身的时候，都认为自己是最优秀的，不比任何人差，对另一半的要求是很高的。...',
			score: 4.5,
			author: '爱情摇篮',
			comment: 4,
			loveNum: 27,
		},
		{
			id: 3,
			title: '男人害怕失去你，才会这么“折磨”你',
			img_url: 'http://upload-images.jianshu.io/upload_images/16235793-5c2c92db1b14e092.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
			spec: '爱情是很神奇的，它能让男人和女人成为最亲密的恋人，也能彻底改变一个人。 单身的时候，都认为自己是最优秀的，不比任何人差，对另一半的要求是很高的。...',
			score: 4.5,
			author: '爱情摇篮',
			comment: 4,
			loveNum: 27,
		},
	],

	recommend_list: [		// 推荐列表
		{
			id: 1,
			img_url: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
		},
		{
			id: 2,
			img_url: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
		},
		{
			id: 3,
			img_url: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
		},
		{
			id: 4,
			img_url: 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
		},
	],
});

export default (state = defaultState, action) => {
	switch (action.type) {

		default:
			return state;
	}
}