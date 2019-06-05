const mongoose = require('mongoose')

const MpSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
        required: [true, 'Le champ "contenu" est requis.']
    },
    senderName: String,
    senderId: String,
    destName: String,
    destId: String,
    createDate: {
        type: Date,
        default: Date.now()
    },
    formatDate: {
        type: String,
    }
})

const Mp = mongoose.model('Mp', MpSchema);

module.exports = Mp;