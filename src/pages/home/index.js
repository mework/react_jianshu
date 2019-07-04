import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from './store';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	ScrollTop,
} from './style';

import { getIn } from 'immutable';
import ArticleList from './components/ArticleList';
import Recommend from './components/Recommend';
import Writer from './components/Writer';


class Home extends PureComponent {

	componentDidMount() {
		this.props.getHomeData();

		window.addEventListener('scroll', this.props.viewOnScroll)
	}

	render() {
		const { show_back_top } = this.props;

		return (
			<HomeWrapper>
				<HomeLeft>
					<img alt="轮播图" className="banner-img" src="/static/banner/1.jpg" />
					<ArticleList />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				
				<ScrollTop
					onClick={this.scrollToTop}
					className={show_back_top ? 'show' : ''}
				>
					<span className="hover-style">回到顶部</span>
					<i className="iconfont">&#xe733;</i>
				</ScrollTop>
			</HomeWrapper>
		);
	}

	scrollToTop() {
		window.scrollTo({ 
			top: 0, 
			behavior: "smooth" 
		});
	}
}

const mapStatus = (status) => ({
	show_back_top: getIn(status, ['home', 'show_back_top']),
});

const mapDispatch = (dispatch) => ({
	/**
	 * 获取主页数据
	 */
	getHomeData() {
		dispatch(actionCreators.getHomeData());
	},

	/**
	 * 滚动条滚动判断回到顶部是否显示
	 */
	viewOnScroll() {
		document.documentElement.scrollTop >= 200 ? dispatch(actionCreators.showBackTop(true)) : dispatch(actionCreators.showBackTop(false));
	},
})

export default connect(mapStatus, mapDispatch)(Home);