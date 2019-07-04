import React from 'react';
import { getIn } from 'immutable';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
	WriterWrapper,
} from './style';

const WriterArticle = (props) => {
	const {login_status } = props;

	if (login_status) {
		return <WriterWrapper>这里是写文章的界面</WriterWrapper>
	} else {
		alert('请先进行登录！');
		return (
			<Redirect to="/login"></Redirect>
		)
	}
}

const mapStatus = (status) => ({
	login_status: getIn(status, ['header', 'login_status'])
});

export default connect(mapStatus, null)(WriterArticle);