import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators}  from './store';
import { Link } from 'react-router-dom';
import {
    OrderWrapper,
    OrderTitle,
    OrderItem,
    NavWrapper,
    NavItem,
    ItemWrapper,
    ItemLeft,
    ItemCenter,
    OrderName,
    OrderNum,
    OrderSize,
    ItemRight,
    OrderPrice,
} from './style';

class Order extends Component {
    render(){
        const {  } = this.props; 
        return (
           <OrderWrapper>
                <OrderTitle>
                    <Link to='/person'>
                        <span class="iconfont">&#xe60a;</span>
                    </Link>
                    <div className='wdxdz'>我的订单</div>            
                </OrderTitle>
                <NavWrapper>
                    <Link to='/order'>
                    <NavItem className='dfh'>待发货</NavItem>
                    </Link>
                    <Link to='/order/finish'>
                    <NavItem className='ywc'>已完成</NavItem>
                    </Link>          
                </NavWrapper>
                <ItemWrapper>
                    <OrderItem>
                        <ItemLeft>
                            <img  className='img' src={require('../../statics/pd-010.jpg')}  />
                        </ItemLeft>
                        <ItemCenter>
                            <OrderName>
                                <p className="name">韩国正品自然乐园芦荟补水保湿洗面奶男士女控油祛</p>
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
                                <div>￥10.00</div>
                            </OrderPrice>                     
                        </ItemRight>                      
                    </OrderItem>
                    <OrderItem>
                        <ItemLeft>
                            <img  className='img' src={require('../../statics/pd-010.jpg')}  />
                        </ItemLeft>
                        <ItemCenter>
                            <OrderName>
                                <p className="name">韩国正品自然乐园芦荟补水保湿洗面奶男士女控油祛</p>
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
                                <div>￥10.00</div>
                            </OrderPrice>                     
                        </ItemRight>                      
                    </OrderItem>
                </ItemWrapper>
                
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