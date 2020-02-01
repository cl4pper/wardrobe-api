const mongoose = require('mongoose');

module.exports = mongoose.model(
	'User',
	new mongoose.Schema({
		name: {
			type: String,
			minlength: 1,
			required: true
		},
		userName: {
			type: String,
			minlength: 6,
			required: true
		},
		password: {
			type: String,
			minlength: 6,
			required: true
		},
		wardrobe: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Wearables',
			required: true
		}
	})
);
