const mongoose = require('mongoose')
const ApacheSchema = mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    user: {
        type: String,
        required: false
    },
    timestamps: {
        type: String,
        required: false
    },
    methods: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    protocol: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    referer: {
        type: String,
        required: true
    },
    userAgent: {
        type: String,
        required: true
    },
},  { timestamps: true })

module.exports = mongoose.model("apache", ApacheSchema)