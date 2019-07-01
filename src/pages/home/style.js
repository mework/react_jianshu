import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
	padding-top: 30px;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	width: 625px;

	.banner-img {
		width: 625px;
		height: 270px;
		border-radius: 8px;
	}
`;

export const HomeRight = styled.div`
	float: right;
	width: 280px;
`;

export const ArticleWrapper = styled.ul`
	margin-top: 20px;
`;

export const ArticleItem = styled.li`
	width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
	border-bottom: 1px solid #f0f0f0;
	
	.article-img {
		cursor: pointer;
		float: right;
		width: 150px;
		height: 100px;
	}

	.article-content {
		padding-right: 165px;
	}
`;

export const ArticleTitle = styled.p`
	cursor: pointer;
	font-size: 18px;
	font-weight: 700;
	line-height: 27px;

	&:hover {
		text-decoration: underline;
	}
`

export const ArticleSpec = styled.p`
	margin: 0 0 8px;
	font-size: 13px;
	line-height: 24px;
	color: #999;
	margin-bottom: 10px;
`

export const ArticleInfo = styled.p`
	font-size: 12px;
	font-weight: 400;
	line-height: 20px;
	color: #b4b4b4;
`;

export const ArticleInfoItem = styled.span`
	margin-right: 12px;

	&.score {
		color: #ea6f5a;
	}

	.iconfont {
		font-size: 12px;
		margin-right: 4px;
	}
`;

export const RecommendWrapper = styled.ul`
`;

export const RecommendItem = styled.li`
	cursor: pointer;
	margin-bottom: 6px;
	height: 50px;
	border-radius: 4px;
	background-image: url(${props => (props.imgUrl)});
	background-size: contain;
`

export const DownloadWrapper = styled.div`
	cursor: pointer;
	margin-top: 12px;
	padding: 10px 22px;
	width: 100%;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color: #fff;

	.download-qrcode {
		width: 60px;
		height: 60px;
		opacity: .85;
	}

	.download-content {
		display: inline-block;
		vertical-align: middle;
		margin-left: 12px;
	}
`;

export const DownloadTitle = styled.p`
	font-size: 15px;
`;

export const DownloadSpec = styled.p`
	margin-top: 8px;
	font-size: 13px;
	color: #999;
`;