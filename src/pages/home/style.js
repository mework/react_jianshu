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

export const ScrollTop = styled.div`
	cursor: pointer;
	display: none;
	position: fixed;
	bottom: 40px;
	right: 40px;
	z-index: 1040;
	width: 52px;
	height: 52px;
    line-height: 50px;
	border: 1px solid #dcdcdc;
	background-color: #fff;
    text-align: center;
	transition: .1s ease-in;

	&.show {
		display: block;
	}

	&:hover {
		background-color: hsla(0,0%,71%,.1);

		.hover-style {
			opacity: 1;
		}
	}

	.hover-style {
		opacity: 0;
		transition: all .2s;
		position: absolute;
		left: -90px;
		top: 50%;
		transform: translateY(-50%);
		width: 80px;
		height: 28px;
		line-height: 28px;
		background-color: #191919;
		border-radius: 5px;
		color: #fff;
		text-align: center;
		font-size: 14px;
		z-index: 99;


		&::after {
			content: '';
			position: absolute;
			right: -15px;
			top: 50%;
			transform: translateY(-50%);
			border: 10px solid transparent;
			border-left-color: #191919;
		}
	}
	
	.iconfont {
		font-size: 28px;
	}
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

export const ArticleMore = styled.div`
	cursor: pointer;
	width: 100%;
	border-radius: 20px;
	background-color: #a5a5a5;
	height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    display: block;
`

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
	position: relative;
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

	&:hover {
		.hover-style {
			opacity: 1;
		}
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

export const DownloadHover = styled.div`
	opacity: 0;
	transition: all .2s;
	position: absolute;
	top: -195px;
	left: 50%;
	margin-left: -90px;
	padding: 15px;
	width: 180px;
	height: 180px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	border: 1px solid #ddd;
	border-radius: 5px;
	background: #fff url('/static/qrcode/1.png') center/150px 150px no-repeat;

	&::after {
		content: '';
		position: absolute;
		bottom: -19px;
		left: 50%;
		transform: translateX(-50%);
		border: 10px solid transparent;
		border-top-color: #fff;
	}

	&::before {
		content: '';
		position: absolute;
		bottom: -20px;
		left: 50%;
		transform: translateX(-50%);
		border: 10px solid transparent;
		border-top-color: #ccc;
	}
`;

export const WriterWrapper = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	font-size: 14px;
    color: #969696;
`;

export const WriterTitle = styled.p`

`;

export const WriterSwitch = styled.span`
	cursor: pointer;
	float: right;

	.refresh-icon {
		margin-right: 3px;
		vertical-align: middle;
	}
`;

export const WriterList = styled.ul`
`;

export const WriterItem = styled.li`
	margin-top: 18px;
	line-height: 20px;

	.writer-buddha {
		cursor: pointer;
		float: left;
		width: 48px;
		height: 48px;
		border: 1px solid #ddd;
		border-radius: 24px;
		margin-right: 10px;
	}
`;

export const WriterName = styled.p`
	cursor: pointer;
	padding-top: 5px;
    margin-right: 60px;
	font-size: 14px;
	color: #333;
`;

export const WriterInfo = styled.p`
	margin-top: 2px;
	font-size: 12px;
	color: #969696;
`;

export const WriterFollow = styled.span`
	cursor: pointer;
	float: right;
	margin-top: 5px;
    padding: 0;
    font-size: 13px;
	color: #42c02e;
	
	.iconfont {
		vertical-align: top;
	}
`;