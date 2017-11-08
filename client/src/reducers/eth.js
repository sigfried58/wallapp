import { combineReducers } from 'redux';
import * as types from '../actions/types';

const list = (state = [], action) => {
	switch (action.type) {
		case types.GET_ETH:
			if (action.data) {
				return action.data;
			}
			return state;
		default:
			return state;
	}
};

const ethReducer = combineReducers({
	list
});

export default ethReducer;
