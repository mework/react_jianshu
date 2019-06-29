import styled from 'styled-components';
import logo from '../../static/logo.png';

export const HeaderWrapper = styled.div`
	border: 1px solid #f0f0f0;
`;

export const WidthLimit = styled.div`
	position: relative;
	width: 1440px;
	height: 56px;
	margin: 0 auto;
`;

export const Logo = styled.a.attrs({
	href: '/',
})`
	position: absolute;
	left: 0;
	top: 0;
	width: 100px;
	height: 56px;
	background-image: url(${logo});
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

export const NavItem = styled.a`
	&.left {
		float: left;
		font-size: 17px;
		color: #333;
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

	.iconfont {
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
`

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
`