import * as constants from './constants';
import { fromJS } from 'immutable';


const defaultState = fromJS({
    
	cartlist:[{
                id:1,
                imgUrl:'https://gd3.alicdn.com/imgextra/i1/2575862595/O1CN01kwsGmI1V2YK0O8voW_!!2575862595.jpg',
                name:'个性2019新款夏 季宽松时尚百搭韩版纯棉圆领印花短袖T恤女潮',
                dec:'颜色:姜黄色',
                price:'78',
                itemnumber:1,
                check:false,
                },{
                id:2,
                imgUrl:'https://img.alicdn.com/bao/uploaded/i4/641725918/O1CN01nDuCKX1taUSO5m9M5-641725918.jpg',
                name:'衬衣女伊芙丽2019春装新款长袖宽松韩版上衣职业打底雪纺白衬衫女',
                dec:'颜色:白色',
                price:'489',
                itemnumber:1,
                check:false,
                },{
                id:3,
                imgUrl:'http://img.alicdn.com/bao/uploaded/i3/1777534635/O1CN01dgpJmM1k6sHg4YExI_!!0-item_pic.jpg',
                name:'花花公子短袖T恤男士韩版潮流七分袖男装夏季宽松中长袖薄款上衣',
                dec:'颜色:白色',
                price:'258',
                itemnumber:1,
                check:false,
                }],
    
});

export default (state = defaultState, action) => {
    let index = action.del;
    let currVal = state.getIn(['cartlist',index,'itemnumber']);
    let checkStatus = state.getIn(['cartlist',index,'check']);
    switch(action.type) {  
        case constants.ADD_NUM:
            return state.setIn(['cartlist',index,'itemnumber'],currVal + 1);
        case constants.REDU_NUM:
            return state.setIn(['cartlist',index,'itemnumber'],currVal - 1);
        case constants.DELETE_ITEM:
            let currArr = state.getIn(['cartlist',index]);
            return state.setIn(['cartlist',index],currArr.list.splice(index,1));
        case constants.CHECK_IN:
            return state.setIn(['cartlist',index,'check'],action.value);
        case constants.CHECK_OUT:
            return state.setIn(['cartlist',index,'check'],action.value);
        default:
            return state;   
    }	
}

