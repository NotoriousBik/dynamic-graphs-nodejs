const mongoose = require('mongoose')
const moment = require('moment')

const cpuSchema = new mongoose.Schema({
    currentCPU: {
        type:   Number,
        required: true,
        trim: true,
        maxlength: 3
    },
    time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('CPU', cpuSchema)