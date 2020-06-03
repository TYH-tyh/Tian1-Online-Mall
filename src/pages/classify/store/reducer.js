import * as constants from './constants';
import { fromJS } from 'immutable';


const defaultState = fromJS({
	classifylist:[{
		id:1,
		name:'男装'
	},{
		id:2,
		name:'女装'
	},{
		id:3,
		name:'男鞋'
	},{
		id:4,
		name:'女鞋'
	},{
		id:5,
		name:'食品'
	},{
		id:6,
		name:'手机数码'
	},{
		id:7,
		name:'百货'
	},{
		id:8,
		name:'运动户外'
	},{
		id:9,
		name:'母婴'
	},{
		id:10,
		name:'美妆护肤'
	},{
		id:11,
		name:'箱包'
	},{
		id:12,
		name:'洗护'
	}],
	itemlist:[{
		i_id:1,
		name:'早春新品',
		imgUrl:'../../../statics/pd-010.jpg'
	},{
		i_id:2,
		name:'连衣裙',
		imgUrl:'../../../statics/pd-011.jpg'
	},{
		i_id:3,
		name:'寸衫',
		imgUrl:'../../../statics/pd-012.jpg'
	},{
		i_id:4,
		name:'T恤',
		imgUrl:'../../../statics/pd-013.jpg'
	},{
		i_id:5,
		name:'牛仔裤',
		imgUrl:'../../../statics/pd-016.jpg'
	},{
		i_id:6,
		name:'卫衣',
		imgUrl:'../../../statics/pd-016.jpg'
	},{
		i_id:7,
		name:'针织衫',
		imgUrl:'../../../statics/pd-016.jpg'
	},{
		i_id:8,
		name:'针织衫',
		imgUrl:'../../../statics/pd-016.jpg'
	},{
		i_id:8,
		name:'针织衫',
		imgUrl:'../../../statics/pd-016.jpg'
	}],
});

export default (state = defaultState,action) => {
	if (action.type === constants.SEARCH_FOCUS) {
		return state.set('focus',true);
	}
	if (action.type === constants.SEARCH_BLUR) {
		return state.set('focus',false);
	}
	return state;
}
