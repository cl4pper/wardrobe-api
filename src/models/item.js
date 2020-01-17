const mongoose = require('mongoose');

module.exports = mongoose.model(
	'Wardrobe',
	new mongoose.Schema({
		name: {
			type: String,
			minlength: 1,
			required: true
		},
		type: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Wearables',
			required: true
		},
		size: {
			type: String,
			enum: ['s', 'm', 'l', 'xl', 'xxl'],
			require: false
		}
	})
);
