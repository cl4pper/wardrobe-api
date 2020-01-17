const mongoose = require('mongoose');

module.exports = mongoose.model(
	'Wearables',
	new mongoose.Schema({
		name: {
			type: String,
			require: true,
			minlength: 1
		}
	})
);
