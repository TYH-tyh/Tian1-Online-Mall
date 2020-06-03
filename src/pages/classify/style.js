import styled from 'styled-components';

export const SearchWrapper = styled.div`
    height: 50px;
    width: 10%;
    float: left;
    position: absolute;
    left:60px;
    top:50px;
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
    position:absolute;
    
    background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
`;

export const ClassifyWrapper = styled.div`
    position:absolute;
    overflow:auto;
    top:50px;
    bottom:60px;
    left:0px;
   
`;
export const Classifyleft = styled.div`
    float:left;
    width:90px;
    overflow:scroll;
    z-index:-20;
`;
export const Navleft = styled.div`
    width:90px;
    height:40px;
    text-align:center;
    font-size:14px;
    color:rgb(136,136,136);
    padding:5px 0px;
`;
export const Classifyright = styled.div`
    float:right;
    width:270px;
    overflow:auto;
    background:rgb(242,242,242);
`;
export const Navright = styled.div`
    width:270px;
    height:200px;
    .nz{
        padding:10px;
    }
`;
export const Rightitem = styled.div`
   height:150px;
   width:270px;
`;
export const Item = styled.div`
    width:60px;
    float: left;
    padding: 10px 8px;
    position: relative;
    overflow: hidden;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-left:10px;
    .tp{
        display:block;
        width:50px;
    }
    .zt{
        text-align:center;
        font-size:13px;
    }
`;
