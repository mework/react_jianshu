
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@font-face {
		font-family: "iconfont";
		src: url('./iconfont.eot?t=1562145148729'); /* IE9 */
		src: url('./iconfont.eot?t=1562145148729#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
		url('./iconfont.woff?t=1562145148729') format('woff'),
		url('./iconfont.ttf?t=1562145148729') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
		url('./iconfont.svg?t=1562145148729#iconfont') format('svg'); /* iOS 4.1- */
	}
	  
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

`