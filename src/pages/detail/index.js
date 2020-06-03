import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators}  from './store';
import { Link } from 'react-router-dom';
import {
   DetailWrapper, 
   DetailTitle,
   DetailImg,
   DetailName,
   DetailNav,
   NavTitle,
   NavDetail,
   DetailFooter,
   DetailItem 
} from './style';
import AddCart from './components/AddCart';
import Buy from './components/AddCart';


class Detail extends Component {
    
    render(){
        const { picture_list,addshow,buyshow } = this.props;
        return (
           <DetailWrapper>
               <DetailTitle>
                    <Link to='/'>
                        <span class="iconfont">&#xe60a;</span>
                    </Link>
                    <div className='spxq'>商品详情</div>
               </DetailTitle>
               <DetailImg>
                   <img className='tp' src='https://gd3.alicdn.com/imgextra/i1/2575862595/O1CN01kwsGmI1V2YK0O8voW_!!2575862595.jpg'/>
               </DetailImg>
               <DetailName>
                   <div className='title'>个性2019新款夏 季宽松时尚百搭韩版纯棉圆领印花短袖T恤女潮</div>
                   <div className='price'>￥78.00</div>
               </DetailName>
               <DetailNav>
                   <NavTitle>宝贝详情</NavTitle>
                   <NavDetail>
                   {
                        picture_list.map((item) => {
                            return ( 
                                <img src={item.get('imgUrl')} className='img'/>
                            )
                        })  
                    } 
                      
                   </NavDetail>
                </DetailNav>
                <DetailFooter>
                    <DetailItem><span class="iconfont">&#xe607;</span></DetailItem>
                    <DetailItem> <span class="iconfont">&#xe611;</span></DetailItem>
                    <DetailItem><span class="iconfont">&#xe621;</span></DetailItem>
                        <DetailItem className='jrgwc' onClick={() => this.props.ChangeAddShow()}>加入购物车</DetailItem>                    
                        <DetailItem className='ljgm' onClick={() => this.props.ChangeBuyShow()}>立即购买</DetailItem>                                        
                </DetailFooter>
                 {
                    addshow ? <AddCart /> : null
                } 
                {
                    buyshow ? <Buy /> : null
                }   
           </DetailWrapper>
           
        )
    }
}
const mapState = (state) => ({
    picture_list: state.getIn(['detail','picturelist']),
    addshow:state.getIn(['detail','addshow']),
    buyshow:state.getIn(['detail','buyshow'])
})

const mapDispatch = (dispatch) => {
    return {
        ChangeAddShow (){
        const action = actionCreators.ChangeAddShow()
        dispatch(action);
        },
        ChangeBuyShow (){
            const action = actionCreators.ChangeBuyShow()
            dispatch(action);
            },
        
    }
} 
export default connect(mapState,mapDispatch)(Detail);