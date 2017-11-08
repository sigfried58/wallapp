/* eslint no-eval: 0 
no-unused-vars:0 */
import * as types from './types';
import axios from 'axios';
import moment from 'moment';

export const fetchCrypto = crypto => async dispatch => {
	for (let item in crypto) {
		for (let i = 0; i <= 60; i += 15) {
			let res = await axios.get(
				`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${crypto[
					item
				].toString()}&tsyms=USD&ts=${moment(Date.now())
					.subtract(i, 'minutes')
					.format('X')}`
			);

			const data = eval(`res.data.${crypto[item]}.USD`);
			const cryptoCurrency = {
				data,
				date: moment(Date.now()).subtract(i, 'minutes')
			};

			if (crypto[item] === 'BTC') {
				await axios.post('/api/btc', cryptoCurrency);
				dispatch({ type: types.FETCH_BTC, data: cryptoCurrency });
				dispatch({ type: types.ADD_BTC, data: cryptoCurrency });
			} else if (crypto[item] === 'ETH') {
				await axios.post('/api/eth', cryptoCurrency);
				dispatch({ type: types.FETCH_ETH, data: cryptoCurrency });
				dispatch({ type: types.ADD_ETH, data: cryptoCurrency });
			} else {
				await axios.post('/api/dash', cryptoCurrency);
				dispatch({ type: types.FETCH_DASH, data: cryptoCurrency });
				dispatch({ type: types.ADD_DASH, data: cryptoCurrency });
			}
		}
	}
};

export const getCrypto = () => async dispatch => {
	const resEth = await axios.get('/api/eth');
	const resBtc = await axios.get('/api/btc');
	const resDash = await axios.get('/api/dash');
	dispatch({ type: types.GET_BTC, data: resBtc.data });
	dispatch({ type: types.GET_ETH, data: resEth.data });
	dispatch({ type: types.GET_DASH, data: resDash.data });
};
