import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Whole,
    HeaderWrapper,
    Title,
    FooterWrapper,
    NavItem
}from './style';

class Header extends Component{
    render(){
        return(
                <Whole>
                    <HeaderWrapper> 
                        <Title>Tian1 购物商城</Title>          
                    </HeaderWrapper>
                    <FooterWrapper>
                        <Link to='/'>
                            <NavItem className = 'left'>
                                <span className ="iconfont">&#xe615;</span>
                                首页
                            </NavItem> 
                        </Link>                                                   
                        <Link to='/classify'>
                            <NavItem className = 'left'>
                                <span className ="iconfont">&#xe601;</span>
                                分类
                            </NavItem>   
                        </Link>                                                 
                        <Link to='/cart'>
                            <NavItem className = 'left'>
                                <span className ="iconfont">&#xe63b;</span>
                                购物车
                                </NavItem>
                        </Link> 
                        <Link to='/person'>
                            <NavItem className = 'left'>
                                <span className ="iconfont">&#xe600;</span>
                                我的
                            </NavItem>
                        </Link>                    
                    </FooterWrapper>	
                </Whole>
        )
    }
}



export default Header;