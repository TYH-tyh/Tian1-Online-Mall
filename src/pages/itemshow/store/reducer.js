import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	itemlist:[{
		id:'1',
		title:'个性2019新款夏 季宽松时尚百搭韩版纯棉圆领印花短袖T恤女潮',
		price:'￥78.00',
		count:'2064人付款',
		imgUrl:'https://gd3.alicdn.com/imgextra/i1/2575862595/O1CN01kwsGmI1V2YK0O8voW_!!2575862595.jpg',
	},{
		id:'2',
		title:'衬衣女伊芙丽2019春装新款长袖宽松韩版上衣职业打底雪纺白衬衫女',
		price:'￥489.00',
		count:'204人付款',
		imgUrl:'https://img.alicdn.com/bao/uploaded/i4/641725918/O1CN01nDuCKX1taUSO5m9M5-641725918.jpg',
		
	},{
		id:'3',
		title:'伊芙丽条纹衬衫女长袖2019春装新款韩范上衣纯棉蓝色刺绣女装衬衣',
		price:'￥249.00',
		count:'182人付款',
		imgUrl:'https://img.alicdn.com/bao/uploaded/i2/641725918/O1CN01HzcP7D1taUSPnBE2V-641725918.jpg',
	},{
		id:'4',
		title:'Vero Moda印花系带中长款',
		price:'￥314.6',
		count:'2064人付款',
		imgUrl:'https://img.alicdn.com/bao/uploaded/i2/196993935/O1CN01rAv15w1ewH1Nr9DFI-196993935.jpg',
	},{
		id:'5',
		title:'运动阔腿裤套装女两件套',
		price:'￥78.00',
		count:'2064人付款',
		imgUrl:'https://img.alicdn.com/imgextra/i1/2808847214/TB23xrZzxhmpuFjSZFyXXcLdFXa_!!2808847214.jpg_790x10000Q90.jpg',
	},{
		id:'6',
		title:'花花公子短袖T恤男士韩版潮流七分袖男装夏季宽松中长袖薄款上衣',
		price:'￥258.00',
		count:'2064人付款',
		imgUrl:'http://img.alicdn.com/bao/uploaded/i3/1777534635/O1CN01dgpJmM1k6sHg4YExI_!!0-item_pic.jpg',
	},{
		id:'7',
		title:'男装 SUPIMA COTTON圆领T恤(长袖) 420272 优衣库UNIQLO',
		price:'￥99.00',
		count:'264人付款',
		imgUrl:'http://img.alicdn.com/bao/uploaded/i3/196993935/O1CN01XtPNnQ1ewH3hOQwJU_!!0-item_pic.jpg',
	},{
		id:'8',
		title:'森马男士休闲裤九分裤2019新款夏季韩版工装裤男潮牌束脚夏季薄款',
		price:'￥219.00',
		count:'204人付款',
		imgUrl:'http://img.alicdn.com/bao/uploaded/i4/397341302/O1CN011vkAHX1LUMDOnRJol_!!0-item_pic.jpg',
	},{
		id:'9',
		title:'运动阔腿裤套装女两件套淘宝运营系列课程，让懂淘宝的人教你少走一些弯路 赶紧加入吧',
		price:'￥78.00',
		count:'2064人付款',
		imgUrl:'https://img.alicdn.com/imgextra/i2/100389870/TB2sU1Rr79WBuNjSspeXXaz5VXa_!!0-saturn_solar.jpg_220x220.jpg_.webp',
	},{
		id:'10',
		title:'男装 袋装罗纹背心 413488 优衣库UNIQLO',
		price:'￥39.00',
		count:'2064人付款',
		imgUrl:'http://img.alicdn.com/bao/uploaded/i4/196993935/O1CN01QmRUPV1ewH2Mqf2re_!!0-item_pic.jpg',
	}]
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
