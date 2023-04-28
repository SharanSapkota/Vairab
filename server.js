const express = require('express');
const cors = require('cors');
const {  parsed } = require('dotenv').config()

const app  = express()
const routes = require('./routes/index.js')
const { connectToMongo } = require('./db/index.js');

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({success: true})
})
app.use('/api', routes)

connectToMongo()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
}) 
