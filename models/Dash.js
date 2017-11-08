const mongoose = require('mongoose');
const { Schema } = mongoose;

const dashSchema = new Schema({
	USD: { type: Number },
	date: { type: Date }
});

mongoose.model('dash', dashSchema);
