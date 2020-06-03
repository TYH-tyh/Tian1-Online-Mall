import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators}  from '../store';
import { Link } from 'react-router-dom';
import {
    AddressWrapper,
    AddressTitle,
    NewAddressWrapper,
    NewAddressItem,
    Item,
    ItemWrapper,
    DeleteItem

    
} from '../style';

class EditAddress extends Component {
    render(){
        const { address_list } = this.props; 
        return (
            <AddressWrapper>
                <AddressTitle>
                    <Link to='/address'>
                        <span class="iconfont">&#xe60a;</span>
                    </Link>
                    <div className='wdxdz'>编辑收货地址</div>
                    <div className='bc'>保存</div>                 
                </AddressTitle>
                <NewAddressWrapper>
                    <NewAddressItem placeholder='收货人'></NewAddressItem>
                    <NewAddressItem placeholder='手机号码'></NewAddressItem>
                    <NewAddressItem placeholder='所在地区'></NewAddressItem>
                    <NewAddressItem placeholder='详细地址：如道路、门牌号、小区、楼栋号、单元室'></NewAddressItem>
                    <ItemWrapper>
                        <Item>
                            <div className='mr'>地址标签</div>
                            
                        </Item>
                        <Item>
                            <div className='mr'>设为默认地址</div>
                            <span className="iconfont">&#xe7d8;</span>
                        </Item>
                        
                    </ItemWrapper>
                    <DeleteItem>
                        <div className='sc'>删除收货地址</div>
                    </DeleteItem>
            </NewAddressWrapper>
            
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
export default connect(mapState)(EditAddress);