const express   = require('express');

const app                = express()
const routes             = require('./routes/index.js')
const { connectToMongo } = require('./db/index.js');

app.use(express.json())

app.get('/', (req, res) => {
    res.json({success: true})
})
app.use('/api', routes)

connectToMongo()

app.listen(7100, () => {
    console.log("server started at port 7000")
}) 
