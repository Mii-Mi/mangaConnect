const Articles = require('../../models/Articles');

module.exports = async (req, res) => {

        const article = await Articles.findById(req.params.articleId);
        
        if (req.flash('data')[0] == 'admin') {
                const admin = true
                res.render('frontendView/articles/edit', { article, member })
        } else if (req.flash('data')[0] == 'member') {
                const member = true
                res.render('frontendView/articles/edit', { article, member })
        } else {
                res.render('frontendView/articles/edit', { article })
        }

}