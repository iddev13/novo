const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
require('dotenv').config();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(path.resolve(__dirname, 'client', 'build')));

let PORT = process.env.PORT || 5000;

async function start() {

	try {
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