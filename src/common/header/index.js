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
} from './style';

import { actionCreators } from './store';
import { connect } from 'react-redux';
import { getIn } from 'immutable';

/**
 * 搜索详细视图
 */
const SearchInfoView = (props) => {
	const {
		search_input_focused,
		search_info_mouse_in,
		search_info_current_page,
		search_info_total_page,
		search_key_list,
		searchInfoMouseEnter,
		searchInfoMouseLeave,
		changeSearchInfoPage,
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
					<i className="iconfont refresh">&#xe610;</i>
					换一批
								</SearchInfoSwitch>
			</SearchInfoTitle>
			<SearchKeyList>
				{search_key_html}
			</SearchKeyList>
		</SearchInfo>
	);
}

/**
 * 添加部分视图
 */
const AdditionView = () => {
	return (
		<Addition>
			<Button className="writting">
				<i className="iconfont pen-icon">&#xe678;</i>
				写文章
			</Button>
			<Button className="reg">注册</Button>
		</Addition>
	);
}

const Header = (props) => {
	const {
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
	} = props;


	return (
		<HeaderWrapper>
			<WidthLimit>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
					<NavItem className="right">登录</NavItem>

					<NavSearchWrapper>
						<NavSearch
							className={search_input_focused ? 'focused' : ''}
							onFocus={() => { searchInputFocus(search_key_list) }}
							onBlur={searchInputBlur}
						/>
						<i
							className={search_input_focused ? 'focused iconfont glass-icon' : 'iconfont glass-icon'}
						>&#xe6dd;</i>

						<SearchInfoView
							search_input_focused={search_input_focused}
							search_info_mouse_in={search_info_mouse_in}
							search_info_current_page={search_info_current_page}
							search_info_total_page={search_info_total_page}
							search_key_list={search_key_list}
							searchInfoMouseEnter={searchInfoMouseEnter}
							searchInfoMouseLeave={searchInfoMouseLeave}
							changeSearchInfoPage={changeSearchInfoPage}
						/>

					</NavSearchWrapper>

					<AdditionView />
				</Nav>
			</WidthLimit>
		</HeaderWrapper>
	)
}


const mapState = (state) => {
	return {
		search_input_focused: getIn(state, ['header', 'search_input_focused']),
		search_key_list: getIn(state, ['header', 'search_key_list']),
		search_info_mouse_in: getIn(state, ['header', 'search_info_mouse_in']),
		search_info_current_page: getIn(state, ['header', 'search_info_current_page']),
		search_info_total_page: getIn(state, ['header', 'search_info_total_page']),
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
		}
	}
}

export default connect(mapState, mapDispatch)(Header);