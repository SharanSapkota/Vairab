const express = require('express') 
const Users =  require('./users')

const app = express();

app.use('/user', Users)

module.exports = app;