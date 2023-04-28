const mongoose   = require('mongoose');
const ur = "mongodb+srv://vairab:vairab123@cluster0.rdbbh.mongodb.net/test";
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