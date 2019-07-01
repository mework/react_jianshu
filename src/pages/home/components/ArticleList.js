import React from 'react';
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

const ArticleList = (props) => {
	const { article_list } = props;

	return (
		<ArticleWrapper>
			{
				article_list.map((item) => (
					<ArticleItem key={item.get('id')}>
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
		</ArticleWrapper>
	);
}

const mapState = (state) => ({
	article_list: getIn(state, ['home', 'article_list']),
})

export default connect(mapState, null)(ArticleList);