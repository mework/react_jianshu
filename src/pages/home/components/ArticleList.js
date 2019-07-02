import React from 'react';
import { connect } from 'react-redux';
import { getIn } from 'immutable';
import { actionCreators } from '../store';

import {
	ArticleWrapper,
	ArticleItem,
	ArticleTitle,
	ArticleSpec,
	ArticleInfo,
	ArticleInfoItem,
	ArticleMore,
} from '../style';

const ArticleList = (props) => {
	const { article_list, article_page, showMoreArticle } = props;

	return (
		<ArticleWrapper>
			{
				article_list.map((item, index) => (
					<ArticleItem key={index}>
						<img className="article-img" alt="" src={item.get('img_url')} />
						<div className="article-content">
							<ArticleTitle>{item.get('title')}</ArticleTitle>
							<ArticleSpec>{item.get('spec')}</ArticleSpec>
							<ArticleInfo>
								<ArticleInfoItem className="score">
									<i className="iconfont">&#xe63d;</i>
									{item.get('score')}
								</ArticleInfoItem>
								<ArticleInfoItem>
									{item.get('author')}
								</ArticleInfoItem>
								<ArticleInfoItem>
									<i className="iconfont">&#xe61e;</i>
									{item.get('comment')}
								</ArticleInfoItem>
								<ArticleInfoItem>
									<i className="iconfont">&#xe602;</i>
									{item.get('loveNum')}
								</ArticleInfoItem>
							</ArticleInfo>
						</div>
					</ArticleItem>
				))
			}

			<ArticleMore
				onClick={() => showMoreArticle(article_page)}
			>
				阅读更多
			</ArticleMore>
		</ArticleWrapper>
	);
}

const mapState = (state) => ({
	article_list: getIn(state, ['home', 'article_list']),
	article_page: getIn(state, ['home', 'article_page']),
})

const mapDispatch = (dispatch) => ({
	showMoreArticle(article_page) {
		dispatch(actionCreators.getMoreArticle(article_page + 1))
	}
})

export default connect(mapState, mapDispatch)(ArticleList);