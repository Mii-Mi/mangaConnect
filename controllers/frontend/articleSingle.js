const Articles = require('../../models/Articles')

module.exports = async (req, res) => {
    
    Articles.findById(req.params.articleId, (error, article) => {
        let isOwner = false
        if(error){
            console.log(error);
        }
        
        if (article.authorId === req.session.userId){
            isOwner = true;
        }
        
        res.render('frontendView/articles/displaySingle', {article, isOwner})
    });
}