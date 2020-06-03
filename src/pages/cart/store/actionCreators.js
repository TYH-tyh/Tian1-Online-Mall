import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const add_Num = (index) => ({
	type: constants.ADD_NUM,
	value: index
	
})

const redu_Num = (index) => ({
	type: constants.REDU_NUM,
	value: index
	
})

const delete_Item = (index) => ({
	type: constants.DELETE_ITEM,
	value: index
	
})

const check_in = (index) => ({
	type: constants.CHECK_IN,
	del: index,
	value: true
	
})
const check_out = (index) => ({
	type: constants.CHECK_OUT,
	del: index,
	value: false
	
})

export const addNum = (index) => {
	return (dispatch) => {
		dispatch(add_Num(index))
	}
}

export const reduNum = (index) => {
	return (dispatch) => {
		dispatch(redu_Num(index))
	}
}

export const deleteItem = (index) => {
	return (dispatch) => {
		dispatch(delete_Item(index))
	}
}

export const checkIn = (index) => {
	return (dispatch) => {
		dispatch(check_in(index))
	}
}
export const checkOut = (index) => {
	return (dispatch) => {
		dispatch(check_out(index))
	}
}
