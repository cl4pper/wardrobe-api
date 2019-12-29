require('dotenv').config()

const express = require('express')
const server = express()

// LOCAL VARIABLES
const PORT = 3000

// RUN SERVER
server.use(express.json())

server.use('/', (res, req) => {
    req.send("Hello server.")
})

server.listen(PORT, () => { console.log('Server is running on PORT:', PORT) })
