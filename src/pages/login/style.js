import styled from 'styled-components';

export const LoginWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	font-size: 14px;
    background-color: #f1f1f1;
`;

export const LoginLogo = styled.div`
	cursor: pointer;
	position: absolute;
	top: 56px;
	left: 50px;
	width: 100px;
	height: 46px;
	background-image: url('/static/logo/login_logo.png');
	background-size: contain;
`;

export const LoginContent = styled.div`
	width: 400px;
	margin: 160px auto 0;
	padding: 50px 50px 70px;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
	vertical-align: middle;
`;

export const LoginTitle = styled.h1`
	font-size: 24px;
	text-align: center;
	font-weight: 700;
	color: #ea6f5a;
	margin-bottom: 60px;
    span {
		padding: 10px 0;
		border-bottom: 2px solid #ea6f5a;
	}
`;

export const LoginInputWrapper = styled.div`
	position: relative;

	.iconfont {
		position: absolute;
		top: 14px;
		left: 10px;
		font-size: 18px;
		color: #969696;
	}
`

export const LoginInput = styled.input`
	border-radius: 4px 4px 0 0;
	width: 100%;
	height: 50px;
	margin-top: -1px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
	vertical-align: middle;
	background-color: rgb(232, 240, 254);
`;

export const LoginHandle = styled.div`
	margin-top: 20px;

	input[type="checkbox"] {
		vertical-align: middle;
	}

	span {
		display: inline-block;
		float: right;
		cursor: pointer;
		color: #999;

		&:hover {
			color: #333;
		}
	}
`;

export const LoginButton = styled.button`
	margin-top: 20px;
	width: 100%;
	padding: 9px 18px;
	font-size: 18px;
	border: none;
	border-radius: 25px;
	color: #fff;
	background-color: #3194d0;
	cursor: pointer;
	outline: none;
	display: block;
	clear: both;

	&:hover {
		background: #187cb7;
	}
`