const mongoose = require('mongoose');

const wearableSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
		minlength: 1
	}
});

module.exports = mongoose.model('Wearables', wearableSchema);