const mongoose = require('mongoose')
const moment = require('moment')

const memorySchema = new mongoose.Schema({
    currentMemory: {
        type:   Number,
        required: true,
        trim: true,
        maxlength: 5
    },
    time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Memory', memorySchema)