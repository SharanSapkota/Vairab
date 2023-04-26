const mongoose   = require('mongoose');
// const ur =' mongodb+srv://sharan123:sharan123k@cluster0.ytgcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const ur = "mongodb+srv://vairab:vairab123@cluster0.rdbbh.mongodb.net/test";
const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(ur) 
    console.log('Mongo connected')
}
catch(error) {
    console.log('eeeee' ,error)
}
}

module.exports = {connectToMongo}