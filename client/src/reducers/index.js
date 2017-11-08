import { combineReducers } from 'redux';
import btc from './btc';
import eth from './eth';
import dash from './dash';

export default combineReducers({
	btc,
	eth,
	dash
});
