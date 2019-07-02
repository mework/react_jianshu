import React from 'react';
import { getIn } from 'immutable';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

import {
	WriterWrapper,
	WriterTitle,
	WriterSwitch,
	WriterList,
	WriterItem,
	WriterName,
	WriterInfo,
	WriterFollow,
} from '../style';

const Writer = (props) => {
	const { writer_list, refreshWriter } = props;
	return (
		<WriterWrapper>
			<WriterTitle>
				推荐作者
				<WriterSwitch
					onClick={refreshWriter}
				>
					<i className="iconfont refresh-icon">&#xe610;</i>
					换一批
				</WriterSwitch>
			</WriterTitle>

			<WriterList>
				{
					writer_list.map(item => (
						<WriterItem key={item.get('id')}>
							<img alt="" className="writer-buddha" src={item.get('img_url')}/>
							<WriterFollow><i className="iconfont">&#xeaf3;</i>关注</WriterFollow>
							<WriterName>{item.get('author')}</WriterName>
							<WriterInfo>写了{item.get('word_num')}字 · {item.get('like_num')}喜欢</WriterInfo>
						</WriterItem>
					))
				}
				
			</WriterList>
		</WriterWrapper>
	);
}

const mapState = (state) => ({
	writer_list: getIn(state, ['home', 'writer_list']),
});

const mapDispatch = (dispatch) => ({
	/**
	 * 换一批作者
	 */
	refreshWriter() {
		dispatch(actionCreators.changeWriter());
	}
})

export default connect(mapState, mapDispatch)(Writer);