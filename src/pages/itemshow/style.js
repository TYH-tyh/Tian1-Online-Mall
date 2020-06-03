import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

createGlobalStyle`


`;
export const  ItemshowWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    background:white;
    position:absolute;
    overflow:auto;
    top:50px;
    bottom:60px;
    left:0px;

`;
export const SearchWrapper = styled.div`
    height: 50px;
    width: 10%;
    float: left;
    position: absolute;
    left:60px
    .iconfont{
        float:left;
        position: absolute;
        left:180px;
        top: 10px;
        line-height:30px;
        width:30px;
        border-radius:15px;
        text-align: center;
        background:rgb(224,224,224);
        &.focused{
            background:#777;
            color:#fff;
        } 
    } 

`;

export const Search = styled.input.attrs({
    placeholder:'搜索'
})`
    
    height:30px;
    width: 200px;
    border: none;
    outline: none;
    margin-top:10px;
    margin-left:6px;
    box-sizing: border-box;
    padding: 0 20px;
    border-radius:15px;
    background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
`;
export const Advertise = styled.div`
    height:130px;
    width:100%
    background: rgb(118,185,237);

`;
export const Recommendtitle = styled.div`
    overflow:auto;
    height:50px;
    weight:100%;
    background: rgb(243,243,243);
    text-align:center;
    margin:5px 0px;
    padding:10px 0px;
    box-sizing:border-box;
`;
export const RecommendWrapper = styled.div`
    width:100%;
    overflow:;
    background: rgb(243,243,243);  

`;
export const Recommenditem = styled.div`
    box-sizing:border-box;
    float:left;
    width:50%;
    height:170px;  
    padding:15px 15px;
    background:#ee;
    box-shadow:5px 5px rgb(255,255,255);
    

`;

export const ItemInfo = styled.div`
    box-sizing:border-box;
    margin:5px 0px;
    &.dsb{
        height:100px;
    }
    .pic{
        display: block;
        height:100px;
        width:130px;
        
    }
    .dsb1{
        font-size: 0.9rem;
        width: auto;
        color: #363636;
        margin-top: 0.5rem;
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        font-weight: normal;
        margin-bottom: 0.5rem; 
        

    }
    .dsb2{
        height:10px;
        font-size:12px;
        color:red;
        display：inline-block;
        float:left; 
        
    }
    .dsb3{
        height:10px;
        font-size:10px;
        float:right;
        display：inline-block；
    }
`;



