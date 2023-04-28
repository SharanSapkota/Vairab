const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'apache'
    },
    password: {
        type: String,
        required: true
    },
},  { timestamps: true })

module.exports = mongoose.model("User", UserSchema)