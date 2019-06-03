const mongoose = require('mongoose'),
      dateFormat = require('dateformat')

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Le champ "contenu" est requis.']
    },
    author: String,
    authorId: String,
    articleId: String,
    createDate: {
        type: Date,
        default: new Date()
    },
    formatDate: {
        type: String,
        default: (dateFormat(new Date(), "dd mm yyyy à HH:MM:ss"))
    }
})

const Comments = mongoose.model('Comments', CommentSchema);

module.exports = Comments;