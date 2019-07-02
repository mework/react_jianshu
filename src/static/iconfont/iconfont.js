
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@font-face {
		font-family: "iconfont";
		src: url('./iconfont.eot?t=1562054463544'); /* IE9 */
		src: url('./iconfont.eot?t=1562054463544#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
		url('./iconfont.woff?t=1562054463544') format('woff'),
		url('./iconfont.ttf?t=1562054463544') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
		url('./iconfont.svg?t=1562054463544#iconfont') format('svg'); /* iOS 4.1- */
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

`