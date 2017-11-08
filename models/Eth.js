const mongoose = require('mongoose');
const { Schema } = mongoose;

const ethSchema = new Schema({
	USD: { type: Number },
	date: { type: Date }
});

mongoose.model('eth', ethSchema);
