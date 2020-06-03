import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators}  from './store';
import { Link } from 'react-router-dom';
import {
    InfoWrapper   
} from './style';

class Userinfo extends Component {
    render(){
        return (
           <div>www</div>
        )
    }
}



const mapState = (state) => ({
    item_list: state.getIn(['classify','itemlist'])
    
    

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
export default connect(mapState)(Userinfo);