const mongoose = require('mongoose');
const axios = require('axios');
const moment = require('moment');
const Btc = mongoose.model('btc');
const Eth = mongoose.model('eth');
const Dash = mongoose.model('dash');

module.exports = async () => {
	// OBTIENE DATOS DE HACE 0, 15, 30, 45 MIN ATRAS
	const crypto = ['BTC', 'ETH', 'DASH'];
	for (let item in crypto) {
		for (let i = 0; i <= 45; i += 15) {
			let res = await axios.get(
				`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${crypto[
					item
				].toString()}&tsyms=USD&ts=${moment(Date.now())
					.subtract(i, 'minutes')
					.format('X')}`
			);

			const data = eval(`res.data.${crypto[item]}.USD`);
			const prueba = {
				data,
				date: moment(Date.now()).subtract(i, 'minutes')
			};

			if (crypto[item] === 'BTC') {
				const result = await axios.post(
					'http://localhost:5000/api/btc',
					prueba
				);
			} else if (crypto[item] === 'ETH') {
				const result = await axios.post(
					'http://localhost:5000/api/eth',
					prueba
				);
			} else {
				const result = await axios.post(
					'http://localhost:5000/api/dash',
					prueba
				);
			}
		}
	}
};
