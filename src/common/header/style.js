/**
 * @file 使用 styled-components 创建的头部样式
 * @author 残梦
 * @createDate 2019-06-30
 */

import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	border: 1px solid #f0f0f0;
`;

export const WidthLimit = styled.div`
	position: relative;
	width: 1440px;
	height: 56px;
	margin: 0 auto;
`;

export const Logo = styled.span`
	cursor: pointer;
	position: absolute;
	left: 0;
	top: 0;
	width: 100px;
	height: 56px;
	background-image: url('/static/logo/logo.png');
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 56px;
	margin-right: auto;
    margin-left: auto;
	padding-left: 15px;
	padding-right: 15px	;
`;

export const NavItem = styled.span`
	cursor: pointer;

	&.left {
		float: left;
		font-size: 17px;
		color: #333;
		&:hover {
			background-color: #f5f5f5;
		}
	}
	&.right {
		float: right;
		font-size: 15px;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}

	line-height: 56px;
	padding: 0 15px;
`;

export const NavSearchWrapper = styled.div`
	position: relative;
	float: left;

	.glass-icon {
		position: absolute;
		right: 5px;
		bottom: 4px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		color: #969696;
		transition: all .3s ease-out;
		&.focused {
			background-color: #969696;
			color: #fff;
		}
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	display: none;
	width: 250px;
	padding: 0 20px 20px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	background-color: #fff;

	&.show {
		display: block;
	}
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.div`
	cursor: pointer;
	float: right;
	font-size: 13px;

	.refresh-icon {
		vertical-align: bottom;
		margin-right: 2px;
	}
`;

export const SearchKeyList = styled.ul`
`;

export const SearchKeyItem = styled.li`
	margin-right: 10px;
	display: inline-block;
	line-height: 28px;
	>a {
		cursor: pointer;
		padding: 2px 6px;
		font-size: 12px;
		color: #787878;
		border: 1px solid #ddd;
		border-radius: 3px;
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索',
})`
	width: 160px;
	height: 38px;
	padding: 0 40px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	border-radius: 19px;
	background-color: #eee;
	font-size: 14px;
	transition: all .3s ease-out;

	&.focused {
		width: 220px;
	}

	&::placeholder {
		color: #999;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`

export const Button = styled.div`
	cursor: pointer;
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 22px;
	line-height: 36px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-size: 14px;

	&.reg {
		color: #ec6149;
	}

	&.writting {
		color: #fff;
		background-color: #ec6149;
	}

	.pen-icon {
		margin-right: 7px;
	}
`

export const Buddha = styled.div`
	float: right;
	margin-right: 10px;
	width: 80px;
	height: 56px;
	line-height: 56px;
	text-align: center;

	&:hover {
		background-color: #f5f5f5;
	}

	img {
		cursor: pointer;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid #ddd;
	}
`;