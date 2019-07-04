import styled from 'styled-components';

export const DetailWrapper = styled.div`
	width: 620px;
	margin: 0 auto;
	overflow: hidden;
	padding-top: 30px;
`;

export const DetailTitle = styled.h1`
	word-break: break-word;
	margin: 20px 0 0;
	font-size: 34px;
	font-weight: 700;
	line-height: 1.3;
`

export const DetailContent = styled.div`
	margin-top: 50px;
	word-break: break-word;
	color: #2f2f2f;
    font-size: 16px;
    font-weight: 400;
	line-height: 1.7;
	
	p {
		margin: 0 0 25px;
	}

	h2, h3, h4, h5, h6 {
		margin: 0 0 15px;
		font-weight: 700;
		color: #2f2f2f;
		line-height: 1.7;
		text-rendering: optimizelegibility;
	}

	h2 {
		font-size: 24px;
	}

	h3 {
		font-size: 22px;
	}

	b, strong {
		font-weight: 700;
	}

	li {
		display: list-item;
	}

	ol, ul {
		margin: -5px 0 20px 20px;
		list-style: inside;
	}
`