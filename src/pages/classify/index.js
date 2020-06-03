import React, { Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators}  from './store';
import {
        ClassifyWrapper,
        Classifyleft,
        Classifyright,
        Navleft,
        Navright,
        Rightitem,
        Item,
} from './style';

class Classify extends Component {    
    render(){
        const { classify_list,item_list } = this.props;
        return (
            <ClassifyWrapper>
                <Classifyleft>
                    {
                        classify_list.map((item) => {
                            return ( 
                                <Navleft key={item.get('id')} className=''>{item.get('name')}</Navleft>                
                            )
                        })  
                    } 
                   
                </Classifyleft>
                <Classifyright> 
                    <Navright >
                        <div className='nz'>女装</div>
                        <Rightitem>
                            {
                                item_list.map((item) => {
                                    return (              
                                        <Item key={item.get('i_id')}>
                                            <img className='tp' src={require('../../statics/pd-010.jpg')} alt='' />
                                            <div className='zt'>{item.get('name')}</div>
                                        </Item>
                                       
                                    )
                                })  
                            } 
                        </Rightitem> 
                    </Navright>
                    <Navright >
                        <div className='nz'>男装</div>
                        <Rightitem>
                            {
                                item_list.map((item) => {
                                    return (              
                                        <Item key={item.get('i_id')}>
                                            <img className='tp' src={require('../../statics/pd-010.jpg')} alt='' />
                                            <div className='zt'>{item.get('name')}</div>
                                        </Item>
                                       
                                    )
                                })  
                            } 
                        </Rightitem> 
                    </Navright>                                                                                                                                                    
                </Classifyright>
            </ClassifyWrapper>  
        )
    }
}

const mapState = (state) => ({
        classify_list: state.getIn(['classify','classifylist']),
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
export default connect(mapState)(Classify);