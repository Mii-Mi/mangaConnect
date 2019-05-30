const Article = require('../../models/Articles'),
      User = require('../../models/Users')

module.exports = (req, res) => {

    User.findById(req.session.userId, (error, user) => {
        // console.log(req.flash('data')[0]);
        if (error) {
            console.log(error);
        }
        
        Article.create(
            {
                ...req.body,
                author: user.userName,
                authorId: user._id
            },
            (error, article) => {
                if (error) {
                    console.log(error);
                    req.flash('error', 'Erreur lors de la création de l\'article');
                } else {
                    req.flash('success', 'Article créé avec succes !');
                }
                res.redirect(`/`)
            })

    })
}