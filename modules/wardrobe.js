const express = require('express')
const router = express.Router()

// SCHEMA
const Item = require('../models/item')

// GETTING ALL
router.get('/', async (req, res) => {
    try {
        const items = await Item.find()
        res.json(items)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// CREATING ONE
router.post('/', (req, res) => {
    res.send('Creating One')
})

// DELETING ONE
router.delete('/:id', (req, res) => {
    res.send(`Deleting item ${req.params.id}`)
})

module.exports = router