import styled from 'styled-components';

export const AddressWrapper = styled.div`
    width:100%;
    position:absolute;
    overflow:auto;
    top:50px;
    bottom:60px;
    left:0px;
    background:rgb(243,243,243);
    
`;
export const AddressTitle = styled.div`
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
        margin-left:90px;
        background:;
    }
    .tj{
        float:right;
        font-size:15px;
        color:#000;
        margin-top:10px;
        margin-right:10px;
        background:;
    }
    .bc{
        float:right;
        font-size:15px;
        color:red;
        margin-top:10px;
        margin-right:10px;
        background:;
    }
`;
export const AddressItem = styled.div`
    width:100%;
    height:80px;
    background:#fff;
    position:relative;
    margin:10px 0px;
`;
export const ItemLeft = styled.div`
    box-sizing:border-box;
    float:left;
    width:50px;
    height:80px;
    
    padding:30px 10px;
    .iconfont{
        font-size:30px;
       
    }
`;
export const ItemCenter = styled.div`
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
export const ItemRight = styled.div`
    box-sizing:border-box;
    float:right;
    padding:30px 10px;
    border-left:1px solid rgb(232,232,232);
    .bj{
        color:#000;
    }
`;
export const NewAddressWrapper = styled.div`
    width:100%;
    position:relative;
    overflow:auto;
    background:rgb(243,243,243);

`;
export const NewAddressItem = styled.input`
    box-sizing:border-box;
    width:100%;
    height:45px;
    outline:none;
    border:1px solid rgb(243,243,243);
    padding:5px 20px;
`;
export const ItemWrapper = styled.div`
    width:100%;
    background:;
    margin-top:50px;

`;
export const Item = styled.div`
    box-sizing:border-box;
    width:100%;
    height:45px;
    outline:none;
    border:1px solid rgb(243,243,243);
    padding:10px 10px;
    background:#fff;
    .mr{
        float:left;
        font-size:15px;
        
    }
    .iconfont{
        float:right;
        font-size:30px;
        color:rgb(0,148,252); 
        

    }

`;
export const DeleteItem = styled.div`
    box-sizing:border-box;
    width:100%;
    height:45px;
    outline:none;
    border:1px solid rgb(243,243,243);
    padding:10px 10px;
    background:#fff; 
    font-size:15px;
    color:red;
    margin-top:30px
`;