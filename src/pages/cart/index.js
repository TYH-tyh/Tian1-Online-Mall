import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators}  from './store';
import { Link } from 'react-router-dom';
import {
       CartWrapper,
       CartNav,
       CenterWrapper,
       CartItem,
       CartCheck,
       CartImg,
       CartCenter,
       CartName,
       CartNum,
       CartRight,
       CartPrice,
       CartDel,
       FootNav,
       AllNav,
       TotalNav,
       JxNav
} from './style';
import store from '../../store';

class Cart extends Component {
    render(){
        const { cartlist,checkStatus } = this.props;
        return (
           <CartWrapper>
                <CartNav>
                    <div className='zt'>购物车</div>  
                </CartNav>
                <CenterWrapper>
                    {
                        cartlist.map((item,index) => {
                            return ( 
                                <CartItem key={item.get('id')}>
                                    {
                                    checkStatus ?
                                    <CartCheck><span className='iconfont check' onClick={() => this.props.checkOut(index)}>&#xe7d9;</span></CartCheck> :
                                    <CartCheck><span className='iconfont' onClick={() => this.props.checkIn(index)}>&#xe7d4;</span></CartCheck>
                                    }                                   
                                <CartImg>
                                    <img  className='img' src={item.get('imgUrl')} />
                                </CartImg>
                                <CartCenter>
                                    <CartName>
                                        <div className="name">{item.get('name')}</div>
                                        <div className="color">{item.get('dec')}</div>
                                    </CartName>
                                    <CartNum>
                                        <span className="jia" onClick={() => this.props.reduNum(index)}>-</span>
                                        <div className="num" >{item.get('itemnumber')}</div>
                                        <span className="jian" onClick={() => this.props.addNum(index)}>+</span>
                                    </CartNum>
                                </CartCenter>
                                <CartRight>
                                    <CartPrice>
                                        <p>￥{item.get('price')}</p>
                                    </CartPrice> 
                                    <CartDel>
                                        <span className="iconfont sc1" onClick={() => this.props.deleteItem(index)}>&#xe602;</span>
                                    </CartDel> 
                                </CartRight>           
                            </CartItem>             
                            )
                        })  
                    }
                </CenterWrapper>
                <FootNav>
                    <AllNav>
                        {
                        checkStatus ?
                        <span className="iconfont check">&#xe7d9;</span> :
                        <span className="iconfont">&#xe7d4;</span>                                   
                        }
                        <div className='qx1' onClick={() => this.props.checkIn()}>全选</div>  
                    </AllNav>
                    <TotalNav>
                        <div className='hj1'>合计: ￥</div>
                        <div className='hj2'>0</div>
                    </TotalNav>
                    <Link to='/detail/commitorder'>
                        <JxNav>
                            <div className='js'>结算(0)</div>
                        </JxNav>
                    </Link>
                   
               </FootNav>
           </CartWrapper>

        )
    }
}

    
    const mapState = (state) => ({
        cartlist: state.getIn(['cart','cartlist']),
        checkStatus:state.getIn(['cart','cartlist','index','check']),
        

    })
    const mapDispatch = (dispatch) => ({
        addNum(index){
            dispatch(actionCreators.addNum(index))
        },
        reduNum(index){
            dispatch(actionCreators.reduNum(index))
        },
        deleteItem(index){
            dispatch(actionCreators.deleteItem(index))
        },
        checkIn(index){
            dispatch(actionCreators.checkIn(index))
        },
        checkOut(index){
            dispatch(actionCreators.checkOut(index))
        },
    }); 

export default connect(mapState, mapDispatch)(Cart);