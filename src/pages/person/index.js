import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
        HeaderWrapper,
        Header,
        HeaderItem,
        Center,
        CenterItem,
        Ul,
        Li,
        Item
} from './style';

class Person extends Component {
    render(){
        const { login, logout }= this.props;
        return (
            <HeaderWrapper>
                    <Link to='/userinfo' className='zt'>
                        <HeaderItem className='touxiang'>
                            <img className='tx'alt='' src={require('../../statics/tx.jpg')} />
                        </HeaderItem>
                    </Link> 
                    {
                        login ? 
                            <Link to='/person'>
                                <HeaderItem className="name"><div>Tian 1</div></HeaderItem>
                                <HeaderItem  onClick={ logout} className="gztt"><div>退出</div></HeaderItem>
                            </Link> :
                            <Link to='/login'>
                                <HeaderItem className="name"><div>用户名</div></HeaderItem>
                                <HeaderItem className="gztt"><div>登录</div></HeaderItem>
                            </Link>
                    }                                   
                    <Center>
                        <CenterItem className="x1">
                            <Link to='' >
                                <div>收藏夹</div>
                                <div>33</div>
                            </Link>
                        </CenterItem>
                        <CenterItem className="x2">
                            <Link to='' >
                                <div>关注店铺</div>
                                <div>12</div>
                            </Link>
                        </CenterItem>
                        <CenterItem className="x3">
                            <Link to='' >
                                <div>足迹</div>
                                <div>58</div>
                            </Link>
                        </CenterItem>
                    </Center>
                    <Ul>
                        <Li>
                            <Item className="icc"></Item>
                            <Item className="lzz">会员认证</Item>
                            <Item className="lvzi">已认证</Item>
                        </Li>
                        <Li>
                            <Item className="icc"></Item>
                            <Item className="lzz">活动中心</Item>
                            <Item className="rizi"><span class="iconfont">&#xe60b;</span></Item>
                        </Li>
                        <Li>
                            <Link to='/order'>
                                <Item className="icc"></Item>
                                <Item className="lzz">订单中心</Item>
                                <Item className="rizi"><span class="iconfont">&#xe60b;</span></Item>
                            </Link>
                        </Li>
                        <Li>
                            <Link to='/userinfo'>
                                <Item className="icc"></Item>
                                <Item className="lzz">个人信息</Item>
                                <Item className="rizi"><span class="iconfont">&#xe60b;</span></Item>
                            </Link>
                        </Li>
                        <Li className='l1'>
                            <Link to='/address'>
                                <Item className="icc"></Item>
                                <Item className="lzz">收货地址</Item>
                                <Item className="rizi"><span class="iconfont">&#xe60b;</span></Item>
                            </Link>
                        </Li>
                    </Ul>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		login: state.getIn(['login', 'login'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {	
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Person);
