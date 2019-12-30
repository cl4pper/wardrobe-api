require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

// MODULES
const wardrobeRoute = require('./modules/wardrobe') // wardrobe store

// LOCAL VARIABLES
const PORT = 3000

// MONGODB CONFIG. ---------------------------- START
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb...'))
    .catch(err => console.error('NOT connect to mongobd!', err))
// MONGODB CONFIG. ---------------------------- END

app.use(express.json())

app.use('/', wardrobeRoute)

app.listen(PORT, () => { console.log('Server is running on PORT:', PORT) })