import styled from 'styled-components';

export const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 50px;
	background: #eee;
`;

export const LoginBox = styled.div`
	width: 90%;
	height: 90%;
	margin: 0px auto;
	padding-top: 20px;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
	display: block;
	width: 200px;
    height: 40px;
    border-radius:20px;
	line-height: 30px;
	padding: 0 10px;
	margin: 10px auto;
    color: #777;
    border:1px solid #ddd;
    font-size:14px;
    outline:none;
`;

export const Button = styled.div`
	width: 220px;
	height: 40px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 20px;
	margin: 20px auto;
	text-align: center;
	a{
		text-decoration:none;
	}
`;