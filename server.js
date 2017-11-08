const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/Btc');
require('./models/Eth');
require('./models/Dash');

//mongoose.connect(keys.mongoURI);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TestCrypto', {
	useMongoClient: true
});

const app = express();

app.use(bodyParser.json());

require('./routes/appRoutes')(app);

require('./services/crypto')();
// Cada una hora se conecta a la api externa
setInterval(() => require('./services/crypto')(), 60 * 60000);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
