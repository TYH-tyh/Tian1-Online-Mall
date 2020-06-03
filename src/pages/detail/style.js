import styled from 'styled-components';

export const DetailWrapper = styled.div`
    width:100%;
    position:absolute;
    overflow:auto;
    top:0px;
    bottom:60px;
    left:0px;
    background:rgb(243,243,243);
    z-index:1000;

`;
export const DetailTitle = styled.div`
    box-sizing:border-box;
    width:100%;
    height:50px;
    background: rgb(0,148,252); 
    padding:5px 0px;
  
    .spxq{
        float:left;
        width:120px;
        font-size:20px;
        font-weight:bold;
        background:;
        margin:7px;
        position:absolute;
        left:130px;
    }
    .iconfont{
        float:left;
        font-size:25px;
        margin:8px 5px;
        background:;
    }
    
`;
export const DetailImg = styled.div`
    box-sizing:border-box;
    width:100%;
    height:300px;
    background:;
    .tp{
        width:100%;
        height:300px;
    }
`;
export const DetailName = styled.div`
    boxing-sizing:border-box;
    width:100%;
    height:80px;
    margin:5px 0px;
    background:#fff;
    .title{
        font-size:15px;
        font-weight:bold;
        padding:5px 5px;
    }
    .price{
        font-size:19px;
        color:red;
    }
`;

export const DetailNav = styled.div`
    width:100%;
    position:absolute;
    overflow:auto;
`;
export const NavTitle = styled.div`
    box-sizing:border-box;
    width:100%;
    height:40px;
    background:#fff;
    font-size:18px;
    font-weight:bold;
    text-align:center;
    margin:5px 0px;
    padding:5px 0px;
`;
export const NavDetail = styled.div`
    width:100%;
    box-sizing:border-box;
    .img{
        width:360px;
        
    }
`;
export const DetailFooter = styled.div`
    width:100%;
    height:50px;
    background:#fff;
    position:fixed;
    bottom:60px;
    
`;
export const DetailItem = styled.div`
    box-sizing:border-box;
    float:left;
    height:50px;
    padding:8px;
    .iconfont{
        font-size:30px;
    }
    &.jrgwc{
        width:110px;
        background:rgb(255,149,0);
        padding: 15px;
        color:#fff;
    }
    &.ljgm{
        width:111px;
        background:rgb(221,39,39);
        padding: 15px;
        color:#fff;
    }
`;
export const AddWrapper = styled.div`
    box-sizing:border-box;
    width:100%;
    height:400px;
    background:#fff;
    position:absolute;
    left:0px;
    bottom:0px;
    border-radius:10px;
    z-index:1000;
`;
export const PriceNav = styled.div`
    box-sizing:border-box;
    width:100%;
    height:110px;
    background:#fff;
    padding:px;
    position:absolute;
    .img{
        width:100px;
        height:100px;
        padding:4px;
        border-radius:10px;
        }
`;
export const Item = styled.div`
    box-sizing:border-box;
    width:240px;
    height:110px;
    background:;
    float:right;
    .jg{
        font-size:22px;
        color:red;
        margin:5px;
    }
    .kc{
        font-sicze:12px;
        color:#bbb;
        margin:5px 
    }
`;
export const NavWrapper = styled.div`
    width:100%;
    position:absolute;
    overflow:auto;
    top:110px;
    bottom:70px;
    z-index:1000

`;
export const ColorNav = styled.div`
    box-sizing:border-box;
    width:100%;
    overflow:auto;
    background:#fff;
    padding:10px;
    border-bottom:1px solid #ccc;
    .color{
        float:left;
        height:25px;
        width:90px;
        border:1px solid #3194d0;
        text-align:center;
        margin-top:10px;
        margin-right:10px;
        border-radius:5px;

    }

`;
export const SizeNav = styled.div`
    box-sizing:border-box;
    width:100%;
    overflow:auto;
    background:#fff;
    padding:10px;
    border-bottom:1px solid #ccc;
    .size{
        float:left;
        height:25px;
        width:90px;
        border:1px solid #3194d0;
        text-align:center;
        margin-top:10px;
        margin-right:10px;
        border-radius:5px;

    }
`;
export const CountNav = styled.div`
    box-sizing:border-box;
    width:100%;
    height:50px;
    background:#fff;
    padding:10px;
    border-bottom:1px solid #ccc;
    .gm{
        float:left;
        background:;
    }
`;
export const CartNum = styled.div`
    float:right;
    position:relative;
    width: 90px;
    height: 18px;
    border: 1px solid #dcdcdc;
    border-radius: 2px;
    margin-top:;
    .jia{
    display: block;
    font-size: 15px;
    text-align: center;
    line-height: 13px;
    width: 30px;
    height: 18px;
    float: left;
    }
    .num{
    display: block;
    float: left;
    text-align: center;
    line-height: 18px;
    width: 20px;
    height: 16px;
    font-size: 13px;
    border-left: 1px solid #dcdcdc;
    border-right: 1px solid #dcdcdc;
    border-top:none;
    }
    .jian{
    display: block;
    font-size: 15px;
    text-align: center;
    line-height: 18px;
    width: 30px;
    height: 18px;
    float: right;
    }
`;
export const ButtonNav = styled.div`
    box-sizing:border-box;
    width:100%;
    height:60px;
    background:#fff;
    padding:10px;
    position:absolute;
    bottom:0px;
    left:0px
`;
export const Button = styled.div`
	width: 220px;
	height: 40px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 20px;
	margin: 0px auto;
    text-align: center;
    
	a{
		text-decoration:none;
	}
`;
