import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators}  from '../store';
import { Link } from 'react-router-dom';
import {
    OrderWrapper,
    OrderTitle,
    OrderItem,
    ItemWrapper,
    NavWrapper,
    NavItem,
    ItemLeft,
    ItemCenter,
    OrderName,
    OrderNum,
    OrderSize,
    ItemRight,
    OrderPrice,
    OrderDel
} from '../style';

class FinishOrder extends Component {
    render(){
        const { address_list } = this.props; 
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
                            <img  className='img' src='https://gd3.alicdn.com/imgextra/i1/2575862595/O1CN01kwsGmI1V2YK0O8voW_!!2575862595.jpg'  />
                        </ItemLeft>
                        <ItemCenter>
                            <OrderName>
                                <p className="name">个性2019新款夏 季宽松时尚百搭韩版纯棉圆领印花短袖T恤女潮</p>
                            </OrderName>
                            <OrderSize>
                                <div className="size">姜黄色 S</div>
                            </OrderSize>
                            <OrderNum>
                                <div className="num" >数量：1</div>
                            </OrderNum>
                        </ItemCenter>
                        <ItemRight>
                            <OrderPrice>
                                <div>￥79.00</div>
                            </OrderPrice> 
                            <OrderDel>
                                <span className="iconfont sc1">&#xe602;</span>
                            </OrderDel>                      
                        </ItemRight>                      
                    </OrderItem>
                    <OrderItem>
                        <ItemLeft>
                            <img  className='img' src={require('../../../statics/pd-010.jpg')}  />
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
                            <OrderDel>
                                <span className="iconfont sc1">&#xe602;</span>
                            </OrderDel>   
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
export default connect(mapState)(FinishOrder);