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
    timestamp: {
        type: String,
        required: false
    },
    methods: {
        type: String,
        required: false
    },
    path: {
        type: String,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    protocol: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    size: {
        type: String,
        required: false
    },
    referer: {
        type: String,
        required: false
    },
    userAgent: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    }
},  { timestamps: true })

module.exports = mongoose.model("apache", ApacheSchema)