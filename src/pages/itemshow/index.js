import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {actionCreators}  from './store';
import {
    ItemshowWrapper,
    SearchWrapper,
    Search,
    Advertise,
    RecommendWrapper, 
    Recommendtitle,
    Recommenditem,
    ItemInfo

} from './style'

class Itemshow extends Component {
    render(){
        const { list } = this.props;
        return (
            <ItemshowWrapper>
                <SearchWrapper>
                    <Search
                        className={this.props.focused ? 'focused': ''}
                        onFocus={this.props.handleInputFocus}
                        onBlur={this.props.handleInputBlur}
                    >    
                    </Search> 
                    <span className={this.props.focused ? 'focused iconfont': 'iconfont'}>&#xe63d;</span>  
                </SearchWrapper> 
                <Advertise></Advertise>     
                <Recommendtitle>
                    全部商品
                </Recommendtitle>  
                <RecommendWrapper className=''>                                              
                    {
                        list.map((item) => {
                            return ( 
                                <Link to='/detail' className=''>                                                   
                                    <Recommenditem key={item.get('id')}>
                                        <ItemInfo className='dsb'>
                                            <img  className='pic' src={item.get('imgUrl')} alt=''></img>
                                        </ItemInfo>
                                        <ItemInfo>
                                            <div className='dsb1'>{item.get('title')}</div>
                                            <div className='dsb2'>{item.get('price')}</div>
                                            <div className='dsb3'>{item.get('count')}</div>
                                        </ItemInfo>   
                                    </Recommenditem>
                                 </Link>                    
                            )
                        })  
                    } 
                </RecommendWrapper>               
            </ItemshowWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('itemshow').get('focused'),
        list: state.getIn(['itemshow','itemlist'])
    }
}

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

export default connect(mapStateToProps, mapDispathToProps)(Itemshow);