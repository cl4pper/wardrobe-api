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
    lastUpdateAt: {
        type: Date,
        default: Date.now
    },
    store: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Wardrobe', itemSchema)