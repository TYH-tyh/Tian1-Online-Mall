import styled from 'styled-components';

export const OrderWrapper = styled.div`
    width:100%;
    position:absolute;
    overflow:auto;
    top:50px;
    bottom:60px;
    left:0px;
    background:rgb(243,243,243);
`;
export const OrderTitle = styled.div`
    box-sizing:border-box;
    width:100%;
    height:50px;
    background:#fff;
    margin-bottom:5px;
    .iconfont{
        float:left;
        font-size:25px;
        color:#000;
        margin:10px 5px;
        background:;
    }
    .wdxdz{
        float:left;
        font-size:18px;
        margin-top:10px;
        margin-left:110px;
        background:;
    }
`;
export const NavWrapper = styled.div`
    box-sizing:border-box;
    width:100%;
    height:50px;
    position:absolute;
    background:rgb(243,243,243);

`;
export const NavItem = styled.div`
    box-sizing:border-box;
    float:left;
    width:50%;
    height:50px;
    color:#000;
    position:relative;
    background:#fff;
    padding:15px 60px;
    border:2px solid rgb(243,243,243);
    
`;
export const ItemWrapper = styled.div`
    width:100%;
    position:absolute;
    overflow:auto;
    top:100px;
`;
export const OrderItem = styled.div`
    width:100%;
    height:130px;
    background:#fff;
    position:relative;
    margin:10px 0px;
    
    
`;
export const ItemLeft = styled.div`
    box-sizing:border-box;
    float: left;
    height: 130px;
    background:;
    position:relative;
    padding:5px 10px; 
    .img{
    width:110px;
    height:110px;
    padding:4px;
    border:1px solid rgb(243,243,243);
    }
`;
export const ItemCenter = styled.div`
    box-sizing:border-box;
    width:130px;
    height:130px;
    float:left;
    background:;
    position:relative;
    padding:3px 5px;
`;
export const OrderName = styled.div`
    width:150px;
    height:50px;
    font-size: 14px;
    color: #333;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-top: 0.1rem;
`;
export const OrderNum = styled.div`
    width:150px;
    height:30px;
    font-size: 15px;
    color: red;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-top: 10px;
`;
export const OrderSize = styled.div`
    width:150px;
    height:20px;
    font-size: 15px;
    color:red;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-top: 10px;
`;
export const ItemRight = styled.div`
    box-sizing:border-box;
    float:right;
    height:130px;
    width:60px;
    background:;
    border:1px solid rgb(233,233,233);
`;
export const OrderPrice = styled.div`
    box-sizing:border-box;
    height:50px;
    font-size:16px;
    color:red;
    background:;
    padding:20px 0px; 
`;
export const OrderDel = styled.div`
    box-sizing:border-box;
    height:50px;
    padding:20px 20px;
    background:;
    .sc1{
        position:relative;
        bottom:1px;
        right:px;
        font-size:19px;
        color:#999
        }
`;
export const AddressItem = styled.div`
    width:100%;
    height:80px;
    background:#fff;
    position:relative;
    margin:10px 0px;
`;
export const AddressLeft = styled.div`
    box-sizing:border-box;
    float:left;
    width:50px;
    height:80px;
    
    padding:30px 10px;
    .iconfont{
        font-size:30px;
       
    }
`;
export const AddressCenter = styled.div`
    float:left;
    box-sizing:border-box;
    width:240px;
    height:80px;
    padding:10px 5px;
    .name{
        float:left;
        width:50px;
        font-size:16px;
    }
    .phone{        
        float:left;
        font-size:13px;
        color:gray;
        padding:2px 0px;
    }
    .add{
        font-size:13px;
        weight:150px;
    }

`;
export const AddressRight = styled.div`
    box-sizing:border-box;
    float:right;
    padding:30px 10px;
    .bj{
        color:#000;
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
        padding:5px 0px;
        background:;
    }
    .hj2{
        float:left;
        font-size:17px;
        color: #e90327;
        padding:5px 0px;
        background:;
    }
`;
export const JxNav = styled.div`
    box-sizing:border-box;
    float:right;
    height:40px;
    width:120px;
    background:red;
    position:relative; 
    bottom:70px;
    border-radius:20px;
    margin:5px 0px;
    .js{
        color: #fff;
        font-size: 18px;
        text-align: center;
        float: right;
        margin:5px 20px;
    }
`;
export const Wrapper = styled.div`
    width:100%;
    position:absolute;
    overflow:auto;
`;


