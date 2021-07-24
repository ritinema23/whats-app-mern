const mongoose = require('mongoose');

const whatsappSchema = mongoose.Schema({
    name: String,
    message: String,
    timestamp: String,
    received: Boolean
})

module.exports = mongoose.model('messagecontents', whatsappSchema )