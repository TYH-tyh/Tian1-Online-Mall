import styled from 'styled-components';

export const Whole = styled.div`
    border:none;
`;
export const HeaderWrapper = styled.div`
    margin: none;
    border:none;
    height: 50px;
    width: 100%;
    position: fixed;
    top:0px;
    left:0px;
    float:left;
    background: rgb(0,148,252); 
    z-index:999;
    
`;
export const Title = styled.div`
    fontsize:25px;
    text-align:center;
    padding:10px;
    font-weight:bold;
`;

export const FooterWrapper = styled.div`
    height: 60px;
    width: 100%;
    background: rgb(0,148,252);
    position: fixed;
    bottom:0px;
    left:0px;
    z-index:999;
`;

export const NavItem = styled.div`
    line-height: 50px;
    width:25%;
    padding-bottom:0px;
    padding-top:20px;
    text-align: center;
    font-size: 13px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    .iconfont{
        display:inline-block;
        font-size:26px;
        vertical-align:middle;
        position:absolute;
        top:0px;
        
    }

`;