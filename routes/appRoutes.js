const mongoose = require('mongoose');
const Btc = mongoose.model('btc');
const Eth = mongoose.model('eth');
const Dash = mongoose.model('dash');

module.exports = app => {
	app.post('/api/btc', async (req, res) => {
		const btc = new Btc({
			USD: req.body.data,
			date: req.body.date
		});

		const result = await btc.save(function(err) {
			if (err) return handleError(err);
			// saved!
		});
		res.send(result);
	});

	app.post('/api/eth', async (req, res) => {
		const eth = new Eth({
			USD: req.body.data,
			date: req.body.date
		});

		const result = await eth.save(function(err) {
			if (err) return handleError(err);
			// saved!
		});
		res.send(result);
	});

	app.post('/api/dash', async (req, res) => {
		const dash = new Dash({
			USD: req.body.data,
			date: req.body.date
		});

		const result = await dash.save(function(err) {
			if (err) return handleError(err);
			// saved!
		});
		res.send(result);
	});

	app.get('/api/btc', async (req, res) => {
		const result = await Btc.find({})
			.sort({ date: 1 })
			.limit(8);

		res.send(result);
	});

	app.get('/api/eth', async (req, res) => {
		const result = await Eth.find({})
			.sort({ date: 1 })
			.limit(8);

		res.send(result);
	});

	app.get('/api/dash', async (req, res) => {
		const result = await Dash.find({})
			.sort({ date: 1 })
			.limit(8);

		res.send(result);
	});
};
