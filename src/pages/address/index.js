import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators}  from './store';
import { Link } from 'react-router-dom';
import {
    AddressWrapper,
    AddressTitle,
    AddressItem,
    ItemLeft,
    ItemCenter,
    ItemRight 
} from './style';

class Address extends Component {
    render(){
        const { address_list } = this.props; 
        return (
           <AddressWrapper>
               <AddressTitle>
                    <Link to='/person'>
                        <span class="iconfont">&#xe60a;</span>
                    </Link>
                    <div className='wdxdz'>我的收货地址</div>
                    <Link to='/address/newaddress'>
                        <div className='tj'>添加新地址</div>
                    </Link>
                    
               </AddressTitle>
               {
                        address_list.map((item) => {
                            return ( 
                                <AddressItem key={item.get('id')}>
                                    <ItemLeft><span class="iconfont">&#xe698;</span></ItemLeft>
                                    <ItemCenter>
                                        <div className='name'>{item.get('name')}</div>
                                        <div className='phone'>{item.get('tel')}</div><br />
                                        <div className='add'>{item.get('add')}</div>
                                    </ItemCenter>
                                    <Link to='/address/editaddress'>
                                    <ItemRight><div className='bj'>编辑</div></ItemRight>
                                    </Link>
                                   
                                </AddressItem>             
                            )
                        })  
                    } 
               
           </AddressWrapper>
        )
    }
}


const mapState = (state) => ({
    address_list: state.getIn(['address','addresslist'])   

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
export default connect(mapState)(Address);