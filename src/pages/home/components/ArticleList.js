import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIn } from 'immutable';

import {
	ArticleWrapper,
	ArticleItem,
	ArticleTitle,
	ArticleSpec,
	ArticleInfo,
	ArticleInfoItem,
} from '../style';

class List extends Component {
	render() {
		const { article_list } = this.props;

		console.log(article_list);
		return (
			<ArticleWrapper>
				<ArticleItem>
					<img className="article-img" alt="" src="https://upload-images.jianshu.io/upload_images/16235793-5c2c92db1b14e092.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
					<div className="article-content">
						<ArticleTitle>男人害怕失去你，才会这么“折磨”你</ArticleTitle>
						<ArticleSpec>爱情是很神奇的，它能让男人和女人成为最亲密的恋人，也能彻底改变一个人。 单身的时候，都认为自己是最优秀的，不比任何人差，对另一半的要求是很高的。...</ArticleSpec>
						<ArticleInfo>
							<ArticleInfoItem className="score">
								<i className="iconfont">&#xe63d;</i>
								4.5
							</ArticleInfoItem>
							<ArticleInfoItem>
								爱情摇篮
							</ArticleInfoItem>
							<ArticleInfoItem>
								<i className="iconfont">&#xe61e;</i>
								4
							</ArticleInfoItem>
							<ArticleInfoItem>
								<i className="iconfont">&#xe602;</i>
								27
							</ArticleInfoItem>
						</ArticleInfo>
					</div>
				</ArticleItem>
			</ArticleWrapper>
		);
	}
}

const mapState = (state) => ({
	article_list: getIn(state, ['home', 'article_list']),
})

const mapDispatch = (dispatch) => ({
	
});


export default connect(mapState, mapDispatch)(List);