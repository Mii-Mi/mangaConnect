const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Le champ "titre" est requis.']
    },
    content: {
        type: String,
        required: [true, 'Le champ "contenu" est requis.']
    },
    author: String,
    authorId: String,
    createDate: {
        type: Date,
        default: Date.now()
    },
    formatDate: {
        type: String,
    }
})

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;