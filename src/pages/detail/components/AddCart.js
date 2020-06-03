import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators}  from '../store';
import { Link } from 'react-router-dom';
import {
   AddWrapper,
   PriceNav,
   Item,
   NavWrapper,
   ColorNav,
   SizeNav,
   CountNav,
   CartNum,
   ButtonNav,
   Button

} from '../style';

class AddCart extends Component {
    
    render(){
        const { picture_list } = this.props;
        return (
          <AddWrapper>
              <PriceNav>
                <img  className='img' src='https://gd3.alicdn.com/imgextra/i1/2575862595/O1CN01kwsGmI1V2YK0O8voW_!!2575862595.jpg' />
              <Item>
                <div className='jg'>￥78.00</div>
                <div className='kc'>库存33件</div>
              </Item>
              </PriceNav>
              <NavWrapper>
                <ColorNav>
                  <div>颜色分类</div>
                  <div className='color'>姜黄色</div>
                  <div className='color'>杏色</div>
                </ColorNav>
                <SizeNav>
                  <div>尺码</div>
                  <div className='size'>S</div>
                  <div className='size'>M</div>
                  <div className='size'>L</div>
                  <div className='size'>XL</div>
                </SizeNav>
                <CountNav>
                  <div className="gm">购买数量</div>
                  <CartNum>
                      <span className="jia" >-</span>
                      <div className="num" >1</div>
                      <span className="jian" >+</span>
                  </CartNum>
                </CountNav>
              </NavWrapper>
              <Link to='/detail/commitorder'>
                <ButtonNav>
                  <Button onClick={() => this.props.ChangeAddShowFalse()}>确定</Button>
                </ButtonNav>							  
						  </Link>
          </AddWrapper>
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
      ChangeAddShowFalse (){
      const action = actionCreators.ChangeAddShowFalse()
      dispatch(action);
      },
      
  }
} 
export default connect(mapState,mapDispatch)(AddCart);