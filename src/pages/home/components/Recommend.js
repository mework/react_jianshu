import React from 'react';
import { connect } from 'react-redux';
import { getIn } from 'immutable';
import {
	RecommendWrapper,
	RecommendItem,
	DownloadWrapper,
	DownloadQrcode,
	DownloadTitle,
	DownloadSpec,
} from '../style';

const Recommend = (props) => {
	const { recommend_list } = props;
	console.log(recommend_list);

	return (
		<RecommendWrapper>
			{
				recommend_list.map(item => (
					<RecommendItem key={item.get('id')} imgUrl={item.get('img_url')}>
					</RecommendItem>
				))
			}
			<DownloadWrapper>
				<img className="download-qrcode" alt="" src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />

				<div className="download-content">
					<DownloadTitle>下载简书手机App</DownloadTitle>

					<DownloadSpec>随时随地发现和创作内容</DownloadSpec>
				</div>
			</DownloadWrapper>
		</RecommendWrapper>
	);
}

const mapState = (state) => ({
	recommend_list: getIn(state, ['home', 'recommend_list']),
});

export default connect(mapState, null)(Recommend);