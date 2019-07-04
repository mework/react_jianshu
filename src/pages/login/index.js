import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../../common/header/store';
import { getIn } from 'immutable';
import { Link } from 'react-router-dom';
import {
	LoginWrapper,
	LoginLogo,
	LoginContent,
	LoginTitle,
	LoginInputWrapper,
	LoginInput,
	LoginHandle,
	LoginButton,
} from './style';

let username, password;

const Login = (props) => {
	
	const {
		login_status,
		login,
	} = props;

	if (login_status) {
		return <Redirect to="/"/>
	} else {
		return (
			<LoginWrapper>
				<Link to="/">
					<LoginLogo />
				</Link>
	
				<LoginContent>
	
					<LoginTitle>
						<span>登录</span>
					</LoginTitle>
	
					<LoginInputWrapper>
						<i className="iconfont">&#xe634;</i>
						<LoginInput ref={(e)=>username = e} />
					</LoginInputWrapper>
	
					<LoginInputWrapper>
						<i className="iconfont">&#xe64c;</i>
						<LoginInput ref={(e)=>password = e} />
					</LoginInputWrapper>
	
					<LoginHandle>
						<label>
							<input type="checkbox" />
							记住我
						</label>
	
						<span>登录遇到问题?</span>
					</LoginHandle>
	
					<LoginButton
						onClick={() => login()}
					>
						登录
					</LoginButton>
	
				</LoginContent>
	
			</LoginWrapper>
		);
	}
}

const mapStatus = (status) => ({
	login_status: getIn(status, ['header', 'login_status'])
});

const mapDispatch = (dispatch) => ({
	login() {
		const username_val = username.value,
			password_val = password.value;

		if (username_val === '' || password_val === '') {
			return alert('账号密码和密码不能为空！');
		}

		dispatch(actionCreators.login(username_val, password_val));
	}
});

export default connect(mapStatus, mapDispatch)(Login);