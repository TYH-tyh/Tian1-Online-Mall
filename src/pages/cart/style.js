import styled from 'styled-components';

export const CartWrapper = styled.div`
    box-sizing:border-box;
    width:100%;
    position:absolute;
    top:50px;
    left:0px;
    background: rgb(242,242,242);
`;
export const CartNav = styled.div`
    box-sizing:border-box;
    height:50px;
    background:#fff;
    margin:5px 5px;
    z-index:999;  
    .zt{
        font-size:15px;
        text-align:left;
        padding:10px;
        font-weight:bold;
        color:rgb(64,64,77);
    }
    
`;
export const CenterWrapper = styled.div`
    background:rgb(242,242,242);;
    width:100%;
    overflow:auto;
    position:absolute;
    top:50px;
    left:0px;
    margin:5px 0px;
`;

export const CartItem = styled.div`
    box-sizing:border-box;
    display:block;
	width: 100%;
    height: 100px;
    background:#fff;
    pasition:absolute;
    margin:5px;
    top:0px;
    left:
	border-bottom: 1px solid #ccc;
    
`;
export const CartCheck = styled.div`
    box-sizing:border-box;
    width: 45px;
    height: 100px;
    float: left;
    background:;
    .iconfont{
        display:inline-block;
        font-size:25px;
        vertical-align:middle;
        margin:30px 10px;;
    }
    .check{
        color:red;
    }
    
`;
export const CartImg = styled.div`
    box-sizing:border-box;
    float: left;
    height: 100px;
    background:;
    position:relative;
    padding:5px 4px; 
    .img{
    width:85px;
    height:85px;
    padding:4px;
    }
`;
export const CartCenter = styled.div`
    box-sizing:border-box;
    width:120px;
    height:100px;
    float:left;
    background:;
    position:relative;
    padding:3px 5px;
`;
export const CartName = styled.div`
    .name{
        font-size: 12px;
        color: #333;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        padding-top: 5px;
        }
    .color{
        font-size: 12px;
        color: #8a8a8a;
        display: block;
        margin-top:5px;
    }
`;
export const CartNum = styled.div`
    position:relative;
    width: 90px;
    height: 18px;
    border: 1px solid #dcdcdc;
    border-radius: 2px;
    margin-top:10px;
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
export const CartRight = styled.div`
    float:left;
    height:100px;
    width:60px;
    background:;
`;
export const CartPrice = styled.div`
    height:30px;
    font-size:16px;
    color:red;
    background:;
    padding:0px 10px;
    
`;
export const CartDel = styled.div`
    box-sizing:border-box;
    height:45px;
    padding:20px  40px;
    background:;
    .sc1{
        position:relative;
        bottom:1px;
        right:px;
        font-size:19px;
        color:#999
        }
`;
export const FootNav = styled.div`
    width:100%;
    height:50px;
    background: #fff;
    position:fixed;
    bottom:60px;
    box-size:border-box;
    z-index:999;
    
`;
export const AllNav = styled.div`
    background:;
    width:80px;
    height:50px;
    padding:10px 5px;
    .iconfont{
        float:left;
        font-size:25px;
        color:#999;
    }
    .check{
        color:red;
    }
    .qx1{
        font-size:15px;
        color:#999;
        margin: 5px 10px;
    }
`;
export const TotalNav = styled.div`
    box-sizing:border-box;
    float:left;
    height:50px;
    width:150px;
    background:;
    position:relative;
    bottom:70px
    left:80px;
    .hj1{
        float:left;
        font-size:16px;
        font-weight:550;
        padding:5px 10px;
    }
    .hj2{
        float:left;
        font-size:18px;
        color: #e90327;
        padding:5px 0px;
    }
`;
export const JxNav = styled.div`
    float:right;
    height:50px;
    width:120px;
    background:red;
    position:relative; 
    bottom:70px;
    .js{
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        float: right;
        margin:10px 15px
    }
`;
