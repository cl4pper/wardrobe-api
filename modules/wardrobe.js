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

// GETTING ONE
router.get('/:id', getOneItem, (req, res) => {
    res.send(res.item.name)
})

// CREATING ONE
router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        type: req.body.type,
        store: true
    })
    try {
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// DELETING ONE
router.delete('/:id', (req, res) => {
    res.send(`Deleting item ${req.params.id}`)
})

// MIDDLEWARES
async function getOneItem(req, res, next) {
    let item
    try {
        item = await Item.findById(req.params.id)
        if (item === null) {
            return res.status(404).json({ message: 'Item NOT found'})
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    res.item = item
    next()
}

module.exports = router