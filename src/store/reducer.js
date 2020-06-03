import { combineReducers } from 'redux-immutable';
import { reducer as itemshowReducer } from '../pages/itemshow/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as classifyReducer } from '../pages/classify/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as cartReducer } from '../pages/cart/store';
import { reducer as addressReducer } from '../pages/address/store';


 const reducer = combineReducers({
	itemshow:itemshowReducer,
	classify:classifyReducer,
	login:loginReducer,
	cart:cartReducer,
	detail:detailReducer,
	address:addressReducer
})

export default reducer;