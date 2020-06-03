import { createGlobalStyle } from 'styled-components';

createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	html,body {
    color: #333;
    margin: 0;
    height: 100%;
    font-family: "Myriad Set Pro","Helvetica Neue",Helvetica,Arial,Verdana,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
	}

	* {
    	-webkit-box-sizing: border-box;
    	-moz-box-sizing: border-box;
    	box-sizing: border-box;
	}

	a {
    	text-decoration: none;
	    color: #000;
	}

	a, label, button, input, select {
   	 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	img {
    	width: 100%;
    	height: auto;
    	display: block;
    	border: 0;
	}

	body {
    	background: #fff;
    	color: #666;
	}

	html, body, div, dl, dt, dd, ol, ul, li, h1, h2, h3, h4, h5, h6, p, blockquote, pre, button, fieldset, form, input, legend, textarea, th, td {
    	margin: 0;
    	padding: 0;
	}

	a {
    	text-decoration: none;
    	color: #08acee;
	}

	button {
    	outline: 0;
	

	img {
    	border: 0;
	}

	button,input,optgroup,select,textarea {
   		margin: 0;
    	font: inherit;
   		color: inherit;
    	outline: none;
	}

	li {
    	list-style: none;
	}

	a {
    	color: #666;
	}
`;
