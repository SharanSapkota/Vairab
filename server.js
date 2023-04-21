const express   = require('express');
const app       = express()
const FluentClient = require('@fluent-org/logger').FluentClient;
const routes    = require('./routes/index.js')

app.use(express.json())

const logger = new FluentClient('test.test', {
    socket: {
      host: 'localhost',
      port: 24224,
      timeout: 3000,
    }
  });
app.get('/', (req, res) => {
    logger.emit('test', {from: 'a'})
    res.send('complete')
})
console.log(logger)
app.use('/api', routes)


app.listen(8000, () => {
    console.log("server started at port 8000")
}) 
