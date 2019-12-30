const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    lastUpdate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    store: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Wardrobe', itemSchema)