/**
 * @file 头部组件
 * @author 残梦
 * @createDate 2019-06-30
 */

import React from 'react';
import {
	HeaderWrapper,
	WidthLimit,
	Logo,
	Nav,
	NavItem,
	NavSearchWrapper,
	NavSearch,
	Addition,
	Button,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchKeyList,
	SearchKeyItem,
	Buddha,
} from './style';

import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { getIn } from 'immutable';


const Header = (props) => {
	const {
		login_status,
		search_input_focused,
		search_key_list,
		search_info_current_page,
		search_info_total_page,
		search_info_mouse_in,
		searchInputFocus,
		searchInputBlur,
		searchInfoMouseEnter,
		searchInfoMouseLeave,
		changeSearchInfoPage,
		logout,
	} = props;

	const _search_key_list = search_key_list.toJS();
	let search_key_html = [];

	if (_search_key_list.length > 0) {
		for (let i = (search_info_current_page - 1) * 10; i < search_info_current_page * 10; i++) {
			if (_search_key_list[i]) {
				search_key_html.push(
					<SearchKeyItem key={_search_key_list[i]}>
						<a>{_search_key_list[i]}</a>
					</SearchKeyItem>
				);
			}
		}
	}


	return (
		<HeaderWrapper>
			<WidthLimit>
				<Link to="/">
					<Logo />
				</Link>

				<Nav>
					<Link to="/">
						<NavItem className="left active">首页</NavItem>
					</Link>

					<NavItem className="left">下载App</NavItem>
					<NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>

					{
						!login_status ? 
							<Link to="/login">
								<NavItem className="right">登录</NavItem>
							</Link>
							:
							<NavItem
								onClick={logout}
								className="right"
							>退出</NavItem>
					}

					<NavSearchWrapper>
						<NavSearch
							className={search_input_focused ? 'focused' : ''}
							onFocus={() => { searchInputFocus(search_key_list) }}
							onBlur={searchInputBlur}
						/>
						<i
							className={search_input_focused ? 'focused iconfont glass-icon' : 'iconfont glass-icon'}
						>&#xe6dd;</i>

						<SearchInfo
							className={search_input_focused || search_info_mouse_in ? 'show' : ''}
							onMouseEnter={searchInfoMouseEnter}
							onMouseLeave={searchInfoMouseLeave}
						>
							<SearchInfoTitle>
								热门搜索
								<SearchInfoSwitch
									onClick={() => { changeSearchInfoPage(search_info_current_page, search_info_total_page) }}
								>
									<i className="iconfont refresh-icon">&#xe610;</i>
									换一批
								</SearchInfoSwitch>
							</SearchInfoTitle>
							<SearchKeyList>
								{search_key_html}
							</SearchKeyList>
						</SearchInfo>

					</NavSearchWrapper>

					<Addition>
						<Link to="/writer_article">
							<Button className="writting">
								<i className="iconfont pen-icon">&#xe678;</i>
								写文章
							</Button>
						</Link>
						{
							!login_status ? 
							<Button className="reg">注册</Button>
							:
							<Buddha>
								<img alt="" src="/static/writer/5.png" />
							</Buddha>
						}
					</Addition>
				</Nav>
			</WidthLimit>
		</HeaderWrapper>
	)
}


const mapStatus = (status) => {
	return {
		search_input_focused: getIn(status, ['header', 'search_input_focused']),
		search_key_list: getIn(status, ['header', 'search_key_list']),
		search_info_mouse_in: getIn(status, ['header', 'search_info_mouse_in']),
		search_info_current_page: getIn(status, ['header', 'search_info_current_page']),
		search_info_total_page: getIn(status, ['header', 'search_info_total_page']),

		login_status: getIn(status, ['header', 'login_status']),
	}
};


const mapDispatch = (dispatch) => {
	return {
		/**
		 * 搜索框聚焦事件
		 */
		searchInputFocus(search_key_list) {
			search_key_list.size === 0 && dispatch(actionCreators.getSearchKeyList());
			dispatch(actionCreators.searchInputFocus());
		},

		/**
		 * 搜索框失焦事件
		 */
		searchInputBlur() {
			dispatch(actionCreators.searchInputBlur());
		},

		/**
		 * 鼠标进入搜索详细事件
		 */
		searchInfoMouseEnter() {
			dispatch(actionCreators.searchInfoMouseEnter());
		},

		/**
		 * 鼠标退出搜索详细事件
		 */
		searchInfoMouseLeave() {
			dispatch(actionCreators.searchInfoMouseLeave());
		},

		/**
		 * 更变搜索详细页码
		 */
		changeSearchInfoPage(current_page, total_page) {
			if (current_page < total_page) {
				dispatch(actionCreators.changeSearchInfoPage(current_page + 1));
			} else {
				dispatch(actionCreators.changeSearchInfoPage(1));
			}
		},

		/**
		 * 退出
		 */
		logout() {
			const sure = confirm('确定要退出吗？');
			sure && dispatch(actionCreators.logout());
		}
	}
}

export default connect(mapStatus, mapDispatch)(Header);