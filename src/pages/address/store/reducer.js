import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	addresslist:[{
		id:1,
		name:'甜甜',
		tel:'18882079590',
		add:'四川省成都市成华区城区 一环路东一段240电子科技大学继续教育学院内电子科技大学沙河校区欣苑学生公寓5',

	},{
		id:2,
		name:'刘刘',
		tel:'18882079590',
		add:'湖北省武汉市洪山区武汉大学信息学部',

	},{
		id:3,
		name:'金鱼',
		tel:'17360107654',
		add:'成都市高新西区西源大道2006号电子科技大学清水河校区',

	},{
		id:4,
		name:'刘刘',
		tel:'18882079590',
		add:'湖北省武汉市洪山区武汉大学信息学部',

	},{
		id:5,
		name:'刘刘',
		tel:'18882079590',
		add:'湖北省武汉市洪山区武汉大学信息学部',

	},{
		id:6,
		name:'刘刘',
		tel:'18882079590',
		add:'湖北省武汉市洪山区武汉大学信息学部',

	},{
		id:7,
		name:'刘刘',
		tel:'18882079590',
		add:'湖北省武汉市洪山区武汉大学信息学部',

	},{
		id:8,
		name:'刘刘',
		tel:'18882079590',
		add:'湖北省武汉市洪山区武汉大学信息学部',

	}]
});

export default (state = defaultState, action) => {
	switch(action.type) {
		
		default:
			return state;
	}
}