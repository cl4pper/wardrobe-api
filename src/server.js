require('module-alias/register');
require('dotenv').config({
	path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MODULES
const ROUTE_WARDROBE = require('@routes').wardrobe;
const ROUTE_WEARABLES = require('@routes').wearables;

// LOCAL VARIABLES
const PORT = 3000;

// MONGODB CONFIG. ---------------------------- START
mongoose
	.connect(
		process.env.DATABASE_URL,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		},
		() => console.log('Connecting to the server...')
	)
	.then(() => console.log('Connected'))
	.catch(err => err);
// MONGODB CONFIG. ---------------------------- END

app.use(express.json());

app.use('/api', [ROUTE_WARDROBE, ROUTE_WEARABLES]);

app.listen(PORT, () => {
	console.log('Server is running on PORT:', PORT);
});

module.exports = app;
