import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators}  from '../store';
import { Link } from 'react-router-dom';
import {
    OrderWrapper,
    OrderTitle,
    OrderItem,
    AddressItem,
    AddressLeft,
    AddressCenter,
    AddressRight,
    Wrapper,
    ItemLeft,
    ItemCenter,
    OrderName,
    OrderNum,
    OrderSize,
    ItemRight,
    OrderPrice,
    FootNav,
    AllNav,
    JxNav,
    TotalNav

} from '../style';

class Order extends Component {
    render(){
        const {  } = this.props; 
        return (
           <OrderWrapper>
                <OrderTitle>
                    <Link to='/detail'>
                        <span class="iconfont">&#xe60a;</span>
                    </Link>
                    <div className='wdxdz'>确认订单</div>            
                </OrderTitle>
                <AddressItem >
                    <AddressLeft><span class="iconfont">&#xe698;</span></AddressLeft>
                        <AddressCenter>
                            <div className='name'>刘刘</div>
                            <div className='phone'>18882079590</div><br />
                            <div className='add'>成都市高新西区西源大道2006号电子科技大学清水河校区</div>
                        </AddressCenter>
                        <Link to='/address'>
                            <AddressRight ><span class="iconfont">&#xe60b;</span></AddressRight>
                        </Link>                                 
                    </AddressItem>
                    <Wrapper>
                    <OrderItem className='co'>
                        <ItemLeft>
                            <img  className='img' src='https://gd3.alicdn.com/imgextra/i1/2575862595/O1CN01kwsGmI1V2YK0O8voW_!!2575862595.jpg'  />
                        </ItemLeft>
                        <ItemCenter>
                            <OrderName>
                                <p className="name">个性2019新款夏 季宽松时尚百搭韩版纯棉圆领印花短袖T恤女潮</p>
                            </OrderName>
                            <OrderSize>
                                <div className="size">白色 S</div>
                            </OrderSize>
                            <OrderNum>
                                <div className="num" >数量：1</div>
                            </OrderNum>
                        </ItemCenter>
                        <ItemRight>
                            <OrderPrice>
                                <div>￥78.00</div>
                            </OrderPrice>                     
                        </ItemRight>                      
                    </OrderItem> 
                    </Wrapper>             
                    
                    <FootNav>
                    <AllNav>
                        <div className='qx1' onClick={() => this.props.checkIn()}>共1件</div>  
                    </AllNav>
                    <TotalNav>
                        <div className='hj1'>合计: ￥</div>
                        <div className='hj2'>78.00</div>
                    </TotalNav>
                    <Link to='/order/todo'>
                        <JxNav>
                            <div className='js'>提交订单</div>
                        </JxNav>
                    </Link>
                   
               </FootNav>
                
           </OrderWrapper>
        )
    }
}


const mapState = (state) => ({
    list: state.getIn(['cart','cartlist']),  

})

const mapDispathToProps = (dispatch) => {
return {
    handleInputFocus (){
      const action = actionCreators.searchFocus()
      dispatch(action);
    },
    handleInputBlur (){
        const action = actionCreators.searchBlur()
        dispatch(action);
      },
}
} 
export default connect(mapState)(Order);