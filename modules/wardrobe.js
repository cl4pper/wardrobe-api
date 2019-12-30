const express = require('express')
const router = express.Router()

// GETTING ALL
router.get('/', (req, res) => {
    res.send('Getting All')
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