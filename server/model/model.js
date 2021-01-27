const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
    targetDate:{
        type: Date,
        required: true
    },
    status: String
})

const Taskdb = mongoose.model('taskdb', schema);

module.exports = Taskdb;