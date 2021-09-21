const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
require('dotenv').config();
const config = require('config');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'));
app.use('/api/item', require('./routes/item.routes'));

const PORT = config.get('port') || 5000;

async function start() {
	try {
		await mongoose.connect(config.get('mongoUri'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// useCreateIndex: true
		})

		app.get('*', (req, res) => {
			res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
		})

		app.listen(PORT, () => console.log(`App has been started on PORT ${PORT}...`))
	} catch (error) {
		console.log('Server error', error.message);
		process.exit(1)
	}
}

start();