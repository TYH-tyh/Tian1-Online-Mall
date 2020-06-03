import styled from 'styled-components';
import Headerbg from '../../statics/hbg.png';

export const HeaderWrapper = styled.div`
    box-sizing: border-box;
    width:100%;
    height:170px;
    background:url(${Headerbg});
    background-size: cover;
    position:absolute;
    top:50px;
    left:0px;
    padding:10px 0px;
`;

export const HeaderItem = styled.div`
    a{
        text-decoration:none; 
    }   
    &.touxiang { 
        width: 70px; 
        height: 70px; 
        margin: 0px auto; 
        border-radius: 100%; 
        position:relative;
        border:0px;
    }
    .tx {
        overflow:hidden;
        border-radius: 100%; 
        width: 80px; 
        height: 80px; 
        margin: 0px auto; 
        border-radius: 100%; 
        border: 1px solid #fff;
        background:;    
    }
    &.name { 
        font-size: 1.4em;
        text-align: center; 
        color: #fff; 
        line-height: 2em;
        background:;
        margin:7px 0px;
        
        
    }
    &.gztt { 
        font-size: 1em; 
        text-align: center; 
        color: #fff;
        background:;
        margin:8px 0px;

    }  
    
`;
export const Center = styled.div` 
        box-sizing:border-box;
        width:100%;
        height:70px;
        padding: 5px 0; 
        background:#fff; 
        border-bottom:1px solid #ccc;
        overflow: auto;
        position:relative;
        right:0px; 
    
`;
export const CenterItem = styled.div`
    box-sizing: border-box;
    width:33%;
    background:#fff;
    float:left;
    postion:relative;
    top:20px;
    border-left:1px 
    solid #ccc;
    text-align:center;
    .x3 {
        border: 0px;
    }
    div{
        padding:2px 0px;
        margin:2px;
    }
    a{
        text-decoration:none; 
    }
`;
export const Ul = styled.ul`
    background: #fff; 
    padding: 0px;
    margin: 20px 0px; 
    border-top:1px solid #ccc; 
    border-width: 1px 0;
    position:relative;
`;
export const Li = styled.li`
    padding: 0px 0px; 
    overflow: auto; 
    border-bottom:1px solid #ccc;
    position: relative;  
    .iconfont{
          float:right;            
    }
    a{
        text-decoration:none; 
    }
    
`;
export const Item = styled.div`
    background:; 
    font-size:18px;
    color:#777;
    border:0px;
    float:left;
    margin:10px 0px;
    .icc{
        padding:10px 5px;
        
    }
    &.lvzi{
        float:right;

    }
    &.lzz{
        box-sizing: border-box;
        padding:0px 10px;
    }
    &.rizi{
        float:right;
    }
`;
