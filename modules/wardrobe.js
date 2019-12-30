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
    res.send(res.item)
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
router.delete('/:id', getOneItem, async (req, res) => {
    try {
        await res.item.remove()
        res.json({ message: `${res.item.name} DELETED`})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// MIDDLEWARES
async function getOneItem(req, res, next) {
    // FIX THIS ERROR HANDLER
    try {
        item = await Item.findById(req.params.id)
        res.item = item
    } catch (err) {
        return res.status(404).json({ message: 'Item NOT found' })
    }

    next()
}

module.exports = router