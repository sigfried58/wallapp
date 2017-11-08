const mongoose = require('mongoose');
const { Schema } = mongoose;

const btcSchema = new Schema({
	USD: { type: Number },
	date: { type: Date }
});

mongoose.model('btc', btcSchema);
