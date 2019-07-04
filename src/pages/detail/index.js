import React, { PureComponent } from 'react';
import { getIn } from 'immutable';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import {
	DetailWrapper,
	DetailTitle,
	DetailContent,
} from './style';

class Detail extends PureComponent {
	componentWillMount() {
		this.props.getArticleDetail(this.props.match.params.id);
	}

	render() {
		const { detail_data } = this.props;

		return (
			<DetailWrapper>
				<DetailTitle>{ detail_data.get('title') }</DetailTitle>
				<DetailContent dangerouslySetInnerHTML={{__html: detail_data.get('content')}} />
			</DetailWrapper>
		);
	}
}


const mapStatus = (status) => ({
	detail_data: getIn(status, ['detail', 'detail_data'])
});

const mapDispatch = (dispatch) => ({
	getArticleDetail(id) {
		dispatch(actionCreators.getArticleDetail(id))
	}
})

export default connect(mapStatus, mapDispatch)(Detail);