import axios from 'axios';
import * as constants from './constants';

const setAddShowTrue = () => ({
	type: constants.SET_ADDSHOW_TRUE,
	value: true
})
const setBuyShowTrue = () => ({
	type: constants.SET_BUYSHOW_TRUE,
	value: true
})
const setAddShowFalse = () => ({
	type: constants.SET_ADDSHOW_FALSE,
	value: false
})
const setBuyShowFalse = () => ({
	type: constants.SET_BUYSHOW_FALSE,
	value: false
})


export const ChangeAddShow = () => {
	return (dispatch) => {
		dispatch(setAddShowTrue())
	}
}
export const ChangeBuyShow = () => {
	return (dispatch) => {
		dispatch(setBuyShowTrue())
	}
}
export const ChangeAddShowFalse = () => {
	return (dispatch) => {
		dispatch(setAddShowFalse())
	}
}
export const ChangeBuyShowFalse = () => {
	return (dispatch) => {
		dispatch(setBuyShowFalse())
	}
}