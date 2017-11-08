import { combineReducers } from 'redux';
import * as types from '../actions/types';

const list = (state = [], action) => {
	switch (action.type) {
		case types.GET_BTC:
			if (action.data) {
				return action.data;
			}
			return state;
		default:
			return state;
	}
};

const btcReducer = combineReducers({
	list
});

export default btcReducer;
