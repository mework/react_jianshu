import React, { Component } from 'react';
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
} from './style';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			search_focused: false,
		}
	}

	render() {
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
								className={this.state.search_focused ? 'focused' : ''}
								onFocus={this.searchFocus}
								onBlur={this.searchBlur}
							/>
							<i
								className={this.state.search_focused ? 'focused iconfont' : 'iconfont'}
							>&#xe6dd;</i>
						</NavSearchWrapper>

						<Addition>
							<Button className="writting">
								<i className="iconfont" style={{ marginRight: '7px' }}>&#xe678;</i>
								写文章
							</Button>
							<Button className="reg">注册</Button>
						</Addition>
					</Nav>
				</WidthLimit>
			</HeaderWrapper>
		)
	}

	searchFocus = () => {
		this.setState(() => ({
			search_focused: true
		}))
	}

	searchBlur = () => {
		this.setState(() => ({
			search_focused: false
		}))
	}
}

export default Header;