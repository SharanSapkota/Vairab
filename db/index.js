    const mongoose   = require('mongoose');
    const ur = process.env.MONGO_URI;
    const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(ur) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.error(error)
    }
    }

    module.exports = {connectToMongo}