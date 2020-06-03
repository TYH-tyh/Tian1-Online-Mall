import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	picturelist:[{
		id:1,
		imgUrl:'https://img.alicdn.com/imgextra/i2/2575862595/O1CN01HfzWB31V2YK0O9fX0_!!2575862595.jpg',
	},{
		id:2,
		imgUrl:'https://img.alicdn.com/imgextra/i3/2575862595/O1CN011xXZsm1V2YK23xSTC_!!2575862595.jpg',
	},{
		id:3,
		imgUrl:'https://img.alicdn.com/imgextra/i2/2575862595/O1CN011KYEND1V2YK36sAiB_!!2575862595.jpg',
	}],
	addshow:false,
	buyshow:false,
	});
	


export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SET_ADDSHOW_TRUE:
			return state.set('addshow', action.value);
		case constants.SET_BUYSHOW_TRUE:
			return state.set('buyshow', action.value);
		case constants.SET_ADDSHOW_FALSE:
				return state.set('addshow', action.value);
		case constants.SET_BUYSHOW_FALSE:
				return state.set('buyshow', action.value);
		default:
			return state;
	}
}