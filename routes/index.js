const express = require('express') 
const Logs =  require('./logs')
const Users =  require('./users')

const app = express();

app.use('/user', Users)
app.use('/logs', Logs)

module.exports = app;