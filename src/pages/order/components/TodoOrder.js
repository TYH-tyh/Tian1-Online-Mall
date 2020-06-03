import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators}  from '../store';
import { Link } from 'react-router-dom';
import {
    OrderWrapper,
    OrderTitle,
    OrderItem,
    NavWrapper,
    NavItem,
    ItemLeft,
    ItemCenter,
    OrderName,
    OrderNum,
    OrderSize,
    ItemRight,
    OrderPrice,
} from '../style';

class TodoOrder extends Component {
    render(){
        const { address_list } = this.props; 
        return (
           <OrderWrapper>
                <OrderTitle>
                    <Link to='/order'>
                        <span class="iconfont">&#xe60a;</span>
                    </Link>
                    <div className='wdxdz'>我的订单</div>            
                </OrderTitle>
                <NavWrapper>
                    <Link to='/order/todo'>
                    <NavItem className='dfh'>待发货</NavItem>
                    </Link>
                    <Link to='finish'>
                    <NavItem className='ywc'>已完成</NavItem>
                    </Link>          
                </NavWrapper>
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
                    </ItemRight>                      
                </OrderItem>
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
export default connect(mapState)(TodoOrder);