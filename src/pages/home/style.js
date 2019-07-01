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
	width: 240px;
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
		float: right;
		width: 150px;
		height: 100px;
	}

	.article-content {
		padding-right: 165px;
	}
`;

export const ArticleTitle = styled.p`
	font-size: 18px;
	font-weight: 700;
	line-height: 27px;
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